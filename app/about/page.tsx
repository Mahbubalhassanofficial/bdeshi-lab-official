import Navbar from "../../components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="container pt-40 pb-20">
        <h1 className="text-4xl font-extrabold text-labLight mb-6">
          About B'Deshi Emerging Research Lab
        </h1>

        <p className="text-labLight/80 text-lg leading-relaxed max-w-3xl">
          B'Deshi Emerging Research Lab is dedicated to advancing the future of 
          transportation systems through Artificial Intelligence, simulation, 
          and sustainability-focused research.  
          <br /><br />
          Our work bridges engineering, data science, mobility modeling, 
          AI-driven decision support, and international collaboration.
        </p>

        <div className="mt-12 space-y-8 max-w-3xl">

          <div>
            <h2 className="text-2xl font-bold text-labBlue">
              Our Mission
            </h2>
            <p className="text-labLight/75 leading-relaxed mt-2">
              Building smarter, safer, and more sustainable mobility systems 
              by empowering students and researchers with cutting-edge AI tools, 
              simulation frameworks, and interdisciplinary training.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-labBlue">
              Who We Are
            </h2>
            <p className="text-labLight/75 leading-relaxed mt-2">
              Founded by Engineer Mahbub Hassan, B'Deshi Lab focuses on 
              Transport Engineering, Artificial Intelligence, Digital Twins, 
              CAV/AV systems, survey analytics, Input–Output modeling, and CO₂ 
              sustainability evaluations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-labBlue">
              Research Values
            </h2>
            <ul className="list-disc pl-6 text-labLight/75 mt-2 space-y-2">
              <li>Innovation in mobility systems</li>
              <li>Interdisciplinary collaboration</li>
              <li>Sustainability and societal impact</li>
              <li>Scientific rigor and transparency</li>
              <li>Empowering the next generation of researchers</li>
            </ul>
          </div>

        </div>
      </section>
    </main>
  );
}
