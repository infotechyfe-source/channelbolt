import { account } from "../lib/appwrite";
export default function AdminSidebar() {

  const logout = async () => {
    try {
      await account.deleteSession("current");
      window.location.href = "/login";
    } catch (err) {
      console.error(err);
      alert("Logout failed");
    }
  };

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-6 flex flex-col">

      <h1 className="text-xl font-bold mb-10">
        Admin Panel
      </h1>

      <nav className="flex flex-col gap-4 grow">

        <a
          href="/admin"
          className="hover:bg-gray-800 p-2 rounded"
        >
          Dashboard
        </a> 

        <a
          href="/admin/contactmessages"
          className="hover:bg-gray-800 p-2 rounded"
        >
          Messages
        </a>

      </nav>

      {/* Logout Button */}

      <button
        onClick={logout}
        className="mt-auto bg-red-500 hover:bg-red-600 p-2 rounded"
      >
        Logout
      </button>

    </div>
  );
}