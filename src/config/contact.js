const defaultMessage =
  "Olá! Vim pelo site da Game Zero e gostaria de tirar uma dúvida.";

const whatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER ?? "").replace(
  /\D/g,
  "",
);

export const CONTACT = {
  instagramHandle: "@lojagamezero",
  instagramUrl: "https://www.instagram.com/lojagamezero/",
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`,
};
