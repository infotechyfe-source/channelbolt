import {
  ShieldCheck,
  MailCheck,
  Lock,
  CreditCard,
  CheckCircle
} from "lucide-react";

export default function VerificationProcess() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-20 px-6">

      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-14">

          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck size={14}/>
            Account Security
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Verification Process
          </h1>

          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Our verification process ensures that every social media account
            listed on ChannelBolt is authentic, secure, and ready for safe
            transfer between buyers and sellers.
          </p>

        </div>

        {/* MAIN CARD */}
        <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-8 sm:p-12 space-y-10">

          {/* STEP 1 */}
          <div className="flex gap-4">
            <ShieldCheck className="text-indigo-600 mt-1" size={22}/>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                1. Account Ownership Verification
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We confirm that the seller has legitimate ownership of the
                account by verifying login credentials, account history,
                and seller identity where required.
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="flex gap-4">
            <MailCheck className="text-indigo-600 mt-1" size={22}/>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                2. Original Email Verification
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Where applicable, the original email associated with the
                account is verified to ensure the buyer receives complete
                control of the asset after purchase.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="flex gap-4">
            <Lock className="text-indigo-600 mt-1" size={22}/>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                3. Security & Compliance Checks
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our team checks the account for bans, violations,
                suspicious activity, or security risks to ensure the
                listing is safe for buyers.
              </p>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="flex gap-4">
            <CreditCard className="text-indigo-600 mt-1" size={22}/>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                4. Escrow Protection
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Payments are held securely in escrow during the transfer
                process. Funds are only released once the buyer confirms
                successful account access and ownership.
              </p>
            </div>
          </div>

        </div>

        {/* TRUST SECTION */}
        <div className="mt-12 bg-indigo-50 border border-indigo-100 rounded-2xl p-8 text-center">

          <CheckCircle className="mx-auto text-indigo-600 mb-3" size={28}/>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Secure Marketplace
          </h3>

          <p className="text-gray-600 max-w-lg mx-auto">
            Our verification process is designed to maintain a trusted
            marketplace where buyers can purchase social media assets
            with confidence and sellers can list accounts safely.
          </p>

        </div>

      </div>

    </section>
  );
}