import React from "react";

const Terms: React.FC = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-8 sm:p-12">

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 mb-6">
          Last Updated: March 2026
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">

          {/* 1 */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              1. Introduction
            </h2>
            <p>
              Welcome to ChannelBolt. By accessing or using our platform,
              you agree to comply with and be bound by these Terms &
              Conditions. If you do not agree, please do not use our services.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              2. Nature of Service
            </h2>
            <p>
              ChannelBolt is a digital marketplace that connects buyers and
              sellers of social media assets including Instagram pages,
              Facebook pages, and YouTube channels. We act as a facilitator
              and do not claim ownership of listed accounts.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              3. User Responsibilities
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Provide accurate and truthful information.</li>
              <li>Ensure ownership of any account listed for sale.</li>
              <li>Not engage in fraudulent, misleading, or illegal activities.</li>
              <li>Comply with applicable laws and platform policies.</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              4. Transactions & Payments
            </h2>
            <p>
              All payments made through ChannelBolt must follow the platform’s
              payment process. Once a transaction is completed and ownership is
              transferred, it is considered final unless otherwise stated.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              5. Account Transfers
            </h2>
            <p>
              Sellers are responsible for securely transferring full ownership
              of accounts to buyers. ChannelBolt is not liable for losses caused
              by failure to properly transfer credentials or access rights.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              6. Prohibited Activities
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Listing fake, stolen, or restricted accounts.</li>
              <li>Manipulating engagement metrics.</li>
              <li>Attempting to bypass the platform’s payment system.</li>
              <li>Violating intellectual property rights.</li>
            </ul>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              7. Limitation of Liability
            </h2>
            <p>
              ChannelBolt is not responsible for any losses, damages, or
              disputes arising between buyers and sellers. Users assume full
              responsibility for their transactions.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              8. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate accounts that violate
              these Terms & Conditions or engage in suspicious activity.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              9. Changes to Terms
            </h2>
            <p>
              ChannelBolt may update these Terms & Conditions at any time.
              Continued use of the platform after updates constitutes acceptance
              of the revised terms.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              10. Contact Us
            </h2>
            <p>
              For any questions regarding these Terms & Conditions,
              please contact our support team through the platform.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Terms;