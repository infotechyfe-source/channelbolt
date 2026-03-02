import { useState, useEffect } from "react";
import {
  Instagram,
  Youtube,
  Facebook,
  ShieldCheck,
  Upload,
  CheckCircle,
} from "lucide-react";
import {
  databases,
  storage,
  DATABASE_ID,
  COLLECTION_ID,
  BUCKET_ID,
} from "../lib/appwrite";

type Platform = "Instagram" | "YouTube" | "Facebook";

export default function SellAccount() {
  const [platform, setPlatform] = useState<Platform>("Instagram");
  const [username, setUsername] = useState("");
  const [followers, setFollowers] = useState<number>(0);
  const [engagement, setEngagement] = useState<number>(0);
  const [revenue, setRevenue] = useState<number>(0);
  const [price, setPrice] = useState<number>(25000);
  const [description, setDescription] = useState("");

  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const fee = Math.round(price * 0.05);
  const receive = price - fee;

  // Generate image previews
  useEffect(() => {
    if (coverFile) setCoverPreview(URL.createObjectURL(coverFile));
    if (avatarFile) setAvatarPreview(URL.createObjectURL(avatarFile));
  }, [coverFile, avatarFile]);

  const handleSubmit = async () => {
    if (
      !username ||
      followers <= 0 ||
      engagement <= 0 ||
      price <= 0 ||
      !coverFile ||
      !avatarFile
    ) {
      alert("Please complete all required fields (*) and upload images.");
      return;
    }

    try {
      setLoading(true);

      // Upload images
      const coverUpload = await storage.createFile(
        BUCKET_ID,
        "unique()",
        coverFile
      );

      const avatarUpload = await storage.createFile(
        BUCKET_ID,
        "unique()",
        avatarFile
      );

      // Match EXACT SocialCard structure
      const listingData = {
        handle: username.startsWith("@") ? username : "@" + username,
        platform,
        niche: description || "General",
        followers,
        engagement,
        revenue,
        price,
        coverImage: coverUpload.$id,
        avatar: avatarUpload.$id,
        includeEmail: true,
      };

      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        "unique()",
        listingData
      );

      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      alert("Failed to submit listing.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-lg">
          <CheckCircle className="mx-auto text-green-600 mb-4" size={48} />
          <h2 className="text-2xl font-bold mb-2">
            Listing Submitted 🎉
          </h2>
          <p className="text-gray-600">
            Your listing will appear in Marketplace shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow border space-y-8">

          {/* Platform */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Select Platform *
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { name: "Instagram", icon: Instagram },
                { name: "Facebook", icon: Facebook },
                { name: "YouTube", icon: Youtube },
              ].map((item) => {
                const Icon = item.icon;
                const active = platform === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => setPlatform(item.name as Platform)}
                    className={`border rounded-xl p-6 text-center transition ${
                      active
                        ? "border-blue-600 bg-blue-50"
                        : "hover:border-blue-400"
                    }`}
                  >
                    <Icon className="mx-auto mb-2" size={24} />
                    <p className="font-medium">{item.name}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Account Details */}
          <div className="space-y-6">
            <h3 className="font-semibold text-xl">Account Details *</h3>

            <div className="grid md:grid-cols-2 gap-6">

              <Input label="Username *"
                placeholder="@daily_motivation"
                value={username}
                onChange={setUsername}
              />

              <Input label="Followers *"
                type="number"
                placeholder="510000"
                value={followers}
                onChange={(v) => setFollowers(Number(v))}
              />

              <Input label="Engagement Rate (%) *"
                type="number"
                placeholder="5.2"
                value={engagement}
                onChange={(v) => setEngagement(Number(v))}
              />

              <Input label="Monthly Revenue ($)"
                type="number"
                placeholder="4600"
                value={revenue}
                onChange={(v) => setRevenue(Number(v))}
              />

              <div className="md:col-span-2">
                <label className="font-medium block mb-1">
                  Account Description / Niche
                </label>
                <textarea
                  placeholder="Describe your account niche and audience..."
                  className="border rounded-xl px-4 py-3 w-full h-28 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Upload Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Upload Images *
            </h3>

            <div className="grid md:grid-cols-2 gap-6">

              <ImageUpload
                label="Cover Image *"
                preview={coverPreview}
                onChange={(file) => setCoverFile(file)}
                id="cover-upload"
              />

              <ImageUpload
                label="Avatar Image *"
                preview={avatarPreview}
                onChange={(file) => setAvatarFile(file)}
                id="avatar-upload"
              />
            </div>
          </div>

          {/* Price */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Set Price *
            </h3>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full border rounded-xl px-4 py-3 mb-4"
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Listing"}
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          <div className="bg-white p-6 rounded-2xl shadow border">
            <h3 className="font-semibold mb-4">
              Estimated Earnings
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Your Price:</span>
                <span>${price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-red-500">
                <span>Platform Fee (5%):</span>
                <span>-${fee.toLocaleString()}</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold text-green-600">
                <span>You Receive:</span>
                <span>${receive.toLocaleString()}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ---------- Reusable Components ---------- */

function Input({ label, placeholder, value, onChange, type = "text" }: any) {
  return (
    <div>
      <label className="font-medium block mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
}

function ImageUpload({ label, preview, onChange, id }: any) {
  return (
    <div className="border-2 border-dashed rounded-xl p-4 text-center bg-gray-50">
      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="w-full h-40 object-cover rounded-lg mb-3"
        />
      )}
      <Upload className="mx-auto text-gray-400 mb-2" size={28} />
      <p className="font-medium mb-2">{label}</p>
      <input
        type="file"
        accept="image/*"
        id={id}
        className="hidden"
        onChange={(e) =>
          e.target.files && onChange(e.target.files[0])
        }
      />
      <label
        htmlFor={id}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer text-sm"
      >
        Choose File
      </label>
    </div>
  );
}