/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { databases, storage, DATABASE_ID, COLLECTION_ID, BUCKET_ID } from "../lib/appwrite";
import { ID, Permission, Role } from "appwrite";
import { Instagram, Youtube, Facebook, ShieldCheck, Upload, CheckCircle, Clock } from "lucide-react";
import SellBannerImg from "../assets/sellbanner.png"

type Platform = "Instagram" | "YouTube" | "Facebook";

export default function SellAccount() {
  const [platform, setPlatform] = useState<Platform>("Instagram");
  const [username, setUsername] = useState("");
  const [followers, setFollowers] = useState<string>("");
  const [engagement, setEngagement] = useState<string>("");
  const [revenue, setRevenue] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState("");

  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [proofImages, setProofImages] = useState<File[]>([]);
  const [proofPreviews, setProofPreviews] = useState<string[]>([]);
  // -------- Platform Specific Fields --------
  const [pageStatus, setPageStatus] = useState("Green"); // Facebook
  const [accountType, setAccountType] = useState("Creator"); // Instagram
  const [monetized, setMonetized] = useState(false); // YouTube / FB
  const [avgViews, setAvgViews] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const numericPrice = Number(price) || 0;

  const fee = Math.round(numericPrice * 0.05);
  const receive = numericPrice - fee;


  // ----- IMAGE PREVIEW -----
  useEffect(() => {
    if (coverFile) setCoverPreview(URL.createObjectURL(coverFile));
    if (avatarFile) setAvatarPreview(URL.createObjectURL(avatarFile));

    if (proofImages.length > 0) {
      const previews = proofImages.map(file => URL.createObjectURL(file));
      setProofPreviews(previews);
    }
  }, [coverFile, avatarFile, proofImages]);

  const handleProofUpload = (files: FileList | null) => {
    if (!files) return;

    const selectedFiles = Array.from(files);

    if (proofImages.length + selectedFiles.length > 5) {
      alert("You can upload maximum 5 proof images.");
      return;
    }

    setProofImages(prev => [...prev, ...selectedFiles]);
  };

  // ----- SUBMIT LISTING -----
  const handleSubmit = async () => {
    if (
      !username ||
      !followers ||
      !coverFile ||
      !avatarFile ||
      proofImages.length === 0 ||
      (platform === "Instagram" && !engagement)
    ) {
      alert("Please complete all required fields and upload at least one proof image.");
      return;
    }

    try {
      setLoading(true);

      const slug = username
        .replace("@", "")
        .toLowerCase()
        .replace(/\s+/g, "_");

      // Reusable upload function
      const uploadFile = async (file: File) => {
        const res = await storage.createFile(
          BUCKET_ID,
          ID.unique(),
          file,
          [Permission.read(Role.any())]
        );
        return res.$id;
      };

      // Upload main images
      const coverId = await uploadFile(coverFile);
      const avatarId = await uploadFile(avatarFile);

      // Upload all proof images
      const proofImageIds = await Promise.all(
        proofImages.map(file => uploadFile(file))
      );

      const baseData = {
        handle: username.startsWith("@") ? username : "@" + username,
        slug,
        platform,
        niche: description || "General",

        followers: Number(followers),
        engagement: platform === "Instagram" ? Number(engagement) : null,

        revenue: revenue ? Number(revenue) : 0,
        price: Number(price),

        coverImage: coverId,
        avatar: avatarId,
        proofImages: proofImageIds,

        accountType: platform === "Instagram" ? accountType : null,
        pageStatus: platform === "Facebook" ? pageStatus : null,

        monetized:
          platform === "YouTube" || platform === "Facebook"
            ? monetized
            : null,

        avgViews: platform === "YouTube" ? Number(avgViews) || null : null,

        includeEmail: false,

        status: "pending",
        verified: false,
        payoutAvailable: false,
        strikes: 0
      };

      if (platform === "Instagram") {
        baseData.engagement = Number(engagement);
        baseData.accountType = accountType;
      }

      if (platform === "Facebook") {
        baseData.pageStatus = pageStatus;
        baseData.monetized = monetized;
      }

      if (platform === "YouTube") {
        baseData.avgViews = avgViews ? Number(avgViews) : null;
        baseData.monetized = monetized;
      }

      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        baseData
      );

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Submission failed. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12">
        <div className="bg-white p-10 md:p-14 rounded-[40px] shadow-sm border border-gray-100 text-center max-w-2xl w-full">

          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-green-100 p-4 rounded-full">
              <CheckCircle className="text-green-600" size={40} />
            </div>
          </div>

          {/* Header */}
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Listing Submitted</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md mx-auto">
            Your listing has been successfully submitted and is currently under review.
            It will appear in the marketplace once approved.
          </p>

          {/* Status Banner */}
          <div className="bg-gray-50 rounded-2xl p-6 flex flex-wrap justify-between items-center mb-12 border border-gray-50">
            <div className="flex items-center gap-4">
              <span className="text-gray-600 font-medium">Status:</span>
              <div className="flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold border border-orange-100">
                <Clock size={16} />
                Under Review
              </div>
            </div>
            <div className="flex items-center gap-3 mt-4 sm:mt-0">
              <span className="text-gray-500 font-medium">Estimated Review Time:</span>
              <span className="font-bold text-slate-900">24 hours</span>
            </div>
          </div>

          {/* Next Steps Progress Bar */}
          <div className="text-left mb-12">
            <h3 className="text-xl font-bold text-slate-900 mb-8">Next Steps</h3>

            <div className="relative flex justify-between items-start">
              {/* The Connecting Line */}
              <div className="absolute top-5 left-0 w-full h-[2px] bg-gray-200 -z-0"></div>

              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center flex-1">
                <div className="bg-green-500 text-white p-2 rounded-full mb-3 ring-8 ring-white">
                  <CheckCircle size={24} />
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase">Step 1</span>
                <span className="text-sm font-semibold text-slate-700">Listing Submitted</span>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center flex-1">
                <div className="bg-gray-100 text-gray-400 w-10 h-10 flex items-center justify-center rounded-full mb-3 ring-8 ring-white border-2 border-gray-200">
                  <span className="font-bold">2</span>
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase">Step 2</span>
                <span className="text-sm font-semibold text-slate-400">Review in Progress</span>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center flex-1">
                <div className="bg-gray-100 text-gray-400 w-10 h-10 flex items-center justify-center rounded-full mb-3 ring-8 ring-white border-2 border-gray-200">
                  <span className="font-bold">3</span>
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase">Step 3</span>
                <span className="text-sm font-semibold text-slate-400">Listing Goes Live</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={() => (window.location.href = "/marketplace")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-blue-200"
          >
            Go to Marketplace
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen ">

      <div className="max-w-7xl mx-auto bg-[#3b82f6]  overflow-hidden mb-8">
        <div className="flex flex-col lg:flex-row items-center">

          <div className="w-full lg:w-1/2 px-6 py-10 lg:py-16 lg:px-16">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3">
              Sell Your Digital Asset Securely
            </h1>

            <p className="text-blue-100 text-sm sm:text-base max-w-md">
              Join thousands of creators who trust our platform for secure transactions.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={SellBannerImg}
              alt="Social Media Visuals"
              className="w-[85%] max-w-md lg:max-w-lg"
            />
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
        <div className=" mx-auto grid lg:grid-cols-3 gap-10">
          {/* LEFT */}
          <div className="lg:col-span-2 bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-xl border border-gray-100 space-y-10 mb-6">
            {/* Platform */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                Select Platform *
              </h3>

              <div className="grid grid-cols-3 gap-3 sm:gap-6">

                {[
                  {
                    name: "Instagram",
                    icon: Instagram,
                    iconColor: "text-pink-600",
                    bg: "bg-pink-50",
                    border: "border-pink-200",
                  },
                  {
                    name: "Facebook",
                    icon: Facebook,
                    iconColor: "text-blue-600",
                    bg: "bg-blue-50",
                    border: "border-blue-200",
                  },
                  {
                    name: "YouTube",
                    icon: Youtube,
                    iconColor: "text-red-600",
                    bg: "bg-red-50",
                    border: "border-red-200",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  const active = platform === item.name;

                  return (
                    <button
                      key={item.name}
                      onClick={() => setPlatform(item.name as Platform)}
                      className={`relative flex flex-col items-center justify-center
          rounded-xl sm:rounded-2xl border transition-all duration-200
          p-3 sm:p-6 cursor-pointer
          ${active
                          ? `${item.bg} ${item.border} ring-2 ring-offset-1 ring-indigo-500`
                          : "bg-white border-gray-200 hover:shadow-sm"
                        }`}
                    >
                      {/* Icon */}
                      <div
                        className={`flex items-center justify-center
            w-10 h-10 sm:w-14 sm:h-14 rounded-lg
            ${item.bg}`}
                      >
                        <Icon
                          size={22}
                          className={`${item.iconColor} sm:w-7 sm:h-7`}
                        />
                      </div>

                      {/* Platform Name */}
                      <p className="text-xs sm:text-sm font-semibold text-gray-800 mt-2">
                        {item.name}
                      </p>

                      {/* Active indicator */}
                      {active && (
                        <span className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full"></span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Account Details */}
            <div className="space-y-8">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                Account Details *
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <Input
                  label="Username *"
                  placeholder="@daily_motivation"
                  value={username}
                  onChange={setUsername}
                />

                <Input
                  label="Followers *"
                  type="number"
                  placeholder="120000"
                  value={followers}
                  onChange={setFollowers}
                />

                {/* Instagram Fields */}
                {platform === "Instagram" && (
                  <>
                    <Input
                      label="Engagement Rate (%)"
                      type="number"
                      placeholder="4.2"
                      value={engagement}
                      onChange={setEngagement}
                    />

                    <div>
                      <label className="font-medium block mb-2 text-gray-700">
                        Account Type
                      </label>

                      <select
                        value={accountType}
                        onChange={(e) => setAccountType(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="Creator">Creator</option>
                        <option value="Business">Business</option>
                        <option value="Personal">Personal</option>
                      </select>
                    </div>
                  </>
                )}

                {/* Facebook Fields */}
                {platform === "Facebook" && (
                  <>
                    <div>
                      <label className="font-medium block mb-2 text-gray-700">
                        Page Status
                      </label>

                      <select
                        value={pageStatus}
                        onChange={(e) => setPageStatus(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="Green">🟢 Good Standing</option>
                        <option value="Yellow">🟡 Warning</option>
                        <option value="Red">🔴 Restricted</option>
                      </select>
                    </div>

                    <label className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={monetized}
                        onChange={(e) => setMonetized(e.target.checked)}
                        className="w-4 h-4 accent-indigo-600"
                      />
                      <span className="text-gray-700 font-medium">
                        Monetized Page
                      </span>
                    </label>
                  </>
                )}

                {/* YouTube Fields */}
                {platform === "YouTube" && (
                  <>
                    <Input
                      label="Average Views Per Video"
                      type="number"
                      placeholder="50000"
                      value={avgViews}
                      onChange={setAvgViews}
                    />

                    <div>
                      <label className="font-medium block mb-2 text-gray-700">
                        Monetization Status
                      </label>

                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 cursor-pointer">
                          <input
                            type="radio"
                            name="monetized"
                            checked={monetized === true}
                            onChange={() => setMonetized(true)}
                            className="accent-indigo-600"
                          />
                          Monetized
                        </label>

                        <label className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 cursor-pointer">
                          <input
                            type="radio"
                            name="monetized"
                            checked={monetized === false}
                            onChange={() => setMonetized(false)}
                            className="accent-indigo-600"
                          />
                          Non-Monetized
                        </label>
                      </div>
                    </div>
                  </>
                )}

                <Input
                  label="Monthly Revenue"
                  type="number"
                  placeholder="1500"
                  value={revenue}
                  onChange={setRevenue}
                />

                <div className="sm:col-span-2">
                  <label className="font-medium block mb-2 text-gray-700">
                    Account Description / Niche
                  </label>

                  <textarea
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 h-28 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Describe your audience, niche, content style..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

              </div>
            </div>

            {/* Upload Section */}
            <div className="space-y-8">

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                Upload Images *
              </h3>

              {/* Profile Images */}
              <div>
                <p className="text-sm text-gray-500 mb-4">
                  Upload your account cover and profile image.
                </p>

                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <ImageUpload
                    label="Cover Image"
                    preview={coverPreview}
                    onChange={setCoverFile}
                    id="cover"
                  />

                  <ImageUpload
                    label="Avatar Image"
                    preview={avatarPreview}
                    onChange={setAvatarFile}
                    id="avatar"
                  />
                </div>
              </div>

              {/* Proof Images */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Account Proof Images (Max 5)
                </h4>

                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-5 sm:p-6 text-center bg-gray-50 hover:border-indigo-500 transition">

                  <Upload className="mx-auto text-indigo-500 mb-3" size={28} />

                  <p className="text-sm sm:text-base font-medium text-gray-700">
                    Upload proof screenshots
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    Followers • Insights • Revenue • Monetization
                  </p>

                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    id="proofUpload"
                    className="hidden"
                    onChange={(e) => handleProofUpload(e.target.files)}
                  />

                  <label
                    htmlFor="proofUpload"
                    className="inline-flex items-center gap-2 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg cursor-pointer text-sm font-medium transition"
                  >
                    <Upload size={16} />
                    Upload Images
                  </label>

                  <p className="text-xs text-gray-400 mt-3">
                    Maximum 5 screenshots allowed
                  </p>
                </div>

                {/* Preview Grid */}
                {proofPreviews.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                    {proofPreviews.map((preview, index) => (
                      <div key={index} className="relative group">

                        <img
                          src={preview}
                          className="w-full h-28 sm:h-32 object-cover rounded-xl border border-gray-200"
                          alt="Proof Preview"
                        />

                        {/* Remove button */}
                        <button
                          type="button"
                          onClick={() => {
                            setProofImages(prev => prev.filter((_, i) => i !== index));
                            setProofPreviews(prev => prev.filter((_, i) => i !== index));
                          }}
                          className="absolute top-2 right-2 bg-black/70 hover:bg-red-500 text-white text-xs px-2 py-1 rounded-md transition"
                        >
                          Remove
                        </button>

                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>

            {/* Price */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Set Price *</h3>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                  ₹
                </span>

                <input
                  type="number"
                  placeholder="Enter your asking price (e.g. 25000)"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full pl-8 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>

              <p className="text-xs text-gray-500 mt-2">
                Set a competitive price based on followers, engagement, and revenue.
              </p>

              <button
                onClick={handleSubmit}
                disabled={loading || !price}
                className="w-full mt-6 py-4 bg-linear-to-r from-indigo-600 to-blue-600 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Listing"}
              </button>
            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-4 lg:space-y-6 lg:sticky lg:top-10 h-fit mb-6">

            <div className="bg-white p-5 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-md lg:shadow-xl border border-gray-100">

              {/* Title */}
              <h3 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">
                Estimated Earnings
              </h3>

              {/* Earnings Breakdown */}
              <div className="space-y-3 text-sm">

                <div className="flex justify-between text-gray-600">
                  <span>Your Price</span>
                  <span className="font-semibold text-gray-900">
                    ₹{price.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between text-red-500">
                  <span>Platform Fee (5%)</span>
                  <span>-₹{fee.toLocaleString()}</span>
                </div>

                <div className="border-t pt-3 flex justify-between items-center text-base font-bold text-green-600">
                  <span>You Receive</span>
                  <span className="text-lg">
                    ₹{receive.toLocaleString()}
                  </span>
                </div>

              </div>

              {/* Security Badge */}
              <div className="mt-4 sm:mt-6 flex items-center gap-2 text-xs sm:text-sm text-gray-600 bg-green-50 p-2.5 sm:p-3 rounded-lg sm:rounded-xl">
                <ShieldCheck className="text-green-600 shrink-0" size={16} />
                <span>Secure & Protected Transactions</span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

/* ----- REUSABLE COMPONENTS ----- */
function Input({ label, value, onChange, type = "text", placeholder }: any) {
  return (
    <div>
      <label className="font-medium block mb-2 text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
      />
    </div>
  );
}

function ImageUpload({ label, preview, onChange, id }: any) {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center bg-gray-50 hover:border-indigo-500 transition">
      {preview ? (
        <img src={preview} className="w-full h-44 object-cover rounded-xl mb-4 shadow" />
      ) : (
        <>
          <Upload className="mx-auto text-indigo-500 mb-3" size={32} />
          <p className="font-semibold text-gray-700">{label}</p>
        </>
      )}
      <input
        type="file"
        accept="image/*"
        id={id}
        className="hidden"
        onChange={e => e.target.files && onChange(e.target.files[0])}
      />
      <label
        htmlFor={id}
        className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl cursor-pointer text-sm font-medium transition"
      >
        {preview ? "Change Image" : "Upload Image"}
      </label>
    </div>
  );
}