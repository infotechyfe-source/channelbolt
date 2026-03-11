/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  databases,
  storage,
  DATABASE_ID,
  COLLECTION_ID,
  BUCKET_ID,
} from "../lib/appwrite";
import { ID } from "appwrite";

export default function AdminEditListing({
  listing,
  onClose,
  onUpdated,
}: any) {

  const [uploading, setUploading] = useState(false);

  const [form, setForm] = useState({
    handle: listing.handle || "",
    platform: listing.platform || "",
    niche: listing.niche || "",
    followers: listing.followers || 0,
    engagement: listing.engagement || 0,
    revenue: listing.revenue || 0,
    price: listing.price || 0,

    coverImage: listing.coverImage || "",
    avatar: listing.avatar || "",

    includeEmail: listing.includeEmail ?? false,
    status: listing.status || "pending",
    slug: listing.slug || "",

    accountType: listing.accountType || "",
    pageStatus: listing.pageStatus || "",

    monetized: listing.monetized ?? false,
    verified: listing.verified ?? false,

    payoutAvailable: listing.payoutAvailable ?? false,
    strikes: listing.strikes ?? 0,

    proofImages: listing.proofImages || [],
  });

  const handleChange = (field: string, value: any) => {
    setForm((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Upload proof images
  const handleUpload = async (e: any) => {
    const files = Array.from(e.target.files);

    if (form.proofImages.length + files.length > 5) {
      alert("Maximum 5 images allowed");
      return;
    }

    setUploading(true);

    try {
      const uploadedUrls: string[] = [];

      for (const file of files as File[]) {

        if (file.size > 1024 * 1024) {
          alert(`${file.name} exceeds 1MB limit`);
          continue;
        }

        const uploaded = await storage.createFile(
          BUCKET_ID,
          ID.unique(),
          file
        );

        const url = storage
          .getFileView(BUCKET_ID, uploaded.$id)
          .toString();

        uploadedUrls.push(url);
      }

      setForm((prev: any) => ({
        ...prev,
        proofImages: [...prev.proofImages, ...uploadedUrls],
      }));

    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }

    setUploading(false);
  };

  const removeImage = (index: number) => {
    const updated = [...form.proofImages];
    updated.splice(index, 1);

    setForm((prev: any) => ({
      ...prev,
      proofImages: updated,
    }));
  };

  const saveListing = async () => {
    try {

      await databases.updateDocument(
        DATABASE_ID,
        COLLECTION_ID,
        listing.$id,
        form
      );

      onUpdated();
      onClose();

    } catch (err) {
      console.error(err);
      alert("Failed to update listing");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl w-[750px] max-h-[90vh] overflow-y-auto p-8 shadow-2xl">

        <h2 className="text-2xl font-bold mb-6">
          Edit Listing
        </h2>

        {/* BASIC INFO */}

        <div className="mb-6">
          <h3 className="font-semibold mb-3 text-gray-700">
            Basic Info
          </h3>

          <div className="grid grid-cols-2 gap-4">

            <input
              className="input"
              value={form.handle}
              onChange={(e) => handleChange("handle", e.target.value)}
              placeholder="Handle"
            />

            <input
              className="input"
              value={form.platform}
              onChange={(e) => handleChange("platform", e.target.value)}
              placeholder="Platform"
            />

            <input
              className="input"
              value={form.niche}
              onChange={(e) => handleChange("niche", e.target.value)}
              placeholder="Niche"
            />

            <input
              type="number"
              className="input"
              value={form.followers}
              onChange={(e) => handleChange("followers", Number(e.target.value))}
              placeholder="Followers"
            />

          </div>
        </div>

        {/* METRICS */}

        <div className="mb-6">

          <h3 className="font-semibold mb-3 text-gray-700">
            Metrics
          </h3>

          <div className="grid grid-cols-3 gap-4">

            <input
              type="number"
              className="input"
              value={form.engagement}
              onChange={(e) => handleChange("engagement", Number(e.target.value))}
              placeholder="Engagement %"
            />

            <input
              type="number"
              className="input"
              value={form.revenue}
              onChange={(e) => handleChange("revenue", Number(e.target.value))}
              placeholder="Revenue"
            />

            <input
              type="number"
              className="input"
              value={form.price}
              onChange={(e) => handleChange("price", Number(e.target.value))}
              placeholder="Price"
            />

          </div>

        </div>

        {/* ACCOUNT INFO */}

        <div className="mb-6">

          <h3 className="font-semibold mb-3 text-gray-700">
            Account Details
          </h3>

          <div className="grid grid-cols-2 gap-4">

            <input
              className="input"
              value={form.accountType}
              onChange={(e) => handleChange("accountType", e.target.value)}
              placeholder="Account Type"
            />

            <input
              className="input"
              value={form.pageStatus || ""}
              onChange={(e) => handleChange("pageStatus", e.target.value)}
              placeholder="Page Status"
            />

            <input
              className="input"
              value={form.slug}
              onChange={(e) => handleChange("slug", e.target.value)}
              placeholder="Slug"
            />

            <input
              type="number"
              className="input"
              value={form.strikes || 0}
              onChange={(e) => handleChange("strikes", Number(e.target.value))}
              placeholder="Strikes"
            />

            <select
              title="monetized"
              className="input"
              value={form.monetized ? "yes" : "no"}
              onChange={(e) => handleChange("monetized", e.target.value === "yes")}
            >
              <option value="yes">Monetized</option>
              <option value="no">Not Monetized</option>
            </select>

            <select
              title="verified"
              className="input"
              value={form.verified ? "yes" : "no"}
              onChange={(e) => handleChange("verified", e.target.value === "yes")}
            >
              <option value="yes">Verified</option>
              <option value="no">Not Verified</option>
            </select>

            <select
              title="includeEmail"
              className="input"
              value={form.includeEmail ? "yes" : "no"}
              onChange={(e) => handleChange("includeEmail", e.target.value === "yes")}
            >
              <option value="yes">Email Included</option>
              <option value="no">No Email</option>
            </select>

            <select
              title="payoutAvailable"
              className="input"
              value={form.payoutAvailable ? "yes" : "no"}
              onChange={(e) => handleChange("payoutAvailable", e.target.value === "yes")}
            >
              <option value="yes">Payout Enabled</option>
              <option value="no">Payout Disabled</option>
            </select>

          </div>

        </div>

        {/* PROOF UPLOAD */}

        <div className="mb-6">

          <h3 className="font-semibold mb-3 text-gray-700">
            Proof Screenshots
          </h3>

          <div className="border-2 border-dashed rounded-lg p-6 text-center">

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleUpload}
            />

            <p className="text-sm text-gray-500 mt-2">
              Upload up to 5 screenshots (max 1MB each)
            </p>

          </div>

          {uploading && (
            <p className="text-sm mt-2 text-gray-500">
              Uploading images...
            </p>
          )}

          <div className="grid grid-cols-4 gap-3 mt-4">

            {form.proofImages.map((img: string, index: number) => (
              <div key={index} className="relative">

                <img
                  src={img}
                  className="rounded-lg h-24 w-full object-cover"
                />

                <button
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 rounded"
                >
                  ✕
                </button>

              </div>
            ))}

          </div>

        </div>

        <div className="mb-6">

  <h3 className="font-semibold mb-3 text-gray-700">
    Listing Status
  </h3>

  <select
    className="input"
    value={form.status}
    onChange={(e)=>handleChange("status",e.target.value)}
  >
    <option value="pending">Pending</option>
    <option value="approved">Approved</option>
    <option value="rejected">Rejected</option>
  </select>

</div>

<div className="mb-6">

  <h3 className="font-semibold mb-3 text-gray-700">
    Images
  </h3>

  <div className="grid grid-cols-2 gap-4">

    <input
      className="input"
      value={form.avatar}
      onChange={(e)=>handleChange("avatar",e.target.value)}
      placeholder="Avatar File ID"
    />

    <input
      className="input"
      value={form.coverImage}
      onChange={(e)=>handleChange("coverImage",e.target.value)}
      placeholder="Cover Image File ID"
    />

  </div>

</div>

        {/* ACTIONS */}

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-gray-200"
          >
            Cancel
          </button>

          <button
            onClick={saveListing}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Save Changes
          </button>

        </div>

      </div>

      {/* Tailwind reusable style */}
      <style>
        {`
        .input {
          border:1px solid #e5e7eb;
          padding:10px;
          border-radius:8px;
          width:100%;
        }
        `}
      </style>

    </div>
  );
}