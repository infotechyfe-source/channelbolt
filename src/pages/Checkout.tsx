import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ShieldCheck,
  Lock,
  CheckCircle,
  CreditCard,
  HelpCircle,
  Mail,
  DollarSign,
  Shield,
  ShoppingCart
} from "lucide-react";

import { databases, DATABASE_ID, COLLECTION_ID, storage, BUCKET_ID } from "../lib/appwrite";
import Loading from "../components/AccountLoader";

/* ================= TYPES ================= */

interface Listing {
  $id: string
  handle: string
  niche?: string
  followers?: number
  engagement?: number
  revenue?: number
  price?: number
  platform?: string
  coverImage?: string
  avatar?: string
  monetized?: boolean
  payoutAvailable?: boolean
  strikes?: number
  includeEmail?: boolean

  coverImageUrl?: string
  avatarUrl?: string
}

/* ================= FILE URL HELPER ================= */

const getFileUrl = (fileId?: string) => {
  if (!fileId) return "/placeholder.jpg"
  if (fileId.startsWith("http")) return fileId
  return storage.getFileView(BUCKET_ID, fileId)
}

export default function Checkout() {

  const { id } = useParams()
  const navigate = useNavigate()

  const [paymentMethod, setPaymentMethod] = useState("upi")
  const [listing, setListing] = useState<Listing | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  /* ================= FETCH LISTING ================= */

  useEffect(() => {

    if (!id) return

    const fetchListing = async () => {

      try {

        const response = await databases.getDocument(
          DATABASE_ID,
          COLLECTION_ID,
          id
        )

        const listingWithUrls: Listing = {
          ...response,
          coverImageUrl: getFileUrl(response.coverImage),
          avatarUrl: getFileUrl(response.avatar)
        }

        setListing(listingWithUrls)

      } catch (err) {
        console.error("Error fetching listing:", err)
        setError("Failed to load listing")
      } finally {
        setLoading(false)
      }

    }

    fetchListing()

  }, [id])

  /* ================= LOADING ================= */

  if (loading) return <Loading />

  if (error)
    return (
      <div className="text-center py-20 text-red-500">
        {error}
      </div>
    )

  if (!listing)
    return (
      <div className="text-center py-20 text-red-500">
        Listing not found
      </div>
    )

  /* ================= PRICE ================= */

  const price = listing.price ?? 0
  const serviceFee = Math.round(price * 0.05)
  const total = price + serviceFee

  /* ================= STRIKE SUPPORT ================= */

  const supportsStrikes = [
    "YouTube",
    "YouTube NonMonetised",
    "Facebook",
    "Facebook NonMonetised"
  ].includes(listing.platform ?? "")

  /* ================= WHATSAPP FUNCTION ================= */

  const openWhatsApp = () => {

    const phone = "919680819409"

    const message =
      `Hello, I want to purchase the account ${listing.handle} for ₹${total}.`

    const url =
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

    window.open(url, "_blank")
  }

  /* ================= TRANSFER STEPS ================= */

  const steps = [
    {
      title: "Payment to Escrow",
      desc: "Your payment is held securely in our escrow vault."
    },
    {
      title: "Seller Transfer",
      desc: "Seller sends login credentials to our verification team."
    },
    {
      title: "Verification",
      desc: "We verify full access and secure the account."
    },
    {
      title: "Ownership Release",
      desc: "You receive account details and funds are released."
    }
  ]

  return (

    <div className="bg-gray-50 min-h-screen py-10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ================= BREADCRUMB ================= */}

        <div className="text-sm mb-6 flex items-center gap-2 flex-wrap">

          <button
            onClick={() => navigate("/")}
            className="text-gray-500 hover:text-blue-600"
          >
            Home
          </button>

          <span>›</span>

          <button
            onClick={() =>
              navigate("/marketplace", { state: { resetFilters: true } })
            }
            className="text-gray-500 hover:text-blue-600"
          >
            Marketplace
          </button>

          <span>›</span>

          <button
            onClick={() =>
              navigate(`/account/${listing.$id}`)
            }
            className="text-gray-500 hover:text-blue-600"
          >
            Account Details
          </button>

          <span>›</span>

          <span className="text-gray-900 font-medium">
            Checkout
          </span>

        </div>

        {/* ================= GRID ================= */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ================= LEFT ================= */}

          <div className="lg:col-span-2 space-y-6">

            {/* ORDER SUMMARY */}

            <div className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden">

              <img
                src={listing.coverImageUrl}
                alt="cover"
                className="w-full h-48 object-cover"
              />

              <div className="p-6 flex gap-4">

                <img
                  src={listing.avatarUrl}
                  alt="avatar"
                  className="w-20 h-20 rounded-xl object-cover"
                />

                <div className="flex-1">

                  <p className="text-sm text-gray-500">
                    {listing.niche}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mt-3 text-sm">

                    <div>
                      <p className="text-gray-400">Followers</p>
                      <p className="font-semibold">
                        {(listing.followers ?? 0).toLocaleString()}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-400">Engagement</p>
                      <p className="font-semibold">
                        {listing.engagement ?? 0}%
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-400">Revenue</p>
                      <p className="font-semibold">
                        ₹{listing.revenue ?? 0}/mo
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* ================= RIGHT ================= */}

          <div className="space-y-4">

            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 sticky top-4">

              <div className="bg-blue-600 p-6 text-white">
                <h3 className="font-bold text-lg">
                  Payment Summary
                </h3>
              </div>

              <div className="p-6 space-y-4">

                <div className="flex justify-between">
                  <span>Account Price</span>
                  <span className="font-bold">
                    ₹{price.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Marketplace Fee</span>
                  <span className="font-bold">
                    ₹{serviceFee.toLocaleString()}
                  </span>
                </div>

                <div className="border-t pt-4 flex justify-between">

                  <span className="font-bold">
                    Total
                  </span>

                  <span className="text-blue-600 text-xl font-black">
                    ₹{total.toLocaleString()}
                  </span>

                </div>

                {/* WHATSAPP BUTTON */}

                <button
                  onClick={openWhatsApp}
                  className="w-full bg-green-500 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-green-600"
                >
                  <ShoppingCart size={18} />
                  Complete Purchase via WhatsApp
                </button>

                {/* CANCEL */}

                <button
                  onClick={() => navigate(-1)}
                  className="w-full text-gray-400 text-sm font-semibold py-2 hover:text-gray-600"
                >
                  Cancel Order
                </button>

                {/* HELP */}

                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex items-center gap-4">

                  <div className="bg-white p-2 rounded-xl text-blue-600">
                    <HelpCircle size={20} />
                  </div>

                  <div>
                    <p className="font-bold text-xs text-blue-900">
                      Need Help?
                    </p>

                    <p className="text-[10px] text-blue-700">
                      Our support team is available 24/7
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  )

}