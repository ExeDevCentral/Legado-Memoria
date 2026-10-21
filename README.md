<div align="center">

# Legado • Memoria
### *Digital Cultural Heritage Archive, Museographic Cataloging & Archival Preservation Platform*

[![Vite 6](https://img.shields.io/badge/Vite-6.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![React 18](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.x_Strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-12.2-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)
[![Vitest](https://img.shields.io/badge/Vitest-Property_Testing-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<p align="center">
  <b>An archival-grade digital museum environment engineering high-fidelity artifact telemetry, conservation state taxonomy, interactive micro-optical inspection, and formal institutional donation protocol routing.</b>
</p>

---

</div>

## 1. Abstract & Curatorial Taxonomy

Cultural patrimony preservation demands digital environments capable of presenting fragile physical artifacts—rare illuminated manuscripts, classical paintings, Republican-era epistolary archives, colonial ceramics, and industrial mechanical artifacts—without fidelity loss or contextual flattening.

**Legado Memoria** establishes a web-native digital museum platform combining rigorous archival taxonomies with modern WebGL-accelerated rendering and property-based verification:
- **Curatorial Conservation Metrics:** Every archival node includes verified provenance, physical dimensions, material classification, conservation rating, and donor attribution.
- **Micro-Optical Inspection Viewport:** Non-destructive high-resolution pan-zoom inspection simulating physical magnifying loupes over rare manuscripts.
- **Formal Institutional Donation Protocol:** Structured workflows facilitating legal deaccession and donation routing to authenticated cultural institutions.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        ARCHIVAL INGESTION & DATASET                    │
│   [Historical Provenance Meta] ──► [Conservation Grade Assessment]     │
│   [High-DPI Photogrammetry]   ──► [Lossless Tile Cache Pipeline]       │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│               CURATORIAL ENGINE & TAXONOMY CLASSIFIER                  │
│    • Category Vectors: Epistolary, Numismatic, Classical, Mechanical  │
│    • Temporal Topology: Century / Epoch Chronological Interpolation   │
│    • Conservation Indices: Mint ➔ Restored ➔ Stabilized ➔ Degraded     │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
         ┌─────────────────────────┴─────────────────────────┐
         ▼                                                   ▼
┌──────────────────────────────────┐        ┌──────────────────────────────────┐
│      HIGH-FIDELITY VITRINE       │        │   INSTITUTIONAL TRANSFER PIPELINE│
│   Micro-optical Pan & Magnifier  │        │   Formal Donation Intake Protocol│
│   Hardware-accelerated Tilt & Grn│        │   Museum Archive Export Handlers │
└──────────────────────────────────┘        └──────────────────────────────────┘
```

---

## 2. Technical Architecture & Component Topology

### 2.1. Optical Inspection Subsystem
High-resolution plates are rendered with zero reflow:
- Dynamic lens magnification calculates coordinate deltas relative to client pointer vectors.
- Sub-pixel typography using classical serif pairings (`Cinzel`, `Cormorant Garamond`, `Libre Baskerville`) anchored by accessible UI primitives from Radix UI.

### 2.2. Property-Based Testing with Fast-Check
Archive sorting, temporal filtering, and conservation grade invariants are certified through generative property testing via `fast-check` and `vitest`:
$$\forall \mathcal{A} \in \text{ArtifactCorpus}, \quad \text{Filter}(\mathcal{A}, \text{Criteria}) \subseteq \mathcal{A} \quad \land \quad \text{Idempotent}(\text{Sort}(\mathcal{A}))$$

---

## 3. Technology Stack & Architectural Dependencies

| Layer | Technology | Specification / Architectural Utility |
| :--- | :--- | :--- |
| **Runtime & Build** | Vite 6 + Rollup | Instant HMR and tree-shaken static production bundles |
| **UI Framework** | React 18 | Strict functional components with memoized state transitions |
| **Typography & Theme** | Tailwind CSS v4 | CSS Variables design tokens and sub-pixel serif styling |
| **Interactive Physics** | Motion 12.2 | Gesture-driven physical cards and micro-optical magnification |
| **Primitives** | Radix UI | Accessible WAI-ARIA compliant dialogs, tabs, and tooltips |
| **Quality Assurance** | Vitest + Fast-Check | Generative property-based testing and DOM assertions |

---

## 4. Systems Directory Hierarchy

```text
Coleccion-Patrimonial/
├── public/                 # High-resolution photographic assets & metadata manifests
├── src/
│   ├── app/
│   │   ├── App.tsx         # Curatorial composition root & section orchestration
│   │   └── components/
│   │       ├── sections/   # Hero, Virtual Vitrine, Catalog, Timeline & Protocols
│   │       ├── effects/    # Film grain, particle systems, coordinate tilt handlers
│   │       └── ui/         # Radix UI primitives & accessible dialog wrappers
│   ├── data/
│   │   └── archiveData.ts  # Master archival catalog & conservation telemetry
│   ├── types/              # Domain interfaces & museum catalog schema definitions
│   └── utils/              # Temporal sort algorithms & query filter operators
└── guidelines/             # Curatorial guidelines & preservation criteria
```

---

## 5. Development Runtime & Operational Lifecycle

### Prerequisites
- **Node.js**: $\ge 18.x$ LTS
- **Package Manager**: `npm` $\ge 9.x$

### Installation & Initialization
```bash
# Clone the repository
git clone https://github.com/ExeDevCentral/Legado-Memoria.git
cd Legado-Memoria

# Install dependencies deterministically
npm install

# Launch local development server
npm run dev
```

### Static Analysis & Verification Suite
```bash
# Execute unit and property-based test harness
npm test

# Generate production distribution bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 6. License

Distributed under the **MIT License**. Created for non-profit cultural preservation and museum digitization.

<div align="center">
  <sub>Curated and preserved by <a href="https://github.com/ExeDevCentral">ExeDevCentral</a>.</sub>
</div>
