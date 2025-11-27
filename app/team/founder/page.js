import Navbar from "../../../components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FounderPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="container pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-white/10 border border-white/20 
                     rounded-2xl p-8 shadow-lg backdrop-blur"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            
            {/* PHOTO */}
            <div className="w-52 h-52 relative rounded-xl overflow-hidden">
              <Image
                src="https://i.ibb.co/GvxCQt2P/IMG-7139.jpg"
                alt="Engineer Mahbub Hassan"
                fill
                className="object-cover"
              />
            </div>

            {/* TEXT */}
            <div>
              <h1 className="text-3xl font-extrabold text-labBlue">
                Engineer Mahbub Hassan
              </h1>
              <p className="text-labLight/80 mt-1">
                Founder & Director, B'Deshi Emerging Research Lab
              </p>

              <p className="text-labLight/70 mt-4 leading-relaxed">
                Mahbub Hassan is a transportation AI researcher passionate about
                intelligent mobility systems, sustainable transport, simulation 
                engineering, and human-centered mobility innovation. He leads 
                multiple projects in AI for transportation, digital twins, 
                autonomous systems, and data-driven analytics.
              </p>

              <a
                href="https://www.linkedin.com/in/mahbub-hassan-bdeshi"
                target="_blank"
                className="text-labGold mt-4 inline-block hover:underline"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
