/**
 * Construye una URL de WhatsApp para abrir una conversación con un mensaje predefinido.
 *
 * @param phone - Número de teléfono sin `+` ni espacios (ej. "56954095465")
 * @param message - Texto del mensaje en español, sin encodear. Si está vacío, se usa un mensaje genérico de fallback.
 * @returns URL con formato `https://wa.me/{phone}?text={encodedMessage}`
 */
export function buildWhatsAppUrl(phone: string, message: string): string {
  const fallback = 'Hola, me gustaría obtener más información.';
  const encodedMessage = encodeURIComponent(message.trim() || fallback);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}
