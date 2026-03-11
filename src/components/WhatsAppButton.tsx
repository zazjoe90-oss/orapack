import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "212661440404"; // Example number
  const message = "Bonjour ORA PACK, je souhaite avoir plus d'informations sur vos machines.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-white text-brand-black px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-black/5">
        Besoin d'aide ? Discutons !
      </span>
    </motion.a>
  );
}
