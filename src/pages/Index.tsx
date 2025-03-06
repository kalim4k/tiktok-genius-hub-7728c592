import React, { useEffect } from 'react';
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import HowItWorks from '@/components/landing/HowItWorks';
import Testimonials from '@/components/landing/Testimonials';
import Pricing from '@/components/landing/Pricing';
import FAQ from '@/components/landing/FAQ';
import CTA from '@/components/landing/CTA';
import Footer from '@/components/landing/Footer';
import DemoSection from '@/components/landing/DemoSection';
import ClientRevenues from '@/components/landing/ClientRevenues';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen dark bg-[#0a0118]">
      <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-[#0a0118]">
        <div className="absolute top-[10%] right-[10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] opacity-60 animate-pulse-soft"></div>
        <div className="absolute bottom-[15%] left-[5%] w-[30%] h-[30%] bg-blue-600/20 rounded-full blur-[120px] opacity-60 animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[20%] w-[25%] h-[25%] bg-fuchsia-600/10 rounded-full blur-[100px] opacity-70 animate-pulse-soft" style={{ animationDelay: '3s' }}></div>
      
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djI2aDI0VjM0aC0yNHpNMCAwaDI0djI0SDBWMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <DemoSection />
        <ClientRevenues />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
