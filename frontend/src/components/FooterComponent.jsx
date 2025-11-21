import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const FooterComponent = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-6">
          <div className="flex flex-col items-center md:text-left">
            <a href="/">
              <h3 className="text-xl font-bold mb-2 font-primary">DFXN</h3>
            </a>
            <p className="text-gray-400 text-sm mb-3">
              Premium footwear for the modern lifestyle
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} DFXN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
