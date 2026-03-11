import React from "react";
import {
  ShieldCheck,
  FileText,
  UserCheck,
  CreditCard,
  RefreshCcw,
  AlertTriangle,
  Scale,
  Ban,
  Mail
} from "lucide-react";

const Terms: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-20 px-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck size={14} />
            Legal
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>

          <p className="text-gray-500 text-sm sm:text-base">
            Last updated — March 2026
          </p>
        </div>

        {/* CONTENT */}
        <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-8 sm:p-12 space-y-10">

          {/* 1 */}
          <div className="flex gap-4">
            <FileText className="text-blue-600 mt-1" size={22} />
            <div>
              <h2 className="text-xl font-semibold mb-2">
                1. Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Welcome to ChannelBolt. By accessing or using our platform,
                you agree to comply with and be bound by these Terms &
                Conditions. If you do not agree, please discontinue use of
                the platform.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="flex gap-4">
            <UserCheck className="text-blue-600 mt-1" size={22} />
            <div>
              <h2 className="text-xl font-semibold mb-2">
                2. Nature of Service
              </h2>
              <p className="text-gray-600 leading-relaxed">
                ChannelBolt operates as a digital marketplace connecting
                buyers and sellers of social media assets such as Instagram
                pages, Facebook pages, and YouTube channels. We facilitate
                transactions but do not claim ownership of listed assets.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="flex gap-4">
            <ShieldCheck className="text-blue-600 mt-1" size={22} />
            <div>
              <h2 className="text-xl font-semibold mb-2">
                3. User Responsibilities
              </h2>

              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Provide accurate and truthful information.</li>
                <li>Ensure ownership of accounts listed for sale.</li>
                <li>Avoid fraudulent or misleading activities.</li>
                <li>Comply with applicable laws and platform policies.</li>
              </ul>
            </div>
          </div>

          {/* 4 */}
          <div className="flex gap-4">
            <CreditCard className="text-blue-600 mt-1" size={22} />
            <div>
              <h2 className="text-xl font-semibold mb-2">
                4. Transactions & Payments
              </h2>
              <p className="text-gray-600 leading-relaxed">
                All payments made through ChannelBolt must follow the
                platform's payment procedures. Once a transaction is
                completed and ownership is transferred, it is considered
                final unless otherwise specified.
              </p>
            </div>
          </div>

          {/* 5 */}
          <div className="flex gap-4">
            <RefreshCcw className="text-blue-600 mt-1" size={22} />
            <div>
              <h2 className="text-xl font-semibold mb-2">
                5. Account Transfers
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Sellers must ensure full and secure transfer of ownership
                to buyers. ChannelBolt is not responsible for losses caused
                by improper credential transfer or incomplete ownership
                changes.
              </p>
            </div>
          </div>

          {/* 6 */}
          <div className="flex gap-4">
            <AlertTriangle className="text-blue-600 mt-1" size={22} />
            <div>
              <h2 className="text-xl font-semibold mb-2">
                6. Prohibited Activities
              </h2>

              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Listing stolen or fake accounts.</li>
                <li>Artificially inflating engagement metrics.</li>
                <li>Bypassing platform payment systems.</li>
                <li>Violating intellectual property rights.</li>
              </ul>
            </div>
          </div>

          {/* 7 */}
          <div className="flex gap-4">
            <Scale className="text-blue-600 mt-1" size={22} />
            <div>
              <h2 className="text-xl font-semibold mb-2">
                7. Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                ChannelBolt is not responsible for disputes, losses, or
                damages resulting from transactions between buyers and
                sellers. Users assume full responsibility for their actions.
              </p>
            </div>
          </div>

          {/* 8 */}
          <div className="flex gap-4">
            <Ban className="text-blue-600 mt-1" size={22} />
            <div>
              <h2 className="text-xl font-semibold mb-2">
                8. Termination
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to suspend or terminate accounts that
                violate these Terms or engage in suspicious or harmful
                activity.
              </p>
            </div>
          </div>

          {/* 9 */}
          <div className="flex gap-4">
            <RefreshCcw className="text-blue-600 mt-1" size={22} />
            <div>
              <h2 className="text-xl font-semibold mb-2">
                9. Changes to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                ChannelBolt may modify these Terms at any time. Continued
                use of the platform after updates constitutes acceptance of
                the revised Terms.
              </p>
            </div>
          </div>

          {/* 10 */}
          <div className="flex gap-4">
            <Mail className="text-blue-600 mt-1" size={22} />
            <div>
              <h2 className="text-xl font-semibold mb-2">
                10. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                For questions regarding these Terms & Conditions, please
                contact our support team through the ChannelBolt platform.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Terms;