import {
  ShieldCheck,
  Lock,
  CheckCircle,
  Headphones,
  RefreshCcw
} from "lucide-react";

export default function BuyerProtection() {
  return (
    <section className="bg-linear-to-b from-gray-50 to-white min-h-screen py-20 px-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">

          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck size={14}/>
            Buyer Safety
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Buyer Protection
          </h1>

          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            ChannelBolt ensures every buyer is protected during social media
            account purchases through secure processes and verified transfers.
          </p>

        </div>

        {/* CONTENT CARD */}
        <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-8 sm:p-12 space-y-10">

          {/* Escrow */}
          <div className="flex gap-4">
            <Lock className="text-blue-600 mt-1" size={22}/>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Escrow Payments
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Your payment is held securely until the seller successfully
                transfers the account ownership and access is verified.
                Funds are only released after confirmation.
              </p>
            </div>
          </div>

          {/* Verification */}
          <div className="flex gap-4">
            <CheckCircle className="text-blue-600 mt-1" size={22}/>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Account Verification
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our verification process ensures that buyers receive full
                control of the social media account including login
                credentials and associated email where applicable.
              </p>
            </div>
          </div>

          {/* Transfer Guarantee */}
          <div className="flex gap-4">
            <RefreshCcw className="text-blue-600 mt-1" size={22}/>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Transfer Guarantee
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If the seller fails to deliver the account or the transfer
                cannot be completed, your payment will be refunded according
                to our refund policy.
              </p>
            </div>
          </div>

          {/* Support */}
          <div className="flex gap-4">
            <Headphones className="text-blue-600 mt-1" size={22}/>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Dedicated Support
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our support team assists buyers during the transaction
                process to ensure safe communication and smooth account
                transfers.
              </p>
            </div>
          </div>

          {/* Data Security */}
          <div className="flex gap-4">
            <ShieldCheck className="text-blue-600 mt-1" size={22}/>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Secure Data Handling
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Sensitive information is handled securely during the
                transaction process to prevent unauthorized access or
                exposure of personal data.
              </p>
            </div>
          </div>

        </div>

        {/* FOOTER NOTE */}
        <div className="text-center mt-10 text-gray-500 text-sm">
          ChannelBolt is committed to maintaining a trusted marketplace
          for buyers and sellers of digital social media assets.
        </div>

      </div>

    </section>
  );
}