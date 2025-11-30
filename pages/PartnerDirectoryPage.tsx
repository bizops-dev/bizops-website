import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Filter, Briefcase, Award, CheckCircle, ExternalLink, Globe, ChevronRight, X, Info } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Pagination from '../components/Pagination';
import OptimizedImage from '../components/OptimizedImage';
import { partnerDirectoryData, industriesList, locationsList, PartnerProfile } from '../data/partnerDirectoryContent';
import { motion, AnimatePresence } from 'framer-motion';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Stack from '../components/Stack';

const ITEMS_PER_PAGE = 6;

const PartnerDirectoryPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter Logic
  const filteredPartners = useMemo(() => {
    return partnerDirectoryData.filter(partner => {
      const matchesSearch = partner.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            partner.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = selectedType ? partner.type === selectedType : true;
      const matchesIndustry = selectedIndustry ? partner.industries.includes(selectedIndustry) : true;
      const matchesLocation = selectedLocation ? (
        // Simple logic: if location is Global or matches exact string
        selectedLocation === 'Global' ? true : partner.location.includes(selectedLocation)
      ) : true;

      return matchesSearch && matchesType && matchesIndustry && matchesLocation;
    });
  }, [searchQuery, selectedType, selectedIndustry, selectedLocation]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedType, selectedIndustry, selectedLocation]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedType(null);
    setSelectedIndustry(null);
    setSelectedLocation(null);
  };

  const hasActiveFilters = searchQuery || selectedType || selectedIndustry || selectedLocation;

  const totalPages = Math.ceil(filteredPartners.length / ITEMS_PER_PAGE);
  const paginatedPartners = filteredPartners.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('partner-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors font-sans">
      <SEO 
        title="Find a BizOps Partner | Partner Directory" 
        description="Temukan partner implementasi, reseller, atau teknologi principal resmi BizOps yang tepat untuk membantu transformasi bisnis Anda." 
      />

      {/* --- HERO SECTION --- */}
      <div className="bg-[#0B1120] text-white pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        {/* Abstract Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <Container size="7xl" className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6">
            <Globe className="w-3 h-3" /> Global Partner Network
          </div>
          <Typography variant="h1" as="h1">Find Your Perfect Partner</Typography>
          <Typography variant="body-lg" className="text-slate-300">Hubungkan bisnis Anda dengan konsultan implementasi, reseller, dan principal teknologi resmi yang terintegrasi dengan BizOps.</Typography>
          
          <Stack direction="col" gap={4} className="justify-center">
             <Link to="/partners/apply">
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:text-white hover:bg-white/10">
                   Become a Partner
                </Button>
             </Link>
          </Stack>
        </Container>
      </div>

      <Section className="py-12 relative">
        <Grid cols={4} gap={8}>
          
          {/* --- SIDEBAR FILTERS (Desktop) --- */}
          <Stack direction="col" gap={8} className="hidden lg:block lg:col-span-1 sticky top-24 h-fit">
            
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search partners..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all"
              />
            </div>

            {/* Partner Type */}
            <div>
              <Typography variant="h3" as="h3">Partner Type</Typography>
              <Stack direction="col" gap={2}>
                {['implementation', 'referral', 'technology', 'managed-service'].map(type => (
                  <div key={type}>
                     <label className="flex items-center gap-3 cursor-pointer group">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${selectedType === type ? 'bg-primary-600 border-primary-600' : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 group-hover:border-primary-400'}`}>
                           {selectedType === type && <div className="w-2 h-2 bg-white rounded-full" />}
                        </div>
                        <input 
                           type="radio" 
                           name="partnerType" 
                           className="hidden"
                           checked={selectedType === type}
                           onChange={() => setSelectedType(selectedType === type ? null : type)}
                           onClick={() => setSelectedType(selectedType === type ? null : type)}
                        />
                        <span className="text-sm text-slate-600 dark:text-slate-300 capitalize group-hover:text-primary-600 transition-colors">
                           {type.replace('-', ' ')} Partner
                        </span>
                     </label>
                     {/* Info Text for Managed Service */}
                     {type === 'managed-service' && (
                        <div className="ml-7 mt-1 text-[10px] text-slate-400 leading-tight">
                           Mitra operasional outsourcing (Finance, HR, dll)
                        </div>
                     )}
                     {/* Info Text for Technology Partner */}
                     {type === 'technology' && (
                        <div className="ml-7 mt-1 text-[10px] text-slate-400 leading-tight">
                           Principal & Platform resmi (e.g. Frappe, Cloud Provider)
                        </div>
                     )}
                  </div>
                ))}
              </Stack>
            </div>

            {/* Industry */}
            <div>
              <Typography variant="h3" as="h3">Industry / Focus</Typography>
              <Stack direction="col" gap={2} className="max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {industriesList.map(industry => (
                  <label key={industry} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${selectedIndustry === industry ? 'bg-primary-600 border-primary-600' : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 group-hover:border-primary-400'}`}>
                      {selectedIndustry === industry && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                    <input 
                      type="radio" 
                      name="industry" 
                      className="hidden"
                      checked={selectedIndustry === industry}
                      onChange={() => setSelectedIndustry(selectedIndustry === industry ? null : industry)}
                      onClick={() => setSelectedIndustry(selectedIndustry === industry ? null : industry)}
                    />
                    <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-primary-600 transition-colors">
                      {industry}
                    </span>
                  </label>
                ))}
              </Stack>
            </div>

             {/* Location */}
             <div>
              <Typography variant="h3" as="h3">Location</Typography>
              <div className="relative">
                 <select 
                    value={selectedLocation || ""} 
                    onChange={(e) => setSelectedLocation(e.target.value || null)}
                    className="w-full pl-3 pr-8 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none appearance-none cursor-pointer"
                 >
                    <option value="">All Locations</option>
                    {locationsList.map(loc => (
                       <option key={loc} value={loc}>{loc}</option>
                    ))}
                 </select>
                 <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <MapPin className="w-4 h-4" />
                 </div>
              </div>
            </div>
            
            {hasActiveFilters && (
               <button 
                  onClick={clearFilters}
                  className="text-xs text-red-500 hover:text-red-600 font-medium flex items-center gap-1 transition-colors"
               >
                  <X className="w-3 h-3" /> Clear All Filters
               </button>
            )}

          </Stack>

          {/* --- MOBILE FILTER BUTTON --- */}
          <div className="lg:hidden col-span-1 mb-6">
             <div className="relative mb-4">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                 <input 
                   type="text" 
                   placeholder="Search partners..." 
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm shadow-sm"
                 />
             </div>
             <Button 
               variant="outline" 
               fullWidth 
               onClick={() => setShowMobileFilter(true)}
               className="flex justify-between items-center"
             >
               <span className="flex items-center gap-2"><Filter className="w-4 h-4" /> Filters</span>
               {(selectedType || selectedIndustry || selectedLocation) && <span className="w-2 h-2 rounded-full bg-primary-500"></span>}
             </Button>
          </div>

          {/* --- PARTNER GRID --- */}
          <div className="col-span-1 lg:col-span-3">
             <div className="mb-6 flex justify-between items-center">
                <Typography variant="h2" as="h2" className="text-slate-900 dark:text-white font-bold">Showing {filteredPartners.length} Partners</Typography>
             </div>

             {filteredPartners.length > 0 ? (
               <div id="partner-grid">
                  <Grid cols={2} gap={6} className="mb-12">
                     {paginatedPartners.map(partner => (
                        <div key={partner.id} className="h-full">
                           <PartnerCard partner={partner} />
                        </div>
                     ))}
                  </Grid>
                  <Pagination 
                     currentPage={currentPage} 
                     totalPages={totalPages} 
                     onPageChange={handlePageChange} 
                  />
               </div>
             ) : (
               <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-200 dark:border-slate-800">
                  <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                     <Search className="w-8 h-8" />
                  </div>
                  <Typography variant="h3" as="h3">No partners found</Typography>
                  <Typography variant="body" className="text-slate-500 dark:text-slate-400">Try adjusting your filters or search terms.</Typography>
                  <Button variant="outline" onClick={clearFilters}>Clear Filters</Button>
               </div>
             )}
          </div>
        </Grid>
      </Section>

      {/* --- MOBILE DRAWER --- */}
      <AnimatePresence>
        {showMobileFilter && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
              onClick={() => setShowMobileFilter(false)}
            />
            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-950 rounded-t-[2rem] z-50 p-6 max-h-[85vh] overflow-y-auto"
            >
              <Stack direction="row" gap={4} align="center" justify="between" className="mb-6">
                <Typography variant="h3" as="h3">Filters</Typography>
                <button onClick={() => setShowMobileFilter(false)} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500">
                  <X className="w-5 h-5" />
                </button>
              </Stack>
              
              <Stack direction="col" gap={8} className="pb-20">
                 {/* Partner Type */}
                 <div>
                    <Typography variant="h4" as="h4">Type</Typography>
                    <Stack direction="col" gap={3}>
                       {['implementation', 'referral', 'technology', 'managed-service'].map(type => (
                          <label key={type} className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                             <div>
                                <span className="capitalize text-slate-700 dark:text-slate-300 block">{type.replace('-', ' ')}</span>
                                {type === 'technology' && <span className="text-[10px] text-slate-400">Principal & Official Tech</span>}
                             </div>
                             <input 
                                type="radio" 
                                name="mobileType"
                                checked={selectedType === type}
                                onChange={() => setSelectedType(type)}
                                onClick={() => setSelectedType(selectedType === type ? null : type)}
                                className="w-5 h-5 text-primary-600 focus:ring-primary-500"
                             />
                          </label>
                       ))}
                    </Stack>
                 </div>

                 {/* Industry */}
                 <div>
                    <Typography variant="h4" as="h4">Industry</Typography>
                    <Grid cols={2} gap={3}>
                       {industriesList.map(industry => (
                          <label key={industry} className={`p-3 rounded-xl border text-sm text-center transition-all ${selectedIndustry === industry ? 'bg-primary-50 dark:bg-primary-900/20 border-primary-500 text-primary-700 dark:text-primary-300' : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'}`}>
                             <input type="radio" name="mobileIndustry" className="hidden" checked={selectedIndustry === industry} onChange={() => setSelectedIndustry(industry)} onClick={() => setSelectedIndustry(selectedIndustry === industry ? null : industry)} />
                             {industry}
                          </label>
                       ))}
                    </Grid>
                 </div>
              </Stack>

              <div className="fixed bottom-0 left-0 right-0 p-6 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex gap-4">
                 <Button variant="outline" fullWidth onClick={clearFilters}>Reset</Button>
                 <Button fullWidth onClick={() => setShowMobileFilter(false)}>Show Results</Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
};

const PartnerCard: React.FC<{ partner: PartnerProfile }> = ({ partner }) => {
   const getTypeColor = (type: string) => {
      switch(type) {
         case 'implementation': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
         case 'referral': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
         case 'technology': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300';
         case 'managed-service': return 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300';
         default: return 'bg-slate-100 text-slate-700';
      }
   };

   const getTierColor = (tier: string) => {
      switch(tier) {
         case 'platinum': return 'text-slate-900 dark:text-white bg-gradient-to-r from-slate-200 to-slate-400';
         case 'gold': return 'text-amber-700 bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400';
         case 'silver': return 'text-slate-600 bg-slate-100 dark:bg-slate-800 dark:text-slate-400';
         case 'official': return 'text-blue-700 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-200 dark:border-blue-800'; // Special for Tech
         case 'applying': return 'text-slate-500 bg-slate-100 dark:bg-slate-800 dark:text-slate-400 border-dashed border border-slate-300';
         default: return 'text-slate-500';
      }
   };

   const getTierIcon = (tier: string) => {
      switch(tier) {
         case 'platinum': return <Award className="w-3 h-3 ml-1 fill-current" />;
         case 'gold': return <Award className="w-3 h-3 ml-1" />;
         case 'official': return <CheckCircle className="w-3 h-3 ml-1" />;
         default: return null;
      }
   };

   return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 hover:shadow-xl transition-all hover:border-primary-500/30 group flex flex-col h-full">
         <Stack direction="row" gap={4} align="start" justify="between" className="mb-6">
            <Stack direction="row" gap={4} align="center">
               <div className="w-16 h-16 rounded-xl bg-white p-2 border border-slate-100 dark:border-slate-800 flex items-center justify-center shadow-sm">
                   <OptimizedImage src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain" />
               </div>
               <div>
                  <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white leading-tight group-hover:text-primary-500">{partner.name}</Typography>
                  <Stack direction="row" gap={2} align="center" className="mt-1">
                     <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${getTypeColor(partner.type)}`}>
                        {partner.type}
                     </span>
                     {partner.certified && partner.type !== 'technology' && (
                        <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
                           <CheckCircle className="w-3 h-3" /> Certified
                        </span>
                     )}
                  </Stack>
               </div>
            </Stack>
            
            {/* Tier Badge / Status */}
            <div className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md flex items-center ${getTierColor(partner.tier)}`}>
               {partner.partnershipStatus || partner.tier} {getTierIcon(partner.tier)}
            </div>
         </Stack>

         <Typography variant="caption" className="text-slate-600 dark:text-slate-400">{partner.description}</Typography>

         <Stack direction="col" gap={3} className="mb-6">
            <Stack direction="row" gap={2} align="center" className="text-xs text-slate-500 dark:text-slate-500">
               <MapPin className="w-3.5 h-3.5" /> {partner.location}
            </Stack>
            <Stack direction="row" gap={2}>
               {partner.industries.slice(0, 3).map(ind => (
                  <span key={ind} className="px-2 py-1 bg-slate-50 dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-700">
                     {ind}
                  </span>
               ))}
               {partner.industries.length > 3 && (
                  <span className="px-2 py-1 bg-slate-50 dark:bg-slate-800 rounded text-xs text-slate-500 border border-slate-100 dark:border-slate-700">
                     +{partner.industries.length - 3}
                  </span>
               )}
            </Stack>
         </Stack>

         <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex gap-3">
            <a href={partner.website} target="_blank" rel="noopener noreferrer" className="w-full">
               <Button size="sm" variant="outline" fullWidth className="rounded-xl border-slate-200 dark:border-slate-700">
                  <Globe className="w-4 h-4 mr-2" /> Visit Website
               </Button>
            </a>
            {partner.type !== 'technology' && (
               <Button size="sm" fullWidth className="rounded-xl">Contact</Button>
            )}
         </div>
      </div>
   );
};

export default PartnerDirectoryPage;
