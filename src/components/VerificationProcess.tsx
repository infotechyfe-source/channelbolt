
export default function VerificationProcess() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Verification Process</h1>
        <p className="text-gray-700 mb-4">
          Our verification process ensures that every account listed is authentic
          and secure. This process protects both buyers and sellers.
        </p>

        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>
            <strong>Account Verification:</strong> We verify the account ownership
            and credentials provided by the seller.
          </li>
          <li>
            <strong>OG Email Verification:</strong> Original email ownership is
            confirmed and transferred securely.
          </li>
          <li>
            <strong>Security Check:</strong> We ensure the account is free from
            bans, violations, or risks.
          </li>
          <li>
            <strong>Escrow Protection:</strong> Funds are held in escrow until the
            account is fully transferred and verified.
          </li>
        </ol>

        <p className="text-gray-600 mt-6">
          For questions about verification, contact our support team 24/7.
        </p>
      </div>
    </div>
  );
}