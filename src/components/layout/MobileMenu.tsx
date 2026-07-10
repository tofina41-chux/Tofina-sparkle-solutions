import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Button from "@/components/ui/Button";

interface NavLinkItem {
  label: string;
  to: string;
  mega?: boolean;
}

export default function MobileMenu({
  open,
  onClose,
  links,
}: {
  open: boolean;
  onClose: () => void;
  links: NavLinkItem[];
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-[64px] left-0 right-0 z-40 overflow-hidden bg-white shadow-elevated lg:hidden"
        >
          <nav className="container max-w-7xl flex flex-col gap-1 py-6">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={onClose}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                    isActive ? "bg-primary/10 text-primary" : "text-secondary hover:bg-accent/40"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-4">
              <Button to="/request-quote" className="w-full" onClick={onClose}>
                Request a Quote
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
