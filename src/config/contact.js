const defaultMessage =
  "Olá! Vim pelo site da Game Zero e gostaria de tirar uma dúvida.";

const fallbackWhatsAppNumber = "555192042236";
const configuredNumber = (import.meta.env.VITE_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");
const whatsappNumber = configuredNumber || fallbackWhatsAppNumber;

export function createWhatsAppUrl(message = defaultMessage) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const CONTACT = {
  instagramHandle: "@lojagamezero",
  instagramUrl: "https://www.instagram.com/lojagamezero/",
  whatsappLabel: "(51) 9204-2236",
  whatsappUrl: createWhatsAppUrl(),
  hours: {
    weekdays: "10h30 às 18h",
    saturday: "10h30 às 17h",
  },
};
