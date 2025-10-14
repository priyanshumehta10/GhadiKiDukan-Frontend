import React from "react";
import { motion } from "framer-motion";
import founder from "../../assets/founder.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 px-6 md:px-16 lg:px-28 py-16 space-y-20">
      
      {/* Who We Are */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center md:text-left"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Who We Are
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          <b>Every big idea starts small – and so did we.</b> <br />
          Ghadi ki Dukan was born with a simple vision: to make quality products accessible to everyone, anytime, anywhere.
          Shopping isn’t just about buying—it’s about trust, convenience, and happiness.
          That’s why we built a platform where every product is carefully selected, every transaction secure, and every customer feels valued.
        </p>
      </motion.div>

      {/* Mission */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center md:text-left"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Our Mission
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          To deliver top-quality, trendy, and reliable products that enhance everyday life, while making online shopping smooth and enjoyable.
          <br />
          <b>Our Vision:</b> To become the go-to destination for smart, stylish, and affordable shopping—where innovation meets customer satisfaction.
        </p>
      </motion.div>

      {/* Product Range */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center md:text-left"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 ">
          At <b>Ghadi ki Dukan</b>, we bring you:
        </h2>
        <ul className="mt-4 space-y-2 text-gray-600 text-left">
          <li>Accessories that upgrade your style – watches, sunglasses & more</li>
          <li>Footwear that blends comfort & fashion – casual, formal, lifestyle</li>
          <li>Smart electronics & gadgets – for work, play, and everything in between</li>
          <li>Lifestyle products – perfumes, wallets, and much more</li>
        </ul>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center md:text-left"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Why Choose Us
        </h2>
        <ul className="mt-4 space-y-2 text-gray-600">
          <li> Trusted Quality: Only products that pass our checks reach you.</li>
          <li> Customer-Centric: Your satisfaction is our priority.</li>
          <li> Affordable Luxury: Premium products at prices you’ll love.</li>
          <li> Fast & Reliable Delivery: Quick and safe deliveries.</li>
          <li> Support That Cares: Our team is ready to assist you 24/7.</li>
        </ul>
      </motion.div>

      {/* Our Promise To You */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center md:text-left italic"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Our Promise to You
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          "We’re not just selling products – we’re building relationships.
          When you shop with us, you become part of our journey.
          Our promise is to continuously bring you innovative collections, unmatched service, and a shopping experience that feels personal and rewarding.
          Together, let’s make everyday shopping effortless, fun, and meaningful."
        </p>
      </motion.div>

      {/* Founder */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
          Meet Our Founder
        </h2>
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <img
            src={founder}
            alt="Founder"
            className="w-32 h-32 rounded-full object-cover shadow-md mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">Somya Shah</h3>
          <p className="text-gray-500">Founder</p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
