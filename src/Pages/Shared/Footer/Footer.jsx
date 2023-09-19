import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the year on component mount
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <>
      <footer className="grid md:grid-cols-2 ">
        <div className="bg-[#1F2937] p-20 text-white">
          <h2 className="text-3xl">Contact US</h2>
          <h4 className="py-2">123 ABC Street, Uni 21, Bangladesh</h4>
          Phone: +8801765465465
          <p className="py-2">Mon - Fri: 8:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00 </p>
        </div>
        <div className="bg-[#111827] p-20 text-white ">
          <span className="footer-title">Social</span>
          <h2 className="py-2">Follow US</h2>
          <p>Join us on social Media</p>
          <div className="flex gap-4 pt-2">
            <FaFacebook className="h-8 w-8 hover:text-orange-800 rounded-full" />
            <FaInstagram className="h-8 w-8 hover:text-orange-800 rounded-full" />
            <FaTwitter className="h-8 w-8 hover:text-orange-800 rounded-full" />
          </div>
        </div>
      </footer>
      <div className="footer footer-center p-4 bg-[#1F2937] text-white">
        <div>
          <p>
            Copyright © {currentYear} - All right reserved by ACME Industries
            Ltd
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
