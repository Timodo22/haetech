import { Droplets, Wrench, Settings, Truck, Wind, Disc, Zap } from 'lucide-react';

// --- AFBEELDINGEN ---
import img1152 from './assets/1152.jpg'; 
import img2160 from './assets/160.jpg'; 
import imgProfi from './assets/Profi160TST.jpg';       
import imgLX from './assets/LX-RP1600TST.jpg';         
import imgTherm from './assets/therm-RP_1400.jpg';     
import imgWSC from './assets/WSC-RP-1400TS.jpg';       
import img32 from './assets/32.webp';
import img800 from './assets/800.webp';

// --- PDF BROCHURES (Zorg dat je ze hernoemd hebt zoals in Stap 1!) ---
import pdf1154 from './assets/manual-k1154.pdf';
import pdf2160 from './assets/manual-k2160.pdf';
import pdfProfi from './assets/manual-profi-160.pdf';
import pdfLX from './assets/manual-lx-rp-1600.pdf';
import pdfTherm from './assets/manual-therm-rp-1400.pdf';
import pdfWSC from './assets/manual-wsc-rp-1400.pdf';


export const COMPANY_INFO = {
  name: "Haetech",
  fullName: "Haetech Carwash & Reiniging",
  address: "Molenstraat 12",
  zipCity: "5502AR Veldhoven",
  phone: "+316 21886249",
  cleanPhone: "31621886249",
  email: "info@haetech.nl",
  copyrightYear: "2026",
};

export const SERVICES_CARWASH = [
  { text: "Carwash installaties (doe-het-zelf wasboxen)", icon: <Truck className="w-5 h-5" /> },
  { text: "Wasplaatsen aanleg & onderhoud", icon: <Droplets className="w-5 h-5" /> },
  { text: "Voorwasplaatsen", icon: <Settings className="w-5 h-5" /> },
];

export const SERVICES_CLEANING = [
  { text: "Hogedrukreinigers (Koud & Warm)", icon: <Zap className="w-5 h-5" /> },
  { text: "Stationaire installaties", icon: <Settings className="w-5 h-5" /> },
  { text: "Hoge en lage drukpompen", icon: <Settings className="w-5 h-5" /> },
  { text: "Waterbehandeling & Osmose", icon: <Droplets className="w-5 h-5" /> },
  { text: "Stofzuigers & Veegmachines", icon: <Wind className="w-5 h-5" /> },
];

export const CATALOG_PRODUCTS = [
  {
    id: "k-1154-tst",
    name: "Kränzle K 1154 TST",
    category: "Koudwater Hogedruk",
    shortDesc: "De vernieuwde instapper: compact en krachtig.",
    description: "De Kränzle K 1154 TST is de compacte krachtpatser voor semiprofessioneel gebruik. Voorzien van het nieuwe snelkoppelsysteem en een Roto-Mold chassis uit één stuk.",
    image: img1152, 
    pdf: pdf1154, // PDF toegevoegd
    features: [
      "Snelkoppelsysteem D12",
      "Roto-Mold onderstel",
      "Geïntegreerde slangtrommel (15m)",
      "Total Stop systeem",
      "Lans met vuilfrees en vlakstraal"
    ],
    specs: {
      "Werkdruk": "30-140 bar (max 160)",
      "Wateropbrengst": "10 l/min (600 l/u)",
      "Motortoerental": "2.800 t/min",
      "Aansluitwaarde": "230V / 12.8A",
      "Gewicht": "33 kg"
    }
  },
  {
    id: "k-2160-tst",
    name: "Kränzle K 2160 TST",
    category: "Koudwater Hogedruk",
    shortDesc: "De robuuste middenklasser met laag toerental.",
    description: "De K 2160 TST blinkt uit door zijn langzaam draaiende motor (1400 t/min), wat zorgt voor minder slijtage en een lager geluidsniveau. Perfect voor regelmatig gebruik.",
    image: img2160, 
    pdf: pdf2160, // PDF toegevoegd
    features: [
      "Laag toerental motor (1400 t/min)",
      "Snelkoppelsysteem",
      "Roto-Mold chassis",
      "Slangtrommel (15m)",
      "Directe zeepaanzuiging"
    ],
    specs: {
      "Werkdruk": "30-140 bar (max 160)",
      "Wateropbrengst": "11 l/min (660 l/u)",
      "Motortoerental": "1.400 t/min",
      "Aansluitwaarde": "230V / 14A",
      "Gewicht": "40 kg"
    }
  },
  {
    id: "profi-160-tst",
    name: "Kränzle Profi 160 TST",
    category: "Koudwater Hogedruk",
    shortDesc: "Continue inzetbaarheid voor zwaar industrieel gebruik.",
    description: "De Profi-serie is ontwikkeld voor continu industrieel gebruik. Met overgedimensioneerde drijfstangen en een geïntegreerd waterreservoir om cavitatie te voorkomen.",
    image: imgProfi,
    pdf: pdfProfi, // PDF toegevoegd
    features: [
      "Geïntegreerd waterreservoir",
      "Snelkoppelsysteem",
      "Roto-Mold chassis",
      "Total-stop systeem",
      "Slangtrommel (15m)"
    ],
    specs: {
      "Werkdruk": "30-140 bar (max 160)",
      "Wateropbrengst": "11 l/min (660 l/u)",
      "Motortoerental": "1.400 t/min",
      "Aansluitwaarde": "230V / 14.3A",
      "Gewicht": "45 kg"
    }
  },
  {
    id: "lx-rp-1600-tst",
    name: "Kränzle LX-RP 1600 TST",
    category: "Koudwater Hogedruk",
    shortDesc: "Extreem debiet met krukaspomp technologie.",
    description: "De LX-RP serie combineert een zeer hoge wateropbrengst met de geavanceerde RP-krukaspomp. Ideaal voor de landbouw en zware industrie waar spoelkracht essentieel is.",
    image: imgLX,
    pdf: pdfLX, // PDF toegevoegd
    features: [
      "Krukaspomp met geïntegreerde bypass",
      "Hoge wateropbrengst (1600 l/u)",
      "Snelkoppelsysteem",
      "Slangtrommel (20m)",
      "Total Stop systeem"
    ],
    specs: {
      "Werkdruk": "30-150 bar (max 170)",
      "Wateropbrengst": "26.7 l/min (1600 l/u)",
      "Motortoerental": "1.400 t/min",
      "Aansluitwaarde": "400V / 14.3A (Krachtstroom)",
      "Gewicht": "94 kg"
    }
  },
  {
    id: "therm-rp-1400-tst",
    name: "Kränzle Therm-RP 1400 TST",
    category: "Warmwater Therm",
    shortDesc: "Topklasse warmwaterreiniger met krukaspomp.",
    description: "De Therm-RP serie is het neusje van de zalm op warmwatergebied. Voorzien van een nieuwe krukaspomp, optische vlambewaking en digitale thermostaat.",
    image: imgTherm,
    pdf: pdfTherm, // PDF toegevoegd
    features: [
      "Innovatieve Krukaspomp",
      "Optische vlambewaking",
      "Digitaal bedieningspaneel",
      "Slangtrommel (20m)",
      "Snelkoppelsysteem"
    ],
    specs: {
      "Werkdruk": "70-170 bar (max 190)",
      "Wateropbrengst": "23.3 l/min (1400 l/u)",
      "Motortoerental": "1.400 t/min",
      "Aansluitwaarde": "400V / 14.3A",
      "Gewicht": "218 kg"
    }
  },
  {
    id: "wsc-rp-1400-ts",
    name: "Kränzle WSC-RP 1400 TS",
    category: "Stationair",
    shortDesc: "Stationaire krachtpatser voor wandmontage.",
    description: "Deze stationaire koudwaterunit met krukaspomp is ideaal voor vaste wasplaatsen. Optioneel verkrijgbaar met een RVS behuizing voor maximale hygiëne en duurzaamheid.",
    image: imgWSC,
    pdf: pdfWSC, // PDF toegevoegd
    features: [
      "Krukaspomp technologie",
      "Stationaire wandmontage",
      "Total Stop Systeem",
      "Snelkoppelsysteem",
      "Optioneel: Inox behuizing"
    ],
    specs: {
      "Werkdruk": "30-170 bar (max 200)",
      "Wateropbrengst": "23.3 l/min (1400 l/u)",
      "Motortoerental": "1.400 t/min",
      "Aansluitwaarde": "400V / 14.3A",
      "Gewicht": "62-65 kg"
    }
  },
  {
    id: "ventos-32",
    name: "Kränzle Ventos 32 L/PC",
    category: "Stofzuigers",
    shortDesc: "Nat- en droogzuiger voor de werkplaats.",
    description: "De Ventos 32 L/PC is een veelzijdige alleskunner. Perfect voor het zuigen van vloeistoffen en droog stof in werkplaatsen, garages en op de bouwplaats. Voorzien van automatische filterreiniging.",
    image: img32,
    // Geen PDF beschikbaar
    features: [
      "Push-Clean filterreiniging",
      "Automatische inschakeling",
      "Nat en droog zuigen",
      "30 liter reservoir",
      "Stopcontact voor gereedschap"
    ],
    specs: {
      "Luchtverplaatsing": "4500 l/min",
      "Onderdruk": "250 mbar",
      "Reservoirinhoud": "30 liter",
      "Vermogen": "1200 W",
      "Gewicht": "15.5 kg"
    }
  },
  {
    id: "colly-800",
    name: "Kränzle Colly 800",
    category: "Veegmachines",
    shortDesc: "Manuele veegmachine voor grote oppervlakken.",
    description: "De Kränzle Colly 800 maakt vegen eenvoudig. Met zijn dubbele zijborstels reinigt hij snel en efficiënt opritten, terrassen, en bedrijfshallen. Geen stroom nodig.",
    image: img800,
    // Geen PDF beschikbaar
    features: [
      "Dubbele zijborstels",
      "Opklapbare duwbeugel",
      "Groot vuilreservoir (30L)",
      "Onderhoudsvrij",
      "Ergonomisch ontwerp"
    ],
    specs: {
      "Veegbreedte": "800 mm",
      "Oppervlaktecap.": "ca. 2000 m²/u",
      "Inhoud bak": "30 liter",
      "Aandrijving": "Manueel",
      "Gewicht": "19 kg"
    }
  }
];

export const KRANZLE_CATEGORIES = CATALOG_PRODUCTS;