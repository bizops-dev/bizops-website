import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  FileText, 
  Video, 
  ArrowRight, 
  Calendar,
  Layers,
  Wrench,
  Users,
  Code
} from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { blogPosts, useCasesData, eventsData } from '../data/content';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Stack from '../components/Stack';

const ResourcesPage = () => {
  // Data extraction
  const latestBlogs = blogPosts.slice(0, 3);
  const featuredUseCase = Object.values(useCasesData)[0]; // Just take one for featured
  const upcomingEvents = eventsData.upcoming.slice(0, 2);

  const resourceCategories = [
    {
      title: "Blog & Insights",
      desc: "Panduan teknis, tren industri, dan update regulasi terbaru.",
      icon: BookOpen,
      link: "/blog",
      color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
    },
    {
      title: "Success Stories",
      desc: "Pelajari bagaimana perusahaan lain bertransformasi dengan BizOps.",
      icon: Users,
      link: "/use-cases",
      color: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400"
    },
    {
      title: "Events & Webinars",
      desc: "Ikuti sesi live demo dan masterclass dari para ahli.",
      icon: Calendar,
      link: "/events",
      color: "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400"
    },
    {
      title: "Interactive Tools",
      desc: "Kalkulator ROI, Assessment, dan alat perencanaan gratis.",
      icon: Wrench,
      link: "/tools/assessment",
      color: "bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400"
    },
    {
      title: "Documentation",
      desc: "Manual teknis, API reference, dan panduan integrasi.",
      icon: Code,
      link: "/docs",
      color: "bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-20 transition-colors">
      <SEO title="Resource Center" description="Pusat pengetahuan dan perangkat bantu untuk pertumbuhan bisnis Anda." />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <Container size="7xl" className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
          >
            Resource <span className="text-primary-600">Center</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12"
          >
            Kumpulan wawasan, panduan, dan alat bantu untuk membantu Anda mengoptimalkan operasional dan memaksimalkan nilai investasi teknologi Anda.
          </motion.p>

          {/* Quick Category Nav */}
          <Grid cols={5} gap={4} className="max-w-5xl mx-auto">
            {resourceCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.05 }}
              >
                <Link 
                  to={cat.link}
                  className="flex flex-col items-center p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:shadow-lg hover:-translate-y-1 transition-all group h-full gap-4"
                >
                  <div className={`p-3 rounded-full mb-3 ${cat.color} group-hover:scale-110 transition-transform`}>
                    <cat.icon className="w-6 h-6" />
                  </div>
                  <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white">{cat.title}</Typography>
                  <Typography variant="body" className="text-slate-500 dark:text-slate-400">{cat.desc}</Typography>
                </Link>
              </motion.div>
            ))}
          </Grid>
        </Container>
      </section>

      {/* Featured Insight (Blog) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Stack direction="horizontal" gap={4} align="end" justify="between" className="mb-10">
          <div>
            <Typography variant="h2" as="h2">Latest Insights</Typography>
            <Typography variant="body" className="text-slate-600 dark:text-slate-400">Artikel dan panduan terbaru dari tim ahli kami.</Typography>
          </div>
          <Link to="/blog" className="hidden sm:flex items-center text-primary-600 font-bold hover:underline gap-4">
            View All Articles <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Stack>

        <Grid cols={3} gap={8}>
          {/* Main Featured Post */}
          <div className="lg:col-span-2 group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all min-h-[400px]">
            <OptimizedImage 
              src={latestBlogs[0].image} 
              alt={latestBlogs[0].title} 
              className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full mb-3">
                {latestBlogs[0].category}
              </span>
              <Typography variant="h3" as="h3" className="text-xl md:text-3xl font-bold text-white group-hover:text-primary-200"><Link to={`/blog/${latestBlogs[0].slug}`}>{latestBlogs[0].title}</Link></Typography>
              <Typography variant="caption" className="text-slate-300">{latestBlogs[0].summary}</Typography>
              <Stack direction="horizontal" gap={4} align="center" className="text-slate-300 text-xs md:text-sm">
                <span>{latestBlogs[0].date}</span>
                <span>•</span>
                <span>{latestBlogs[0].author}</span>
              </Stack>
            </div>
          </div>

          {/* Side Posts */}
          <Stack direction="vertical" gap={8} className="flex flex-col gap-4">
            {latestBlogs.slice(1, 3).map((post, idx) => (
              <div key={idx} className="flex-1 flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:border-primary-300 transition-colors gap-4">
                <Typography variant="caption" className="text-primary-600">{post.category}</Typography>
                <Typography variant="h3" as="h3" className="text-lg font-bold text-slate-900 dark:text-white hover:text-primary-600"><Link to={`/blog/${post.slug}`}>{post.title}</Link></Typography>
                <Typography variant="caption" className="text-slate-600 dark:text-slate-400">{post.summary}</Typography>
                <div className="text-xs text-slate-500 mt-auto">
                  {post.date} • 5 min read
                </div>
              </div>
            ))}
          </Stack>
        </Grid>
      </section>

      {/* Featured Tool / Interactive */}
      <section className="bg-slate-900 text-white py-16 md:py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <Container size="7xl" className="relative z-10">
          <Grid cols={2} gap={12} className="items-center">
            <div>
              <Typography variant="h2" as="h2">Ukur Kesiapan Digital Anda</Typography>
              <Typography variant="body-lg" className="text-slate-300 leading-relaxed">Apakah perusahaan Anda siap untuk transformasi digital? Gunakan alat asesmen gratis kami untuk mendapatkan skor maturitas dan rekomendasi personal dalam 5 menit.</Typography>
              <Stack direction="vertical" gap={4}>
                <Link to="/tools/assessment">
                  <Button size="lg" className="bg-primary-600 hover:bg-primary-500 border-none w-full sm:w-auto">
                    Mulai Assessment Gratis
                  </Button>
                </Link>
                <Link to="/tools/roi-calculator">
                  <Button size="lg" variant="outline" className="text-slate-900 dark:text-white border-slate-600 hover:bg-white/10 w-full sm:w-auto">
                    Hitung ROI Project
                  </Button>
                </Link>
              </Stack>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 md:transform md:rotate-2 md:hover:rotate-0 transition-transform duration-500">
                <Stack direction="horizontal" gap={4} align="center" justify="between" className="mb-8">
                  <div className="text-sm font-bold text-slate-400">YOUR SCORE</div>
                  <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold">EXCELLENT</div>
                </Stack>
                <div className="text-5xl font-bold mb-2">85<span className="text-2xl text-slate-400">/100</span></div>
                <div className="w-full bg-slate-700 h-2 rounded-full mb-6">
                  <div className="bg-green-500 w-[85%] h-2 rounded-full"></div>
                </div>
                <Stack direction="vertical" gap={3}>
                  <Stack direction="horizontal" gap={4} justify="between" className="text-sm">
                    <span>Process Automation</span>
                    <span className="font-bold">90%</span>
                  </Stack>
                  <Stack direction="horizontal" gap={4} justify="between" className="text-sm">
                    <span>Data Integration</span>
                    <span className="font-bold">75%</span>
                  </Stack>
                </Stack>
              </div>
            </div>
          </Grid>
        </Container>
      </section>

      {/* Success Stories & Events Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Grid cols={2} gap={16}>
          
          {/* Success Stories Preview */}
          <div>
            <Stack direction="horizontal" gap={4} align="center" justify="between" className="mb-8">
              <Typography variant="h2" as="h2">Customer Success</Typography>
              <Link to="/use-cases" className="text-primary-600 text-sm font-bold hover:underline">View All</Link>
            </Stack>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
              <div className="mb-6">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center text-primary-600 mb-4 gap-4">
                  <featuredUseCase.icon className="w-6 h-6" />
                </div>
                <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white">{featuredUseCase.title}</Typography>
                <Typography variant="caption" className="text-slate-600 dark:text-slate-400">{featuredUseCase.subtitle} - {featuredUseCase.industry}</Typography>
                <Stack direction="vertical" gap={2} className="mb-6">
                  {featuredUseCase.results.slice(0, 2).map((res, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="text-green-500 mt-1">✓</span> {res}
                    </div>
                  ))}
                </Stack>
              </div>
              <Link to={`/use-cases/${featuredUseCase.id}`}>
                <Button variant="outline" fullWidth>Baca Studi Kasus</Button>
              </Link>
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <Stack direction="horizontal" gap={4} align="center" justify="between" className="mb-8">
              <Typography variant="h2" as="h2">Upcoming Events</Typography>
              <Link to="/events" className="text-primary-600 text-sm font-bold hover:underline">View Calendar</Link>
            </Stack>
            <Stack direction="vertical" gap={4}>
              {upcomingEvents.map((event, idx) => (
                <div key={idx} className="flex gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-lg flex flex-col items-center justify-center text-center gap-4">
                    <Typography variant="caption" className="text-slate-500">{event.date.split(' ')[1]}</Typography>
                    <Typography variant="body-xl" className="text-slate-900 dark:text-white">{event.date.split(' ')[0]}</Typography>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-purple-600 bg-purple-50 dark:bg-purple-900/20 px-2 py-0.5 rounded-full mb-1 inline-block">
                      {event.type}
                    </span>
                    <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white text-sm hover:text-primary-600"><Link to={`/events/${event.slug}`}>{event.title}</Link></Typography>
                    <Typography variant="body" className="text-slate-500">{event.time} • {event.location}</Typography>
                  </div>
                </div>
              ))}
            </Stack>
          </div>

        </Grid>
      </section>

    </div>
  );
};

export default ResourcesPage;
