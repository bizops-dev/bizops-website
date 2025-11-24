import React from 'react';
import { jobsData, careersContent } from '../data/content';
import Button from '../components/Button';
import { Heart, Coffee, Zap, MapPin, Clock, GitMerge, BookOpen, Monitor, Award, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const CareersPage: React.FC = () => {
  return (
    <div className="pt-16 pb-24">
      <SEO title="Karir di BizOps & Divistant" description="Bergabunglah dengan tim yang sedang membangun masa depan ERP di Indonesia. Budaya Remote-First dan Open Source." />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          {careersContent.hero.headline}
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          {careersContent.hero.subheadline}
        </p>
      </section>

      {/* Engineering Culture */}
      <section className="bg-slate-50 py-24 mb-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-16 text-center leading-tight">Engineering Culture (Why Top Talent Loves Us)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               
               {careersContent.culture.map((cult, idx) => (
                 <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <div className={`inline-flex p-3 rounded-full mb-6 ${idx === 0 ? 'bg-purple-50 text-purple-600' : idx === 1 ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'}`}>
                       {idx === 0 && <GitMerge className="w-6 h-6" />}
                       {idx === 1 && <Zap className="w-6 h-6" />}
                       {idx === 2 && <BookOpen className="w-6 h-6" />}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{cult.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                       {cult.desc}
                    </p>
                 </div>
               ))}

            </div>
         </div>
      </section>

      {/* Benefit Stack */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
         <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-12 text-center leading-tight">The Total Rewards System</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careersContent.benefits.map((ben, idx) => (
              <div key={idx} className="flex gap-4 p-6 border border-slate-100 rounded-xl hover:border-primary-100 transition-colors">
                 <div className="mt-1">
                    {idx === 0 && <Coffee className="w-6 h-6 text-slate-600" />}
                    {idx === 1 && <Monitor className="w-6 h-6 text-primary-600" />}
                    {idx === 2 && <Heart className="w-6 h-6 text-red-500" />}
                    {idx === 3 && <Award className="w-6 h-6 text-amber-500" />}
                 </div>
                 <div>
                    <h3 className="font-bold text-slate-900">{ben.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{ben.desc}</p>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* Hiring Process */}
      <section className="bg-slate-900 text-white py-24 mb-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-16 text-center leading-tight">Hiring Process: What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
               {/* Connecting Line */}
               <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-slate-700 -z-10 transform translate-y-4"></div>

               {careersContent.hiring.map((step, idx) => (
                 <div key={idx} className="relative pt-8 text-center md:text-left">
                    <div className="w-12 h-12 bg-slate-800 rounded-full border-4 border-slate-900 flex items-center justify-center font-bold text-lg mb-4 mx-auto md:mx-0 z-10 relative">{step.step}</div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-400">{step.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Openings */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
         <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-8 text-center leading-tight">Open Positions</h2>
         <div className="space-y-4">
            {jobsData.map((job, idx) => (
               <div key={idx} className="bg-white border border-slate-200 p-6 rounded-xl hover:border-primary-500 hover:shadow-md transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="flex-1">
                     <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                     <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-sm text-slate-500 mb-3">
                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.loc}</span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                     </div>
                     <div className="flex gap-2 mb-3">
                        {job.tags && job.tags.map(tag => (
                           <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded font-medium">{tag}</span>
                        ))}
                     </div>
                     <p className="text-slate-600 text-sm leading-relaxed">{job.desc}</p>
                  </div>
                  <Button size="sm" className="whitespace-nowrap">Apply Now</Button>
               </div>
            ))}
         </div>
         
         <div className="mt-16 text-center p-8 bg-primary-50 rounded-2xl border border-primary-100">
            <h3 className="font-bold text-primary-900 mb-2">Posisi Anda Belum Tersedia?</h3>
            <p className="text-primary-800 text-sm mb-4">
               Kami selalu terbuka untuk talenta luar biasa. Jika Anda merasa bisa berkontribusi, jangan ragu.
            </p>
            <a href="mailto:careers@bizops.id" className="inline-flex items-center font-bold text-primary-700 hover:underline">
               Kirim CV ke careers@bizops.id <CheckCircle className="w-4 h-4 ml-2" />
            </a>
         </div>
      </div>
    </div>
  );
};

export default CareersPage;