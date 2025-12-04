"use client";

import { motion } from "framer-motion";
import { ArrowRight, Waves, Utensils, BedDouble, Wifi, Shield, Clock, Sparkles, Star, LucideIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { siteConfig } from "@/lib/config";
import { IconName } from "@/lib/types";

// Icon mapping for dynamic icon rendering
const iconMap: Record<IconName, LucideIcon> = {
  Waves,
  Utensils,
  BedDouble,
  Wifi,
  Shield,
  Clock,
  Sparkles,
  Star,
};

function StickyBookingButton({ href, labelMobile, labelDesktop }: { href: string; labelMobile: string; labelDesktop: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-x-0 bottom-0 z-[999] px-4 pb-4 md:px-0 md:pb-0 md:right-6 md:inset-auto md:bottom-6 pointer-events-none space-y-3 md:space-y-0">
      <Link 
        href={href}
        className="md:hidden flex items-center justify-center gap-3 bg-stone-900 text-white py-4 tracking-[0.28em] uppercase text-[0.68rem] font-semibold hover:bg-stone-800 transition-colors shadow-2xl border border-stone-700/50 pointer-events-auto"
      >
        <span>{labelMobile}</span>
        <ArrowRight className="w-4 h-4" />
      </Link>

      <Link 
        href={href}
        className="hidden md:inline-flex items-center gap-3 bg-stone-900/95 backdrop-blur-sm text-white px-8 py-4 tracking-[0.18em] uppercase text-xs font-medium hover:bg-stone-800 transition-all shadow-2xl border border-stone-700/50 pointer-events-auto"
      >
        <span>{labelDesktop}</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>,
    document.body
  );
}

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const }
  };

  return (
    <main className="min-h-screen bg-washi text-stone-800 selection:bg-moss selection:text-white overflow-x-hidden">
      
      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION - With Vertical Japanese Typography
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pb-20 md:pb-32">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={siteConfig.heroImage} 
            alt={siteConfig.heroImageAlt} 
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          {/* Sophisticated overlay */}
          <div className="absolute inset-0 bg-stone-950/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-washi" />
        </div>

        {/* Vertical Japanese Text - Left Side */}
        <div className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-20">
          <p className="vertical-text font-serif-jp text-white/70 text-lg tracking-[0.5em] leading-loose">
            {siteConfig.nameJapanese}
          </p>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 w-full px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-center mx-auto max-w-xl md:max-w-3xl px-2 py-6 md:px-12 md:py-12 bg-transparent md:bg-stone-950/55 md:border md:border-white/10 md:backdrop-blur-sm shadow-none md:shadow-[0_25px_45px_rgba(0,0,0,0.45)]"
          >
            <p className="text-white/90 tracking-[0.5em] text-sm md:text-base uppercase mb-4 md:mb-5 font-medium drop-shadow-[0_4px_12px_rgba(0,0,0,0.75)]">
              {siteConfig.hero.establishment}
            </p>
            
            <h1 className="font-serif text-[clamp(3.2rem,11vw,5.8rem)] text-[#F8F1E6] mb-4 md:mb-6 tracking-[0.2em] font-light drop-shadow-[0_8px_25px_rgba(0,0,0,0.75)]">
              {siteConfig.name}
            </h1>
            
            <div className="w-12 md:w-16 h-px bg-gold/80 mx-auto mb-6 md:mb-7" />
            
            <p className="text-white/95 text-lg md:text-2xl font-serif font-light tracking-[0.2em] mb-8 md:mb-10 mx-auto leading-relaxed drop-shadow-[0_6px_18px_rgba(0,0,0,0.75)]">
              {siteConfig.hero.tagline.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < siteConfig.hero.tagline.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
            
            <Link 
              href={siteConfig.booking.url}
              className="group inline-flex items-center justify-center gap-4 px-10 py-4 bg-white/95 md:bg-white text-stone-900 tracking-[0.35em] uppercase text-sm md:text-base font-semibold shadow-lg hover:bg-washi transition-all duration-500"
            >
              <span>{siteConfig.hero.ctaLabel}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 text-stone-900" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          INTRO SECTION - Brutalist Borders
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-32 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0 border border-stone-800/15">
            
            {/* Text Column */}
            <motion.div 
              {...fadeIn}
              className="p-8 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-stone-800/15"
            >
              <p className="text-gold tracking-[0.4em] text-xs md:text-sm uppercase mb-5 md:mb-6">{siteConfig.intro.sectionLabel}</p>
              
              <h2 className="font-serif text-[2.2rem] md:text-4xl lg:text-5xl text-stone-900 leading-tight mb-6 md:mb-8 font-light">
                {siteConfig.intro.headline} <br/>
                <span className="italic text-moss">{siteConfig.intro.headlineAccent}</span>
              </h2>
              
              <p className="text-stone-600 leading-[1.85] font-light text-lg md:text-xl">
                {siteConfig.intro.description}
              </p>
            </motion.div>
            
            {/* Image Column */}
            <div className="relative h-[400px] md:h-auto md:min-h-[600px] overflow-hidden">
              <Image 
                src={siteConfig.intro.image} 
                alt={siteConfig.intro.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-[2s]"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          THREE PILLARS - Bento Grid with Brutalist Borders
      ═══════════════════════════════════════════════════════════════ */}
      <section className="px-4 md:px-12 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div {...fadeIn} className="text-center mb-10 md:mb-16">
            <p className="text-gold tracking-[0.4em] text-xs md:text-sm uppercase mb-3 md:mb-4">{siteConfig.pillars.sectionLabel}</p>
            <h2 className="font-serif text-[2.5rem] md:text-5xl text-stone-900 font-light">{siteConfig.pillars.headline}</h2>
          </motion.div>

          {/* Bento Grid - Desktop */}
          <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-0 border border-stone-800/15 h-[800px]">
            
            {/* Large Card - Onsen (spans 2 rows) */}
            {(() => {
              const onsen = siteConfig.features[0];
              const OnsenIcon = iconMap[onsen.iconName];
              return (
                <div className="row-span-2 relative group overflow-hidden border-r border-stone-800/15 cursor-pointer">
                  <Image 
                    src={onsen.image} 
                    alt={onsen.imageAlt} 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.85] group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <OnsenIcon className="w-6 h-6 mb-3 text-gold" />
                    <h3 className="font-serif text-4xl mb-2 font-light">{onsen.title}</h3>
                    <p className="text-white/70 text-base tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {onsen.description}
                    </p>
                  </div>
                </div>
              );
            })()}

            {/* Kaiseki */}
            {(() => {
              const kaiseki = siteConfig.features[1];
              const KaisekiIcon = iconMap[kaiseki.iconName];
              return (
                <div className="relative group overflow-hidden border-r border-b border-stone-800/15 cursor-pointer">
                  <Image 
                    src={kaiseki.image} 
                    alt={kaiseki.imageAlt} 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.85] group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <KaisekiIcon className="w-6 h-6 mb-3 text-gold" />
                    <h3 className="font-serif text-3xl mb-2 font-light">{kaiseki.title}</h3>
                    <p className="text-white/70 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {kaiseki.description}
                    </p>
                  </div>
                </div>
              );
            })()}

            {/* Garden View */}
            {(() => {
              const garden = siteConfig.features[2];
              const GardenIcon = iconMap[garden.iconName];
              return (
                <div className="relative group overflow-hidden border-b border-stone-800/15 cursor-pointer">
                  <Image 
                    src={garden.image} 
                    alt={garden.imageAlt} 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.85] group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <GardenIcon className="w-6 h-6 mb-3 text-gold" />
                    <h3 className="font-serif text-3xl mb-2 font-light">{garden.title}</h3>
                    <p className="text-white/70 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {garden.description}
                    </p>
                  </div>
                </div>
              );
            })()}

            {/* Tatami Rooms (spans 2 cols) */}
            {(() => {
              const tatami = siteConfig.features[3];
              const TatamiIcon = iconMap[tatami.iconName];
              return (
                <div className="col-span-2 relative group overflow-hidden cursor-pointer">
                  <Image 
                    src={tatami.image} 
                    alt={tatami.imageAlt} 
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.85] group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <TatamiIcon className="w-6 h-6 mb-3 text-gold" />
                    <h3 className="font-serif text-4xl mb-2 font-light">{tatami.title}</h3>
                    <p className="text-white/70 text-base tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {tatami.description}
                    </p>
                  </div>
                </div>
              );
            })()}

          </div>

          {/* Mobile Grid - 1 Column with Dividers */}
          <div className="md:hidden border border-stone-800/15 divide-y divide-stone-800/15">
            
            {siteConfig.featuresMobile.map((item, i) => {
              const ItemIcon = iconMap[item.iconName];
              return (
                <div key={i} className="relative h-[300px] overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.imageAlt}
                    fill
                    sizes="100vw"
                    className="object-cover brightness-[0.85]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <ItemIcon className="w-5 h-5 mb-2 text-gold" />
                    <h3 className="font-serif text-2xl font-light">{item.title}</h3>
                    <p className="text-white/70 text-xs tracking-wider uppercase mt-1">{item.description}</p>
                  </div>
                </div>
              );
            })}
            
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          GUEST REFLECTIONS - Testimonials with Brutalist Borders
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-32 px-4 md:px-12 bg-stone-100/50">
        <div className="max-w-7xl mx-auto">
          
          <motion.div {...fadeIn} className="text-center mb-10 md:mb-16">
            <p className="text-gold tracking-[0.4em] text-xs md:text-sm uppercase mb-3 md:mb-4">{siteConfig.reflections.sectionLabel}</p>
            <h2 className="font-serif text-[2.5rem] md:text-5xl text-stone-900 font-light">{siteConfig.reflections.headline}</h2>
          </motion.div>

          {/* Desktop: 3 columns with vertical dividers */}
          <div className="hidden md:grid grid-cols-3 divide-x divide-stone-800/15 border border-stone-800/15">
            {siteConfig.testimonials.map((testimonial, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.15 }}
                className="p-10 md:p-12"
              >
                {/* 5-Star Rating */}
                <div className="flex gap-1.5 mb-6 justify-center md:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold drop-shadow-sm" strokeWidth={1.2} fill="currentColor" />
                  ))}
                </div>
                
                <p className="font-serif text-2xl md:text-3xl text-stone-800 leading-relaxed italic mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-gold" />
                  <p className="text-stone-500 text-xs tracking-[0.2em] uppercase">
                    {testimonial.author}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Stacked with horizontal dividers */}
          <div className="md:hidden border border-stone-800/15 divide-y divide-stone-800/15">
            {siteConfig.testimonialsMobile.map((testimonial, i) => (
              <div key={i} className="p-8">
                {/* 5-Star Rating */}
                <div className="flex gap-1.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold drop-shadow-sm" strokeWidth={1.2} fill="currentColor" />
                  ))}
                </div>
                <p className="font-serif text-2xl text-stone-800 leading-relaxed italic mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-px bg-gold" />
                  <p className="text-stone-500 text-xs tracking-[0.2em] uppercase">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CONCIERGE MAP SECTION - With Brutalist Borders
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-32 px-4 md:px-12">
        <div className="max-w-5xl mx-auto">
          
          <motion.div {...fadeIn} className="text-center mb-10 md:mb-16">
            <p className="text-gold tracking-[0.4em] text-xs md:text-sm uppercase mb-3 md:mb-4">{siteConfig.location.sectionLabel}</p>
            <h2 className="font-serif text-[2.5rem] md:text-5xl text-stone-900 font-light">{siteConfig.location.headline}</h2>
          </motion.div>

          {/* Map Card - Sharp Corners */}
          <div className="relative h-[500px] w-full overflow-hidden border border-stone-800/15 group">
            
            <Image
              src={siteConfig.location.mapImage}
              alt={siteConfig.location.mapImageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Pulsing Pin */}
            <div 
              className="absolute -translate-x-1/2 -translate-y-full z-10 pointer-events-none"
              style={{ 
                top: siteConfig.location.pinPosition.top,
              }}
            >
              <div className="relative hidden md:block" style={{ left: siteConfig.location.pinPosition.leftDesktop }}>
                <span className="absolute inset-0 animate-pulse-ring bg-moss/40 rounded-full"></span>
                <div className="relative w-8 h-8 bg-moss rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
              </div>
              <div className="relative md:hidden" style={{ left: siteConfig.location.pinPosition.leftMobile }}>
                <span className="absolute inset-0 animate-pulse-ring bg-moss/40 rounded-full"></span>
                <div className="relative w-8 h-8 bg-moss rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
              </div>
            </div>

            {/* Info Card - Sharp Corners */}
            <div className="absolute bottom-0 left-0 bg-washi/95 backdrop-blur-sm p-8 max-w-sm border-t border-r border-stone-800/15 z-20">
              <h3 className="font-serif text-2xl text-stone-800 mb-3">{siteConfig.name} Ryokan</h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                {siteConfig.location.description.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < siteConfig.location.description.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
              
              <a 
                href={siteConfig.contact.mapsUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-moss uppercase tracking-[0.2em] text-xs font-medium hover:text-gold transition-colors duration-300"
              >
                Open in Google Maps
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FOOTER CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-40 bg-moss text-washi text-center px-4 md:px-12 mt-20 md:mt-32">
        <motion.div {...fadeIn}>
          <p className="text-washi/60 tracking-[0.4em] text-xs md:text-sm uppercase mb-6 md:mb-8">{siteConfig.footerCta.sectionLabel}</p>
          
          <h2 className="font-serif text-[3rem] md:text-7xl lg:text-8xl mb-8 md:mb-12 font-light">
            {siteConfig.footerCta.headline}
          </h2>
          
          <Link 
            href={siteConfig.booking.url}
            className="inline-flex items-center gap-4 border border-washi/30 px-10 py-4 text-sm md:text-base hover:bg-washi hover:text-moss transition-all duration-500 tracking-[0.3em] uppercase mb-12 md:mb-20"
          >
            {siteConfig.footerCta.ctaLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
        
        {/* Contact Info */}
        <div className="pt-12 md:pt-16 border-t border-washi/20 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-washi/70 font-light text-sm">
            <div>
              <p className="text-washi/40 text-xs uppercase tracking-[0.2em] mb-2">Address</p>
              <p>{siteConfig.contact.address.line1}<br/>{siteConfig.contact.address.line2}</p>
            </div>
            <div>
              <p className="text-washi/40 text-xs uppercase tracking-[0.2em] mb-2">Email</p>
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-washi transition-colors duration-300">
                {siteConfig.contact.email}
              </a>
            </div>
            <div>
              <p className="text-washi/40 text-xs uppercase tracking-[0.2em] mb-2">Telephone</p>
              <p>{siteConfig.contact.phone}</p>
            </div>
          </div>
          
          <p className="text-washi/30 text-xs mt-12 tracking-wider">
            {siteConfig.copyright}
          </p>
        </div>
      </section>

      <StickyBookingButton 
        href={siteConfig.booking.url} 
        labelMobile={siteConfig.booking.buttonLabelMobile}
        labelDesktop={siteConfig.booking.buttonLabel}
      />
    </main>
  );
}
