import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight, ShieldCheck, Lock, Users, Briefcase, Handshake } from 'lucide-react';
import Button from '../components/Button';
import { Input, Checkbox } from '../components/Form';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import Typography from '../components/Typography';
import Container from '../components/Container';
import Stack from '../components/Stack';

type LoginType = 'employee' | 'admin' | 'partner';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState<LoginType>('employee');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyCode, setCompanyCode] = useState(''); // Extra field for Employee

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login delay
    await new Promise(r => setTimeout(r, 1500));
    setIsLoading(false);
    
    // Redirect to Coming Soon as backend is not ready
    navigate('/coming-soon');
  };

  const getLoginTitle = () => {
     switch(loginType) {
        case 'employee': return 'Employee Self-Service';
        case 'admin': return 'Admin Console';
        case 'partner': return 'Partner Portal';
     }
  };

  const getLoginDesc = () => {
     switch(loginType) {
        case 'employee': return 'Access payroll, attendance, and requests.';
        case 'admin': return 'Manage organization settings and users.';
        case 'partner': return 'Access sales tools and client management.';
     }
  };

  return (
    <Stack direction="horizontal" gap={4} className="min-h-screen bg-white dark:bg-slate-950 font-sans">
      <SEO title="Login to BizOps | Enterprise ERP" description="Secure access to your BizOps workspace." />

      {/* LEFT: FORM SECTION */}
      <Stack direction="vertical" gap={4} justify="center" className="w-full lg:w-1/2 px-8 sm:px-12 lg:px-24 py-12 relative z-10">
        <Container className="w-full">
          
          {/* Logo Mobile Only */}
          <Link to="/" className="lg:hidden flex items-center gap-2 mb-8 w-fit">
             <Stack direction="horizontal" gap={4} align="center" justify="center" className="w-8 h-8 bg-slate-900 rounded-lg">
                <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
             </Stack>
             <span className="font-bold text-xl text-slate-900 dark:text-white">BizOps</span>
          </Link>

          <div className="mb-8">
            <Typography variant="h1" as="h1">Welcome back</Typography>
            <Typography variant="body" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">Please select your login type to continue.</Typography>
          </div>

          {/* Login Type Switcher */}
          <Stack direction="horizontal" gap={4} className="p-1 bg-slate-100 dark:bg-slate-900 rounded-xl mb-8">
             <button 
                onClick={() => setLoginType('employee')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg transition-all ${loginType === 'employee' ? 'bg-white dark:bg-slate-800 text-primary-600 dark:text-primary-400 shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:text-slate-300 dark:hover:text-slate-200'}`}
             >
                <Users className="w-4 h-4" /> Employee
             </button>
             <button 
                onClick={() => setLoginType('admin')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg transition-all ${loginType === 'admin' ? 'bg-white dark:bg-slate-800 text-primary-600 dark:text-primary-400 shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:text-slate-300 dark:hover:text-slate-200'}`}
             >
                <Briefcase className="w-4 h-4" /> Admin
             </button>
             <button 
                onClick={() => setLoginType('partner')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg transition-all ${loginType === 'partner' ? 'bg-white dark:bg-slate-800 text-primary-600 dark:text-primary-400 shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:text-slate-300 dark:hover:text-slate-200'}`}
             >
                <Handshake className="w-4 h-4" /> Partner
             </button>
          </Stack>

          <motion.div
             key={loginType}
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.3 }}
          >
             <Stack direction="horizontal" gap={3} align="center" className="mb-6 p-4 bg-primary-50 dark:bg-primary-900/10 border border-primary-100 dark:border-primary-900/30 rounded-xl">
                <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-primary-600">
                   {loginType === 'employee' && <Users className="w-5 h-5" />}
                   {loginType === 'admin' && <Briefcase className="w-5 h-5" />}
                   {loginType === 'partner' && <Handshake className="w-5 h-5" />}
                </div>
                <div>
                   <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white">{getLoginTitle()}</Typography>
                   <Typography variant="body" className="text-slate-500 dark:text-slate-400 dark:text-slate-300">{getLoginDesc()}</Typography>
                </div>
             </Stack>

             <form onSubmit={handleLogin} className="space-y-5">
                
                {/* Extra field for Employee: Company Code */}
                {loginType === 'employee' && (
                   <Input 
                      label="Company Code" 
                      placeholder="Ex: BIZOPS-ID" 
                      value={companyCode}
                      onChange={(e) => setCompanyCode(e.target.value)}
                      className="uppercase"
                   />
                )}

                <Input 
                   label={loginType === 'employee' ? "Employee ID / Email" : "Work Email"}
                   type={loginType === 'employee' ? "text" : "email"}
                   placeholder={loginType === 'employee' ? "EMP-001" : "name@company.com"} 
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   required
                   autoComplete="username"
                />

                <div className="relative">
                   <Input 
                      label="Password" 
                      type={showPassword ? "text" : "password"} 
                      placeholder="••••••••" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      autoComplete="current-password"
                   />
                   <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-[34px] text-slate-400 hover:text-slate-600 dark:text-slate-300 dark:hover:text-slate-300 transition-colors focus:outline-none"
                   >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                   </button>
                </div>

                <Stack direction="horizontal" gap={4} align="center" justify="between">
                   <Checkbox label="Remember me" name="remember" />
                  <Link to="/coming-soon" className="text-sm font-semibold text-primary-600 hover:text-primary-700 hover:underline">
                     Forgot password?
                  </Link>
                </Stack>

                <Button fullWidth size="md" type="submit" isLoading={isLoading} className="text-base shadow-lg shadow-primary-500/20">
                   {isLoading ? 'Signing in...' : `Sign in as ${loginType === 'admin' ? 'Administrator' : loginType === 'employee' ? 'Employee' : 'Partner'}`}
                </Button>
             </form>
          </motion.div>

          {loginType === 'partner' ? (
             <Typography variant="caption" className="text-slate-500 dark:text-slate-400 dark:text-slate-300 text-center block">
               Want to become a partner? <Link to="/partners/apply" className="font-bold text-primary-600 hover:text-primary-700 hover:underline">Apply Now</Link>
             </Typography>
          ) : (
             <Typography variant="caption" className="text-slate-500 dark:text-slate-400 dark:text-slate-300 text-center block">
               Don't have an account? <Link to="/contact" className="font-bold text-primary-600 hover:text-primary-700 hover:underline">Contact Sales</Link>
             </Typography>
          )}
          
          <Stack direction="horizontal" gap={4} align="center" justify="center" className="mt-12 text-xs text-slate-400 dark:text-slate-300">
             <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> SOC2 Compliant</span>
             <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> 256-bit SSL</span>
          </Stack>

        </Container>
      </Stack>

      {/* RIGHT: VISUAL SECTION (Desktop Only) */}
      <Stack direction="horizontal" gap={4} align="center" justify="center" className="hidden w-1/2 bg-slate-900 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
         
         {/* Animated Background Shapes */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

         <div className="relative z-10 max-w-lg px-8 text-center">
            <AnimatePresence mode="wait">
               <motion.div 
                  key={loginType}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="mb-10"
               >
                  {loginType === 'employee' && (
                     <div className="bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl border border-slate-700 shadow-2xl text-left transform rotate-[-2deg]">
                        <div className="flex items-center gap-4 mb-4 border-b border-slate-700 pb-4">
                           <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold gap-4">JD</div>
                           <div>
                              <div className="text-white font-bold">John Doe</div>
                              <div className="text-slate-400 dark:text-slate-300 text-xs">Senior Engineer</div>
                           </div>
                           <div className="ml-auto text-green-400 dark:text-green-300 text-xs">● Active</div>
                        </div>
                        <div className="space-y-3">
                           <div className="h-2 w-3/4 bg-slate-700 rounded-full"></div>
                           <div className="h-2 w-1/2 bg-slate-700 rounded-full"></div>
                           <div className="mt-4 flex gap-2">
                              <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-300 text-xs">Payroll Ready</span>
                              <span className="px-2 py-1 rounded bg-green-500/20 text-green-300 text-xs">Payslip Generated</span>
                           </div>
                        </div>
                     </div>
                  )}
                  {loginType === 'admin' && (
                     <img 
                        src="https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2064&auto=format&fit=crop" 
                        alt="Admin Dashboard" 
                        className="rounded-2xl shadow-2xl border border-slate-700/50 transform rotate-2 hover:rotate-0 transition-transform duration-700"
                     />
                  )}
                  {loginType === 'partner' && (
                     <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-8 rounded-2xl border border-indigo-700/50 shadow-2xl text-white">
                        <Typography variant="h3" as="h3">Partner Growth</Typography>
                        <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 mb-6 leading-tight">
                           +125% <span className="text-sm font-normal text-slate-300">YoY</span>
                        </div>
                        <div className="space-y-2">
                           <div className="flex justify-between text-sm text-indigo-200 gap-4">
                              <span>Active Clients</span>
                              <span className="font-bold text-white">14</span>
                           </div>
                           <div className="w-full bg-indigo-950 rounded-full h-2">
                              <div className="bg-indigo-400 h-2 rounded-full w-[70%]"></div>
                           </div>
                        </div>
                     </div>
                  )}
               </motion.div>
            </AnimatePresence>
            
            <motion.blockquote 
               key={`quote-${loginType}`}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.4 }}
               className="text-xl font-medium text-white mb-6 leading-relaxed"
            >
               {loginType === 'employee' 
                  ? "\"Checking my payslip and requesting leave has never been this easy. The mobile app is a lifesaver.\""
                  : loginType === 'admin'
                  ? "\"BizOps has completely transformed how we manage our multi-company finance. The consolidation feature alone saved us 40 hours a month.\""
                  : "\"The partner portal gives us full visibility into our client's performance and our revenue share. Transparent and efficient.\""
               }
            </motion.blockquote>
            
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="flex items-center justify-center gap-4"
            >
               <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="User" />
               </div>
               <div className="text-left">
                  <div className="text-white font-bold text-sm">Budi Santoso</div>
                  <div className="text-slate-400 dark:text-slate-300 text-xs">
                     {loginType === 'employee' ? 'Staff, PT Maju Jaya' : loginType === 'admin' ? 'CFO, Nusantara Group' : 'CEO, Solusi Tekno'}
                  </div>
               </div>
            </motion.div>
         </div>
         
         <div className="absolute bottom-8 left-8 text-slate-500 dark:text-slate-400 dark:text-slate-300 text-xs">
            © 2024 BizOps Indonesia. All rights reserved.
         </div>
      </Stack>
    </Stack>
  );
};

export default LoginPage;
