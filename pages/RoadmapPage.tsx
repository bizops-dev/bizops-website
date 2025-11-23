
import React from 'react';
import { roadmapData } from '../data/content';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const RoadmapPage: React.FC = () => {
  return (
    <div className="pt-16 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h1 className="text-4xl font-bold text-slate-900 mb-4">Public Product Roadmap</h1>
           <p className="text-lg text-slate-600">
              Software yang statis adalah software yang mati. Kami membagikan peta jalan pengembangan kami secara publik karena kami percaya pada transparansi.
           </p>
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {roadmapData.map((column, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                 <div className={`font-bold text-sm uppercase tracking-wider pb-4 border-b-4 ${idx === 0 ? 'border-green-500 text-green-700' : idx === 1 ? 'border-blue-500 text-blue-700' : 'border-purple-500 text-purple-700'}`}>
                    {column.status}
                 </div>
                 <div className="space-y-4">
                    {column.items.map((item, itemIdx) => (
                       <div key={itemIdx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                          <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                          <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                       </div>
                    ))}
                 </div>
              </div>
           ))}
        </div>

        {/* Request Feature */}
        <div className="mt-20 bg-slate-900 rounded-2xl p-12 text-center text-white">
           <h2 className="text-3xl font-bold mb-4">Punya Ide Fitur?</h2>
           <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Produk terbaik dibangun berdasarkan masukan pengguna nyata. Suarakan kebutuhan bisnis unik Anda.
           </p>
           <a href="mailto:product@bizops.id">
              <Button className="bg-white text-slate-900 hover:bg-slate-100 border-none">Ajukan Permintaan Fitur</Button>
           </a>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
