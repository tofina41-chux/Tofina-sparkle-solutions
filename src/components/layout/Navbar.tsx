import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown, FiPhone } from "react-icons/fi";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";
import services from "@/data/services.json";
import { PHONE_NUMBER } from "@/utils/formatters";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services", mega: true },
  { label: "Gallery", to: "/gallery" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const scrolled = useScrollPosition(40);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const solid = scrolled || !isHome || mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          solid ? "bg-white/95 backdrop-blur shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container max-w-7xl flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
            <span
              className={`font-display text-lg font-bold tracking-tight transition-colors ${
                solid ? "text-secondary" : "text-white"
              }`}
            >
              TOFINA <span className="text-primary">SPARKLE</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) =>
              link.mega ? (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center gap-1 text-sm font-medium transition-colors ${
                        solid ? "text-secondary hover:text-primary" : "text-white/90 hover:text-white"
                      } ${isActive ? (solid ? "text-primary" : "text-white") : ""}`
                    }
                  >
                    {link.label}
                    <FiChevronDown size={14} />
                  </NavLink>
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-4"
                      >
                        <div className="grid grid-cols-2 gap-1 rounded-2xl border border-accent bg-white p-4 shadow-elevated">
                          {services.map((s) => (
                            <Link
                              key={s.slug}
                              to={`/services/${s.slug}`}
                              className="rounded-xl p-3 transition-colors hover:bg-accent/40"
                            >
                              <p className="text-sm font-semibold text-secondary">{s.title}</p>
                              <p className="mt-1 text-xs text-secondary/60 line-clamp-1">{s.summary}</p>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${
                      solid ? "text-secondary hover:text-primary" : "text-white/90 hover:text-white"
                    } ${isActive ? (solid ? "text-primary" : "text-white") : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                solid ? "text-secondary" : "text-white"
              }`}
            >
              <FiPhone size={15} /> {PHONE_NUMBER}
            </a>
            <Button to="/request-quote" size="sm">
              Request a Quote
            </Button>
          </div>

          <button
            className={`lg:hidden ${solid ? "text-secondary" : "text-white"}`}
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} links={NAV_LINKS} />
    </>
  );
}
