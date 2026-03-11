import React from "react";
import {
  RefreshCcw,
  CreditCard,
  AlertTriangle,
  ShieldCheck,
  Clock,
  Mail
} from "lucide-react";

const RefundPolicy: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-20 px-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">

          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <RefreshCcw size={14}/>
            Refund Policy
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Refund Policy
          </h1>

          <p className="text-gray-500 text-sm sm:text-base">
            Last updated — March 2026
          </p>

        </div>

        {/* CONTENT */}
        <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-8 sm:p-12 space-y-10">

          {/* 1 */}
          <div className="flex gap-4">
            <ShieldCheck className="text-indigo-600 mt-1" size={22}/>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                1. Overview
              </h2>
              <p className="text-gray-600 leading-relaxed">
                ChannelBolt is a digital marketplace that connects buyers
                and sellers of social media assets. Because transactions
                involve the transfer of digital accounts, refund policies
                may vary depending on the transaction status.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="flex gap-4">
            <CreditCard className="text-indigo-600 mt-1" size={22}/>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                2. Eligibility for Refunds
              </h2>

              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Payment was made but the seller did not deliver the account.</li>
                <li>The account transferred does not match the listing description.</li>
                <li>The transaction was cancelled before ownership transfer.</li>
              </ul>
            </div>
          </div>

          {/* 3 */}
          <div className="flex gap-4">
            <AlertTriangle className="text-indigo-600 mt-1" size={22}/>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                3. Non-Refundable Situations
              </h2>

              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>The buyer received full access to the account.</li>
                <li>The buyer changed account credentials after transfer.</li>
                <li>The dispute is raised long after the transaction was completed.</li>
                <li>Losses caused by platform policy violations (Instagram, YouTube, etc.).</li>
              </ul>

            </div>
          </div>

          {/* 4 */}
          <div className="flex gap-4">
            <Clock className="text-indigo-600 mt-1" size={22}/>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                4. Refund Request Timeframe
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Refund requests must be submitted within a reasonable time
                after the transaction. Requests submitted after account
                ownership has been successfully transferred may not qualify
                for refunds.
              </p>
            </div>
          </div>

          {/* 5 */}
          <div className="flex gap-4">
            <RefreshCcw className="text-indigo-600 mt-1" size={22}/>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                5. Dispute Resolution
              </h2>

              <p className="text-gray-600 leading-relaxed">
                In case of disputes between buyers and sellers, ChannelBolt
                may review transaction details and communication records to
                determine whether a refund is justified.
              </p>
            </div>
          </div>

          {/* 6 */}
          <div className="flex gap-4">
            <Mail className="text-indigo-600 mt-1" size={22}/>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                6. Contact Us
              </h2>

              <p className="text-gray-600 leading-relaxed">
                If you have questions regarding this Refund Policy or need
                assistance with a transaction, please contact our support
                team through the ChannelBolt platform.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default RefundPolicy;