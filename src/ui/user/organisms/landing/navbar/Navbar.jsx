import { navItems } from "@/config/constant/navItems.data"
import Logo from "@/ui/user/atoms/Logo"
import { ArrowUpRightIcon, Menu } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Sidebar from "./Sidebar"

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setIsSidebarOpen(false)
  }, [pathname])

  return (
    <>
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden "
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href

              return (
                <Link
                  key={label}
                  to={href}
                  className={`relative font-medium transition-colors
                  ${isActive ? "text-[#3271B1]" : "text-gray-700 hover:text-blue-900"}
                  `}
                >
                  {label}

                 
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Link
              to="/dealer"
              className="flex items-center gap-2 font-medium text-gray-700 hover:text-blue-900 group"
            >
              Become an Essinox Dealer
              <ArrowUpRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu */}
          <button
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </nav>

      <Sidebar isSidebarOpen={isSidebarOpen} activePath={pathname} />

      {/* Spacer */}
      <div className="h-44" />
    </>
  )
}
