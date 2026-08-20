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
      {/* Golden Museum Dust Motes & Gallery Atmosphere */}
      <MuseumAmbient />

      {/* Senior Accessibility Floating Controls (+80 años) */}
      <AccessibilityToolbar />

      {/* Sovereign Archival Header */}
      <ArchiveNavbar />

      {/* Main Exhibition Experience */}
      <main className="flex-1">
        {/* 1. Atmospheric Hero with 3D Floating Relics */}
        <ArchiveHero />

        {/* 2. Interactive 3D Vitrine with Curatorial Loupe & Lighting Switcher */}
        <div id="vitrina">
          <InteractiveVitrine />
        </div>

        {/* 3. Full Museum Catalog & Curatorial Records */}
        <ArchiveCatalog />

        {/* 4. Historical Timeline across 4 centuries */}
        <HistoricalTimeline />

        {/* 5. Curatorial Philosophy & Civic Legacy */}
        <CuratorialPhilosophy />

        {/* 6. Formal Donation Protocol for Museums */}
        <DonationProtocol />

        {/* 7. Direct Institutional Contact & Inquiry */}
        <InstitutionalContact />
      </main>

      {/* Heritage Footer */}
      <ArchiveFooter />
    </div>
  );
}
