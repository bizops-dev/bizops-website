import { 
  FileSpreadsheet, 
  Server, 
  Cloud, 
  Globe,
  MessageSquare,
  Users,
  Zap,
  Rocket
} from 'lucide-react';

export interface ComparisonPoint {
  feature: string;
  them: string;
  us: string;
  impact: string; 
}

export interface ComparisonData {
  id: string;
  name: string;
  icon: any;
  color: string; 
  description: string;
  verdict: string;
  bottleneckScore: number; 
  bottleneckLabel: string;
  limitations: string[];
  
  // NEW STRATEGIC VARIABLES
  ttv: string; // Time to Value
  maintenance: 'Low' | 'Medium' | 'High' | 'Very High';
  customizability: 'None' | 'Low' | 'Medium' | 'High';
  securityLevel: 'Low' | 'Medium' | 'High' | 'Enterprise';
  avgTCO: string; // Estimasi Total Cost 3 Tahun

  points: ComparisonPoint[];
}

export const comparisonsData: Record<string, ComparisonData> = {
  'bizops': {
    id: 'bizops',
    name: 'BizOps Platform (Reference)',
    icon: Rocket,
    color: 'text-emerald-600',
    description: 'Benchmark arsitektur modern yang menggabungkan fleksibilitas Low-Code dengan kekuatan Enterprise ERP.',
    verdict: "The Gold Standard. Keseimbangan optimal antara kecepatan implementasi, biaya, dan skalabilitas jangka panjang.",
    bottleneckScore: 5,
    bottleneckLabel: "OPTIMIZED STATE",
    limitations: [
      "Membutuhkan koneksi internet stabil (Cloud-first)",
      "Perlu adaptasi budaya kerja transparan (Audit Trail)",
      "Fokus B2B/Internal Ops (Bukan Marketplace)"
    ],
    ttv: "2-4 Weeks (Rapid)",
    maintenance: "Low (Managed)",
    customizability: "High (Low-Code)",
    securityLevel: "Enterprise (ISO 27001)",
    avgTCO: "Lowest (Flat Pricing)",
    points: [
      {
        feature: "Core Architecture",
        them: "Unified Monolithic (Frappe Framework).",
        us: "Seamless Integration.",
        impact: "Tidak ada lagi isu sinkronisasi data antar modul."
      },
      {
        feature: "Pricing Model",
        them: "Resource Based / Flat.",
        us: "Predictable Cost.",
        impact: "Biaya tidak meledak saat user bertambah."
      },
      {
        feature: "User Experience",
        them: "Modern Web Interface.",
        us: "High Adoption Rate.",
        impact: "Tim senang menggunakan sistem karena mudah (mirip Sosmed)."
      }
    ]
  },
  'manual': {
    id: 'manual',
    name: 'Excel / Spreadsheet',
    icon: FileSpreadsheet,
    color: 'text-emerald-500',
    description: 'Manajemen data terdesentralisasi menggunakan file spreadsheet terpisah.',
    verdict: "Murah di awal, tapi sangat mahal di akhir karena inefisiensi SDM dan risiko fraud.",
    bottleneckScore: 92,
    bottleneckLabel: "CRITICAL LIMITATION",
    limitations: [
      "Data Silo (Terpisah antar divisi)",
      "Tidak ada Audit Trail (Rawan Fraud)",
      "Butuh waktu rekap manual (Inefisiensi)"
    ],
    ttv: "Instant",
    maintenance: "High", // Butuh banyak waktu admin merapikan data
    customizability: "High", // Bebas edit rumus (tapi berbahaya)
    securityLevel: "Low",
    avgTCO: "Variable (High Labor Cost)",
    points: [
      {
        feature: "Integritas Data",
        them: "Rentan human error & duplikasi.",
        us: "Single Source of Truth (Database Terpusat).",
        impact: "Keputusan bisnis berbasis data akurat, bukan asumsi."
      },
      {
        feature: "Kolaborasi Tim",
        them: "Saling tunggu file / versi konflik.",
        us: "Real-time Multi-user Access.",
        impact: "Produktivitas tim meningkat drastis tanpa bottleneck admin."
      },
      {
        feature: "Automation Capability",
        them: "Manual / Macro Script rumit.",
        us: "Native Workflow Automation.",
        impact: "Tugas repetitif hilang, staf fokus ke strategi."
      }
    ]
  },
  'saas': {
    id: 'saas',
    name: 'SaaS Akuntansi Lokal',
    icon: Cloud,
    color: 'text-blue-500',
    description: 'Solusi cloud fokus pada pembukuan standar dan perpajakan.',
    verdict: "Sangat baik untuk Accounting Compliance, tapi seringkali terputus dari Operasional (Gudang/Produksi) sehingga butuh input ulang.",
    bottleneckScore: 65,
    bottleneckLabel: "OPERATIONAL GAP",
    limitations: [
      "Fitur Operasional (Manufaktur/Project) terbatas",
      "Sulit kustomisasi alur approval unik",
      "Biaya add-on plugin yang menumpuk"
    ],
    ttv: "1-2 Weeks",
    maintenance: "Low",
    customizability: "Low",
    securityLevel: "Medium",
    avgTCO: "Low - Medium",
    points: [
      {
        feature: "Cakupan Sistem",
        them: "Accounting Centric.",
        us: "Full ERP (Ops + HR + Finance).",
        impact: "Menghilangkan kebutuhan input ulang dari divisi operasional ke finance."
      },
      {
        feature: "Fleksibilitas Workflow",
        them: "Mengikuti standar software (Kaku).",
        us: "Software mengikuti SOP perusahaan (Fleksibel).",
        impact: "Sistem mendukung keunikan bisnis Anda, bukan membatasinya."
      },
      {
        feature: "Database Ownership",
        them: "Shared Cloud (Data di vendor).",
        us: "Private Cloud / On-Premise Option.",
        impact: "Kedaulatan data penuh di tangan Anda."
      }
    ]
  },
  'odoo': {
    id: 'odoo',
    name: 'Odoo Ecosystem',
    icon: Globe,
    color: 'text-purple-600',
    description: 'Platform modular global dengan marketplace apps yang luas.',
    verdict: "Ekosistem kaya, namun model arsitektur modularnya memicu biaya lisensi tinggi saat scale-up dan isu fragmentasi data.",
    bottleneckScore: 55,
    bottleneckLabel: "SCALABILITY COST",
    limitations: [
      "Pricing model: Per User + Per App (Mahal saat scale up)",
      "Upgrade major version seringkali sulit (Breaking Changes)",
      "Kualitas modul komunitas tidak standar"
    ],
    ttv: "1-3 Months",
    maintenance: "Medium",
    customizability: "Medium",
    securityLevel: "High",
    avgTCO: "Medium - High (Scaling Cost)",
    points: [
      {
        feature: "Core Architecture",
        them: "Modular Fragmented.",
        us: "Unified Monolithic (Frappe Framework).",
        impact: "Integrasi data antar modul di BizOps lebih seamless dan stabil."
      },
      {
        feature: "Ownership Cost",
        them: "Biaya naik eksponensial seiring user.",
        us: "Flat / Resource Based Pricing.",
        impact: "Prediksi biaya IT yang lebih terkontrol untuk jangka panjang."
      },
      {
        feature: "Local Support",
        them: "Via Partner (Kualitas Variatif).",
        us: "Principal Direct Support.",
        impact: "Resolusi masalah teknis lebih cepat dan akuntabel."
      }
    ]
  },
  'bitrix': {
    id: 'bitrix',
    name: 'Bitrix24',
    icon: MessageSquare,
    color: 'text-sky-500',
    description: 'Platform kolaborasi sosial, CRM, dan manajemen tugas.',
    verdict: "Juara dalam Komunikasi & CRM, namun kurang mendalam untuk Core ERP (Inventory, Accounting, Manufacturing).",
    bottleneckScore: 70,
    bottleneckLabel: "BACK-OFFICE GAP",
    limitations: [
      "Fitur Accounting/Inventory sangat basic",
      "Tidak support manufaktur kompleks",
      "Laporan keuangan tidak standar PSAK Indonesia"
    ],
    ttv: "1 Month",
    maintenance: "Low",
    customizability: "Medium",
    securityLevel: "Medium",
    avgTCO: "Medium",
    points: [
      {
        feature: "Fokus Utama",
        them: "Front-Office (Sales & Chat).",
        us: "Back-Office Backbone (Finance, Ops, HR).",
        impact: "Gunakan BizOps untuk eksekusi operasional yang berat dan detail."
      },
      {
        feature: "Inventory Management",
        them: "Simple Product Catalog.",
        us: "Multi-warehouse, Serial No, Batch Tracking.",
        impact: "Kontrol stok presisi untuk perusahaan dagang/manufaktur."
      },
      {
        feature: "Reporting",
        them: "Activity Based Reports.",
        us: "Financial & Ledger Based Reports.",
        impact: "Laporan keuangan yang auditable untuk bank/investor."
      }
    ]
  },
  'legacy': {
    id: 'legacy',
    name: 'Legacy / Enterprise ERP',
    icon: Server,
    color: 'text-slate-600',
    description: 'Sistem Tier-1 (SAP/Oracle) yang sangat powerful namun kompleks.',
    verdict: "Powerhouse untuk korporasi raksasa, namun 'Overkill' (terlalu rumit & mahal) untuk perusahaan yang butuh kelincahan.",
    bottleneckScore: 45,
    bottleneckLabel: "AGILITY BARRIER",
    limitations: [
      "Biaya Implementasi & Maintenance sangat tinggi",
      "Tampilan (UI) cenderung kaku/kuno",
      "Butuh tim IT dedicated yang besar"
    ],
    ttv: "6-12 Months",
    maintenance: "Very High",
    customizability: "Low (Expensive Change Request)",
    securityLevel: "Enterprise",
    avgTCO: "Very High (> Rp 1M)",
    points: [
      {
        feature: "Implementasi",
        them: "6-12 Bulan (Waterfall).",
        us: "1-3 Bulan (Agile/Rapid).",
        impact: "Time-to-value lebih cepat, ROI investasi terasa lebih awal."
      },
      {
        feature: "User Experience",
        them: "Complex, butuh training intensif.",
        us: "Modern Web-based, intuitif.",
        impact: "Adopsi user lebih tinggi, resistensi perubahan lebih rendah."
      },
      {
        feature: "Flexibility",
        them: "Rigid / Kaku.",
        us: "Low-code Customization.",
        impact: "Bisnis bisa pivot strategi tanpa terhambat sistem."
      }
    ]
  }
};
