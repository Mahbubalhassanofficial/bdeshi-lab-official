import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ToolsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="container pt-40 pb-20">
        <h1 className="text-4xl font-extrabold text-labLight mb-6">
          Research Tools & Applications
        </h1>

        <p className="text-labLight/80 text-lg leading-relaxed max-w-3xl mb-10">
          B'Deshi Lab develops advanced AI and simulation-based tools to support 
          research in transportation engineering, CAV/AV systems, sustainability, 
          survey analytics, and intelligent mobility.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* tool cards (keep as you have them) */}
        </div>
      </section>

      <Footer />
    </main>
  );
}
