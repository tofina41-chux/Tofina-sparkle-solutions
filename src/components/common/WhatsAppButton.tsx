import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "@/utils/formatters";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hello Tofina Sparkle Solutions, I'd like to enquire about a cleaning service.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-success text-white shadow-elevated transition-transform duration-300 hover:scale-105"
    >
      <FaWhatsapp size={26} />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-30" />
    </a>
  );
}
