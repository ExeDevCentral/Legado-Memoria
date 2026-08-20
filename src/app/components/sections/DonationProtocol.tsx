import { FileCheck, Shield, Users, Landmark, ArrowRight, CheckCircle2 } from 'lucide-react';

export function DonationProtocol() {
  const steps = [
    {
      number: '01',
      title: 'Revisión Curatorial & Solicitud Formal',
      description: 'Directores de museos, conservadores o investigadores acreditados solicitan el expediente técnico de las piezas de su interés para su evaluación por el comité de adquisiciones institucionales.',
    },
    {
      number: '02',
      title: 'Inspección Física en Gabinete Privado',
      description: 'Se coordina una visita privada en Santiago para la inspección directa del estado de conservación, autentificación de filigranas, sellos y estado de encuadernaciones u óleos.',
    },
    {
      number: '03',
      title: 'Protocolo Notarial de Donación o Comodato',
      description: 'Formalización legal mediante escritura pública de donación modal o comodato de largo plazo, estableciendo las condiciones de preservación, acceso público y crédito museológico correspondiente.',
    },
    {
      number: '04',
      title: 'Traspaso & Exhibición Pública Permanente',
      description: 'Entrega solemne de las piezas con traslado en embalajes climatizados de conservación patrimonial para su incorporación al catálogo nacional y salas de exhibición.',
    },
  ];

  return (
    <section id="donacion" className="py-16 md:py-24 bg-[#F4EFE6] border-b border-[#9E7B3B]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-cinzel text-xs font-bold tracking-widest text-[#856428] uppercase block mb-2">
            Marco Institucional
          </span>
          <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-[#1C1917] mb-4">
            Protocolo de Donación para Museos
          </h2>
          <p className="text-lg font-serif text-[#57534E]">
            Procedimiento formal y transparente para la vinculación con instituciones culturales del Estado, fundaciones patrimoniales y universidades de Chile.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#FFFFFF] p-8 rounded-xl border border-[#9E7B3B]/25 shadow-xs hover:border-[#9E7B3B] transition-all flex gap-6"
            >
              <div className="font-cinzel text-3xl font-bold text-[#856428] shrink-0">
                {step.number}
              </div>
              <div>
                <h3 className="font-cinzel text-lg font-bold text-[#1C1917] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm font-serif text-[#57534E] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Guarantee Callout */}
        <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-xl border-2 border-[#9E7B3B]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-[#9E7B3B] text-white shrink-0">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-cinzel text-base font-bold text-[#1C1917] mb-1">
                ¿Representa usted a una institución cultural, museo o universidad?
              </h4>
              <p className="text-sm font-serif text-[#57534E]">
                Le invitamos a ponerse en contacto directo para coordinar la revisión del inventario completo y agendar una reunión privada de trabajo.
              </p>
            </div>
          </div>
          <a
            href="#contacto"
            className="shrink-0 px-6 py-3 bg-[#1C1917] text-white hover:bg-[#6D2128] rounded font-cinzel font-semibold text-xs tracking-wider transition-colors shadow-xs"
          >
            Coordinar Contacto
          </a>
        </div>
      </div>
    </section>
  );
}
