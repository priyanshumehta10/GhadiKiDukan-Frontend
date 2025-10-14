import { Card } from "antd";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen from-white via-[#fdf2f8] to-[#c6dcff] flex justify-center py-10 px-4">
      <Card
        className="max-w-4xl w-full shadow-2xl rounded-2xl p-8 from-[#1a2753] to-pink-600 border-t-8 border-[#305BAB]"
      >
        <h1 className="text-3xl font-bold text-[#1a2753] mb-6 text-center">
          Privacy Policy
        </h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#305BAB]">Introduction</h2>
          <p className="text-gray-700 mt-2">
            At <strong>GhadiKiDukaan</strong>, we value your privacy and are committed 
            to protecting your personal information. This Privacy Policy explains how we 
            collect, use, and safeguard your data when you use our website or contact us via WhatsApp.
            By continuing to use our services, you agree to this policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#305BAB]">Information We Collect</h2>
          <ul className="list-disc ml-6 text-gray-700 mt-2">
            <li><strong>Basic Details:</strong> Name, contact number, and address (to process your orders).</li>
            <li><strong>WhatsApp Communication:</strong> Messages and order-related information exchanged with our team.</li>
            <li><strong>Payment Details:</strong> We do not store card or bank information. Payments are processed via secure gateways or UPI.</li>
            <li><strong>Website Usage Data:</strong> Technical information like browser type, IP address, and pages visited to improve our services.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#305BAB]">How We Use Your Data</h2>
          <ul className="list-disc ml-6 text-gray-700 mt-2">
            <li>To confirm and deliver your orders.</li>
            <li>To communicate order updates, payments, and product details via WhatsApp.</li>
            <li>To provide customer support and resolve issues.</li>
            <li>To comply with legal and regulatory obligations.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#305BAB]">Cookies & Website Data</h2>
          <p className="text-gray-700 mt-2">
            We may use cookies to enhance your browsing experience and analyze website performance.
            You can disable cookies through your browser settings, but some features may not function properly without them.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#305BAB]">Data Retention</h2>
          <p className="text-gray-700 mt-2">
            We keep your personal data only for as long as necessary to complete your orders or 
            comply with legal obligations. You may request deletion of your data by contacting us, 
            subject to any legal retention requirements.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#305BAB]">Your Rights</h2>
          <ul className="list-disc ml-6 text-gray-700 mt-2">
            <li>Access and review the personal data we hold about you.</li>
            <li>Request corrections to inaccurate or incomplete information.</li>
            <li>Request deletion of your data, where applicable.</li>
            <li>Withdraw consent for communications at any time.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#305BAB]">Data Security</h2>
          <p className="text-gray-700 mt-2">
            We implement appropriate technical and organizational measures to protect your personal 
            information against unauthorized access, loss, misuse, or alteration. Payment transactions 
            are handled through trusted third-party gateways, and we never store sensitive financial details.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#305BAB]">Policy Updates</h2>
          <p className="text-gray-700 mt-2">
            We may update this Privacy Policy periodically. Any changes will be posted on this page. 
            Continued use of our website after updates constitutes acceptance of the new policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#305BAB]">Contact Us</h2>
          <p className="text-gray-700 mt-2">
            For questions or concerns regarding this policy, contact us: <br />
            <strong>WhatsApp:</strong> +91 8866562526 <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:dikshitsoni2526@gmail.com" className="text-[#305BAB] font-semibold">
              dikshitsoni2526@gmail.com
            </a>
            <br />
            Subash Nagar, Near Vitthal Service, Banswara, Rajasthan
          </p>
        </section>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600">
            © 2025 GhadiKiDukaan. All Rights Reserved.
          </p>
        </div>
      </Card>
    </div>
  );
}
