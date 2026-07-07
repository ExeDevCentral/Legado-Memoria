export function buildWhatsAppUrl(phone: string, message: string): string {
  const fallback = 'Hola, me gustaría obtener más información.';
  const encodedMessage = encodeURIComponent(message.trim() || fallback);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}
