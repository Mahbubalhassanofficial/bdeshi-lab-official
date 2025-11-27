import Navbar from "../../components/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="container pt-40 pb-28">
        <h1 className="text-4xl font-extrabold text-labLight mb-6">
          Contact Us
        </h1>

        <p className="text-labLight/80 text-lg max-w-2xl mb-10">
          For collaboration, inquiries, or student research opportunities, feel free 
          to reach out. We welcome academic partnerships, industry projects, and 
          interdisciplinary mobility research engagements.
        </p>

        {/* CONTACT BOX */}
        <div className="bg-white/10 p-8 rounded-2xl border border-white/20 shadow-lg backdrop-blur max-w-xl">

          <h2 className="text-2xl font-semibold text-labBlue mb-4">Email</h2>
          <p className="text-labLight/80 leading-relaxed">
            bdeshi.lab@gmail.com  
            <br />
            mahbub.hassan@ieee.org
          </p>

          <h2 className="text-2xl font-semibold text-labBlue mt-8 mb-4">
            Office (Academic Location)
          </h2>
          <p className="text-labLight/80 leading-relaxed">
            Transportation Research Office  
            <br />
            Department of Civil Engineering  
            <br />
            Faculty of Engineering  
            <br />
            Chulalongkorn University  
            <br />
            Bangkok, Thailand
          </p>

          <h2 className="text-2xl font-semibold text-labBlue mt-8 mb-4">
            Disclaimer
          </h2>
          <p className="text-labLight/70 text-sm leading-relaxed">
            B'Deshi Emerging Research Lab is an independent, student-founded platform 
            created and managed voluntarily by Engr. Mahbub Hassan (MSc in Civil 
            Engineering, Transportation).  
            <br /><br />
            <span className="font-semibold text-labGold">
              This lab is not affiliated, endorsed, or officially connected with 
              Chulalongkorn University.
            </span>  
            It operates solely as a personal initiative to support research, student 
            mentorship, and academic collaboration.
          </p>

          <h2 className="text-2xl font-semibold text-labBlue mt-8 mb-4">
            Social Media
          </h2>
          <ul className="text-labLight/80 space-y-2">
            <li>
              <a
                href="https://www.linkedin.com"
                className="text-labGold hover:underline"
                target="_blank"
              >
                LinkedIn →
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-labGold hover:underline"
                target="_blank"
              >
                Facebook →
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-labGold hover:underline"
                target="_blank"
              >
                GitHub →
              </a>
            </li>
          </ul>

        </div>
      </section>
    </main>
  );
}
