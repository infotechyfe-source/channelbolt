import { useState } from "react";
import toast from "react-hot-toast";
import { Mail, Phone, Clock, ShieldCheck, CheckCircle, MessageSquare, } from "lucide-react";
import { databases, DATABASE_ID, CONTACT_COLLECTION_ID } from "../lib/appwrite";
import { ID } from "appwrite";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendMessage = async () => {
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await databases.createDocument(
        DATABASE_ID,
        CONTACT_COLLECTION_ID,
        ID.unique(),
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }
      );

      toast.success("Message sent successfully!");
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message");
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
            Message Sent Successfully 🎉
          </h2>
          <p className="text-gray-600">
            Our support team will get back to you within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">

      {/* HERO */}
      <div className="max-w-4xl mx-auto text-center pt-16 px-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Contact <span className="text-blue-600">ChannelBolt</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Have questions about buying or selling accounts? Our team is ready
          to help you with transfers, escrow, and listings.
        </p>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT SIDE INFO */}
        <div className="space-y-8">

          <div className="bg-white p-6 rounded-2xl shadow border flex gap-4">
            <Mail className="text-blue-600 mt-1" size={22} />
            <div>
              <p className="font-semibold">Email Support</p>
              <p className="text-gray-500 text-sm">
                support@channelbolt.com
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border flex gap-4">
            <Phone className="text-blue-600 mt-1" size={22} />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-500 text-sm">
                +91 98765 43210
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border flex gap-4">
            <Clock className="text-blue-600 mt-1" size={22} />
            <div>
              <p className="font-semibold">Working Hours</p>
              <p className="text-gray-500 text-sm">
                Monday – Saturday <br />
                9:00 AM – 6:00 PM IST
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border flex gap-4">
            <ShieldCheck className="text-blue-600 mt-1" size={22} />
            <div>
              <p className="font-semibold">Secure Transactions</p>
              <p className="text-gray-500 text-sm">
                All payments are protected using escrow security.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white p-10 rounded-3xl shadow-xl border">

          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="text-blue-600" size={22} />
            <h2 className="text-xl font-semibold">
              Send Us a Message
            </h2>
          </div>

          <div className="space-y-5">

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 outline-none"
            >
              <option>General Inquiry</option>
              <option>Buying Support</option>
              <option>Selling Support</option>
              <option>Escrow Issue</option>
              <option>Technical Problem</option>
            </select>

            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="max-w-4xl mx-auto pb-20 px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          <div className="bg-white p-6 rounded-2xl shadow border">
            <p className="font-semibold mb-2">
              How does escrow work?
            </p>
            <p className="text-gray-600 text-sm">
              Buyer funds are held securely until the account transfer is
              completed and confirmed.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border">
            <p className="font-semibold mb-2">
              How long does seller review take?
            </p>
            <p className="text-gray-600 text-sm">
              Listings are typically reviewed and approved within 24 hours.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border">
            <p className="font-semibold mb-2">
              Is my data secure?
            </p>
            <p className="text-gray-600 text-sm">
              Yes. We use encrypted connections and secure payment gateways
              to protect your information.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}