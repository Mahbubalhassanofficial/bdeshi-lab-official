import Navbar from "../../components/Navbar";

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

        {/* TOOLS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Tool Card */}
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 shadow-lg backdrop-blur">
            <h2 className="text-xl font-bold text-labBlue mb-2">TripAI</h2>
            <p className="text-labLight/75">
              Trip generation, distribution, behavior modeling and synthetic 
              datasets using AI and statistical foundations.
            </p>
          </div>

          {/* Tool Card */}
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 shadow-lg backdrop-blur">
            <h2 className="text-xl font-bold text-labBlue mb-2">EcoRouteAI</h2>
            <p className="text-labLight/75">
              AI-driven emissions estimation for routing, CO₂ savings analysis, 
              and sustainable mobility planning.
            </p>
          </div>

          {/* Tool Card */}
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 shadow-lg backdrop-blur">
            <h2 className="text-xl font-bold text-labBlue mb-2">FleetAI</h2>
            <p className="text-labLight/75">
              Optimization of bus fleet operations, headways, dispatching, and 
              route performance using ML + simulation.
            </p>
          </div>

          {/* Tool Card */}
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 shadow-lg backdrop-blur">
            <h2 className="text-xl font-bold text-labBlue mb-2">SurveyAI</h2>
            <p className="text-labLight/75">
              Synthetic survey generator with latent variables, demographics, 
              SmartPLS-friendly data, and advanced statistical checks.
            </p>
          </div>

          {/* Tool Card */}
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 shadow-lg backdrop-blur">
            <h2 className="text-xl font-bold text-labBlue mb-2">TwinBuilder</h2>
            <p className="text-labLight/75">
              Digital twin configurations for SUMO simulations, including 
              pedestrians, CAV/AV, intersections, and mixed traffic.
            </p>
          </div>

          {/* Tool Card */}
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 shadow-lg backdrop-blur">
            <h2 className="text-xl font-bold text-labBlue mb-2">MaaS Analyzer</h2>
            <p className="text-labLight/75">
              Mobility-as-a-Service analytics with behavior modeling, adoption 
              prediction, and clustering insights.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
