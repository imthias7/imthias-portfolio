"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  Sparkles,
  GraduationCap,
  Cpu,
  Copy,
  Check,
  Headphones,
  Sliders,
  BarChart3,
  Search,
  Database,
  Layers,
  LineChart,
  Rocket
} from "lucide-react";

// Real High-Fidelity SVG Brand Icons for Tools
function PythonIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <defs>
        <linearGradient id="py1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#387eb8" />
          <stop offset="100%" stopColor="#366994" />
        </linearGradient>
        <linearGradient id="py2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffe873" />
          <stop offset="100%" stopColor="#ffd43b" />
        </linearGradient>
      </defs>
      <path fill="url(#py1)" d="M63.5 6.2c-27.4 0-25.7 11.9-25.7 11.9l.1 12.3h26.2v3.7H27.5S9.4 32.1 9.4 59.5c0 27.5 15.8 26.5 15.8 26.5h9.4v-13.2s-.5-15.8 15.5-15.8h26.8s15 .2 15-14.7V18.1s2.2-11.9-28.4-11.9zm-14.3 8.3c2.7 0 4.9 2.2 4.9 4.9s-2.2 4.9-4.9 4.9-4.9-2.2-4.9-4.9 2.2-4.9 4.9-4.9z"/>
      <path fill="url(#py2)" d="M64.5 121.8c27.4 0 25.7-11.9 25.7-11.9l-.1-12.3H63.9v-3.7h36.6s18.1 2 18.1-25.4c0-27.5-15.8-26.5-15.8-26.5h-9.4v13.2s.5 15.8-15.5 15.8H52.1s-15-.2-15 14.7v14.2s-2.2 11.9 28.4 11.9zm14.3-8.3c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9-2.2 4.9-4.9 4.9z"/>
    </svg>
  );
}

function TensorflowIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <polygon fill="#ff6f00" points="64,12.7 64,115.3 43.1,102.8 43.1,49.8 14.9,66.5 14.9,41.9" />
      <polygon fill="#ffa800" points="64,12.7 64,115.3 84.9,102.8 84.9,49.8 113.1,66.5 113.1,41.9" />
    </svg>
  );
}

function JavaIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <path fill="#e76f00" d="M47.8 97.4c16.3 1.3 33-1.6 33-1.6s4.5 2.5 10.4 4.8c-23.2 9.5-56.1 4.5-62.9 1.1 0 0 3.7-2.6 19.5-4.3zm-6.1-13.8c18.5 1.5 37.5-1.9 37.5-1.9s3.1 3.2 7.2 6.1c-26.3 10.8-63.5 5.1-71.2 1.3 0 0 4.2-2.9 26.5-5.5zm19.3-29.6c4.6 5.3 1.2 10.1-4.7 15.6-7.8 7.3-10.4 11.4-1.5 18.2 0 0-14.7-7.8-7.9-17 7.7-10.3 11.3-12.2 14.1-16.8zm21.6 23.4c8.4-9.7 1.8-19.1-3.9-27.4-4.5-6.5-7.3-11.4-3.6-17.7 0 0-11.9 6.8-5.7 19 6.5 12.9 7.7 15.5-3.8 26.1 5.9.1 11.5-.9 17-2.4zm-13.8-50.6c3.1 3.6 1.8 7-2.1 10.8-5.3 5.1-7 7.9-1 12.6 0 0-9.9-5.4-5.3-11.8 5.2-7.1 7.6-8.4 9.4-11.6z"/>
      <path fill="#5382a1" d="M84.2 110.1c-26.3 5.4-60.6 2.8-72.1-1.3 0 0 5.2 3.7 20.3 5.4 20.7 2.4 46.4 1 65.5-4.1z"/>
    </svg>
  );
}

function RIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <defs>
        <linearGradient id="rgrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2264b3" />
          <stop offset="100%" stopColor="#1a4c88" />
        </linearGradient>
      </defs>
      <path fill="#b8c6d1" d="M64 12C32 12 16 34 16 64s16 52 48 52c28 0 43-16 47-38h-23c-3 10-11 18-24 18-20 0-27-14-27-32s7-32 27-32c14 0 21 8 24 18h23C99 28 84 12 64 12z"/>
      <path fill="url(#rgrad)" d="M72 40H44v48h18V73h9l10 15h21L89 71c8-3 13-10 13-18 0-8-8-13-30-13zm-10 19h-8V52h8c6 0 11 1 11 3s-5 4-11 4z"/>
    </svg>
  );
}

function SqlIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <ellipse cx="64" cy="28" rx="44" ry="16" fill="#00758f"/>
      <path fill="#00758f" d="M20 28v36c0 8.8 19.7 16 44 16s44-7.2 44-16V28H20z" opacity="0.85"/>
      <path fill="#00758f" d="M20 64v36c0 8.8 19.7 16 44 16s44-7.2 44-16V64H20z"/>
    </svg>
  );
}

function AzureIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <path fill="#0078d4" d="M20 98l32-68h24l-32 68z"/>
      <path fill="#50e6ff" d="M46 98l28-60 34 60z" opacity="0.9"/>
      <path fill="#0089d6" d="M74 38l-18 38 18 22h34z"/>
    </svg>
  );
}

function GitIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <path fill="#f05032" d="M124.7 57.3L70.7 3.3c-4.4-4.4-11.5-4.4-15.9 0L3.3 54.8c-4.4 4.4-4.4 11.5 0 15.9l54 54c4.4 4.4 11.5 4.4 15.9 0l51.5-51.5c4.4-4.4 4.4-11.5 0-15.9z"/>
      <circle cx="88" cy="64" r="8" fill="#fff"/>
      <circle cx="48" cy="40" r="8" fill="#fff"/>
      <circle cx="48" cy="88" r="8" fill="#fff"/>
      <path stroke="#fff" strokeWidth="6" d="M48 48v32M54 44l28 16" fill="none"/>
    </svg>
  );
}

function GitHubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function VSCodeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <path fill="#0065a9" d="M92 120l28-14V22L92 8l-44 38L24 28l-16 8 20 28-20 28 16 8 24-18z"/>
      <path fill="#007acc" d="M120 22L92 8 48 46l44 38z" opacity="0.9"/>
      <path fill="#1f9cf0" d="M120 106V22L92 44v40z"/>
    </svg>
  );
}

function JupyterIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <path fill="#f37626" d="M64 20c-24 0-44 9-44 20s20 20 44 20 44-9 44-20-20-20-44-20zm0 48c-24 0-44 9-44 20s20 20 44 20 44-9 44-20-20-20-44-20z"/>
      <circle cx="28" cy="64" r="6" fill="#9e9e9e"/>
      <circle cx="100" cy="40" r="5" fill="#616161"/>
      <circle cx="98" cy="88" r="7" fill="#424242"/>
    </svg>
  );
}

function LinuxIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <path fill="#ffcc00" d="M46 114c-8 0-14-6-14-14 0-4 4-8 10-10 12-4 22 2 22 8 0 9-8 16-18 16zm36 0c-10 0-18-7-18-16 0-6 10-12 22-8 6 2 10 6 10 10 0 8-6 14-14 14z"/>
      <path fill="#2b2b2b" d="M64 14c-16 0-26 14-26 32 0 10 3 24 5 36 2 12-2 18-2 22 0 6 11 10 23 10s23-4 23-10c0-4-4-10-2-22 2-12 5-26 5-36 0-18-10-32-26-32z"/>
      <ellipse cx="64" cy="74" rx="18" ry="24" fill="#ffffff"/>
      <circle cx="56" cy="38" r="3" fill="#ffffff"/>
      <circle cx="72" cy="38" r="3" fill="#ffffff"/>
      <path fill="#ff9900" d="M58 46c0-3 3-5 6-5s6 2 6 5l-6 8z"/>
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 1.45-1.45A1.46 1.46 0 0 0 6.46 5.86 1.46 1.46 0 0 0 5 7.31a1.45 1.45 0 0 0 1.46 1.45m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  );
}

// Fade in scroll animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" as const } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

export default function PortfolioPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-magazine-radial text-[#ecdccb] selection:bg-[#911f3d] selection:text-white font-sans-clean overflow-hidden">
      {/* Editorial Decorative Flowers (Subtle floral borders matching the reference) */}
      <div 
        className="pointer-events-none absolute -top-12 -right-12 w-96 h-96 opacity-35 mix-blend-screen bg-contain bg-no-repeat bg-right-top z-0 blur-[1px]"
        style={{
          backgroundImage: `radial-gradient(circle at 70% 30%, rgba(190, 30, 80, 0.45), rgba(70, 10, 30, 0.2) 50%, transparent 75%)`,
        }}
      />

      {/* Hero Right Floral Accent (matching reference deep red flower) */}
      <div className="pointer-events-none absolute top-[340px] -right-14 w-80 h-96 z-0 opacity-40 mix-blend-color-dodge filter drop-shadow-[0_0_30px_rgba(200,30,80,0.35)]">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-[#961c3c]/60">
          <path d="M42.7,-64.1C55.4,-56.9,65.8,-45.5,72.4,-32.1C79,-18.7,81.8,-3.4,79.5,11.2C77.2,25.8,69.9,39.6,59.3,50.1C48.8,60.6,35,67.7,20.3,71.7C5.6,75.7,-10,76.6,-24.1,72.5C-38.3,68.4,-51,59.3,-60.7,47.4C-70.4,35.5,-77,20.7,-77.9,5.7C-78.8,-9.4,-74,-24.6,-64.7,-36.5C-55.4,-48.4,-41.6,-57,-27.7,-63.5C-13.8,-70,0.2,-74.4,14.6,-73.4C28.9,-72.4,43.6,-65.9,42.7,-64.1Z" transform="translate(100 100)" />
        </svg>
      </div>

      {/* Mid Left Flower Accent */}
      <div className="pointer-events-none absolute top-[750px] -left-20 w-80 h-96 z-0 opacity-35 mix-blend-color-dodge">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-[#831735]/50">
          <path d="M47.7,-67.3C61.4,-57.8,72,-43.3,76.9,-27.1C81.8,-11,81,6.8,75.3,23.2C69.6,39.5,59,54.4,45.2,64.3C31.5,74.2,14.6,79.1,-2.7,82.8C-20,86.5,-37.8,89,-51.7,80.1C-65.7,71.2,-75.8,50.9,-79.8,31.2C-83.9,11.6,-81.9,-7.4,-74.6,-23.7C-67.4,-40.1,-54.9,-53.8,-40.5,-63C-26.1,-72.1,-9.8,-76.8,4.5,-83C18.8,-89.2,33.9,-76.8,47.7,-67.3Z" transform="translate(100 100)" />
        </svg>
      </div>

      {/* Bottom Right and Left Floral Clusters */}
      <div className="pointer-events-none absolute bottom-0 -right-16 w-88 h-88 z-0 opacity-30 filter drop-shadow-[0_0_40px_rgba(180,20,70,0.4)]">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-[#8f1839]/60">
          <path d="M45.1,-63.9C57.4,-54.8,65.8,-40.8,71.7,-25.6C77.5,-10.4,80.8,6,77.3,21.2C73.8,36.4,63.4,50.4,49.9,60.5C36.4,70.6,19.7,76.8,2.7,73.1C-14.3,69.4,-31.6,55.8,-45.5,43.2C-59.5,30.6,-70,19,-72.9,5C-75.7,-9.1,-70.9,-25.5,-60.9,-38.3C-50.9,-51.1,-35.8,-60.2,-20.9,-65.7C-6,-71.2,8.9,-73,45.1,-63.9Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="pointer-events-none absolute bottom-12 -left-20 w-80 h-80 z-0 opacity-25">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-[#781531]/50">
          <path d="M38.1,-54.2C49.9,-44.6,60.2,-33.5,65.4,-20.1C70.6,-6.6,70.7,9.3,65.7,23.8C60.7,38.3,50.6,51.4,37.3,60.8C24.1,70.2,7.7,75.9,-8.9,74.7C-25.5,73.5,-42.2,65.3,-53.6,53C-65,40.6,-71.1,24.1,-71.8,7.3C-72.6,-9.5,-68.1,-26.6,-57.8,-39.3C-47.5,-52,-31.4,-60.3,-16.1,-62.4C-0.8,-64.5,14.6,-60.4,38.1,-54.2Z" transform="translate(100 100)" />
        </svg>
      </div>

      {/* MAIN CONTAINER: Full editorial width matching reference */}
      <div className="relative z-10 w-full max-w-[1440px] xl:max-w-[1536px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8">
        
        {/* ======================= HERO SECTION ======================= */}
        <section className="relative pt-2 pb-0 border-b border-editorial overflow-hidden">
          {/* Top Header Labels */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-between items-center text-[12px] sm:text-[14px] tracking-[0.28em] uppercase text-[#ecdccb]/90 pb-4 sm:pb-6 font-medium"
          >
            <span className="flex items-center gap-2.5">
              <span className="inline-block w-2 h-2 rounded-full bg-[#da3b64] animate-ping"></span>
              AI/ML ENGINEER &amp; DEVELOPER
            </span>
            <span className="tracking-[0.35em] text-[#ecdccb]/80 font-serif-luxury text-base">
              PORTFOLIO
            </span>
          </motion.div>

          {/* LAYER 1: Massive Editorial IMTHIAS Typography Banner with Metallic Burgundy-to-White Sheen */}
          <div className="relative select-none text-center -mt-2 sm:-mt-4 lg:-mt-6 pt-0 w-full z-0 pointer-events-none">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95, y: -30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[20vw] sm:text-[19vw] lg:text-[220px] xl:text-[250px] font-serif-luxury font-medium tracking-[0.08em] leading-[0.88] uppercase m-0 p-0 w-full text-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontWeight: 600,
                background: "linear-gradient(90deg, #6b142c 0%, #9e2343 18%, #cf637e 36%, #f3cad4 52%, #fdf5f3 70%, #ffffff 88%, #f0f7ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              IMTHIAS
            </motion.h1>
          </div>

          {/* LAYER 2: 3-Column Content & Portrait Composition */}
          {/* Mobile order: Portrait FIRST (order-1), then Name & Title (order-2), then Summary (order-3). Desktop preserves 3 columns */}
          <div className="relative mt-2 sm:mt-6 lg:-mt-16 xl:-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end z-10">
            
            {/* Center Column: Portrait Photograph (On mobile placed ABOVE Name & Title) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.1 }}
              className="lg:col-span-6 xl:col-span-6 order-1 lg:order-2 flex justify-center items-end relative z-20"
            >
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-[280px] sm:w-[380px] md:w-[440px] lg:w-[480px] xl:w-[530px] flex items-end justify-center mt-2 sm:mt-0 lg:-mt-6 xl:-mt-8 mb-0"
              >
                {/* Back subtle pulsing glow matching the burgundy blazer */}
                <motion.div 
                  animate={{ opacity: [0.65, 0.85, 0.65] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-t from-[#8d1d3d]/70 via-[#721530]/35 to-transparent blur-3xl rounded-full transform -translate-y-4"
                />
                
                <img
                  src="/profile-v3.png"
                  alt="Imthias Ahmed - AI/ML Engineer"
                  className="relative z-10 w-full h-auto block object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.98)] filter contrast-[1.04]"
                />
              </motion.div>
            </motion.div>

            {/* Left Column: Name & Title (order-2 on mobile, order-1 on desktop) */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="lg:col-span-3 xl:col-span-3 order-2 lg:order-1 pt-4 lg:pt-0 pb-2 lg:pb-12 text-center lg:text-left relative z-20 flex flex-col items-center lg:items-start"
            >
              <div className="border-l-0 lg:border-l-2 border-[#ecdccb]/80 pl-0 lg:pl-5 space-y-2">
                <motion.h2 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl sm:text-5xl lg:text-[50px] xl:text-[58px] leading-[1.05] font-serif-luxury font-normal tracking-wide text-[#f3e9df] drop-shadow-md"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  Imthias<br />Ahmed
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-[12px] sm:text-[14px] tracking-[0.22em] uppercase text-[#e1cfbe] font-medium pt-1"
                >
                  AI &amp; ML Undergraduate
                </motion.p>
              </div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-[11px] sm:text-[12px] tracking-[0.24em] uppercase text-[#bcaaa0] mt-4 lg:mt-6 leading-relaxed font-semibold max-w-xs lg:max-w-none"
              >
                BUILDING INTELLIGENT, DATA-DRIVEN<br />SOLUTIONS WITH AI &amp; ML
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="pt-5 lg:pt-6"
              >
                <a
                  href="#projects"
                  className="inline-flex items-center gap-3 px-7 py-3 rounded-full border border-[#ecdccb]/40 text-[#ecdccb] text-[11px] sm:text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-[#ecdccb] hover:text-[#18060d] hover:border-[#ecdccb] transition-all duration-300 group shadow-lg hover:shadow-[0_0_25px_rgba(236,220,203,0.35)]"
                >
                  <span>VIEW PROJECTS</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column: Professional Summary & Availability */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="lg:col-span-3 xl:col-span-3 order-3 lg:order-3 space-y-4 pb-6 lg:pb-12 text-center lg:text-left relative z-20 flex flex-col items-center lg:items-start"
            >
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="text-[12px] sm:text-[13px] tracking-[0.25em] uppercase text-[#ecdccb] font-medium drop-shadow-sm"
              >
                PROFESSIONAL SUMMARY
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="text-[12.5px] sm:text-[13.5px] leading-relaxed text-[#c8b7aa] font-normal max-w-md lg:max-w-none"
              >
                AI and ML undergraduate with a strong foundation in machine learning, deep learning, data analysis, and cloud fundamentals. Experienced in building data-driven applications and AI-powered solutions using Python and modern ML libraries.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="pt-2 space-y-2.5 text-[12px] text-[#dac5b5] flex flex-col items-center lg:items-start"
              >
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#da3b64] shrink-0 animate-bounce" />
                  <span>Kannur, Kerala, India</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse"></span>
                  <span className="text-[#e2d5cb] font-medium tracking-wide">
                    Open for Internships &amp; Placements
                  </span>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* ======================= SELECTED PROJECTS ======================= */}
        <motion.section 
          id="projects" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="py-14 border-b border-editorial"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="flex justify-between items-center mb-8">
            <h2 className="text-[13px] sm:text-[14px] tracking-[0.25em] uppercase text-[#ecdccb] font-medium flex items-center gap-2.5">
              <span>SELECTED PROJECTS</span>
              <Sparkles className="w-3.5 h-3.5 text-[#d33a62] animate-spin" style={{ animationDuration: '6s' }} />
            </h2>
            <a 
              href="https://github.com/muhammedfarisk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[11px] sm:text-[12px] tracking-[0.22em] uppercase text-[#bfaea1] hover:text-[#ecdccb] flex items-center gap-2 transition-colors group"
            >
              <span>VIEW ALL PROJECTS</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
            </a>
          </motion.div>

          {/* 3 Projects Grid (Glassmorphism + Smooth Transitions) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Project 01: Mood-Based Music Recommender */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass-panel glass-panel-hover rounded-xl p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl font-serif-luxury text-[#e8ded6]/75 group-hover:text-[#da3b64] transition-colors">01</span>
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#f5ece4] group-hover:text-[#da3b64] transition-colors leading-snug">
                      Mood-Based Music Recommender
                    </h3>
                    <p className="text-[11px] text-[#ad9c90] tracking-wider uppercase mt-0.5">
                      AI / Machine Learning
                    </p>
                  </div>
                </div>

                {/* Glass Mockup Visual with Animated Visualizer */}
                <div className="relative w-full h-44 rounded-lg bg-gradient-to-b from-[#250b18]/80 to-[#10040a]/90 border border-[#ecdccb]/10 p-3 my-4 flex flex-col items-center justify-center overflow-hidden shadow-inner group-hover:border-[#da3b64]/30 transition-all">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(218,59,100,0.25),transparent_70%)]"></div>
                  
                  {/* Floating Elements */}
                  <div className="relative z-10 flex items-center gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 rounded-full glass-badge flex items-center justify-center shadow-[0_0_20px_rgba(214,61,102,0.35)] text-[#f395b0]"
                    >
                      <Headphones className="w-8 h-8" />
                    </motion.div>
                    <div className="glass-panel px-4 py-2 rounded-lg text-center shadow-lg border border-[#ecdccb]/15">
                      <p className="text-[9px] uppercase tracking-wider text-[#9f8c80]">Your Mood?</p>
                      <p className="text-[13px] font-medium text-[#f6ed88] flex items-center gap-1.5 justify-center mt-0.5">
                        <span className="animate-bounce">😊</span> Happy
                      </p>
                      <div className="w-20 h-1 bg-[#da3b64]/40 rounded-full mt-2 overflow-hidden mx-auto">
                        <motion.div 
                          animate={{ width: ["40%", "85%", "60%"] }} 
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className="h-full bg-gradient-to-r from-[#da3b64] to-[#f49db2] rounded-full" 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Equalizer animation */}
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 opacity-75">
                    {[12, 22, 14, 26, 18, 10, 24, 16].map((h, i) => (
                      <motion.span 
                        key={i}
                        animate={{ height: [h * 0.4, h, h * 0.3] }}
                        transition={{ duration: 1 + (i % 3) * 0.3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 bg-gradient-to-t from-[#da3b64] to-[#f1b4c4] rounded-full"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-[12.5px] text-[#c0ada0] leading-relaxed mb-4">
                  A recommendation system that analyzes user mood and behavioral cues to suggest personalized music playlists in real-time.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-editorial-subtle">
                <span className="text-[10px] tracking-wider px-3 py-1 rounded-full glass-badge text-[#d8c7b8] group-hover:border-[#da3b64]/40 transition-colors">
                  Python
                </span>
                <span className="text-[10px] tracking-wider px-3 py-1 rounded-full glass-badge text-[#d8c7b8] group-hover:border-[#da3b64]/40 transition-colors">
                  Scikit-learn
                </span>
                <span className="text-[10px] tracking-wider px-3 py-1 rounded-full glass-badge text-[#d8c7b8] group-hover:border-[#da3b64]/40 transition-colors">
                  Data Processing
                </span>
              </div>
            </motion.div>

            {/* Project 02: Recommendation Systems */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass-panel glass-panel-hover rounded-xl p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl font-serif-luxury text-[#e8ded6]/75 group-hover:text-[#da3b64] transition-colors">02</span>
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#f5ece4] group-hover:text-[#da3b64] transition-colors leading-snug">
                      Recommendation Systems
                    </h3>
                    <p className="text-[11px] text-[#ad9c90] tracking-wider uppercase mt-0.5">
                      ML / Personalization
                    </p>
                  </div>
                </div>

                {/* Glass Mockup Visual with Animated Recommendation Cards */}
                <div className="relative w-full h-44 rounded-lg bg-gradient-to-b from-[#250b18]/80 to-[#10040a]/90 border border-[#ecdccb]/10 p-3 my-4 flex items-center justify-center gap-2.5 overflow-hidden shadow-inner group-hover:border-[#da3b64]/30 transition-all">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(164,35,69,0.3),transparent_70%)]"></div>
                  
                  {/* Visual Tiles with Glass & Hover */}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="relative z-10 w-20 h-28 glass-badge rounded-lg flex flex-col justify-between p-2 shadow-md"
                  >
                    <div className="w-full h-14 rounded bg-[#1f0612]/70 flex items-center justify-center text-sm">
                      🎬
                    </div>
                    <div className="w-full h-1 bg-[#ecdccb]/20 rounded"></div>
                    <span className="text-[8px] text-center text-[#d2beaf]">Content A</span>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.08 }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 w-24 h-32 glass-panel border-[#da3b64]/60 rounded-lg flex flex-col justify-between p-2 shadow-2xl scale-105"
                  >
                    <div className="w-full h-16 rounded bg-[#2b0c1b]/80 flex items-center justify-center relative shadow-inner">
                      <span className="text-lg">▶️</span>
                      <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#10b981] animate-ping"></span>
                    </div>
                    <div className="space-y-1">
                      <div className="w-full h-1.5 bg-[#da3b64] rounded-full"></div>
                      <div className="w-2/3 h-1 bg-[#ecdccb]/30 rounded-full"></div>
                    </div>
                    <span className="text-[9px] text-center font-semibold text-[#f6ede5]">Best Match</span>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="relative z-10 w-20 h-28 glass-badge rounded-lg flex flex-col justify-between p-2 shadow-md"
                  >
                    <div className="w-full h-14 rounded bg-[#1f0612]/70 flex items-center justify-center text-sm">
                      🎵
                    </div>
                    <div className="w-full h-1 bg-[#ecdccb]/20 rounded"></div>
                    <span className="text-[8px] text-center text-[#d2beaf]">Content B</span>
                  </motion.div>
                </div>

                <p className="text-[12.5px] text-[#c0ada0] leading-relaxed mb-4">
                  Designed and implemented personalized recommendation logic utilizing collaborative filtering and matrix factorization ML techniques.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-editorial-subtle">
                <span className="text-[10px] tracking-wider px-3 py-1 rounded-full glass-badge text-[#d8c7b8] group-hover:border-[#da3b64]/40 transition-colors">
                  Python
                </span>
                <span className="text-[10px] tracking-wider px-3 py-1 rounded-full glass-badge text-[#d8c7b8] group-hover:border-[#da3b64]/40 transition-colors">
                  Pandas
                </span>
                <span className="text-[10px] tracking-wider px-3 py-1 rounded-full glass-badge text-[#d8c7b8] group-hover:border-[#da3b64]/40 transition-colors">
                  ML
                </span>
              </div>
            </motion.div>

            {/* Project 03: Data Analysis & Visualization */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass-panel glass-panel-hover rounded-xl p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl font-serif-luxury text-[#e8ded6]/75 group-hover:text-[#da3b64] transition-colors">03</span>
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#f5ece4] group-hover:text-[#da3b64] transition-colors leading-snug">
                      Data Analysis &amp; Visualization
                    </h3>
                    <p className="text-[11px] text-[#ad9c90] tracking-wider uppercase mt-0.5">
                      Data Analytics
                    </p>
                  </div>
                </div>

                {/* Glass Mockup Visual with Bar and Donut Charts */}
                <div className="relative w-full h-44 rounded-lg bg-gradient-to-b from-[#250b18]/80 to-[#10040a]/90 border border-[#ecdccb]/10 p-3 my-4 flex items-center justify-around overflow-hidden shadow-inner group-hover:border-[#da3b64]/30 transition-all">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(164,35,69,0.25),transparent_70%)]"></div>
                  
                  {/* Bar Chart Mockup with animated heights */}
                  <div className="relative z-10 flex items-end gap-2 h-20 pl-2">
                    {[38, 56, 32, 74, 48].map((h, i) => (
                      <motion.div 
                        key={i}
                        animate={{ height: [`${h * 0.7}%`, `${h}%`, `${h * 0.8}%`] }}
                        transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-3 rounded-t-sm bg-gradient-to-t from-[#da3b64] to-[#f6d7df] shadow-lg"
                      />
                    ))}
                  </div>

                  {/* Donut Chart Mockup with rotating shimmer */}
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 rounded-full border-4 border-[#da3b64] border-t-[#ecdccb] border-r-[#881838] flex items-center justify-center shadow-lg"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#18060f]/90"></div>
                    </motion.div>
                    <div className="space-y-1.5 w-16">
                      <div className="h-1 bg-[#ecdccb]/30 rounded-full"></div>
                      <div className="h-1 bg-[#da3b64]/60 rounded-full w-2/3"></div>
                    </div>
                  </div>
                </div>

                <p className="text-[12.5px] text-[#c0ada0] leading-relaxed mb-4">
                  Performed end-to-end data cleaning, exploratory analysis, and visual dashboards to derive meaningful patterns and actionable business insights.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-editorial-subtle">
                <span className="text-[10px] tracking-wider px-3 py-1 rounded-full glass-badge text-[#d8c7b8] group-hover:border-[#da3b64]/40 transition-colors">
                  Python
                </span>
                <span className="text-[10px] tracking-wider px-3 py-1 rounded-full glass-badge text-[#d8c7b8] group-hover:border-[#da3b64]/40 transition-colors">
                  Matplotlib
                </span>
                <span className="text-[10px] tracking-wider px-3 py-1 rounded-full glass-badge text-[#d8c7b8] group-hover:border-[#da3b64]/40 transition-colors">
                  Power BI
                </span>
              </div>
            </motion.div>

          </div>
        </motion.section>

        {/* ======================= PROCESS & TOOLS SECTION ======================= */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="py-14 border-b border-editorial"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Columns: MY PROCESS & Center Floral Badge */}
            <div className="lg:col-span-7 pr-0 lg:pr-8 border-b lg:border-b-0 lg:border-r border-editorial pb-10 lg:pb-0">
              <motion.h2 variants={fadeInUp} className="text-[13px] tracking-[0.25em] uppercase text-[#ecdccb] font-medium flex items-center gap-2.5 mb-8">
                <span>MY PROCESS</span>
                <Sparkles className="w-3.5 h-3.5 text-[#d33a62]" />
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Steps 01 to 05 */}
                <div className="md:col-span-7 space-y-6">
                  
                  {[
                    { num: "01", title: "DISCOVER", desc: "Understand the problem, business goals, and user requirements." },
                    { num: "02", title: "PREPARE", desc: "Collect, clean, inspect, and preprocess data for modeling." },
                    { num: "03", title: "BUILD", desc: "Develop and train ML models using the right techniques and architectures." },
                    { num: "04", title: "EVALUATE", desc: "Assess performance metrics, fine-tune hyperparameters, and improve results." },
                    { num: "05", title: "DEPLOY", desc: "Turn the solution into a usable, reliable, and scalable application." },
                  ].map((step, idx) => (
                    <motion.div 
                      key={step.num}
                      variants={fadeInUp}
                      whileHover={{ x: 6, transition: { duration: 0.25 } }}
                      className="flex items-start gap-4 p-2.5 rounded-lg hover:bg-white/[0.03] transition-colors"
                    >
                      <span className="text-2xl font-serif-luxury text-[#e8ded6]/70 w-8 shrink-0">{step.num}</span>
                      <div>
                        <h4 className="text-[12px] uppercase tracking-wider font-semibold text-[#f5ede5] flex items-center gap-2">
                          <span>{step.title}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#da3b64] opacity-75"></span>
                        </h4>
                        <p className="text-[12.5px] text-[#bcaaa0] leading-normal mt-0.5">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}

                </div>

                {/* Center Circular Floral Graphic with Editorial Quote */}
                <motion.div variants={fadeInUp} className="md:col-span-5 flex flex-col items-center justify-center text-center px-2">
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    className="relative w-44 h-44 rounded-full glass-panel border border-[#ecdccb]/20 flex items-center justify-center p-3 shadow-[0_0_35px_rgba(164,35,69,0.25)] group"
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-70">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#a62247] to-[#450d1e] blur-md"></div>
                    </div>
                    {/* Stylized rose petals SVG */}
                    <svg viewBox="0 0 100 100" className="w-20 h-20 relative z-10 fill-[#c72652] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
                      <circle cx="50" cy="50" r="16" fill="#881534" />
                      <path d="M50 20 C60 30 70 30 65 45 C75 50 75 65 60 65 C55 78 40 75 35 65 C25 60 25 45 35 40 C30 25 45 25 50 20 Z" fill="#da3460" opacity="0.9" />
                    </svg>
                  </motion.div>
                  <p 
                    className="mt-4 text-[13.5px] italic text-[#d8c6b7] max-w-[210px] font-serif-luxury font-normal leading-snug"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    &ldquo;A data-driven approach to build real-world AI solutions.&rdquo;
                  </p>
                </motion.div>
              </div>

            </div>

            {/* Right 5 Columns: TOOLS I USE with REAL SVGs */}
            <div className="lg:col-span-5">
              <motion.h2 variants={fadeInUp} className="text-[13px] tracking-[0.25em] uppercase text-[#ecdccb] font-medium flex items-center gap-2.5 mb-8">
                <span>TOOLS I USE</span>
                <Sparkles className="w-3.5 h-3.5 text-[#d33a62]" />
              </motion.h2>

              {/* 2-Column Grid of 10 Real Tech Badges */}
              <div className="grid grid-cols-2 gap-3.5">
                {[
                  { name: "PYTHON", icon: PythonIcon },
                  { name: "TENSORFLOW", icon: TensorflowIcon },
                  { name: "JAVA", icon: JavaIcon },
                  { name: "R", icon: RIcon },
                  { name: "SQL", icon: SqlIcon },
                  { name: "AZURE", icon: AzureIcon },
                  { name: "GIT", icon: GitIcon },
                  { name: "GITHUB", icon: GitHubIcon },
                  { name: "VS CODE", icon: VSCodeIcon },
                  { name: "JUPYTER", icon: JupyterIcon },
                ].map((tool, idx) => {
                  const Icon = tool.icon;
                  return (
                    <motion.div 
                      key={tool.name}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.04, y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="glass-panel glass-panel-hover rounded-xl p-3.5 flex items-center gap-3.5 cursor-default group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center p-1.5 shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                        <Icon className="w-full h-full" />
                      </div>
                      <span className="text-[11px] sm:text-[12px] font-semibold tracking-wider uppercase text-[#ecdccb] group-hover:text-white transition-colors">
                        {tool.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </motion.section>

        {/* ======================= CERTIFICATIONS & AREAS OF INTEREST ======================= */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="py-14 border-b border-editorial"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Columns: CERTIFICATIONS (5 Cards with Real Icons & Glass) */}
            <div className="lg:col-span-7 pr-0 lg:pr-8 border-b lg:border-b-0 lg:border-r border-editorial pb-10 lg:pb-0">
              <motion.h2 variants={fadeInUp} className="text-[13px] tracking-[0.25em] uppercase text-[#ecdccb] font-medium flex items-center gap-2.5 mb-8">
                <span>CERTIFICATIONS</span>
                <Sparkles className="w-3.5 h-3.5 text-[#d33a62]" />
              </motion.h2>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5">
                {[
                  { title: "Linux", sub: "Training", icon: LinuxIcon },
                  { title: "Microsoft", sub: "Azure Fundamentals", icon: AzureIcon },
                  { title: "Java", sub: "(IIT Bombay)", icon: JavaIcon },
                  { title: "Git", sub: "(Version Control)", icon: GitIcon },
                  { title: "R", sub: "Programming", icon: RIcon, extraSpan: "col-span-2 sm:col-span-1" },
                ].map((cert, i) => {
                  const Icon = cert.icon;
                  return (
                    <motion.div 
                      key={cert.title}
                      variants={fadeInUp}
                      whileHover={{ y: -5, scale: 1.05 }}
                      transition={{ duration: 0.25 }}
                      className={`glass-panel glass-panel-hover rounded-xl p-3.5 text-center flex flex-col items-center justify-center min-h-[110px] group ${cert.extraSpan || ""}`}
                    >
                      <div className="w-8 h-8 mb-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-full h-full" />
                      </div>
                      <span className="text-[11px] font-medium text-[#ecdccb] leading-tight group-hover:text-white transition-colors">
                        {cert.title}<br />
                        <span className="text-[#a89689] text-[10px]">{cert.sub}</span>
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right 5 Columns: AREAS OF INTEREST */}
            <div className="lg:col-span-5">
              <motion.h2 variants={fadeInUp} className="text-[13px] tracking-[0.25em] uppercase text-[#ecdccb] font-medium flex items-center gap-2.5 mb-8">
                <span>AREAS OF INTEREST</span>
                <Sparkles className="w-3.5 h-3.5 text-[#d33a62]" />
              </motion.h2>

              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="flex items-start gap-4 p-5 glass-panel glass-panel-hover rounded-xl border border-editorial"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#911f3d] to-[#400d1c] border border-[#da3b64]/50 flex items-center justify-center shrink-0 shadow-lg text-[#ffd5e2]">
                  <Cpu className="w-6 h-6 animate-pulse" />
                </div>
                <p className="text-[13.5px] text-[#dac8bb] leading-relaxed">
                  Artificial Intelligence and Machine Learning applications, recommendation systems, deep neural networks, and cloud computing architectures.
                </p>
              </motion.div>
            </div>

          </div>
        </motion.section>

        {/* ======================= EDUCATION & CONTACT / CTA ======================= */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="py-14 border-b border-editorial"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 5 Columns: EDUCATION */}
            <div className="lg:col-span-5 pr-0 lg:pr-8 border-b lg:border-b-0 lg:border-r border-editorial pb-10 lg:pb-0">
              <motion.h2 variants={fadeInUp} className="text-[13px] tracking-[0.25em] uppercase text-[#ecdccb] font-medium flex items-center gap-2.5 mb-8">
                <span>EDUCATION</span>
                <Sparkles className="w-3.5 h-3.5 text-[#d33a62]" />
              </motion.h2>

              <motion.div variants={fadeInUp} className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl glass-panel">
                  <div className="w-11 h-11 rounded-lg bg-[#270b17] border border-[#ecdccb]/20 flex items-center justify-center shrink-0 text-[#f5ece4] shadow-md">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#f5ede5] leading-snug">
                      Bachelor of Engineering &ndash; Artificial Intelligence and Machine Learning
                    </h3>
                    <p className="text-[13px] text-[#bcaaa0] mt-1">
                      Yenepoya Institute of Technology, Karnataka
                    </p>
                    <div className="inline-block mt-2.5 px-3 py-1 rounded-full bg-[#200b14] border border-[#da3b64]/50 text-[#f1d7c4] text-[11px] font-semibold tracking-wider shadow-sm">
                      CGPA: 7.52
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[12px] leading-relaxed text-[#a89689] pl-3">
                  <span className="text-[#d8c5b6] font-medium">Relevant Coursework:</span> Data Structures, Machine Learning, Deep Learning, Database Management Systems, Operating Systems, Computer Networks.
                </div>
              </motion.div>
            </div>

            {/* Center 3 Columns: "LET'S CREATE SOMETHING Amazing" (Signature Script) */}
            <motion.div 
              variants={fadeInUp}
              className="lg:col-span-3 text-center lg:text-left flex flex-col justify-center py-4 lg:py-0 border-b lg:border-b-0 lg:border-r border-editorial pb-8 lg:pb-0 lg:pr-4"
            >
              <p 
                className="text-xl sm:text-2xl uppercase tracking-[0.18em] font-serif-luxury text-[#e8ded6] leading-tight"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                LET&apos;S CREATE<br />SOMETHING
              </p>
              <motion.p 
                animate={{ rotate: [-2, -4, -2], scale: [1, 1.03, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="text-5xl sm:text-6xl text-[#f395b0] font-script-luxury mt-2 select-none"
                style={{ fontFamily: "var(--font-script), cursive" }}
              >
                Amazing
              </motion.p>
            </motion.div>

            {/* Right 4 Columns: CONTACT DETAILS with Glass Cards */}
            <motion.div variants={fadeInUp} className="lg:col-span-4 pl-0 lg:pl-3 space-y-3.5 text-[12.5px]">
              
              {/* Email */}
              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-center justify-between p-2.5 rounded-lg glass-panel glass-panel-hover"
              >
                <a 
                  href="mailto:imthiasahmed05@gmail.com" 
                  className="flex items-center gap-3 text-[#dac5b5] hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#da3b64] shrink-0" />
                  <span>imthiasahmed05@gmail.com</span>
                </a>
                <button
                  onClick={() => copyToClipboard("imthiasahmed05@gmail.com")}
                  title="Copy email"
                  className="text-[#968478] hover:text-white transition-colors p-1"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </motion.div>

              {/* Phone */}
              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 p-2.5 rounded-lg glass-panel glass-panel-hover text-[#dac5b5]"
              >
                <Phone className="w-4 h-4 text-[#da3b64] shrink-0" />
                <a href="tel:+918848129446" className="hover:text-white transition-colors">
                  +91-8848129446
                </a>
              </motion.div>

              {/* Location */}
              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 p-2.5 rounded-lg glass-panel glass-panel-hover text-[#dac5b5]"
              >
                <MapPin className="w-4 h-4 text-[#da3b64] shrink-0" />
                <span>Kannur, Kerala, India</span>
              </motion.div>

              {/* LinkedIn */}
              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 p-2.5 rounded-lg glass-panel glass-panel-hover text-[#dac5b5]"
              >
                <LinkedInIcon className="w-4 h-4 text-[#0077b5] shrink-0" />
                <a 
                  href="https://linkedin.com/in/muhammed-faris-k" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors truncate"
                >
                  linkedin.com/in/muhammed-faris-k
                </a>
              </motion.div>

              {/* GitHub */}
              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 p-2.5 rounded-lg glass-panel glass-panel-hover text-[#dac5b5]"
              >
                <GitHubIcon className="w-4 h-4 text-white shrink-0" />
                <a 
                  href="https://github.com/muhammedfarisk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors truncate"
                >
                  github.com/muhammedfarisk
                </a>
              </motion.div>

            </motion.div>

          </div>
        </motion.section>

        {/* ======================= FOOTER ======================= */}
        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-12 pb-8 flex items-center justify-center gap-3 text-[11px] tracking-[0.3em] uppercase text-[#bfaea1]"
        >
          <span>THANK YOU FOR VISITING</span>
          <Sparkles className="w-3.5 h-3.5 text-[#da3b64] animate-spin" style={{ animationDuration: '8s' }} />
        </motion.footer>

      </div>
    </div>
  );
}
