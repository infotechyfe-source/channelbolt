/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useMemo } from "react";
import { databases } from "../lib/appwrite";
import { ID } from "appwrite";
import AdminEditListing from "../components/AdminEditListing";
import AdminSidebar from "../components/AdminSidebar";

const databaseId = "69a55aa1001ac4d8ba49";
const collectionId = "listings";

export default function AdminDashboard() {

  const [listings, setListings] = useState<any[]>([]);
  const [editingListing, setEditingListing] = useState<any>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const [newListing, setNewListing] = useState<any>({
    platform: "Instagram",
    handle: "",
    followers: "",
    price: "",
    niche: "",
    engagement: "",
    avgViews: "",
    monetized: false,
    pageStatus: "Green",
    avatar: ""
  });

  /* ================= FETCH LISTINGS ================= */

  const fetchListings = async () => {
    try {
      const res = await databases.listDocuments(databaseId, collectionId);
      setListings(res.documents);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const loadListings = async () => {
      try {
        const res = await databases.listDocuments(databaseId, collectionId);
        setListings(res.documents);
      } catch (error) {
        console.error(error);
      }
    };

    loadListings();
  }, []);

  /* ================= FILTERED LISTINGS ================= */

  const filteredListings = useMemo(() => {
    return listings.filter((item) => {

      if (filter !== "all" && item.status !== filter) return false;

      if (search && !item.handle?.toLowerCase().includes(search.toLowerCase()))
        return false;

      return true;

    });
  }, [listings, search, filter]);

  /* ================= ACTIONS ================= */

  const approveListing = async (id: string) => {
    await databases.updateDocument(databaseId, collectionId, id, {
      status: "approved",
      verified: true
    });

    fetchListings();
  };

  const rejectListing = async (id: string) => {
    await databases.updateDocument(databaseId, collectionId, id, {
      status: "rejected",
      verified: false
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
      price
    });

    fetchListings();
  };

  const addListing = async () => {

    try {

      await databases.createDocument(
        databaseId,
        collectionId,
        ID.unique(),
        {
          ...newListing,
          followers: Number(newListing.followers),
          price: Number(newListing.price),
          status: "pending",
          verified: false
        }
      );

      setShowAddModal(false);

      setNewListing({
        platform: "Instagram",
        handle: "",
        followers: "",
        price: "",
        niche: "",
        engagement: "",
        avgViews: "",
        monetized: false,
        pageStatus: "Green",
        avatar: ""
      });

      fetchListings();

    } catch (err) {
      console.error(err);
    }
  };

  /* ================= STATS ================= */

  const total = listings.length;
  const approved = listings.filter((i) => i.status === "approved").length;
  const pending = listings.filter((i) => i.status === "pending").length;
  const rejected = listings.filter((i) => i.status === "rejected").length;

  return (
    <div className="flex min-h-screen bg-gray-100">

      <AdminSidebar />

      <div className="flex-1 p-10">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">
            Marketplace Dashboard
          </h1>

          <button
            onClick={() => setShowAddModal(true)}
            className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800"
          >
            + Add Listing
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-4 gap-6 mb-10">

          <div className="bg-white shadow rounded-xl p-6">
            <p className="text-gray-500 text-sm">Total Listings</p>
            <p className="text-3xl font-bold">{total}</p>
          </div>

          <div className="bg-yellow-50 shadow rounded-xl p-6">
            <p className="text-gray-500 text-sm">Pending</p>
            <p className="text-3xl font-bold text-yellow-600">{pending}</p>
          </div>

          <div className="bg-green-50 shadow rounded-xl p-6">
            <p className="text-gray-500 text-sm">Approved</p>
            <p className="text-3xl font-bold text-green-600">{approved}</p>
          </div>

          <div className="bg-red-50 shadow rounded-xl p-6">
            <p className="text-gray-500 text-sm">Rejected</p>
            <p className="text-3xl font-bold text-red-600">{rejected}</p>
          </div>

        </div>

        {/* SEARCH */}
        <div className="flex gap-4 mb-6">

          <input
            type="text"
            placeholder="Search handle..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded-lg w-64"
          />

          <select
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

        {/* TABLE */}
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

                  <td className="p-4 flex items-center gap-3">

                    <img
                      src={item.avatar || "/avatar.png"}
                      className="w-10 h-10 rounded-full object-cover"
                    />

                    <div>
                      <p className="font-semibold">{item.handle}</p>
                      <p className="text-xs text-gray-500">{item.niche}</p>
                    </div>

                  </td>

                  <td className="p-4">{item.platform}</td>

                  <td className="p-4">
                    {item.followers?.toLocaleString()}
                  </td>

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

                  <td className="p-4">

                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold
                      ${item.status === "approved"
                          ? "bg-green-100 text-green-700"
                          : item.status === "pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                    >
                      {item.status || "pending"}
                    </span>

                  </td>

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

        {/* EDIT MODAL */}
        {editingListing && (
          <AdminEditListing
            listing={editingListing}
            onClose={() => setEditingListing(null)}
            onUpdated={fetchListings}
          />
        )}

        {/* ADD LISTING MODAL */}
        {showAddModal && (

          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            <div className="bg-white rounded-2xl shadow-xl w-[520px] p-8">

              <h2 className="text-2xl font-bold mb-6">
                Add New Listing
              </h2>

              {/* Platform Selector */}
              <div className="grid grid-cols-3 gap-3 mb-6">

                {["Instagram", "Facebook", "YouTube"].map((p) => (
                  <button
                    key={p}
                    onClick={() => setNewListing({ ...newListing, platform: p })}
                    className={`border rounded-lg py-3 font-medium transition
${newListing.platform === p
                        ? "bg-blue-50 border-blue-500 text-blue-600"
                        : "border-gray-200 hover:bg-gray-50"
                      }`}
                  >
                    {p}
                  </button>
                ))}

              </div>

              {/* Basic Fields */}
              <div className="grid grid-cols-2 gap-4">

                <input
                  placeholder="Username"
                  className="border p-3 rounded-lg"
                  value={newListing.handle}
                  onChange={(e) =>
                    setNewListing({ ...newListing, handle: e.target.value })
                  }
                />

                <input
                  type="number"
                  placeholder="Followers"
                  className="border p-3 rounded-lg"
                  value={newListing.followers}
                  onChange={(e) =>
                    setNewListing({ ...newListing, followers: e.target.value })
                  }
                />

                <input
                  type="number"
                  placeholder="Price"
                  className="border p-3 rounded-lg"
                  value={newListing.price}
                  onChange={(e) =>
                    setNewListing({ ...newListing, price: e.target.value })
                  }
                />

                <input
                  placeholder="Niche"
                  className="border p-3 rounded-lg"
                  value={newListing.niche}
                  onChange={(e) =>
                    setNewListing({ ...newListing, niche: e.target.value })
                  }
                />

              </div>

              {/* Instagram Fields */}
              {newListing.platform === "Instagram" && (

                <div className="mt-5">

                  <input
                    type="number"
                    placeholder="Engagement %"
                    className="border p-3 rounded-lg w-full"
                    value={newListing.engagement || ""}
                    onChange={(e) =>
                      setNewListing({ ...newListing, engagement: e.target.value })
                    }
                  />

                </div>

              )}

              {/* YouTube Fields */}
              {newListing.platform === "YouTube" && (

                <div className="mt-5 grid grid-cols-2 gap-4">

                  <input
                    type="number"
                    placeholder="Avg Views"
                    className="border p-3 rounded-lg"
                    value={newListing.avgViews || ""}
                    onChange={(e) =>
                      setNewListing({ ...newListing, avgViews: e.target.value })
                    }
                  />

                  <label className="flex items-center gap-2 border p-3 rounded-lg">

                    <input
                      type="checkbox"
                      checked={newListing.monetized || false}
                      onChange={(e) =>
                        setNewListing({ ...newListing, monetized: e.target.checked })
                      }
                    />

                    Monetized

                  </label>

                </div>

              )}

              {/* Facebook Fields */}
              {newListing.platform === "Facebook" && (

                <div className="mt-5">

                  <select
                    className="border p-3 rounded-lg w-full"
                    value={newListing.pageStatus || "Green"}
                    onChange={(e) =>
                      setNewListing({ ...newListing, pageStatus: e.target.value })
                    }
                  >
                    <option value="Green">🟢 Good Standing</option>
                    <option value="Yellow">🟡 Warning</option>
                    <option value="Red">🔴 Restricted</option>
                  </select>

                </div>

              )}

              {/* Buttons */}
              <div className="flex justify-end gap-3 mt-8">

                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-5 py-2 border rounded-lg"
                >
                  Cancel
                </button>

                <button
                  onClick={addListing}
                  className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800"
                >
                  Create Listing
                </button>

              </div>

            </div>
          </div>

        )}

      </div>
    </div>
  );
}