import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function FooterSection() {
  return (
    <footer 
      className="bg-black/20 backdrop-blur-md border-t border-white/10 text-white"
      style={{
        backgroundImage: "url('/hero/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Us */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">About Us</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We're a team of designers, engineers, and innovators building AI tools that empower anyone to turn
              imagination into stunning visuals—faster, smarter, and effortlessly.
            </p>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-orange-500">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Team
                </a>
              </li>
              <li>
                <a href="#prices" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Prices
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-orange-500">Help</h3>
            <ul className="space-y-3">
              <li>
                <a href="#support" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-orange-500">Connect With Us</h3>
            <div className="space-y-3 text-sm">
              <p className="text-gray-300">
                27 Division St, New York,
                <br />
                NY 10002, USA
              </p>
              <p className="text-gray-300">+1 23 324 2663</p>
              <p className="text-gray-300">username@email.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 All Right Reserved.</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
