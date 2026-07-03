import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export function WhatsAppButton({ phoneNumber, message = "¡Hola! Estoy interesado en conocer más sobre sus joyas exclusivas y antigüedades." }: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse Animation */}
      <motion.div
        className="absolute inset-0 bg-green-500 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Button */}
      <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors flex items-center gap-2">
        <MessageCircle className="w-6 h-6" fill="currentColor" />

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-3 whitespace-nowrap bg-[var(--vintage-dark)] text-[var(--vintage-cream)] px-4 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        >
          <span className="text-sm">¿Necesitas ayuda? Escríbenos</span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-[var(--vintage-dark)]" />
        </motion.div>
      </div>
    </motion.button>
  );
}
