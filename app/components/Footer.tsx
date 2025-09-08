import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white px-4 py-16 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-wider text-white">ARABICA CAFE</h3>
            <address className="not-italic text-stone-400 text-sm leading-relaxed space-y-1">
              <div>Arabica Cafe</div>
              <div>123 Mithanpura</div>
              <div>Muzaffarpur, Bihar 842001</div>
              <div>Bihar, India</div>
            </address>
            
            <div className="flex space-x-4 pt-4">
              <div className="w-8 h-8 bg-stone-600 rounded flex items-center justify-center hover:bg-stone-500 cursor-pointer transition-colors">
                <Facebook className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-stone-600 rounded flex items-center justify-center hover:bg-stone-500 cursor-pointer transition-colors">
                <Instagram className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-stone-600 rounded flex items-center justify-center hover:bg-stone-500 cursor-pointer transition-colors">
                <Twitter className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-stone-600 rounded flex items-center justify-center hover:bg-stone-500 cursor-pointer transition-colors">
                <Youtube className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg text-white">OPENING HOURS</h4>
            <div className="text-stone-400 text-sm space-y-3">
              <div>
                <div>Monday To Friday</div>
                <div>08:00 AM - 09.00 PM</div>
              </div>
              <div>
                <div>Saturday</div>
                <div>10:00 Am - 9.00 PM</div>
              </div>
              <div>
                <div>Sunday</div>
                <div>10:00 AM - 11.00 pm</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg text-white">COFFEE</h4>
            <div className="text-stone-400 text-sm space-y-3">
              <div className="hover:text-white cursor-pointer transition-colors">Home</div>
              <div className="hover:text-white cursor-pointer transition-colors">About US</div>
              <div className="hover:text-white cursor-pointer transition-colors">Menu</div>
              <div className="hover:text-white cursor-pointer transition-colors">Events</div>
              <div className="hover:text-white cursor-pointer transition-colors">Contact Us</div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg text-white">ABOUT US</h4>
            <div className="text-stone-400 text-sm space-y-3">
              <div className="hover:text-white cursor-pointer transition-colors">Our Story</div>
              <div className="hover:text-white cursor-pointer transition-colors">Values</div>
              <div className="hover:text-white cursor-pointer transition-colors">Team</div>
              <div className="hover:text-white cursor-pointer transition-colors">Suppliers</div>
              <div className="hover:text-white cursor-pointer transition-colors">Community</div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg text-white">HOME</h4>
            <div className="text-stone-400 text-sm space-y-3">
              <div className="hover:text-white cursor-pointer transition-colors">Coffee</div>
              <div className="hover:text-white cursor-pointer transition-colors">List Menu</div>
              <div className="hover:text-white cursor-pointer transition-colors">Order</div>
              <div className="hover:text-white cursor-pointer transition-colors">Blogs</div>
            </div>
          </div>
        </div>

        <div className="text-center text-stone-400 text-sm mt-16 pt-8 border-t border-stone-700">
          ©2025 | ADITYA RAJ | ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
};

export default Footer;
