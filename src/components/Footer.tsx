import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 bg-[url('/images/footer.dbe7db48d54962232591.jpg')]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Logo */}
        <div className="mb-12">
          <Image
            src="/images/logo.68f5b8493efb88f7cd65756bf67a1f5b.svg"
            alt="Supreme Group Logo"
            width={148}
            height={44}
            priority
          />
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Applications */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-6">APPLICATIONS</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Apparel
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Automotive
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Filtration
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Customised Nonwoven
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-6">COMPANY</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Global Competency
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Innovation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  ESG Impact
                </a>
              </li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-6">MORE</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-6">FOLLOW US</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600">
          <p className="mb-4 md:mb-0">©2024. All Rights Reserved.</p>
          <p>Supreme House, 110, 16th Road, Chembur, Mumbai - 400071</p>
        </div>
      </div>
    </footer>
  )
} 