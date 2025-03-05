
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

const Index = () => {
  // Smooth scroll to section when clicking on anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id as string);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      }
    };

    // Force dark mode for landing page
    document.documentElement.classList.add('dark');

    document.addEventListener('click', handleAnchorClick);
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      // Remove dark mode when unmounting
      document.documentElement.classList.remove('dark');
    };
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen dark bg-[#0a0118]">
      {/* Background elements */}
      <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-[#0a0118]">
        {/* Animated blur gradients */}
        <div className="absolute top-[10%] right-[10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] opacity-60 animate-pulse-soft"></div>
        <div className="absolute bottom-[15%] left-[5%] w-[30%] h-[30%] bg-blue-600/20 rounded-full blur-[120px] opacity-60 animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[20%] w-[25%] h-[25%] bg-fuchsia-600/10 rounded-full blur-[100px] opacity-70 animate-pulse-soft" style={{ animationDelay: '3s' }}></div>
      
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djI2aDI0VjM0aC0yNHpNMCAwaDI0djI0SDBWMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
