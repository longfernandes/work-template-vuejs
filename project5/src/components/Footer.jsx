import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:gap-40 text-lg">
        {/* Who we are */}
        <div>
          <h3 className="font-semibold mb-3">Who we are</h3>
          <span>____</span>
          <ul className="space-y-2 text-gray-300 mt-5">
            <li><a href="#">About The Fancho</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">News</a></li>
          </ul>
        </div>

        {/* Customer support */}
        <div>
          <h3 className="font-semibold mb-3">Customer support</h3>
          <span>____</span>
          <ul className="space-y-2 text-gray-300 mt-5">
            <li><a href="#">Frequently Asked Questions</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Business & Bulk Orders</a></li>
            <li><a href="#">Product Guarantee</a></li>
            <li><a href="#">Delivery Method</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3">Social</h3>
          <span>____</span>
          <ul className="space-y-2 text-gray-300 mt-5">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">X</a></li>
            <li><a href="#">TikTok</a></li>
          </ul>
        </div>

        {/* Download */}
        <div>
          <h3 className="font-semibold mb-3">Download</h3>
          <span>____</span>
          <p className="text-gray-300 mb-2 mt-5">The future of fashion is here!</p>
          <p className="text-blue-400 mb-4 underline cursor-pointer">Download the app</p>
          <div className="flex items-center gap-3">
            <img
              src="/images/assets/image 40.svg"
              alt="QR Code"
              className="w-16 h-16 object-contain"
            />
            <div className="space-y-2">
              <img
                src="/images/assets/Apple.svg"
                alt="App Store"
                className="w-28"
              />
              <img
                src="/images/assets/CHPlay.svg"
                alt="Google Play"
                className="w-28"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
