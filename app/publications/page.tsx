import Navbar from "../../components/Navbar";

export default function PublicationsPage() {
  const publications = [
    {
      title:
        "Machine Learning in Travel Mode Choice Studies: A Systematic Literature Review of Applications, Methods, and Challenges",
      journal: "Results in Engineering (2025)",
      authors:
        "Hassan, Mahbub, Md Emtiaz Kabir, Syeda Tamzida Akter, Saikat Sarkar Shraban, Khairul Salleh Basaruddin, and Md Ashequl Islam",
      link: "https://doi.org/10.1016/j.rineng.2025.108140",
    },
    {
      title:
        "Mapping the Machine Learning Landscape in Autonomous Vehicles: A Scientometric Review",
      journal: "IEEE Access (2025)",
      authors:
        "Hassan, M., Islam, M. K., Amin, M. B., & Narupiti, S.",
      link: "https://doi.org/10.1109/ACCESS.2025.3620637",
    },
    {
      title:
        "Understanding Post-COVID-19 Household Vehicle Ownership Dynamics Through Explainable Machine Learning",
      journal: "Future Transportation (2025)",
      authors:
        "Hassan, M.; Shraban, S.S.; Ahmed, F.; Amin, M.B.; Nagy, Z.",
      link: "https://doi.org/10.3390/futuretransp5040136",
    },
    {
      title:
        "Large Language Models in Transportation: A Comprehensive Bibliometric Analysis of Emerging Trends, Challenges and Future Research",
      journal: "IEEE Access (2025)",
      authors:
        "M. Hassan, M. E. Kabir, M. Jusoh, H. K. An, M. Negnevitsky, and C. Li",
      link: "https://doi.org/10.1109/ACCESS.2025.3589319",
    },
    {
      title:
        "Assessing Public Transit Network Efficiency and Accessibility in Johor Bahru and Penang, Malaysia",
      journal: "Results in Engineering (2025)",
      authors:
        "Mahbub Hassan, Hridoy Deb Mahin, Ferdoushi Ahmed, Md. Maruf Hassan, Atikur Rahaman, Masuk Abdullah",
      link: "https://doi.org/10.1016/j.rineng.2025.106126",
    },
    {
      title:
        "Integration of Extended Reality Technologies in Transportation Systems",
      journal: "Results in Engineering (2025)",
      authors:
        "Hassan, Mahbub, Saikat Sarkar Shraban, Md Ashequl Islam, Khairul Salleh Basaruddin, Muhammad Farzik Ijaz, Nur Saifullah Bin Kamarrudin, Hiroshi Takemura",
      link: "https://doi.org/10.1016/j.rineng.2025.105334",
    },
    {
      title:
        "Application of Machine Learning in Intelligent Transport Systems: A Comprehensive Review and Bibliometric Analysis",
      journal: "Discover Civil Engineering (2025)",
      authors: "Hassan, M., Al Nafees, A., Shraban, S.S. et al.",
      link: "https://doi.org/10.1007/s44290-025-00256-2",
    },
    {
      title:
        "Public Transport Ridership Forecasting Using Machine Learning: A Case Study of Rapid Bus KL",
      journal: "ICCIT (2024)",
      authors:
        "A. Al Nafees, M. Hassan, A. Paul, S. S. Shraban and H. Deb Mahin",
      link: "https://doi.org/10.1109/ICCIT64611.2024.11021879",
    },
    {
      title:
        "A Comprehensive Review on the Impact of Gap Parameters for Roundabouts",
      journal: "International Journal of Integrated Engineering (2024)",
      authors:
        "Hassan, M., Al Nafees, A., Shraban, S. S., Mahin, H. D., Paul, A., & Ki, A. H.",
      link: "https://doi.org/10.30880/ijie.2024.16.09.001",
    },
    {
      title:
        "Impact of the Newly Constructed Metro Rail in Dhaka on Travel Behavior",
      journal: "Lecture Notes in Civil Engineering (APTE 2024)",
      authors: "Hassan, M., Mehjabin, F., & Al Nafees, A.",
      link: "https://link.springer.com/book/9789819696413",
    },
    {
      title:
        "Big Data Applications in Intelligent Transport Systems: A Bibliometric Analysis and Review",
      journal: "Discover Civil Engineering (2025)",
      authors: "Hassan, M., Mahin, H.D., Al Nafees, A. et al.",
      link: "https://doi.org/10.1007/s44290-025-00205-z",
    },
    {
      title:
        "Vehicle Class Detection and Counting on a Malaysian Road Using YOLOv8 and OpenCV",
      journal: "IEEE IICAIET (2024)",
      authors:
        "Hassan, M., Mahin, H. D., Jusoh, M., Al Nafees, A., & Paul, A.",
      link: "https://doi.org/10.1109/IICAIET62352.2024.10729957",
    },
    {
      title:
        "Investigating the Performance of Metering Methods in Managing Unbalanced Roundabouts",
      journal: "AJSTR (2025)",
      authors:
        "Hassan, M., An, H. K., Mahin, H. D., Al Nafees, A., Shraban, S. S., & Paul, A.",
      link: "",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="container pt-40 pb-32">
        <h1 className="text-4xl font-extrabold text-labLight mb-6">
          Publications
        </h1>

        <p className="text-labLight/80 text-lg max-w-3xl mb-10">
          A curated list of our peer-reviewed publications across AI, 
          transportation engineering, simulation, sustainability, and 
          intelligent mobility systems.
        </p>

        {/* PUBLICATION LIST */}
        <div className="space-y-6">
          {publications.map((pub, i) => (
            <div
              key={i}
              className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg backdrop-blur"
            >
              <h2 className="text-xl font-bold text-labBlue">{pub.title}</h2>
              <p className="text-labLight/70 text-sm mt-1">{pub.journal}</p>

              <p className="text-labLight/80 mt-2">{pub.authors}</p>

              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  className="text-labGold mt-3 inline-block hover:underline"
                >
                  View Paper →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
