import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-8 sm:p-12">

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          Privacy Policy
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
              ChannelBolt values your privacy and is committed to protecting
              your personal information. This Privacy Policy explains how we
              collect, use, and safeguard your data when you use our platform.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              2. Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Name and contact details (email address, phone number).</li>
              <li>Account login credentials.</li>
              <li>Transaction and payment information.</li>
              <li>Listing details for social media accounts.</li>
              <li>Technical data such as IP address and browser type.</li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To create and manage your account.</li>
              <li>To facilitate buying and selling transactions.</li>
              <li>To improve platform functionality and security.</li>
              <li>To communicate important updates or support responses.</li>
              <li>To prevent fraud and unauthorized activity.</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              4. Data Protection & Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures
              to protect your information from unauthorized access, misuse,
              alteration, or disclosure. However, no online platform can
              guarantee complete security.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              5. Sharing of Information
            </h2>
            <p>
              ChannelBolt does not sell your personal information. We may share
              data only with trusted third-party service providers (such as
              payment processors) strictly for the purpose of operating the
              platform.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              6. Cookies & Tracking Technologies
            </h2>
            <p>
              We may use cookies and similar technologies to enhance user
              experience, analyze traffic, and improve performance. You may
              disable cookies in your browser settings if preferred.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              7. User Rights
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Access or update your personal information.</li>
              <li>Request deletion of your account and data.</li>
              <li>Withdraw consent where applicable.</li>
            </ul>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              8. Third-Party Links
            </h2>
            <p>
              Our platform may contain links to external websites. We are not
              responsible for the privacy practices of those third-party sites.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically. Continued use of
              the platform after changes indicates acceptance of the updated
              policy.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              10. Contact Us
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy, please
              contact us through the support section of ChannelBolt.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;