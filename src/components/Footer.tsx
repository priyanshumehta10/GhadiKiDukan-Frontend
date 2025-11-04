import { Layout } from "antd";

const { Footer } = Layout;

export default function AppFooter() {
  return (
    <Footer className="bg-[#0d1321] text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Column 1: Brand */}
        <div className="text-center lg:text-left">
          <h3 className="text-2xl font-bold  mb-3">
            Ghadi ki Dukan
          </h3>
          <p className="text-sm leading-6 max-w-sm mx-auto lg:mx-0 text-gray-400">
            Your trusted destination for premium watches and accessories.  
            Discover style, precision, and timeless design — all in one place.
          </p>
        </div>

        {/* Column 2: Support */}
        <div className="text-center lg:text-left">
          <h4 className="text-lg font-semibold  mb-3">Support</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/userAgreement" className="hover:text-white transition">
                User Agreement
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white transition">
                Terms & Conditions
              </a>
            </li>
           
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="text-center lg:text-left">
          <h4 className="text-lg font-semibold  mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li> 8866562526</li>
            <li> dikshitsoni2526@gmail.com</li>
            <li> Mon – Sun, 11:00 AM – 11:00 PM</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Bottom bar */}
      <div className="text-center text-sm text-gray-500">
        © 2025 <span className=" font-medium">Ghadi ki Dukan</span>. All rights reserved.
      </div>
    </Footer>
  );
}
