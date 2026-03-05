
export default function BuyerProtection() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Buyer Protection</h1>
        <p className="text-gray-700 mb-4">
          Our platform ensures that buyers are fully protected during account
          purchases. Here’s how we safeguard your investment:
        </p>

        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            <strong>Escrow Payments:</strong> Your payment is held securely until
            the account is fully transferred and verified.
          </li>
          <li>
            <strong>Verification Team:</strong> Our team verifies that you receive
            full access to the account and OG email.
          </li>
          <li>
            <strong>Transfer Guarantee:</strong> If the transfer fails, funds are
            returned in full.
          </li>
          <li>
            <strong>24/7 Support:</strong> Our support team is available to
            resolve any issues during the transaction.
          </li>
          <li>
            <strong>Secure Data Handling:</strong> No sensitive data is exposed
            until verification is complete.
          </li>
        </ul>

        <p className="text-gray-600 mt-6">
          We prioritize trust and safety, making your buying experience
          stress-free.
        </p>
      </div>
    </div>
  );
}