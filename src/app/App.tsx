import { ArchiveNavbar } from './components/sections/ArchiveNavbar';
import { ArchiveHero } from './components/sections/ArchiveHero';
import { ArchiveCatalog } from './components/sections/ArchiveCatalog';
import { HistoricalTimeline } from './components/sections/HistoricalTimeline';
import { CuratorialPhilosophy } from './components/sections/CuratorialPhilosophy';
import { DonationProtocol } from './components/sections/DonationProtocol';
import { InstitutionalContact } from './components/sections/InstitutionalContact';
import { ArchiveFooter } from './components/sections/ArchiveFooter';
import { AccessibilityToolbar } from './components/ui/AccessibilityToolbar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1917] flex flex-col font-serif selection:bg-[#9E7B3B]/20 selection:text-[#1C1917]">
      {/* Senior Accessibility Floating Controls (+80 años) */}
      <AccessibilityToolbar />

      {/* Sovereign Archival Header */}
      <ArchiveNavbar />

      {/* Main Exhibition Sections */}
      <main className="flex-1">
        {/* 1. Hero & Institutional Mission */}
        <ArchiveHero />

        {/* 2. Full Museum Catalog & Curatorial Records */}
        <ArchiveCatalog />

        {/* 3. Historical Timeline across 4 centuries */}
        <HistoricalTimeline />

        {/* 4. Curatorial Philosophy & Civic Legacy */}
        <CuratorialPhilosophy />

        {/* 5. Formal Donation Protocol for Museums */}
        <DonationProtocol />

        {/* 6. Direct Institutional Contact & Inquiry */}
        <InstitutionalContact />
      </main>

      {/* Heritage Footer */}
      <ArchiveFooter />
    </div>
  );
}
