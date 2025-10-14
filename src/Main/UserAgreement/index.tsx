// UserAgreement.tsx
import React from "react";

const UserAgreement: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#fff] rounded-2xl shadow-lg text-[#1a2753] mt-6">
      <h1 className="text-3xl font-bold text-center mb-6">User Agreement</h1>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Introduction</h2>
        <p>
          Welcome to <span className="font-semibold">Ghadi ki Dukan</span>, By accessing or browsing our website, you agree to the following terms and conditions. Please read them carefully.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Purpose of Website</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>This website is designed to showcase products with details, images, and prices.</li>
          <li>If you are interested in any product, you can directly connect with us via WhatsApp to place an order or request more information.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Order & Payment Process</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>When you like a product, you may share it with us directly on WhatsApp along with your details.</li>
          <li>Payment can be made through the secure scanner available on our website or the scanner details provided via WhatsApp.</li>
          <li>Once your payment is confirmed, your parcel will be prepared and shipped.</li>
          <li>All transactions and confirmations are completed through WhatsApp communication.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Eligibility</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Our website can be used by anyone of any age.</li>
          <li>Parents/guardians are encouraged to guide minors while browsing or sharing personal details.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">User Responsibilities</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Users must provide correct details when contacting us via WhatsApp.</li>
          <li>Misuse of the website (spamming, fake inquiries, harmful activities) is strictly prohibited.</li>
          <li>Product images and descriptions are for reference purposes; slight variations may occur.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Products & Pricing</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>We strive to display accurate product details, images, and prices.</li>
          <li>We strive to display accurate product details, images, and prices.</li>
          <li>Final confirmation of product availability, delivery, and pricing will be shared on WhatsApp.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Communication via WhatsApp</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>All product inquiries, payments, and order confirmations are handled through WhatsApp.</li>
          <li>By contacting us, you agree to receive replies, updates, and product information directly on WhatsApp.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Changes to Terms</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>We may update these Terms & Conditions from time to time.</li>
          <li>Continued use of the website means you accept the updated terms.</li>
        </ul>
      </section>


      <section>
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p>
          For concerns, email us at{" "}
          <a
            href="mailto:gowithspark@gmail.com"
            className="text-[#305BAB] underline"
          >
            dikshitsoni2526@gmail.com          </a>
        </p>
      </section>
    </div>
  );
};

export default UserAgreement;
