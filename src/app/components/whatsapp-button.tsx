import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { useCallback } from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export function WhatsAppButton({ phoneNumber, message = "¡Hola! Estoy interesado en conocer más sobre sus joyas exclusivas y antigüedades." }: WhatsAppButtonProps) {
  const handleClick = useCallback(() => {
    confetti({
      particleCount: 20,
      spread: 40,
      origin: { y: 0.8, x: 0.9 },
      colors: ['#c9a961', '#b89968', '#2c2416'],
    });
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
  }, [phoneNumber, message]);

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 group cursor-pointer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
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
      <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors flex items-center gap-2">
        <MessageCircle className="w-6 h-6" fill="currentColor" />
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-3 whitespace-nowrap bg-[var(--vintage-dark)] text-[var(--vintage-cream)] px-4 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block"
        >
          <span className="text-sm font-typewriter">¿Necesitas ayuda?</span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-[var(--vintage-dark)]" />
        </motion.div>
      </div>
    </motion.button>
  );
}
