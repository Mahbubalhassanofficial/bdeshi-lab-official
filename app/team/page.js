import Navbar from "../../components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";

const founder = {
  name: "Engineer Mahbub Hassan",
  role: "Founder & Director",
  link: "/team/founder",
};

// ---------------- CURRENT MEMBERS (Mock, Replace Later) ----------------

const currentMembers = [
  {
    name: "Md. Rayhan Uddin",
    role: "Undergraduate Researcher",
    research: [
      "Travel Behavior Analysis",
      "AI in Transport",
      "ML Modeling",
    ],
    photo: "/placeholder.jpg",
  },
  {
    name: "Nusrat Tabassum",
    role: "Undergraduate Researcher",
    research: [
      "Sustainable Transport",
      "GIS",
      "Simulation Engineering",
    ],
    photo: "/placeholder.jpg",
  },
  {
    name: "Faisal Ahmed",
    role: "Research Volunteer",
    research: [
      "Machine Learning",
      "Autonomous Vehicles",
      "Safety Modeling",
    ],
    photo: "/placeholder.jpg",
  },
  {
    name: "Jannatul Ferdous",
    role: "Research Collaborator",
    research: [
      "Urban Mobility",
      "Transport Planning",
      "Data Analytics",
    ],
    photo: "/placeholder.jpg",
  },
  {
    name: "Samin Al Rafi",
    role: "Undergraduate Research Assistant",
    research: [
      "Digital Twins",
      "CAV Simulation",
      "Traffic Engineering",
    ],
    photo: "/placeholder.jpg",
  },
  {
    name: "Rahnuma Rahman",
    role: "Graduate Research Trainee",
    research: [
      "Data-Driven Transport",
      "XAI",
      "Sustainable Mobility",
    ],
    photo: "/placeholder.jpg",
  },
];

// ---------------- PREVIOUS MEMBERS (From Your Details) ----------------

const previousMembers = [
  {
    name: "Abdullah Al Nafees",
    role: "Research Assistant",
    research: [
      "Transportation Optimization",
      "Smart Cities",
      "Sustainable Infrastructure",
      "Data Analytics",
    ],
    photo: "/placeholder.jpg",
  },
  {
    name: "Hridoy Deb Mahin",
    role: "Research Assistant",
    research: [
      "ITS",
      "Connected Autonomous Vehicles (CAV)",
      "Connected Vehicle Technology",
      "Road Safety",
      "Urban Mobility",
    ],
    photo: "/placeholder.jpg",
  },
  {
    name: "Arpita Paul",
    role: "Research Assistant",
    research: [
      "Transport Optimization",
      "Smart Cities",
      "Travel Behavior",
      "Traffic Safety",
      "MaaS",
      "Data Analytics",
    ],
    photo: "/placeholder.jpg",
  },
  {
    name: "Mehjabin Farhana",
    role: "Research Assistant",
    research: [
      "Transportation Planning",
      "GIS & Remote Sensing",
      "Traffic Simulation",
      "Sustainable Transport",
      "Environmental Planning",
      "Smart City Development",
    ],
    photo: "/placeholder.jpg",
  },
  {
    name: "Syeda Tamzida Akter",
    role: "Undergraduate Research Student",
    research: [
      "Transportation Systems",
      "Structural Engineering",
      "Machine Learning",
      "Data Analysis",
    ],
    photo: "/placeholder.jpg",
  },
  {
    name: "Aneeca Farzana",
    role: "Graduate Research Assistant",
    research: [
      "ITS",
      "CAV",
      "LLM",
      "Machine Learning",
      "GIS & Remote Sensing",
      "Sustainable Transport Systems",
    ],
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
        <h2 className="text-2xl font-bold text-labGold mb-4">Founder</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 border border-white/20 p-6 rounded-xl mb-12"
        >
          <Link href={founder.link}>
            <p className="text-labBlue text-xl font-bold hover:underline cursor-pointer">
              {founder.name}
            </p>
            <p className="text-labLight/70">{founder.role}</p>
          </Link>
        </motion.div>

        {/* ---------- CURRENT MEMBERS ---------- */}
        <h2 className="text-2xl font-bold text-labGold mb-4">Current Members</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {currentMembers.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur shadow-lg"
            >
              <div className="w-full h-44 bg-white/5 rounded-lg flex items-center justify-center text-labLight/60">
                Photo Coming Soon
              </div>

              <h3 className="text-lg font-bold text-labBlue mt-4">{m.name}</h3>
              <p className="text-labLight/70">{m.role}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {m.research.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-labLight/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ---------- PREVIOUS MEMBERS ---------- */}
        <h2 className="text-2xl font-bold text-labGold mb-4">Previous Members</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {previousMembers.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur shadow-lg"
            >
              <div className="w-full h-44 bg-white/5 rounded-lg flex items-center justify-center text-labLight/60">
                Photo Coming Soon
              </div>

              <h3 className="text-lg font-bold text-labBlue mt-4">{m.name}</h3>
              <p className="text-labLight/70">{m.role}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {m.research.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-labLight/80"
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
