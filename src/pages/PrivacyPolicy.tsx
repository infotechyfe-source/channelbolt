import React from "react";
import {
  Shield,
  Database,
  Lock,
  Share2,
  Cookie,
  UserCheck,
  Link,
  RefreshCcw,
  Mail
} from "lucide-react";

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-20 px-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">

          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Shield size={14}/>
            Privacy
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>

          <p className="text-gray-500 text-sm sm:text-base">
            Last updated — March 2026
          </p>

        </div>

        {/* CONTENT */}
        <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-8 sm:p-12 space-y-10">

          {/* 1 */}
          <div className="flex gap-4">
            <Shield className="text-green-600 mt-1" size={22}/>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                1. Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed">
                ChannelBolt values your privacy and is committed to protecting
                your personal information. This Privacy Policy explains how we
                collect, use, and safeguard your data when you use our platform.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="flex gap-4">
            <Database className="text-green-600 mt-1" size={22}/>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                2. Information We Collect
              </h2>

              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Name and contact details (email address, phone number).</li>
                <li>Account login credentials.</li>
                <li>Transaction and payment information.</li>
                <li>Listing details for social media accounts.</li>
                <li>Technical data such as IP address and browser type.</li>
              </ul>

            </div>
          </div>

          {/* 3 */}
          <div className="flex gap-4">
            <UserCheck className="text-green-600 mt-1" size={22}/>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                3. How We Use Your Information
              </h2>

              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>To create and manage your account.</li>
                <li>To facilitate buying and selling transactions.</li>
                <li>To improve platform functionality and security.</li>
                <li>To communicate updates or support responses.</li>
                <li>To prevent fraud and unauthorized activity.</li>
              </ul>

            </div>
          </div>

          {/* 4 */}
          <div className="flex gap-4">
            <Lock className="text-green-600 mt-1" size={22}/>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                4. Data Protection & Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational
                security measures to protect your information from
                unauthorized access, misuse, alteration, or disclosure.
                However, no online platform can guarantee complete security.
              </p>
            </div>
          </div>

          {/* 5 */}
          <div className="flex gap-4">
            <Share2 className="text-green-600 mt-1" size={22}/>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                5. Sharing of Information
              </h2>
              <p className="text-gray-600 leading-relaxed">
                ChannelBolt does not sell your personal information. We may
                share data only with trusted third-party service providers
                such as payment processors and infrastructure services
                strictly for the purpose of operating the platform.
              </p>
            </div>
          </div>

          {/* 6 */}
          <div className="flex gap-4">
            <Cookie className="text-green-600 mt-1" size={22}/>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                6. Cookies & Tracking Technologies
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We use cookies and similar technologies to enhance user
                experience, analyze traffic, and improve platform
                performance. You can disable cookies through your browser
                settings if preferred.
              </p>
            </div>
          </div>

          {/* 7 */}
          <div className="flex gap-4">
            <UserCheck className="text-green-600 mt-1" size={22}/>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                7. User Rights
              </h2>

              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access or update your personal information.</li>
                <li>Request deletion of your account and data.</li>
                <li>Withdraw consent where applicable.</li>
              </ul>

            </div>
          </div>

          {/* 8 */}
          <div className="flex gap-4">
            <Link className="text-green-600 mt-1" size={22}/>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                8. Third-Party Links
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our platform may contain links to third-party websites.
                ChannelBolt is not responsible for the privacy practices
                of those external sites.
              </p>
            </div>
          </div>

          {/* 9 */}
          <div className="flex gap-4">
            <RefreshCcw className="text-green-600 mt-1" size={22}/>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                9. Changes to This Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy periodically.
                Continued use of the platform after changes indicates
                acceptance of the updated policy.
              </p>
            </div>
          </div>

          {/* 10 */}
          <div className="flex gap-4">
            <Mail className="text-green-600 mt-1" size={22}/>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                10. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions regarding this Privacy Policy,
                please contact our support team through the ChannelBolt
                platform.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default PrivacyPolicy;