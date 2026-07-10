import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import SEO from "@/components/common/SEO";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/contact/ContactForm";
import MapEmbed from "@/components/contact/MapEmbed";
import { PHONE_NUMBER, EMAIL_ADDRESS, whatsappLink } from "@/utils/formatters";

const DETAILS = [
  { icon: FiPhone, label: "Phone", value: PHONE_NUMBER, href: `tel:${PHONE_NUMBER}` },
  { icon: FiMail, label: "Email", value: EMAIL_ADDRESS, href: `mailto:${EMAIL_ADDRESS}` },
  { icon: FaWhatsapp, label: "WhatsApp", value: "Chat with us", href: whatsappLink("Hello Tofina Sparkle Solutions, I have a question.") },
  { icon: FiMapPin, label: "Location", value: "Mombasa, Kenya", href: undefined },
];

export default function Contact() {
  return (
    <>
      <SEO title="Contact Us" description="Get in touch with Tofina Sparkle Solutions by phone, WhatsApp, email, or our contact form." path="/contact" />
      <section className="bg-secondary pt-40 pb-16">
        <Container>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="eyebrow text-white/60">Contact</p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-white md:text-5xl">Let's talk about your space</h1>
          </motion.div>
        </Container>
      </section>
      <Section tone="light" className="pt-14">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DETAILS.map((d) =>
              d.href ? (
                <a
                  key={d.label}
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-start gap-3 rounded-2xl border border-accent bg-white p-6 shadow-card transition-colors hover:border-primary/30"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <d.icon size={17} />
                  </div>
                  <div>
                    <p className="text-xs text-secondary/50">{d.label}</p>
                    <p className="mt-1 text-sm font-semibold text-secondary">{d.value}</p>
                  </div>
                </a>
              ) : (
                <div
                  key={d.label}
                  className="flex flex-col items-start gap-3 rounded-2xl border border-accent bg-white p-6 shadow-card"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <d.icon size={17} />
                  </div>
                  <div>
                    <p className="text-xs text-secondary/50">{d.label}</p>
                    <p className="mt-1 text-sm font-semibold text-secondary">{d.value}</p>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <ContactForm />
            <div className="flex flex-col gap-6">
              <MapEmbed />
              <div className="flex items-center gap-3 rounded-2xl border border-accent bg-white p-6 shadow-card">
                <FiClock className="text-primary" size={20} />
                <div>
                  <p className="text-sm font-semibold text-secondary">Business Hours</p>
                  <p className="text-xs text-secondary/60">Mon – Sat: 7:00 AM – 7:00 PM · Sunday: Emergency callouts only</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
