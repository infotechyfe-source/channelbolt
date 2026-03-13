/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { databases } from "../lib/appwrite";
import AdminSidebar from "./AdminSidebar";

const databaseId = "69a55aa1001ac4d8ba49";
const contactCollectionId = "contact_messages";

export default function AdminContactMessages() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const res = await databases.listDocuments(
        databaseId,
        contactCollectionId
      );

      setMessages(res.documents);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }

    setLoading(false);
  };

  const deleteMessage = async (id: string) => {
    if (!confirm("Delete this message?")) return;

    await databases.deleteDocument(databaseId, contactCollectionId, id);
    fetchMessages();
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 p-10">

        <h1 className="text-3xl font-bold mb-8">
          Contact Messages
        </h1>

        <div className="bg-white rounded-xl shadow overflow-hidden">

          <div className="p-6 border-b">
            <p className="text-gray-500 text-sm">
              Messages submitted from your contact page
            </p>
          </div>

          {loading ? (
            <p className="p-6">Loading messages...</p>
          ) : messages.length === 0 ? (
            <p className="p-6 text-gray-500">No messages yet.</p>
          ) : (

            <div className="overflow-x-auto">

              <table className="w-full text-sm">

                <thead className="bg-gray-100 text-left">
                  <tr>
                    <th className="p-4">Name</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Subject</th>
                    <th className="p-4">Message</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>

                <tbody>

                  {messages.map((msg) => (
                    <tr key={msg.$id} className="border-t hover:bg-gray-50">

                      <td className="p-4 font-medium">
                        {msg.name}
                      </td>

                      <td className="p-4 text-blue-600">
                        {msg.email}
                      </td>

                      <td className="p-4">
                        {msg.subject}
                      </td>

                      <td className="p-4 max-w-md">
                        <p className="line-clamp-2 text-gray-600">
                          {msg.message}
                        </p>
                      </td>

                      <td className="p-4 text-gray-500 whitespace-nowrap">
                        {new Date(msg.$createdAt).toLocaleString()}
                      </td>

                      <td className="p-4">

                        <button
                          onClick={() => deleteMessage(msg.$id)}
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
          )}

        </div>

      </div>
    </div>
  );
}