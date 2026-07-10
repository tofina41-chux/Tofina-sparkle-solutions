import { AnimatePresence, motion } from "framer-motion";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Link } from "react-router-dom";

export default function CookieConsent() {
  const [accepted, setAccepted] = useLocalStorage("tofina-cookie-consent", false);

  return (
    <AnimatePresence>
      {!accepted && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-accent bg-white/95 backdrop-blur px-6 py-4 shadow-elevated"
        >
          <div className="container max-w-7xl flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <p className="text-sm text-secondary/70">
              We use cookies to improve your experience on this site. Read our{" "}
              <Link to="/privacy-policy" className="text-primary underline underline-offset-2">
                Privacy Policy
              </Link>{" "}
              to learn more.
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                onClick={() => setAccepted(true)}
                className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
