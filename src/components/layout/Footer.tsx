import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin, FiFacebook } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import services from "@/data/services.json";
import { PHONE_NUMBER, EMAIL_ADDRESS, FACEBOOK_URL, whatsappLink } from "@/utils/formatters";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-secondary text-white">
      <div className="container max-w-7xl py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="font-display text-lg font-bold tracking-tight">
              TOFINA <span className="text-primary">SPARKLE</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Premium residential and commercial cleaning across Mombasa — precise, reliable,
              and finished to a standard you can feel.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-primary hover:text-primary"
              >
                <FiFacebook size={16} />
              </a>
              <a
                href={whatsappLink("Hello Tofina Sparkle Solutions, I'd like to enquire about a cleaning service.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-success hover:text-success"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">Quick Links</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
              <li><Link to="/testimonials" className="hover:text-white">Testimonials</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">Services</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="hover:text-white">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2"><FiMapPin className="mt-0.5 shrink-0" size={15} /> Mombasa, Kenya</li>
              <li className="flex items-center gap-2"><FiPhone size={15} /> <a href={`tel:${PHONE_NUMBER}`} className="hover:text-white">{PHONE_NUMBER}</a></li>
              <li className="flex items-center gap-2"><FiMail size={15} /> <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-white">{EMAIL_ADDRESS}</a></li>
            </ul>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/40">Business Hours</p>
            <p className="mt-2 text-sm text-white/70">Mon – Sat: 7:00 AM – 7:00 PM</p>
            <p className="text-sm text-white/70">Sunday: Emergency callouts only</p>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 p-6 md:flex md:items-center md:justify-between">
          <div>
            <p className="font-display text-base font-semibold">Get cleaning tips & seasonal offers</p>
            <p className="mt-1 text-sm text-white/60">One email a month. No spam, ever.</p>
          </div>
          {subscribed ? (
            <p className="mt-4 text-sm font-medium text-success md:mt-0">You're subscribed — thank you.</p>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-4 flex gap-2 md:mt-0">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-56 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container max-w-7xl flex flex-col items-center justify-between gap-3 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} Tofina Sparkle Solutions. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
