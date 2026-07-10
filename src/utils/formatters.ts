export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export const WHATSAPP_NUMBER = "254759154533";
export const PHONE_NUMBER = "0759154533";
export const EMAIL_ADDRESS = "cwafula2026@gmail.com";
export const FACEBOOK_URL = "https://www.facebook.com/share/1BL6AsdScg/";

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
