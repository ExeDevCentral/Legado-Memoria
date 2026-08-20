import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Shield, Calendar, Landmark } from 'lucide-react';
import { INSTITUTIONAL_CONFIG } from '../../data/archiveData';

export function InstitutionalContact() {
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    email: '',
    phone: '',
    interest: 'libros',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#9E7B3B]/25">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-cinzel text-xs font-bold tracking-widest text-[#856428] uppercase block mb-2">
            Vía Institucional Directa
          </span>
          <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-[#1C1917] mb-4">
            Contacto &amp; Coordinación Curatorial
          </h2>
          <p className="text-lg font-serif text-[#57534E]">
            Canal de comunicación reservado para directores de museos, conservadores de archivos patrimoniales, investigadores y académicos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Phone & Formal Channels (Large Print for Seniors) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Phone Card */}
            <div className="bg-[#FFFFFF] p-8 rounded-xl border-2 border-[#9E7B3B] shadow-xs">
              <div className="flex items-center gap-3 text-[#6D2128] mb-3">
                <Phone className="w-6 h-6" />
                <span className="font-cinzel text-xs uppercase font-bold tracking-wider">
                  Comunicación Telefónica Directa
                </span>
              </div>
              <h3 className="font-cinzel text-xl font-bold text-[#1C1917] mb-2">
                Atención del Custodio
              </h3>
              <p className="text-sm font-serif text-[#57534E] mb-6">
                Para consultas inmediatas, coordinación de reuniones o visitas al gabinete patrimonial en Santiago:
              </p>

              <a
                href={`tel:${INSTITUTIONAL_CONFIG.phone}`}
                className="inline-flex items-center gap-3 px-6 py-4 bg-[#9E7B3B] hover:bg-[#856428] text-white rounded-lg font-cinzel font-bold text-lg sm:text-xl tracking-wide transition-all shadow-md hover:shadow-lg w-full justify-center"
              >
                <Phone className="w-5 h-5" />
                <span>{INSTITUTIONAL_CONFIG.phoneDisplay}</span>
              </a>

              <div className="mt-4 text-center">
                <span className="text-xs font-serif text-[#78716C]">
                  Horario de correspondencia: Lunes a Viernes, 10:00 a 18:00 hrs.
                </span>
              </div>
            </div>

            {/* Email & Location Card */}
            <div className="bg-[#FFFFFF] p-6 rounded-xl border border-[#EFE8DB] space-y-4 text-sm font-serif">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#856428] shrink-0 mt-0.5" />
                <div>
                  <span className="font-cinzel text-xs font-semibold text-[#1C1917] block">
                    Correo Institucional
                  </span>
                  <a
                    href={`mailto:${INSTITUTIONAL_CONFIG.email}`}
                    className="text-[#6D2128] hover:underline font-medium"
                  >
                    {INSTITUTIONAL_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#FAF7F2]">
                <MapPin className="w-5 h-5 text-[#856428] shrink-0 mt-0.5" />
                <div>
                  <span className="font-cinzel text-xs font-semibold text-[#1C1917] block">
                    Sede del Gabinete Privado
                  </span>
                  <span className="text-[#57534E]">
                    Santiago Centro, Región Metropolitana, Chile (Visitas previa acreditación curatorial)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#FAF7F2]">
                <Shield className="w-5 h-5 text-[#6D2128] shrink-0 mt-0.5" />
                <div>
                  <span className="font-cinzel text-xs font-semibold text-[#1C1917] block">
                    Resguardo Notarial
                  </span>
                  <span className="text-[#57534E] text-xs">
                    Inventario protocolizado ante Notaría Pública de Santiago.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Formal Inquiry Form */}
          <div className="lg:col-span-7 bg-[#FFFFFF] p-8 sm:p-10 rounded-xl border border-[#9E7B3B]/30 shadow-xs">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border-2 border-[#2E6F40] text-[#2E6F40] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-cinzel text-2xl font-bold text-[#1C1917]">
                  Solicitud Registrada con Éxito
                </h3>
                <p className="text-base font-serif text-[#57534E] max-w-md mx-auto leading-relaxed">
                  Agradecemos su interés institucional. Nos pondremos en contacto formal a la brevedad para coordinar la remisión de los antecedentes técnicos solicitados.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[#FAF7F2] hover:bg-[#EFE8DB] border border-[#9E7B3B]/40 rounded font-serif text-sm text-[#1C1917]"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-cinzel text-xl font-bold text-[#1C1917] mb-1">
                    Formulario de Consulta Institucional
                  </h3>
                  <p className="text-xs font-serif text-[#57534E]">
                    Complete sus antecedentes para solicitar fichas técnicas completas o agendar una reunión de gabinete.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-cinzel font-semibold text-[#1C1917] mb-1.5">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej: Dr. Francisco Edwards"
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#9E7B3B]/30 rounded text-sm font-serif text-[#1C1917] focus:outline-hidden focus:ring-2 focus:ring-[#9E7B3B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-cinzel font-semibold text-[#1C1917] mb-1.5">
                      Institución o Museo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      placeholder="Ej: Museo Histórico / Universidad"
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#9E7B3B]/30 rounded text-sm font-serif text-[#1C1917] focus:outline-hidden focus:ring-2 focus:ring-[#9E7B3B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-cinzel font-semibold text-[#1C1917] mb-1.5">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nombre@institucion.cl"
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#9E7B3B]/30 rounded text-sm font-serif text-[#1C1917] focus:outline-hidden focus:ring-2 focus:ring-[#9E7B3B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-cinzel font-semibold text-[#1C1917] mb-1.5">
                      Teléfono de Contacto *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+56 9 1234 5678"
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#9E7B3B]/30 rounded text-sm font-serif text-[#1C1917] focus:outline-hidden focus:ring-2 focus:ring-[#9E7B3B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-cinzel font-semibold text-[#1C1917] mb-1.5">
                    Área o Piezas de Mayor Interés
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#9E7B3B]/30 rounded text-sm font-serif text-[#1C1917] focus:outline-hidden focus:ring-2 focus:ring-[#9E7B3B]"
                  >
                    <option value="libros">Libros Raros &amp; Primeras Ediciones (Siglos XVII–XX)</option>
                    <option value="arte">Pintura &amp; Obras de Arte de Maestros Chilenos</option>
                    <option value="manuscritos">Manuscritos, Epistolarios &amp; Documentos de la República</option>
                    <option value="maquinaria">Maquinaria, Tipografía &amp; Mecanismos Históricos</option>
                    <option value="completo">Colección Completa / Coordinación de Donación General</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-cinzel font-semibold text-[#1C1917] mb-1.5">
                    Mensaje / Motivo de la Solicitud *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describa el propósito de la consulta (investigación académica, propuesta curatorial de comodato, donación o visita de inspección)..."
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#9E7B3B]/30 rounded text-sm font-serif text-[#1C1917] focus:outline-hidden focus:ring-2 focus:ring-[#9E7B3B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#1C1917] hover:bg-[#6D2128] text-white rounded-md font-cinzel font-semibold text-sm tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#9E7B3B]" />
                  <span>Enviar Solicitud Formal de Información</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
