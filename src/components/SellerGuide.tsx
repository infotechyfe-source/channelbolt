
export default function SellerGuide() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Seller Guide</h1>
        <p className="text-gray-700 mb-4">
          This guide will help sellers list their accounts safely and efficiently.
        </p>

        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>
            <strong>Create a Listing:</strong> Fill in account details, niche,
            followers, and revenue. Upload high-quality cover and avatar images.
          </li>
          <li>
            <strong>Set a Price:</strong> Determine a fair price based on
            engagement, revenue, and market trends.
          </li>
          <li>
            <strong>Escrow Transfer:</strong> Funds are held securely until the
            buyer confirms account receipt.
          </li>
          <li>
            <strong>Communicate:</strong> Respond promptly to buyer inquiries for
            a smooth sale.
          </li>
          <li>
            <strong>Verify & Transfer:</strong> Provide OG email and account
            credentials for verification.
          </li>
        </ol>

        <p className="text-gray-600 mt-6">
          Following this guide ensures trust, smooth transactions, and positive
          reviews.
        </p>
      </div>
    </div>
  );
}