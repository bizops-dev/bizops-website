
import React from 'react';
import Button from '../components/Button';
import { Calendar, Video, PlayCircle, Users } from 'lucide-react';
import { eventsData } from '../data/content';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const EventsPage: React.FC = () => {
  
  // Structured Data for Events
  const eventSchema = eventsData.upcoming.map(evt => ({
    "@context": "https://schema.org",
    "@type": "Event",
    "name": evt.title,
    "startDate": "2024-10-28T10:00:00+07:00", // Example static ISO date, ideally dynamic from content
    "endDate": "2024-10-28T12:00:00+07:00",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "VirtualLocation",
      "url": "https://bizops.id/events/live"
    },
    "image": ["https://bizops.id/assets/webinar-thumb.jpg"],
    "description": evt.desc,
    "organizer": {
      "@type": "Organization",
      "name": "BizOps Academy",
      "url": "https://bizops.id"
    }
  }));

  return (
    <div className="pt-16 pb-24 bg-white">
      <SEO 
        title="Webinar & Event Bisnis | BizOps Academy" 
        description="Jadwal webinar edukasi, live demo produk, dan rekaman sesi sebelumnya."
        structuredData={eventSchema.length > 0 ? eventSchema[0] : undefined} // Pass the first one or list
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h1 className="text-4xl font-bold text-slate-900 mb-4">BizOps Academy & Events</h1>
           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Tingkatkan kompetensi tim Anda. Ikuti sesi edukasi gratis tentang digitalisasi bisnis, manajemen keuangan, dan strategi HR.
           </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-24">
           <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-primary-600" /> Upcoming Live Sessions
           </h2>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {eventsData.upcoming.map((evt, idx) => (
                 <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:border-primary-500 hover:shadow-md transition-all flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 flex-shrink-0">
                       <evt.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                       <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                          {evt.type}
                       </div>
                       <h3 className="text-xl font-bold text-slate-900 mb-2">{evt.title}</h3>
                       <p className="text-primary-600 font-medium mb-3 flex items-center gap-2">
                          <Calendar className="w-4 h-4" /> {evt.date}
                       </p>
                       <p className="text-slate-600 text-sm leading-relaxed mb-6">
                          {evt.desc}
                       </p>
                       <Button size="sm">Daftar Gratis</Button>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        {/* On-Demand Library */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
           <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                 <h2 className="text-3xl font-bold mb-4">On-Demand Library</h2>
                 <p className="text-slate-400 max-w-xl">
                    Ketinggalan sesi live? Akses perpustakaan rekaman webinar premium kami kapan saja. Tonton strategi dari praktisi industri.
                 </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400 bg-slate-800 px-4 py-2 rounded-lg">
                 <Users className="w-4 h-4" /> Exclusive for Members
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {eventsData.recordings.map((rec, idx) => (
                 <div key={idx} className="bg-slate-800 rounded-xl p-4 hover:bg-slate-700 transition-colors cursor-pointer group">
                    <div className="aspect-video bg-slate-900 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                       <PlayCircle className="w-12 h-12 text-slate-700 group-hover:text-primary-500 transition-colors relative z-10" />
                       <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/30 transition-colors"></div>
                    </div>
                    <h3 className="font-bold text-white mb-2 leading-snug group-hover:text-primary-400 transition-colors">
                       {rec.title}
                    </h3>
                    <div className="text-xs text-slate-500 font-medium">
                       Duration: {rec.duration}
                    </div>
                 </div>
              ))}
           </div>
           
           <div className="mt-12 text-center">
              <p className="text-sm text-slate-400 mb-4">Masukkan email kantor untuk membuka akses penuh ke library.</p>
              <div className="flex justify-center gap-4">
                 <input type="email" placeholder="Email Kantor Anda" className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white w-64 focus:ring-2 focus:ring-primary-500 outline-none" />
                 <Button className="bg-white text-slate-900 hover:bg-slate-200 border-none">Akses Sekarang</Button>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default EventsPage;
