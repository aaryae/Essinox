import { navItems } from "@/config/constant/navItems.data"
import { ArrowUpRightIcon, X } from "lucide-react"
import { Link } from "react-router-dom"

export default function Sidebar({ isOpen, activePath }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl
        transform transition-all duration-300 ease-out
        ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
      `}
    >
      {/* Close */}
      <button
        className="absolute top-4 right-4"
        aria-label="Close menu"
      >
        <X className="w-6 h-6 text-gray-700" />
      </button>

      <div className="pt-16 px-6">
        <nav className="space-y-2">
          {navItems.map(({ label, href }) => {
            const isActive = activePath === href

            return (
              <Link
                key={label}
                to={href}
                className={`block rounded-lg px-4 py-3 font-medium transition
                  ${isActive
                    ? "bg-blue-50 text-blue-900"
                    : "text-gray-700 hover:bg-gray-100 hover:text-blue-900"
                  }
                `}bo
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <div className="mt-10 border-t pt-6">
          <Link
            to="/dealer"
            className="flex items-center justify-between rounded-lg bg-blue-900 text-white px-4 py-3 hover:bg-blue-800 transition"
          >
            Become an Essinox Dealer
            <ArrowUpRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
