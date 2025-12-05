"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import { config } from "@/lib/config";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const }
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 selection:bg-moss selection:text-white overflow-x-hidden">
      
      {/* HERO */}
      <section className="relative min-h-[88vh] w-full flex items-center justify-center overflow-hidden py-20 md:py-24 border-b border-stone-800/20">
        <div className="absolute inset-0 z-0">
          <Image 
            src={config.hero.backgroundImage} 
            alt={`${config.ryokanName} hero`} 
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full px-5 md:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-center mx-auto max-w-2xl md:max-w-4xl px-4 py-6 md:px-6 md:py-8"
          >
            <p className="text-white/90 tracking-[0.35em] text-sm md:text-base uppercase mb-4 font-medium drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]">
              {config.domain}
            </p>
            
            <h1 className="font-serif font-semibold text-[clamp(3.2rem,11vw,6.4rem)] text-stone-50 mb-6 tracking-[0.18em] md:tracking-[0.28em] leading-[1.05] drop-shadow-[0_6px_12px_rgba(0,0,0,0.5)]">
              {config.hero.title}
            </h1>
            
            <div className="w-12 md:w-16 h-px bg-gold/80 mx-auto mb-6" />
            
            <p className="text-white/95 text-lg md:text-2xl font-serif font-medium tracking-[0.1em] md:tracking-[0.16em] mb-10 md:mb-12 leading-relaxed max-w-2xl md:max-w-3xl mx-auto drop-shadow-[0_5px_12px_rgba(0,0,0,0.5)]">
              {config.hero.subtitle}
            </p>
            
            <Link 
              href={config.bookingUrl}
              className="inline-flex items-center justify-center gap-4 px-10 py-4 bg-stone-800 text-stone-50 tracking-[0.24em] uppercase text-sm font-semibold border border-stone-700 shadow-lg shadow-black/20 hover:bg-stone-700 transition-colors"
            >
              <span>{config.hero.cta}</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto border border-stone-800/15 grid md:grid-cols-2">
          <motion.div 
            {...fadeIn}
            className="p-8 md:p-14 flex flex-col justify-center border-b md:border-b-0 md:border-r border-stone-800/15"
          >
            <p className="text-gold tracking-[0.35em] text-xs uppercase mb-4">Welcome</p>
            <h2 className="font-serif font-semibold tracking-wide text-[2.4rem] md:text-4xl text-stone-900 leading-tight mb-6">
              {config.intro.heading}
            </h2>
            <p className="text-stone-700 leading-[1.8] text-lg">
              {config.intro.body}
            </p>
          </motion.div>

          <div className="relative h-[360px] md:h-full overflow-hidden">
            <Image 
              src={config.intro.image} 
              alt={`${config.ryokanName} room`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 md:px-12 pb-18 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-10 md:mb-14">
            <p className="text-gold tracking-[0.35em] text-xs uppercase mb-3">Essentials</p>
            <h2 className="font-serif font-semibold tracking-wide text-[2.6rem] md:text-5xl text-stone-900">The Authentic Standard</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 border border-stone-800/15">
            {config.features.map((feature, i) => (
              <div
                key={`${feature.title}-${i}`}
                className="relative group overflow-hidden border-t sm:border-t-0 sm:border-l border-stone-800/15 first:border-t-0 sm:first:border-l-0 flex flex-col"
              >
                {feature.image && (
                  <div className="relative h-52 md:h-56 lg:h-64 overflow-hidden">
                    <Image 
                      src={feature.image} 
                      alt={feature.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6 space-y-2 bg-stone-50 flex-1">
                  <h3 className="font-serif font-semibold tracking-wide text-2xl text-stone-900">{feature.title}</h3>
                  <p className="text-stone-700 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-stone-100/60 border-y border-stone-800/15">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <p className="tracking-[0.35em] uppercase text-xs text-stone-600">Location</p>
            <h3 className="font-serif font-semibold tracking-wide text-3xl md:text-4xl text-stone-900">Shimogyo, Kyoto</h3>
            <p className="text-stone-700 leading-relaxed">{config.location.address}</p>
            <Link 
              href={config.bookingUrl}
              className="inline-flex items-center gap-3 border border-stone-900 px-6 py-3 uppercase tracking-[0.2em] text-xs font-semibold bg-white"
            >
              Book {config.ryokanName}
            </Link>
          </div>
          <div className="relative h-[360px] w-full overflow-hidden border border-stone-800/20">
            <iframe
              src={config.location.googleMapsUrl}
              className="w-full h-full border-0 grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${config.ryokanName} location`}
            />
            <div className="absolute top-4 left-4 w-28 h-28 border border-stone-800/30 overflow-hidden">
              <Image
                src={config.location.image}
                alt={`${config.ryokanName} nearby`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      {config.reviews && (
        <div className="px-6 md:px-12">
          <Reviews data={config.reviews} />
        </div>
      )}

      {/* PRICING */}
      {config.pricing && (
        <div className="px-6 md:px-12">
          <Pricing data={config.pricing} />
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-stone-50 text-stone-900 border-t-2 border-stone-800 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-3 gap-10">
          <div className="space-y-3">
            <p className="tracking-[0.35em] uppercase text-xs text-stone-500">{config.domain}</p>
            <h4 className="font-serif font-semibold tracking-wide text-2xl text-stone-900">{config.ryokanName}</h4>
            <p className="text-sm text-stone-600">{config.footer.copyright}</p>
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.25em] text-stone-500">Email</p>
            <a href={`mailto:${config.footer.contactEmail}`} className="text-stone-900 hover:text-stone-700 transition-colors">
              {config.footer.contactEmail}
            </a>
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.25em] text-stone-500">Phone</p>
            <p className="text-stone-900">{config.footer.phoneNumber}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
