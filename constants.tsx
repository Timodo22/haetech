import { Droplets, Wrench, Settings, Truck, Wind, Disc, Zap } from 'lucide-react';

// Afbeelding imports
import img1152 from './assets/1152.jpg';
import img160 from './assets/160.jpg';
import img895 from './assets/895.jpg';
import img32 from './assets/32.webp';
import img800 from './assets/800.webp';
import img1200 from './assets/1200.webp';

export const COMPANY_INFO = {
  name: "Haetech",
  fullName: "Haetech Carwash & Reiniging",
  address: "Molenstraat 12",
  zipCity: "5502AR Veldhoven",
  phone: "+316 21886249",
  cleanPhone: "31621886249", // For whatsapp link
  email: "info@haetech.nl",
  copyrightYear: "2026",
};

export const SERVICES_CARWASH = [
  { text: "Carwash installaties (doe-het-zelf wasboxen)", icon: <Truck className="w-5 h-5" /> },
  { text: "Wasplaatsen aanleg & onderhoud", icon: <Droplets className="w-5 h-5" /> },
  { text: "Voorwasplaatsen", icon: <Settings className="w-5 h-5" /> },
];

export const SERVICES_CLEANING = [
  { text: "Hogedrukreinigers & Stoomcleaners", icon: <Zap className="w-5 h-5" /> },
  { text: "Warm en koud water reinigers", icon: <Droplets className="w-5 h-5" /> },
  { text: "Hoge en lage drukpompen", icon: <Settings className="w-5 h-5" /> },
  { text: "Waterbehandeling & Osmose", icon: <Droplets className="w-5 h-5" /> },
  { text: "Stofzuigerinstallaties", icon: <Wind className="w-5 h-5" /> },
];

export const CATALOG_PRODUCTS = [
  {
    id: "k-1152-tst",
    name: "Kränzle K 1152 TST",
    category: "Koudwater Hogedruk",
    shortDesc: "De absolute bestseller voor semiprofessioneel gebruik.",
    description: "De Kränzle K 1152 TST is de opvolger van de legendarische K 1151 TST. Deze hogedrukreiniger staat bekend om zijn robuustheid, Roto-Mold chassis en geïntegreerde slangtrommel. Ideaal voor veeleisende particulieren en professionals.",
    image: img1152,
    features: [
      "Roto-Mold onderstel uit één stuk",
      "Geïntegreerde slangtrommel (15m)",
      "Totaal-stop systeem",
      "Vuilfrees en Vario-Jet lans",
      "Handig opbergsysteem"
    ],
    specs: {
      "Werkdruk": "30-130 bar",
      "Wateropbrengst": "10 l/min (600 l/u)",
      "Motortoerental": "2800 t/min",
      "Aansluitwaarde": "230V / 12A",
      "Gewicht": "31.5 kg"
    }
  },
  {
    id: "profi-160-tst",
    name: "Kränzle Profi 160 TST",
    category: "Koudwater Hogedruk",
    shortDesc: "Continue inzetbaarheid voor zwaar industrieel gebruik.",
    description: "De Profi-serie is ontwikkeld voor continu industrieel gebruik. Belangrijke onderdelen zoals de drijfstangen en pomp zijn overgedimensioneerd voor een extreem lange levensduur. Voorzien van een geïntegreerd waterreservoir.",
    image: img160,
    features: [
      "Geïntegreerd waterreservoir",
      "Roto-Mold chassis",
      "Slangtrommel (15m staalversterkt)",
      "Totaal-stop systeem",
      "Messing pompkop"
    ],
    specs: {
      "Werkdruk": "30-140 bar",
      "Wateropbrengst": "11 l/min (660 l/u)",
      "Motortoerental": "1400 t/min",
      "Aansluitwaarde": "230V / 14.3A",
      "Gewicht": "45 kg"
    }
  },
  {
    id: "therm-895-1",
    name: "Kränzle Therm 895-1",
    category: "Warmwater Therm",
    shortDesc: "Krachtige warmwaterreiniger met hoge capaciteit.",
    description: "De Kränzle Therm-serie combineert bewezen techniek met een modern design en innovatieve verbrandingstechnologie. Uitermate geschikt voor het verwijderen van vetten, oliën en hardnekkig vuil in de landbouw of automotive sector.",
    image: img895,
    features: [
      "Optische vlambewaking",
      "Digitaal bedieningspaneel",
      "Totaal-stop systeem met vertraagde motoruitschakeling",
      "Viervoudig veiligheidssysteem",
      "Instelbare branderdrukk"
    ],
    specs: {
      "Werkdruk": "30-195 bar",
      "Wateropbrengst": "14.9 l/min",
      "Temperatuur": "12 - 86 °C",
      "Stoomtemperatuur": "max. 155 °C",
      "Gewicht": "223 kg"
    }
  },
  {
    id: "ventos-32",
    name: "Kränzle Ventos 32 L/PC",
    category: "Stofzuigers",
    shortDesc: "Nat- en droogzuiger voor de werkplaats.",
    description: "De Ventos 32 L/PC is een veelzijdige alleskunner. Perfect voor het zuigen van vloeistoffen en droog stof in werkplaatsen, garages en op de bouwplaats. Voorzien van automatische filterreiniging.",
    image: img32,
    features: [
      "Push-Clean filterreiniging",
      "Automatische inschakeling bij elektrisch gereedschap",
      "Nat en droog zuigen",
      "30 liter reservoir",
      "Groot bereik"
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
    description: "De Kränzle Colly 800 maakt vegen eenvoudig. Met zijn dubbele zijborstels reinigt hij snel en efficiënt opritten, terrassen, en bedrijfshallen. Geen stroom nodig, werkt puur mechanisch en licht.",
    image: img800,
    features: [
      "Dubbele zijborstels",
      "Opklapbare duwbeugel",
      "Groot vuilreservoir",
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
  },
  {
    id: "quadro-1200-tst",
    name: "Kränzle Quadro 1200 TST",
    category: "Koudwater Hogedruk",
    shortDesc: "Topklasse koudwaterreiniger met extreem vermogen.",
    description: "De Quadro-serie combineert kracht met stabiliteit. Door het onderstel met 4 wielen is deze machine zeer stabiel en makkelijk verrijdbaar op ruw terrein. Een krachtpatser voor de zware industrie.",
    image: img1200,
    features: [
      "Zeer stabiel 4-wiel onderstel",
      "Grote RVS manometer",
      "Parkeerrem",
      "Ingebouwde watertank",
      "Stootbeugel"
    ],
    specs: {
      "Werkdruk": "30-180 bar",
      "Wateropbrengst": "19 l/min",
      "Motortoerental": "1400 t/min",
      "Aansluitwaarde": "400V / 12A (Krachtstroom)",
      "Gewicht": "89 kg"
    }
  }
];

export const KRANZLE_CATEGORIES = CATALOG_PRODUCTS;