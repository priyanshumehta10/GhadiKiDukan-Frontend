// TermsConditions.tsx
import React from "react";
import { Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

const TermsConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fff] flex justify-center items-center p-6">
      <Card className="max-w-4xl w-full shadow-xl rounded-2xl p-8 bg-white">
        <Typography>
          <Title level={2} className="text-center text-[#305BAB] mb-6">
            Terms & Conditions
          </Title>

          <Paragraph>
            Welcome to <strong>GhadiKiDukaan</strong> (referred to as “we”, “our”, or “us”). 
            By browsing or interacting with our website, you agree to the following terms and conditions. 
            Please read them carefully before using our services.
          </Paragraph>

          <Title level={4}>1. Purpose of Website</Title>
          <Paragraph>
            • This website is designed to showcase products with details, images, and prices. <br />
            • If you are interested in any product, you can directly connect with us via WhatsApp to place an order or request more information.
          </Paragraph>

          <Title level={4}>2. Order & Payment Process</Title>
          <Paragraph>
            • When you like a product, you can share it with us directly on WhatsApp along with your order details. <br />
            • Payment can be made securely through the scanner available on our website or via payment details shared on WhatsApp. <br />
            • Once your payment is confirmed, your parcel will be prepared and shipped. <br />
            • All transaction details and order confirmations are handled through WhatsApp communication.
          </Paragraph>

          <Title level={4}>3. Eligibility</Title>
          <Paragraph>
            • Our website can be used by anyone of any age. <br />
            • Parents or guardians are advised to supervise minors when sharing personal details.
          </Paragraph>

          <Title level={4}>4. User Responsibilities</Title>
          <Paragraph>
            • Users must provide correct and complete information when contacting us on WhatsApp. <br />
            • Misuse of the website (spamming, fake orders, or harmful activities) is strictly prohibited. <br />
            • Product images and descriptions are for reference; slight variations may occur.
          </Paragraph>

          <Title level={4}>5. Products & Pricing</Title>
          <Paragraph>
            • We aim to display accurate product details, prices, and images. <br />
            • Prices and availability may change without prior notice. <br />
            • Final product confirmation, pricing, and delivery details will be shared through WhatsApp.
          </Paragraph>

          <Title level={4}>6. Communication via WhatsApp</Title>
          <Paragraph>
            • All product inquiries, payments, and confirmations are done via WhatsApp. <br />
            • By contacting us, you agree to receive replies, updates, and product information from our team directly on WhatsApp.
          </Paragraph>

          <Title level={4}>7. Returns & Replacement Policy</Title>
          <Paragraph>
            • Customers must record a clear unboxing video from the moment the parcel is opened. 
            This video will serve as proof in case of product damage, size issues, or defects. <br />
            • Without an unboxing video, no return or replacement will be accepted.
          </Paragraph>

          <Paragraph>
            <strong>Replacement:</strong> Eligible only if the product is defective or the wrong size (with valid proof). <br />
            <strong>Return:</strong> Must be requested within 3 days of delivery with proof. 
            Customers will bear delivery/shipping charges for returns. 
            Refunds are processed after the product is received back in its original condition.
          </Paragraph>

          <Title level={4}>8. Limitation of Liability</Title>
          <Paragraph>
            • We are not liable for technical issues, delays, or interruptions in website access. <br />
            • Since transactions are handled via WhatsApp, users must ensure their contact details and payment confirmations are accurate.
          </Paragraph>

          <Title level={4}>9. Privacy</Title>
          <Paragraph>
            • We do not store any card or bank details. <br />
            • Basic customer details (name, contact number, and address) are collected only to complete your order. <br />
            • We never share your personal details with third parties without your consent.
          </Paragraph>

          <Title level={4}>10. Changes to Terms</Title>
          <Paragraph>
            • We may update these Terms & Conditions from time to time. <br />
            • Continued use of the website means you accept the latest version of these terms.
          </Paragraph>

          <Title level={4}>11. Contact Us</Title>
          <Paragraph>
            For any questions about our User Agreement or services, please contact us: <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:dikshitsoni2526@gmail.com" className="text-[#305BAB] font-semibold">
              dikshitsoni2526@gmail.com
            </a><br />
            <strong>WhatsApp:</strong> +91 8866562526
          </Paragraph>
        </Typography>
      </Card>
    </div>
  );
};

export default TermsConditions;
