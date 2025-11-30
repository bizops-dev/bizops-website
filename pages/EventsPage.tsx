import React, { useState } from 'react';
import Button from '../components/Button';
import { Calendar, Video, PlayCircle, Users, ArrowRight, Search, Clock, MapPin, Filter } from 'lucide-react';
import { eventsData } from '../data/content';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const EventsPage: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Live Demo', 'Webinar', 'Masterclass'];
  
  const filteredEvents = filter === 'All' 
    ? eventsData.upcoming 
    : eventsData.upcoming.filter(evt => evt.type.includes(filter) || (filter === 'Webinar' && evt.type === 'Special Webinar'));

  // Structured Data for Events
  const eventSchema = eventsData.upcoming.map(evt => ({
    "@context": "https://schema.org",
    "@type": "Event",
    "name": evt.title,
    "startDate": "2024-10-28T10:00:00+07:00", // Example static ISO date
    "endDate": "2024-10-28T12:00:00+07:00",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "VirtualLocation",
      "url": "https://bizops.id/events/live"
    },
    "image": [evt.image],
    "description": evt.desc,
    "organizer": {
      "@type": "Organization",
      "name": "BizOps Academy",
      "url": "https://bizops.id"
    }
  }));

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen font-sans selection:bg-primary-500/30">
      <SEO 
        title="BizOps Academy Events & Webinars" 
        description="Jadwal webinar edukasi, live demo produk, dan masterclass strategi bisnis bersama para ahli industri."
        structuredData={eventSchema.length > 0 ? eventSchema[0] : undefined}
      />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#0B1120] text-white overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-600/20 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm text-primary-400 text-xs font-bold uppercase tracking-wider mb-6"
            >
               <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
               Live Learning Sessions
            </motion.div>
            
            <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
            >
               BizOps <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400">Academy</span>
            </motion.h1>
            
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
               Tingkatkan kompetensi tim Anda dengan wawasan langsung dari praktisi. Ikuti sesi edukasi gratis tentang digitalisasi, strategi pajak, dan manajemen operasional modern.
            </motion.p>

            {/* Search/Filter Bar */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 p-2 rounded-2xl flex flex-col sm:flex-row items-center gap-2 shadow-2xl"
            >
               <div className="relative flex-1 w-full">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                     type="text" 
                     placeholder="Cari topik webinar..." 
                     className="w-full pl-12 pr-4 py-3 bg-transparent border-none text-white placeholder-slate-400 focus:ring-0 focus:outline-none"
                  />
               </div>
               <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 px-2 sm:px-0">
                  {categories.map(cat => (
                     <button 
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                           filter === cat 
                           ? 'bg-primary-600 text-white shadow-lg shadow-primary-900/20' 
                           : 'bg-white/5 text-slate-300 hover:bg-white/10'
                        }`}
                     >
                        {cat}
                     </button>
                  ))}
               </div>
            </motion.div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 pb-24 space-y-24">
        
        {/* Upcoming Events Grid */}
        <div className="space-y-8">
           <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                 <Calendar className="w-6 h-6 text-primary-400" /> Upcoming Live Sessions
              </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((evt, idx) => (
                 <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                 >
                    {/* Image Header */}
                    <div className="relative h-48 overflow-hidden">
                       <img src={evt.image} alt={evt.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                       <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur text-white text-xs font-bold uppercase tracking-wider">
                          <evt.icon className="w-3 h-3" /> {evt.type}
                       </div>
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-60"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                       <div className="flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 font-bold mb-3">
                          <Calendar className="w-4 h-4" /> {evt.formattedDate}
                       </div>
                       
                       <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          <Link to={`/events/${evt.slug}`}>{evt.title}</Link>
                       </h3>
                       
                       <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                          {evt.desc}
                       </p>

                       <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                          <div className="flex -space-x-2">
                             {/* Dummy avatars for participants */}
                             {[1,2,3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-500">
                                   {String.fromCharCode(64 + i)}
                                </div>
                             ))}
                             <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-500">
                                +40
                             </div>
                          </div>
                          
                          <Link to={`/events/${evt.slug}`}>
                             <Button size="sm" className="group-hover:bg-primary-600 transition-colors">
                                Daftar <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                             </Button>
                          </Link>
                       </div>
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>

        {/* On-Demand Library Section */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden border border-slate-800">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
           
           <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                 <div>
                    <h2 className="text-3xl font-bold mb-4 leading-tight">On-Demand Library</h2>
                    <p className="text-slate-400 max-w-xl text-lg">
                       Ketinggalan sesi live? Akses perpustakaan rekaman webinar premium kami kapan saja. Tonton strategi dari praktisi industri.
                    </p>
                 </div>
                 <div className="flex items-center gap-2 text-sm text-primary-300 bg-primary-900/30 border border-primary-500/30 px-4 py-2 rounded-full font-medium">
                    <Users className="w-4 h-4" /> Exclusive for Members
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {eventsData.recordings.map((rec, idx) => (
                    <div key={idx} className="group bg-slate-800/50 hover:bg-slate-800 rounded-2xl p-4 border border-slate-700/50 hover:border-primary-500/50 transition-all cursor-pointer">
                       <div className="aspect-video bg-slate-900 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden group-hover:shadow-lg transition-shadow">
                          {/* Mock Thumbnail */}
                          <div className="absolute inset-0 bg-slate-800"></div>
                          <PlayCircle className="w-12 h-12 text-white/50 group-hover:text-primary-500 group-hover:scale-110 transition-all relative z-10" />
                          <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 rounded text-[10px] font-mono font-bold">
                             {rec.duration}
                          </div>
                       </div>
                       <h3 className="font-bold text-white mb-2 leading-snug group-hover:text-primary-400 transition-colors line-clamp-2">
                          {rec.title}
                       </h3>
                       <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                          <span>{rec.views} views</span>
                          <span>•</span>
                          <span>Webinar Recording</span>
                       </div>
                    </div>
                 ))}
              </div>
              
              <div className="mt-12 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-center max-w-3xl mx-auto border border-slate-700/50">
                 <h3 className="text-xl font-bold mb-2">Unlock Full Access</h3>
                 <p className="text-sm text-slate-400 mb-6">Dapatkan akses ke 50+ jam materi pembelajaran premium.</p>
                 <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <input type="email" placeholder="Email Kantor Anda" className="px-5 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white w-full sm:w-72 focus:ring-2 focus:ring-primary-500 outline-none" />
                    <Button className="bg-white text-slate-900 hover:bg-slate-200 border-none font-bold">Akses Sekarang</Button>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default EventsPage;
