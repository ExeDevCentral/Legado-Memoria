import { ArchiveNavbar } from './components/sections/ArchiveNavbar';
import { ArchiveHero } from './components/sections/ArchiveHero';
import { InteractiveVitrine } from './components/sections/InteractiveVitrine';
import { ArchiveCatalog } from './components/sections/ArchiveCatalog';
import { HistoricalTimeline } from './components/sections/HistoricalTimeline';
import { CuratorialPhilosophy } from './components/sections/CuratorialPhilosophy';
import { DonationProtocol } from './components/sections/DonationProtocol';
import { InstitutionalContact } from './components/sections/InstitutionalContact';
import { ArchiveFooter } from './components/sections/ArchiveFooter';
import { AccessibilityToolbar } from './components/ui/AccessibilityToolbar';
import { MuseumAmbient } from './components/effects/MuseumAmbient';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#1C1917] flex flex-col font-serif selection:bg-[#D4AF37]/30 selection:text-[#1C1917] relative">
      {/* Motas doradas de museo */}
      <MuseumAmbient />

      {/* Barra de accesibilidad para lectura senior */}
      <AccessibilityToolbar />

      {/* Cabecera institucional */}
      <ArchiveNavbar />

      {/* Contenido exclusivo del museo y archivo patrimonial */}
      <main className="flex-1">
        <ArchiveHero />

        <div id="vitrina">
          <InteractiveVitrine />
        </div>

        <ArchiveCatalog />

        <HistoricalTimeline />

        <CuratorialPhilosophy />

        <DonationProtocol />

        <InstitutionalContact />
      </main>

      {/* Pie de página */}
      <ArchiveFooter />
    </div>
  );
}
