
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/content';
import Button from '../components/Button';
import { CheckCircle } from 'lucide-react';

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const data = serviceId ? servicesData[serviceId] : null;

  if (!data) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Service Not Found</h1>
        <Link to="/"><Button>Back Home</Button></Link>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 py-24 text-white">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex p-4 bg-slate-800 rounded-2xl mb-6">
               <Icon className="w-10 h-10 text-primary-400" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{data.subtitle}</h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">{data.description}</p>
            <Link to="/demo">
               <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">{data.cta}</Button>
            </Link>
         </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Our Methodology</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {data.methodology.map((item: any, idx: number) => (
                  <div key={idx} className="flex gap-6">
                     <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold">
                           {idx + 1}
                        </div>
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
