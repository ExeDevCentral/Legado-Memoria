import { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from './product-grid';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  phoneNumber: string;
}

export function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  phoneNumber
}: CartDrawerProps) {
  const [name, setName] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'envio' | 'retiro'>('envio');

  const total = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    let message = `¡Hola! Quiero hacer este pedido:\n\n`;

    cartItems.forEach((item) => {
      message += `${item.quantity}x ${item.product.name} - $${item.product.price.toLocaleString('es-CL')}\n`;
    });

    message += `\nTotal: $${total.toLocaleString('es-CL')}\n\n`;
    message += `Cliente: ${name || 'No especificado'}\n`;
    message += `Método: ${deliveryMethod === 'envio' ? 'Envío a domicilio' : 'Retiro en Showroom'}\n\n`;
    message += `¿Me confirmás disponibilidad y forma de pago?`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-50 cursor-pointer"
          />

          {/* Drawer side panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-[480px] bg-[var(--vintage-cream)] shadow-2xl z-50 flex flex-col justify-between border-l border-[var(--vintage-bronze)]/30"
          >
            {/* Header */}
            <div className="p-6 border-b border-[var(--vintage-bronze)]/20 flex items-center justify-between bg-[var(--vintage-dark)] text-[var(--vintage-cream)]">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-medium">Bolsa de Compras</h3>
                <span className="bg-[var(--vintage-gold)] text-[var(--vintage-dark)] text-xs px-2 py-0.5 rounded-full font-bold">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-[var(--vintage-cream)]/10 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6 text-[var(--vintage-cream)]" />
              </button>
            </div>

            {/* Cart Items list */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-[var(--vintage-metal)] text-lg">Tu bolsa de compras está vacía.</p>
                  <button
                    onClick={onClose}
                    className="mt-4 px-6 py-2.5 bg-[var(--vintage-dark)] text-[var(--vintage-cream)] rounded hover:bg-[var(--vintage-gold)] hover:text-[var(--vintage-dark)] transition-colors cursor-pointer text-sm font-medium"
                  >
                    Ver Catálogo
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 pb-4 border-b border-[var(--vintage-bronze)]/10"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded bg-neutral-100 border border-[var(--vintage-bronze)]/10"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="text-base font-medium text-[var(--vintage-dark)] line-clamp-1">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="text-[var(--vintage-metal)] hover:text-red-600 transition-colors p-1 cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-[var(--vintage-bronze)] font-typewriter mt-0.5">
                          {item.product.category}
                        </p>
                      </div>

                      <div className="flex justify-between items-end mt-2">
                        <div className="flex items-center border border-[var(--vintage-bronze)]/30 rounded bg-white">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="p-1.5 text-[var(--vintage-dark)] hover:bg-neutral-100 disabled:opacity-30 cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 text-sm font-medium text-[var(--vintage-dark)] font-typewriter">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            disabled={item.quantity >= item.product.stock}
                            className="p-1.5 text-[var(--vintage-dark)] hover:bg-neutral-100 disabled:opacity-30 cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <span className="text-sm font-semibold text-[var(--vintage-dark)] font-typewriter">
                          ${(item.product.price * item.quantity).toLocaleString('es-CL')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {cartItems.length > 0 && (
              <div className="p-6 bg-[var(--vintage-paper)] border-t border-[var(--vintage-bronze)]/20 space-y-4">
                <div className="flex justify-between text-lg font-semibold text-[var(--vintage-dark)]">
                  <span>Total estimado:</span>
                  <span className="font-typewriter">${total.toLocaleString('es-CL')}</span>
                </div>

                <form onSubmit={handleCheckout} className="space-y-3 pt-2">
                  <div>
                    <label htmlFor="client-name" className="block text-xs font-semibold text-[var(--vintage-metal)] mb-1 uppercase tracking-wider">
                      Tu Nombre
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      placeholder="Ej. Constanza Silva"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[var(--vintage-bronze)]/30 rounded focus:border-[var(--vintage-gold)] focus:outline-none text-[var(--vintage-dark)] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--vintage-metal)] mb-1 uppercase tracking-wider">
                      Método de Entrega
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setDeliveryMethod('envio')}
                        className={`py-2 text-xs rounded border transition-all cursor-pointer ${
                          deliveryMethod === 'envio'
                            ? 'bg-[var(--vintage-dark)] text-[var(--vintage-cream)] border-transparent'
                            : 'bg-white text-[var(--vintage-dark)] border-[var(--vintage-bronze)]/30'
                        }`}
                      >
                        Envío a Domicilio
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeliveryMethod('retiro')}
                        className={`py-2 text-xs rounded border transition-all cursor-pointer ${
                          deliveryMethod === 'retiro'
                            ? 'bg-[var(--vintage-dark)] text-[var(--vintage-cream)] border-transparent'
                            : 'bg-white text-[var(--vintage-dark)] border-[var(--vintage-bronze)]/30'
                        }`}
                      >
                        Retiro en Showroom
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded font-medium flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-5 h-5" fill="currentColor" />
                    <span>Hacer Pedido por WhatsApp</span>
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
