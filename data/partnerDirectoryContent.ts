import { LucideIcon, Code, Gift, Shield, Cpu, Zap, Globe, Server, Database, Layout } from 'lucide-react';

export interface PartnerProfile {
  id: string;
  name: string;
  slug: string;
  logo: string; // URL placeholder
  type: 'implementation' | 'referral' | 'technology';
  tier: 'platinum' | 'gold' | 'silver' | 'registered' | 'official' | 'applying'; // Added official/applying
  industries: string[];
  location: string;
  description: string;
  website: string;
  certified: boolean;
  partnershipStatus?: string; // e.g. "Official Technology Partner", "Integration Partner"
}

export const partnerDirectoryData: PartnerProfile[] = [
  // --- TECHNOLOGY PARTNERS (PRINCIPALS) ---
  {
    id: 'tech-1',
    name: "Frappe Technologies",
    slug: "frappe",
    logo: "https://frappe.io/files/Frappe-Framework-Logo.png", // Placeholder, better use local asset if available
    type: "technology",
    tier: "official",
    industries: ["Technology", "Open Source"],
    location: "Mumbai, India",
    description: "Principal pengembang Frappe Framework, basis teknologi open-source yang menjadi fondasi BizOps Engine.",
    website: "https://frappe.io",
    certified: true,
    partnershipStatus: "Official Tech Partner"
  },
  {
    id: 'tech-2',
    name: "Joget Inc",
    slug: "joget",
    logo: "https://www.joget.com/wp-content/uploads/2020/09/joget-logo-dark.png", 
    type: "technology",
    tier: "official",
    industries: ["Low-Code", "BPM"],
    location: "Columbia, MD, USA",
    description: "Platform Low-Code/No-Code untuk akselerasi pengembangan workflow bisnis yang kompleks di dalam ekosistem BizOps.",
    website: "https://joget.com",
    certified: true,
    partnershipStatus: "Official Tech Partner"
  },
  {
    id: 'tech-3',
    name: "Odoo",
    slug: "odoo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Odoo_logo.svg/2560px-Odoo_logo.svg.png",
    type: "technology",
    tier: "applying",
    industries: ["ERP", "SaaS"],
    location: "Belgium",
    description: "Suite aplikasi bisnis open source. BizOps sedang dalam proses integrasi strategis untuk interoperabilitas modul.",
    website: "https://odoo.com",
    certified: false,
    partnershipStatus: "Partnership Processing"
  },
  {
    id: 'tech-4',
    name: "Google Cloud",
    slug: "google-cloud",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png",
    type: "technology",
    tier: "official",
    industries: ["Cloud Infrastructure"],
    location: "USA",
    description: "Infrastruktur cloud pilihan untuk deployment BizOps Enterprise yang aman, scalable, dan reliable.",
    website: "https://cloud.google.com",
    certified: true,
    partnershipStatus: "Infrastructure Partner"
  },
  {
    id: 'tech-5',
    name: "Midtrans",
    slug: "midtrans",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Midtrans.png/1200px-Midtrans.png",
    type: "technology",
    tier: "official",
    industries: ["Fintech", "Payment"],
    location: "Jakarta, Indonesia",
    description: "Payment gateway terkemuka di Indonesia yang terintegrasi native dengan modul Sales & Accounting BizOps.",
    website: "https://midtrans.com",
    certified: true,
    partnershipStatus: "Integration Partner"
  },

  // --- IMPLEMENTATION & REFERRAL PARTNERS ---
  {
    id: '1',
    name: "Solusi Tekno Mandiri",
    slug: "solusi-tekno-mandiri",
    logo: "https://ui-avatars.com/api/?name=ST&background=0D8ABC&color=fff&size=128",
    type: "implementation",
    tier: "platinum",
    industries: ["Manufacturing", "Wholesale"],
    location: "Jakarta, Indonesia",
    description: "Spesialis implementasi ERP untuk manufaktur dan distribusi skala menengah hingga besar. Berpengalaman lebih dari 10 tahun.",
    website: "https://example.com",
    certified: true
  },
  {
    id: '2',
    name: "Digital Niaga Global",
    slug: "digital-niaga-global",
    logo: "https://ui-avatars.com/api/?name=DN&background=6366f1&color=fff&size=128",
    type: "implementation",
    tier: "gold",
    industries: ["Retail", "F&B"],
    location: "Surabaya, Indonesia",
    description: "Membantu transformasi digital bisnis ritel dan F&B dengan solusi POS dan Inventory terintegrasi.",
    website: "https://example.com",
    certified: true
  },
  {
    id: '3',
    name: "Akuntan Publik Santoso & Rekan",
    slug: "kap-santoso",
    logo: "https://ui-avatars.com/api/?name=KS&background=10b981&color=fff&size=128",
    type: "referral",
    tier: "silver",
    industries: ["Finance", "Professional Services"],
    location: "Bandung, Indonesia",
    description: "Konsultan keuangan dan pajak yang merekomendasikan solusi pembukuan terbaik untuk klien.",
    website: "https://example.com",
    certified: false
  },
  {
    id: '4',
    name: "Bali Digital Agency",
    slug: "bali-digital",
    logo: "https://ui-avatars.com/api/?name=BD&background=f59e0b&color=fff&size=128",
    type: "referral",
    tier: "gold",
    industries: ["Hospitality", "Tourism"],
    location: "Denpasar, Indonesia",
    description: "Digital agency yang membantu hotel dan travel agent mengelola operasional mereka.",
    website: "https://example.com",
    certified: true
  },
  {
    id: '6',
    name: "Agro Tech Indonesia",
    slug: "agro-tech",
    logo: "https://ui-avatars.com/api/?name=AT&background=84cc16&color=fff&size=128",
    type: "implementation",
    tier: "silver",
    industries: ["Agriculture", "Supply Chain"],
    location: "Medan, Indonesia",
    description: "Solusi ERP khusus untuk perkebunan dan manajemen rantai pasok agribisnis.",
    website: "https://example.com",
    certified: true
  },
  {
    id: '7',
    name: "Kreatif Studio",
    slug: "kreatif-studio",
    logo: "https://ui-avatars.com/api/?name=KS&background=ec4899&color=fff&size=128",
    type: "referral",
    tier: "registered",
    industries: ["Creative", "Media"],
    location: "Yogyakarta, Indonesia",
    description: "Membantu agensi kreatif mengelola proyek dan keuangan dengan lebih rapi.",
    website: "https://example.com",
    certified: false
  },
  {
    id: '8',
    name: "Logistik Lancar Jaya",
    slug: "logistik-lancar",
    logo: "https://ui-avatars.com/api/?name=LL&background=f97316&color=fff&size=128",
    type: "implementation",
    tier: "gold",
    industries: ["Logistics", "Transportation"],
    location: "Semarang, Indonesia",
    description: "Implementator sistem manajemen armada dan gudang terintegrasi.",
    website: "https://example.com",
    certified: true
  }
];

export const industriesList = [
  "Technology", "Cloud Infrastructure", "Fintech", "Open Source", "Low-Code",
  "Manufacturing", "Retail", "F&B", "Wholesale", "Finance", 
  "Professional Services", "Hospitality", "Tourism", "Agriculture", 
  "Supply Chain", "Logistics", "Transportation", "Creative", "Media"
];

export const locationsList = [
  "Global", "USA", "India", "Belgium", "Singapore",
  "Jakarta, Indonesia", "Surabaya, Indonesia", "Bandung, Indonesia", 
  "Denpasar, Indonesia", "Medan, Indonesia", "Semarang, Indonesia", 
  "Yogyakarta, Indonesia"
];
