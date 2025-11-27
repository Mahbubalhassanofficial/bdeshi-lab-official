import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ResearchPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="container pt-40 pb-20">
        <h1 className="text-4xl font-extrabold text-labLight mb-6">
          Research Themes
        </h1>

        <p className="text-labLight/80 text-lg leading-relaxed max-w-3xl mb-10">
          B'Deshi Lab works across cutting-edge interdisciplinary domains combining 
          Transportation Engineering, Artificial Intelligence, Digital Twins, 
          Sustainability, and Human-centered modeling.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {/* research cards (keep as you have them) */}
        </div>
      </section>

      <Footer />
    </main>
  );
}
