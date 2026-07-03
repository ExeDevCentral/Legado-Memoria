import { CheckCircle2, AlertCircle, Sparkles, Star, Anchor } from 'lucide-react';
import { motion } from 'motion/react';

interface DiagnosisItem {
  title: string;
  description: string;
  severity: 'good' | 'warning' | 'repair';
}

interface DiagnosisSectionProps {
  hasImages: boolean;
}

export function DiagnosisSection({ hasImages }: DiagnosisSectionProps) {
  const mockDiagnosis: DiagnosisItem[] = [
    {
      title: 'Engaste y Garras de Seguridad',
      description: 'Las garras que sujetan la gema principal muestran desgaste leve. Se recomienda ajuste menor para evitar pérdidas.',
      severity: 'warning'
    },
    {
      title: 'Metal Noble y Pureza',
      description: 'Confirmada Plata de Ley 925 con una pátina de envejecimiento natural sumamente valiosa para coleccionistas.',
      severity: 'good'
    },
    {
      title: 'Sistema de Cierre y Eslabones',
      description: 'El resorte del broche principal presenta fatiga por uso. Recomendamos reemplazo del cierre por seguridad.',
      severity: 'repair'
    },
    {
      title: 'Gemas y Facetas',
      description: 'Las piedras preciosas no presentan fisuras ni rayaduras superficiales. Excelente conservación del brillo natural.',
      severity: 'good'
    },
    {
      title: 'Marca de Origen / Punzón',
      description: 'Punzón del orfebre legible en la parte interna. Auténtica pieza de diseño vintage de mediados del siglo XX.',
      severity: 'good'
    }
  ];

  if (!hasImages) {
    return (
      <div className="text-center py-16 px-4">
        <Sparkles className="w-12 h-12 mx-auto mb-4 text-[var(--vintage-bronze)] animate-pulse" />
        <h3 className="mb-2 text-[var(--vintage-dark)] text-xl font-medium">
          Tasación & Diagnóstico Online
        </h3>
        <p className="text-[var(--vintage-metal)] max-w-md mx-auto text-sm">
          Sube fotografías en alta definición de tu joya o antigüedad para que nuestros orfebres realicen un análisis preliminar de su estado, autenticidad y potencial de restauración.
        </p>
      </div>
    );
  }

  const getSeverityConfig = (severity: string) => {
    switch (severity) {
      case 'good':
        return {
          icon: CheckCircle2,
          color: 'text-green-800',
          bg: 'bg-green-50/70',
          border: 'border-green-200'
        };
      case 'warning':
        return {
          icon: AlertCircle,
          color: 'text-amber-800',
          bg: 'bg-amber-50/70',
          border: 'border-amber-200'
        };
      case 'repair':
        return {
          icon: Anchor,
          color: 'text-[var(--vintage-bronze)]',
          bg: 'bg-[var(--vintage-sepia)]/20',
          border: 'border-[var(--vintage-bronze)]/50'
        };
      default:
        return {
          icon: AlertCircle,
          color: 'text-[var(--vintage-metal)]',
          bg: 'bg-[var(--vintage-cream)]',
          border: 'border-[var(--vintage-bronze)]'
        };
    }
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h3 className="mb-2 text-[var(--vintage-dark)] text-2xl font-medium">
          Análisis de Tasación Preliminar
        </h3>
        <p className="text-[var(--vintage-metal)] text-sm">
          Basado en el análisis visual de las fotografías adjuntas
        </p>
      </div>

      <div className="space-y-4">
        {mockDiagnosis.map((item, index) => {
          const config = getSeverityConfig(item.severity);
          const Icon = config.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-5 rounded border ${config.border} ${config.bg}`}
            >
              <div className="flex items-start gap-4">
                <Icon className={`w-5 h-5 mt-1 flex-shrink-0 ${config.color}`} />
                <div className="flex-1">
                  <h4 className={`font-semibold mb-1 text-sm ${config.color}`}>
                    {item.title}
                  </h4>
                  <p className="text-xs text-[var(--vintage-dark)]/90 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 p-6 bg-[var(--vintage-dark)] text-[var(--vintage-cream)] rounded-lg border border-[var(--vintage-gold)]/20">
        <h4 className="mb-2 text-lg font-medium flex items-center gap-2">
          <Star className="w-5 h-5 text-[var(--vintage-gold)]" fill="currentColor" />
          Resumen de Restauración & Valor
        </h4>
        <p className="text-sm mb-4 text-[var(--vintage-sepia)] leading-relaxed">
          Tu pieza posee un alto valor histórico y estético. Requiere mantenimiento básico de limpieza ultrasónica, pulido y refuerzo de cierres para asegurar su conservación a largo plazo.
        </p>
        <div className="grid grid-cols-2 gap-4 text-xs border-t border-[var(--vintage-cream)]/10 pt-4 font-typewriter">
          <div>
            <span className="text-[var(--vintage-sepia)] block">Tiempo de Proceso:</span>
            <span className="text-sm font-semibold text-[var(--vintage-cream)]">5 - 7 días hábiles</span>
          </div>
          <div>
            <span className="text-[var(--vintage-sepia)] block">Cotización Estimada:</span>
            <span className="text-sm font-semibold text-[var(--vintage-cream)]">$45.000 - $75.000</span>
          </div>
        </div>
      </div>
    </div>
  );
}
