"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-ai pt-32">
      
      {/* BACKGROUND GRADIENT BLOBS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-[280px] h-[280px] bg-labBlue/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-[320px] h-[320px] bg-labGreen/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-[200px] h-[200px] bg-labTeal/20 rounded-full blur-2xl"></div>
      </div>

      {/* CONTENT */}
      <div className="container relative grid md:grid-cols-2 gap-12 z-10 fade-in">
        
        {/* LEFT SIDE — TEXT */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <span className="text-labBlue font-semibold uppercase tracking-wider text-sm">
            B'Deshi Emerging Research Lab
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-3 text-labLight">
            AI × Transport × Sustainability Research
          </h1>

          <p className="mt-4 text-lg text-labLight/90 max-w-xl">
            Building Smarter, Safer, and More Sustainable Mobility Systems 
            with Artificial Intelligence.
          </p>

          {/* KEYWORD TAGS */}
          <div className="flex flex-wrap gap-2 mt-5">
            {[
              "Artificial Intelligence",
              "CAV / AV",
              "Digital Twins",
              "Sustainable Mobility",
              "Data-Driven Transport",
              "Simulation Engineering",
              "XAI",
            ].map((tag, i) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="px-3 py-1 bg-white/10 text-labLight text-xs rounded-full border border-white/20 backdrop-blur"
              >
                {tag}
              </motion.div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="mt-6 flex gap-4">
            <a
              href="/research"
              className="px-5 py-3 rounded-full bg-labGold text-black font-semibold hover:bg-yellow-300 transition"
            >
              Explore Research
            </a>
            <a
              href="/tools"
              className="px-5 py-3 rounded-full border border-white/30 text-labLight hover:bg-white/10 transition"
            >
              Our Tools
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE — PHOTO + METRICS */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* PHOTO */}
          <div className="w-56 h-56 rounded-xl overflow-hidden shadow-2xl border border-white/20">
            <Image
              src="https://i.ibb.co/GvxCQt2P/IMG-7139.jpg"
              alt="Lab Founder"
              width={320}
              height={320}
              className="object-cover"
            />
          </div>

          <h3 className="text-xl font-bold mt-4">Engineer Mahbub Hassan</h3>
          <p className="text-sm text-labLight/70">Founder & Director</p>

          {/* KPI GRID */}
          <div className="grid grid-cols-2 gap-4 mt-6 w-full max-w-xs">
            <div className="bg-white/10 p-4 rounded-xl border border-white/20 text-center">
              <h4 className="text-2xl font-bold">20+</h4>
              <p className="text-xs text-labLight/80">Students</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl border border-white/20 text-center">
              <h4 className="text-2xl font-bold">2</h4>
              <p className="text-xs text-labLight/80">Domains</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl border border-white/20 text-center">
              <h4 className="text-2xl font-bold">Q1</h4>
              <p className="text-xs text-labLight/80">Publications</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl border border-white/20 text-center">
              <h4 className="text-2xl font-bold">15+</h4>
              <p className="text-xs text-labLight/80">IEEE Conferences</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
