import Navbar from "../../components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";

const founder = {
  name: "Engineer Mahbub Hassan",
  role: "Founder & Director",
  link: "/team/founder",
};

const currentMembers = [
  {
    name: "Member Name",
    role: "Undergraduate Researcher",
    research: ["AI in Transport", "Simulation"],
    photo: "/placeholder.jpg",
  },
  {
    name: "Member Name",
    role: "Research Assistant",
    research: ["CAV/AV", "Data-driven Transport"],
    photo: "/placeholder.jpg",
  },
];

const previousMembers = [
  {
    name: "Alumni Name",
    role: "Former Research Member",
    research: ["Traffic Engineering"],
    photo: "/placeholder.jpg",
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="container pt-32 pb-20">
        <h1 className="text-4xl font-extrabold text-labLight mb-8">
          Our Research Team
        </h1>

        {/* ---------- FOUNDER SECTION ---------- */}
        <h2 className="text-2xl font-bold text-labGold mb-4">
          Founder
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 border border-white/20 rounded-xl p-6 mb-12"
        >
          <Link href={founder.link}>
            <p className="text-labBlue text-xl font-bold hover:underline cursor-pointer">
              {founder.name}
            </p>
            <p className="text-labLight/70">{founder.role}</p>
          </Link>
        </motion.div>

        {/* ---------- CURRENT MEMBERS ---------- */}
        <h2 className="text-2xl font-bold text-labGold mb-4">
          Current Members
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {currentMembers.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur shadow-lg"
            >
              <div className="w-full h-44 bg-white/5 rounded-lg flex items-center justify-center">
                <p className="text-labLight/60 text-sm">Photo Coming Soon</p>
              </div>

              <h3 className="text-lg font-bold text-labBlue mt-4">{m.name}</h3>
              <p className="text-labLight/70">{m.role}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {m.research.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/10 border border-white/20 
                               rounded-full text-xs text-labLight/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ---------- PREVIOUS MEMBERS ---------- */}
        <h2 className="text-2xl font-bold text-labGold mb-4">
          Previous Members
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {previousMembers.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur shadow-lg"
            >
              <div className="w-full h-44 bg-white/5 rounded-lg flex items-center justify-center">
                <p className="text-labLight/60 text-sm">Photo Coming Soon</p>
              </div>

              <h3 className="text-lg font-bold text-labBlue mt-4">{m.name}</h3>
              <p className="text-labLight/70">{m.role}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {m.research.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/10 border border-white/20 
                               rounded-full text-xs text-labLight/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
