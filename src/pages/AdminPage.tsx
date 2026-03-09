/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { databases } from "../lib/appwrite";
import AdminEditListing from "../components/AdminEditListing";
import AdminSidebar from "../components/AdminSidebar";
const databaseId = "69a55aa1001ac4d8ba49";
const collectionId = "listings";

export default function AdminDashboard() {
  const [listings, setListings] = useState<any[]>([]);
  const [filteredListings, setFilteredListings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingListing, setEditingListing] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const fetchListings = async () => {
    try {
      const res = await databases.listDocuments(databaseId, collectionId);
      setListings(res.documents);
      setFilteredListings(res.documents);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchListings();
  }, []);

  useEffect(() => {
    let data = [...listings];

    if (filter !== "all") {
      data = data.filter((item) => item.status === filter);
    }

    if (search) {
      data = data.filter((item) =>
        item.handle.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredListings(data);
  }, [search, filter, listings]);

  const approveListing = async (id: string) => {
    await databases.updateDocument(databaseId, collectionId, id, {
      status: "approved",
      verified: true,
    });

    fetchListings();
  };

  const rejectListing = async (id: string) => {
    await databases.updateDocument(databaseId, collectionId, id, {
      status: "rejected",
      verified: false,
    });

    fetchListings();
  };

  const deleteListing = async (id: string) => {
    if (!confirm("Delete this listing?")) return;

    await databases.deleteDocument(databaseId, collectionId, id);
    fetchListings();
  };

  const updatePrice = async (id: string, price: number) => {
    await databases.updateDocument(databaseId, collectionId, id, {
      price,
    });

    fetchListings();
  };

  if (loading) return <p className="p-10">Loading dashboard...</p>;

  const total = listings.length;
  const approved = listings.filter((i) => i.status === "approved").length;
  const pending = listings.filter((i) => i.status === "pending").length;
  const rejected = listings.filter((i) => i.status === "rejected").length;

  return (
  <div className="flex min-h-screen bg-gray-100">
    <AdminSidebar />

    <div className="flex-1 p-10">

      <h1 className="text-3xl font-bold mb-8">
        Admin Marketplace Dashboard
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6 mb-10">

        <div className="bg-white shadow rounded-xl p-5">
          <p className="text-gray-500 text-sm">Total Listings</p>
          <p className="text-2xl font-bold">{total}</p>
        </div>

        <div className="bg-yellow-50 shadow rounded-xl p-5">
          <p className="text-gray-500 text-sm">Pending</p>
          <p className="text-2xl font-bold text-yellow-600">{pending}</p>
        </div>

        <div className="bg-green-50 shadow rounded-xl p-5">
          <p className="text-gray-500 text-sm">Approved</p>
          <p className="text-2xl font-bold text-green-600">{approved}</p>
        </div>

        <div className="bg-red-50 shadow rounded-xl p-5">
          <p className="text-gray-500 text-sm">Rejected</p>
          <p className="text-2xl font-bold text-red-600">{rejected}</p>
        </div>

      </div>

      {/* Search + Filter */}
      <div className="flex gap-4 mb-6">

        <input
          type="text"
          placeholder="Search handle..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-lg w-64"
        />

        <select
          title="status"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border px-4 py-2 rounded-lg"
        >
          <option value="all">All Listings</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>

      </div>

      {/* Table */}

      <div className="overflow-x-auto bg-white rounded-xl shadow">

        <table className="w-full text-sm">

          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-4">Account</th>
              <th className="p-4">Platform</th>
              <th className="p-4">Followers</th>
              <th className="p-4">Price</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>

            {filteredListings.map((item) => (
              <tr key={item.$id} className="border-t hover:bg-gray-50">

                {/* Account */}
                <td className="p-4 flex items-center gap-3">
                  <img
                    src={item.avatar}
                    className="w-10 h-10 rounded-full"
                  />

                  <div>
                    <p className="font-semibold">{item.handle}</p>
                    <p className="text-xs text-gray-500">
                      {item.niche}
                    </p>
                  </div>
                </td>

                {/* Platform */}
                <td className="p-4">{item.platform}</td>

                {/* Followers */}
                <td className="p-4">
                  {item.followers?.toLocaleString()}
                </td>

                {/* Price Editable */}
                <td className="p-4">

                  <input
                    type="number"
                    defaultValue={item.price}
                    className="border px-2 py-1 rounded w-24"
                    onBlur={(e) =>
                      updatePrice(item.$id, Number(e.target.value))
                    }
                  />

                </td>

                {/* Status */}
                <td className="p-4">

                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold
                    ${
                      item.status === "approved"
                        ? "bg-green-100 text-green-700"
                        : item.status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status || "pending"}
                  </span>

                </td>

                {/* Actions */}
<td className="p-4 flex gap-2">

  <button
    onClick={() => setEditingListing(item)}
    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs"
  >
    Edit
  </button>

  <button
    onClick={() => approveListing(item.$id)}
    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs"
  >
    Approve
  </button>

  <button
    onClick={() => rejectListing(item.$id)}
    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-xs"
  >
    Reject
  </button>

  <button
    onClick={() => deleteListing(item.$id)}
    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs"
  >
    Delete
  </button>

</td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {editingListing && (
  <AdminEditListing
    listing={editingListing}
    onClose={() => setEditingListing(null)}
    onUpdated={fetchListings}
  />
)}

    </div>
  </div>
  );
}