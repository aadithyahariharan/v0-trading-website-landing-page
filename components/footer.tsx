export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-tradserv-dark border-t border-tradserv-light-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Address */}
          <div>
            <h4 className="text-white font-bold mb-4">Address</h4>
            <p className="text-tradserv-gray text-sm leading-relaxed">
              BT 4, Navins Flats, 4/8, Kalasathamman Koil Street, Ramapuram, Chennai 600089, India.
            </p>
            <p className="text-tradserv-gray text-sm mt-4">
              Mobile <span className="text-white">+91 99625 82721</span>
            </p>
            <p className="text-tradserv-gray text-sm mt-2">
              E Mail: <span className="text-white">dninmaa@gmail.com</span>
            </p>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-tradserv-gray text-sm">
              <li>
                <a href="#globaltrading" className="hover:text-tradserv-accent transition-colors">
                  Global Trading
                </a>
              </li>
              <li>
                <a href="#logistics" className="hover:text-tradserv-accent transition-colors">
                  Logistics
                </a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-tradserv-accent transition-colors">
                  Compliance & Trade Controls
                </a>
              </li>
              <li>
                <a href="#bpo" className="hover:text-tradserv-accent transition-colors">
                  BPO Finance, Operations, Consulting
                </a>
              </li>
              <li>
                <a href="#bpo" className="hover:text-tradserv-accent transition-colors">
                  ESG, Tax & Duties
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-tradserv-gray text-sm">
              <li>
                <a href="#home" className="hover:text-tradserv-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-tradserv-accent transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-tradserv-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-tradserv-accent transition-colors">
                  Career
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-tradserv-accent transition-colors">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-tradserv-gray text-sm">
              <li>
                <a href="#" className="hover:text-tradserv-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-tradserv-accent transition-colors">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-tradserv-light-blue pt-8">
          <p className="text-tradserv-gray text-sm text-center">
            &copy; {currentYear} <span className="text-orange-500 font-semibold">tradserv</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
