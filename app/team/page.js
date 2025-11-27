"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TeamPage() {
  const founder = {
    name: "Engineer Mahbub Hassan",
    role: "Founder & Director",
    photo: "/founder.jpg",
    link: "/founder",
  };

  const currentMembers = [
    { name: "Mock Member 1", role: "Research Assistant", photo: "/member-placeholder.png" },
    { name: "Mock Member 2", role: "Research Assistant", photo: "/member-placeholder.png" },
    { name: "Mock Member 3", role: "Undergraduate Research Student", photo: "/member-placeholder.png" },
    { name: "Mock Member 4", role: "Graduate Research Assistant", photo: "/member-placeholder.png" },
    { name: "Mock Member 5", role: "Research Assistant", photo: "/member-placeholder.png" },
    { name: "Mock Member 6", role: "Research Assistant", photo: "/member-placeholder.png" },
  ];

  const previousMembers = [
    { name: "Abdullah Al Nafees", role: "Research Assistant", photo: "/member-placeholder.png" },
    { name: "Hridoy Deb Mahin", role: "Research Assistant", photo: "/member-placeholder.png" },
    { name: "Arpita Paul", role: "Research Assistant", photo: "/member-placeholder.png" },
    { name: "Mehjabin Farhana", role: "Research Assistant", photo: "/member-placeholder.png" },
    { name: "Syeda Tamzida Akter", role: "Undergraduate Research Student", photo: "/member-placeholder.png" },
    { name: "Aneeca Farzana", role: "Graduate Research Assistant", photo: "/member-placeholder.png" },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="container pt-40 pb-20">
        <h1 className="text-4xl font-extrabold text-labLight mb-10">
          Our Team
        </h1>

        {/* Founder */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-labBlue mb-6">Founder</h2>
          <a href={founder.link} className="block w-fit">
            <div className="flex items-center gap-6 bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg hover:bg-white/20 transition">
              <img
                src={founder.photo}
                alt="Founder"
                className="w-28 h-28 rounded-xl object-cover bg-white/20"
              />
              <div>
                <h3 className="text-xl font-bold text-labLight">
                  {founder.name}
                </h3>
                <p className="text-labLight/70">{founder.role}</p>
              </div>
            </div>
          </a>
        </div>

        {/* Current Members */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-labBlue mb-6">
            Current Members
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {currentMembers.map((m, i) => (
              <div
                key={i}
                className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg text-center"
              >
                <img
                  src={m.photo}
                  className="w-24 h-24 mx-auto rounded-xl object-cover mb-4 bg-white/20"
                />
                <h3 className="text-lg font-semibold text-labLight">{m.name}</h3>
                <p className="text-labLight/60">{m.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Previous Members */}
        <div className="pb-20">
          <h2 className="text-3xl font-bold text-labBlue mb-6">
            Previous Members
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {previousMembers.map((m, i) => (
              <div
                key={i}
                className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg text-center"
              >
                <img
                  src={m.photo}
                  className="w-24 h-24 mx-auto rounded-xl object-cover mb-4 bg-white/20"
                />
                <h3 className="text-lg font-semibold text-labLight">{m.name}</h3>
                <p className="text-labLight/60">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
