import { 
  ClipboardList, 
  Database, 
  Users, 
  Rocket, 
  CheckSquare, 
  Server,
  GraduationCap,
  FileText
} from 'lucide-react';

export type ComplexityLevel = 'low' | 'medium' | 'high';

export interface ProjectPhase {
  id: string;
  title: string;
  description: string;
  icon: any;
  baseDuration: number; // in days
  color: string; // Tailwind color class
  dependencies: string[];
  // New Enhanced Fields
  preparation: string[];
  roles: string[];
  deliverables: string[];
  risks: string[];
}

export interface TimelineInput {
  employeeCount: number;
  modules: string[];
  dataReadiness: 'ready' | 'partial' | 'messy' | 'hardcopy';
  teamAvailability: 'full' | 'partial' | 'none';
  customizationLevel: 'none' | 'minor' | 'major';
}

export const projectPhases: ProjectPhase[] = [
  {
    id: 'kickoff',
    title: 'Project Kickoff & Blueprint',
    description: 'Finalisasi ruang lingkup, pembentukan tim, dan instalasi server development.',
    icon: Rocket,
    baseDuration: 3,
    color: 'bg-blue-500',
    dependencies: [],
    preparation: [
      "Siapkan Surat Tugas (SK) Tim Implementasi Internal",
      "Sediakan akses server/cloud (jika on-premise)",
      "Kumpulkan SOP & Flowchart proses bisnis saat ini"
    ],
    roles: ["Project Sponsor (Director)", "Project Manager", "IT Manager"],
    deliverables: ["Project Charter", "Blueprint Document", "Development Server Ready"],
    risks: ["Scope creep (penambahan fitur di luar kontrak)", "Tim internal sulit mengalokasikan waktu"]
  },
  {
    id: 'data_prep',
    title: 'Data Cleaning & Migration',
    description: 'Pembersihan data master (Produk, Pelanggan, Saldo Awal) dan migrasi ke sistem.',
    icon: Database,
    baseDuration: 5,
    color: 'bg-amber-500',
    dependencies: ['kickoff'],
    preparation: [
      "Export data lama ke format Excel/CSV standar BizOps",
      "Validasi stok gudang (Stock Opname)",
      "Finalisasi Chart of Account (COA)"
    ],
    roles: ["Data Entry Team", "Department Heads (Validation)", "Accounting Manager"],
    deliverables: ["Master Data Uploaded", "Opening Balance Validated", "Data Sign-off Report"],
    risks: ["Format data lama tidak konsisten", "Selisih stok fisik vs sistem lama", "Data ganda/duplikasi"]
  },
  {
    id: 'config',
    title: 'System Configuration',
    description: 'Setup alur kerja, hak akses user, dan parameter sistem sesuai Blueprint.',
    icon: Server,
    baseDuration: 5,
    color: 'bg-purple-500',
    dependencies: ['kickoff'],
    preparation: [
      "Daftar user & role yang akan didaftarkan",
      "Aturan approval (limit nominal, jenjang jabatan)",
      "Format nomor dokumen (PO/INV/DO)"
    ],
    roles: ["System Administrator", "BizOps Consultant"],
    deliverables: ["Configured Environment", "User Access Matrix", "Workflow Rules Active"],
    risks: ["Struktur approval terlalu rumit/birokratis", "Perubahan kebijakan manajemen di tengah jalan"]
  },
  {
    id: 'custom_dev',
    title: 'Custom Development',
    description: 'Penyesuaian koding khusus untuk kebutuhan unik (jika ada).',
    icon: FileText,
    baseDuration: 0, // 0 by default
    color: 'bg-pink-500',
    dependencies: ['config'],
    preparation: [
      "Mockup/Wireframe laporan khusus (jika ada)",
      "Logic perhitungan komisi/diskon yang unik"
    ],
    roles: ["Developer", "Business Analyst", "Key User (Tester)"],
    deliverables: ["Custom Scripts", "Custom Reports", "API Integrations"],
    risks: ["Bugs pada fitur custom", "Logika bisnis yang sulit diterjemahkan ke kode"]
  },
  {
    id: 'uat',
    title: 'User Acceptance Test (UAT)',
    description: 'Simulasi transaksi oleh user inti untuk memvalidasi alur sistem.',
    icon: CheckSquare,
    baseDuration: 3,
    color: 'bg-indigo-500',
    dependencies: ['data_prep', 'config', 'custom_dev'],
    preparation: [
      "Skenario tes (Test Cases) dari hulu ke hilir",
      "Data dummy untuk transaksi percobaan"
    ],
    roles: ["Key Users (All Dept)", "Project Manager"],
    deliverables: ["UAT Log Issue", "UAT Sign-off (Berita Acara)"],
    risks: ["User resisten/menolak perubahan", "Menemukan gap fitur di detik akhir", "Key user absen saat jadwal tes"]
  },
  {
    id: 'training',
    title: 'End-User Training',
    description: 'Pelatihan massal untuk seluruh staf pengguna sistem.',
    icon: GraduationCap,
    baseDuration: 2,
    color: 'bg-emerald-500',
    dependencies: ['uat'],
    preparation: [
      "Ruangan training & proyektor",
      "Laptop/PC untuk peserta hands-on",
      "Jadwal giliran training per divisi"
    ],
    roles: ["All End Users", "Trainer"],
    deliverables: ["User Manual / Video Tutorial", "Training Attendance", "User Competency Score"],
    risks: ["Peserta tidak fokus/sambil kerja", "Fasilitas training tidak memadai"]
  },
  {
    id: 'golive',
    title: 'Go-Live & Pendampingan',
    description: 'Hari pertama penggunaan sistem secara live dengan pendampingan intensif.',
    icon: Users,
    baseDuration: 5,
    color: 'bg-green-600',
    dependencies: ['training'],
    preparation: [
      "Cut-off transaksi di sistem lama",
      "Pengumuman resmi manajemen tentang penggunaan sistem baru"
    ],
    roles: ["All Users", "Support Team (Standby)"],
    deliverables: ["Live Production System", "Daily Issue Report", "Project Handover"],
    risks: ["Panic attack user saat error pertama", "Infrastruktur/internet down"]
  }
];

// Logic to calculate duration based on inputs
export const calculateTimeline = (input: TimelineInput) => {
  let phases = projectPhases.map(p => ({ ...p, duration: p.baseDuration }));
  let totalWeeks = 0;
  let complexity: ComplexityLevel = 'low';

  // 1. SCALE FACTOR
  const scaleMultiplier = input.employeeCount > 500 ? 2.0 : input.employeeCount > 100 ? 1.5 : 1.0;
  
  // 2. DATA READINESS IMPACT
  const dataPhase = phases.find(p => p.id === 'data_prep');
  if (dataPhase) {
    if (input.dataReadiness === 'partial') dataPhase.duration += 3;
    if (input.dataReadiness === 'messy') dataPhase.duration += 7;
    if (input.dataReadiness === 'hardcopy') dataPhase.duration += 14;
    dataPhase.duration = Math.ceil(dataPhase.duration * scaleMultiplier);
  }

  // 3. CUSTOMIZATION IMPACT
  const devPhase = phases.find(p => p.id === 'custom_dev');
  const configPhase = phases.find(p => p.id === 'config');
  if (devPhase && configPhase) {
    if (input.customizationLevel === 'minor') {
        devPhase.duration = 5;
        configPhase.duration += 2;
    }
    if (input.customizationLevel === 'major') {
        devPhase.duration = 15;
        configPhase.duration += 5;
        complexity = 'high';
    }
  }

  // 4. TEAM AVAILABILITY IMPACT
  const uatPhase = phases.find(p => p.id === 'uat');
  const trainPhase = phases.find(p => p.id === 'training');
  
  let availabilityFactor = 1.0;
  if (input.teamAvailability === 'partial') availabilityFactor = 1.5;
  if (input.teamAvailability === 'none') availabilityFactor = 2.5;

  if (uatPhase) uatPhase.duration = Math.ceil(uatPhase.duration * availabilityFactor);
  if (trainPhase) trainPhase.duration = Math.ceil(trainPhase.duration * scaleMultiplier * availabilityFactor);

  // 5. MODULE COMPLEXITY
  const moduleCount = input.modules.length;
  if (moduleCount > 3) {
      phases.forEach(p => {
          if (['config', 'uat', 'training', 'golive'].includes(p.id)) {
              p.duration = Math.ceil(p.duration * 1.2);
          }
      });
  }

  // Calculate Start & End Days
  let calculatedPhases = [];
  
  // Kickoff
  const kickoff = phases.find(p => p.id === 'kickoff')!;
  calculatedPhases.push({ ...kickoff, startDay: 0, endDay: kickoff.duration });
  
  // Parallel Streams: Data & Config
  const data = phases.find(p => p.id === 'data_prep')!;
  calculatedPhases.push({ ...data, startDay: kickoff.duration, endDay: kickoff.duration + data.duration });

  const config = phases.find(p => p.id === 'config')!;
  calculatedPhases.push({ ...config, startDay: kickoff.duration, endDay: kickoff.duration + config.duration });

  // Dev
  const dev = phases.find(p => p.id === 'custom_dev')!;
  const devStart = config.duration + kickoff.duration;
  calculatedPhases.push({ ...dev, startDay: devStart, endDay: devStart + dev.duration });

  // UAT
  const uat = phases.find(p => p.id === 'uat')!;
  const dataEnd = kickoff.duration + data.duration;
  const devEnd = devStart + dev.duration;
  const uatStart = Math.max(dataEnd, devEnd);
  calculatedPhases.push({ ...uat, startDay: uatStart, endDay: uatStart + uat.duration });

  // Training
  const train = phases.find(p => p.id === 'training')!;
  calculatedPhases.push({ ...train, startDay: uatStart + uat.duration, endDay: uatStart + uat.duration + train.duration });

  // Go Live
  const golive = phases.find(p => p.id === 'golive')!;
  const goliveStart = uatStart + uat.duration + train.duration;
  calculatedPhases.push({ ...golive, startDay: goliveStart, endDay: goliveStart + golive.duration });

  const maxEndDay = goliveStart + golive.duration;
  totalWeeks = Math.ceil(maxEndDay / 5); 

  return {
    phases: calculatedPhases,
    totalDays: maxEndDay,
    totalWeeks,
    complexity,
    riskFactor: input.teamAvailability === 'none' || input.dataReadiness === 'hardcopy' ? 'high' : 'low'
  };
};
