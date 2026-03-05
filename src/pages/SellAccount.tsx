/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { databases, storage, DATABASE_ID, COLLECTION_ID, BUCKET_ID } from "../lib/appwrite";
import { ID, Permission, Role } from "appwrite";
import {
  Instagram,
  Youtube,
  Facebook,
  ShieldCheck,
  Upload,
  CheckCircle,
} from "lucide-react";

type Platform = "Instagram" | "YouTube" | "Facebook";

export default function SellAccount() {
  const [platform, setPlatform] = useState<Platform>("Instagram");
  const [username, setUsername] = useState("");
  const [followers, setFollowers] = useState<string>("");
  const [engagement, setEngagement] = useState<string>("");
  const [revenue, setRevenue] = useState<string>("");
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


  // ----- IMAGE PREVIEW -----
  useEffect(() => {
    if (coverFile) setCoverPreview(URL.createObjectURL(coverFile));
    if (avatarFile) setAvatarPreview(URL.createObjectURL(avatarFile));
  }, [coverFile, avatarFile]);

  // ----- SUBMIT LISTING -----
  const handleSubmit = async () => {
    if (!username || !followers || !engagement || !coverFile || !avatarFile) {
      alert("Please complete all required fields (*) and upload images.");
      return;
    }

    try {
      setLoading(true);

      // Upload files
      const coverUpload = await storage.createFile(
        BUCKET_ID,
        ID.unique(),
        coverFile,
        [Permission.read(Role.any())]
      );

      const avatarUpload = await storage.createFile(
        BUCKET_ID,
        ID.unique(),
        avatarFile,
        [Permission.read(Role.any())]
      );

      // Save document
      await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
        handle: username.startsWith("@") ? username : "@" + username,
        platform,
        niche: description || "General",
        followers: Number(followers),
        engagement: Number(engagement),
        revenue: revenue ? Number(revenue) : 0,
        price,
        coverImage: coverUpload.$id,
        avatar: avatarUpload.$id,
        includeEmail: true,
      });

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
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 to-white px-6">
        <div className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-lg">
          <CheckCircle className="mx-auto text-green-600 mb-6" size={60} />
          <h2 className="text-3xl font-bold mb-3">Listing Submitted 🎉</h2>
          <p className="text-gray-600 mb-6">Your listing is under review and will appear shortly.</p>
          <button
            onClick={() => (window.location.href = "/marketplace")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
          >
            Go to Marketplace
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      {/* HEADER */}
      <div className="bg-linear-to-r from-indigo-600 via-blue-600 to-purple-600 text-white rounded-3xl p-10 mb-12 shadow-xl max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-3">Sell Your Social Media Account</h1>
        <p className="text-blue-100 max-w-2xl">
          Turn your hard work into value. List your account and connect with serious buyers.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
        {/* LEFT */}
        <div className="lg:col-span-2 bg-white p-10 rounded-3xl shadow-xl border border-gray-100 space-y-10">
          {/* Platform */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Select Platform *</h3>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { name: "Instagram", icon: Instagram, color: "text-pink-600" },
                { name: "Facebook", icon: Facebook, color: "text-blue-600" },
                { name: "YouTube", icon: Youtube, color: "text-red-600" },
              ].map(item => {
                const Icon = item.icon;
                const active = platform === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => setPlatform(item.name as Platform)}
                    className={`rounded-2xl cursor-pointer border border-amber-50 p-6 shadow transition-all duration-200 ${active ? "border-indigo-600 bg-indigo-50 shadow-md" : "hover:border-gray-300"}`}
                  >
                    <Icon className={`mx-auto mb-3 ${item.color}`} size={28} />
                    <p className="font-medium">{item.name}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Account Details */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Account Details *</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Input label="Username *" placeholder="@daily_motivation" value={username} onChange={setUsername} />
              <Input label="Followers *" type="number" value={followers} onChange={setFollowers} />
              <Input label="Engagement Rate (%) *" type="number" value={engagement} onChange={setEngagement} />
              <Input label="Monthly Revenue ($)" type="number" value={revenue} onChange={setRevenue} />

              <div className="md:col-span-2">
                <label className="font-medium block mb-2 text-gray-700">Account Description / Niche</label>
                <textarea
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 h-28 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Upload */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Upload Images *</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ImageUpload label="Cover Image *" preview={coverPreview} onChange={setCoverFile} id="cover" />
              <ImageUpload label="Avatar Image *" preview={avatarPreview} onChange={setAvatarFile} id="avatar" />
            </div>
          </div>

          {/* Price */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Set Price *</h3>
            <div className="relative">
              <span className="absolute left-4 top-3 text-gray-500 font-medium">$</span>
              <input
                type="number"
                value={price}
                onChange={e => setPrice(Number(e.target.value))}
                className="w-full pl-8 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full mt-6 py-4 bg-linear-to-r from-indigo-600 to-blue-600 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Listing"}
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6 lg:sticky lg:top-24 h-fit">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="font-bold text-lg mb-6">Estimated Earnings</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Your Price</span>
                <span className="font-semibold">${price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-red-500">
                <span>Platform Fee (5%)</span>
                <span>- ${fee.toLocaleString()}</span>
              </div>
              <div className="border-t pt-4 flex justify-between text-lg font-bold text-green-600">
                <span>You Receive</span>
                <span>${receive.toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-6 flex items-center text-sm text-gray-500 bg-green-50 p-3 rounded-xl">
              <ShieldCheck className="mr-2 text-green-600" size={18} />
              Secure & Protected Transactions
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