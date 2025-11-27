export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#060A13] py-10">
      <div className="container flex flex-col md:flex-row justify-between gap-10">
        
        {/* Left section */}
        <div>
          <h3 className="text-xl font-bold text-labLight">
            B'Deshi Emerging Research Lab
          </h3>
          <p className="text-labLight/60 text-sm mt-2 max-w-sm">
            Building Smarter, Safer, and More Sustainable Mobility Systems with Artificial Intelligence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-labBlue font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm text-labLight/70">
            <li><a href="/" className="hover:text-labGold">Home</a></li>
            <li><a href="/about" className="hover:text-labGold">About</a></li>
            <li><a href="/tools" className="hover:text-labGold">Tools</a></li>
            <li><a href="/research" className="hover:text-labGold">Research</a></li>
            <li><a href="/publications" className="hover:text-labGold">Publications</a></li>
            <li><a href="/contact" className="hover:text-labGold">Contact</a></li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="max-w-sm">
          <h4 className="text-labBlue font-semibold mb-2">Disclaimer</h4>
          <p className="text-labLight/60 text-sm">
            This independent research lab is founded and voluntarily maintained by
            Engr. Mahbub Hassan (MSc, Transportation). It is 
            <span className="text-labGold"> not affiliated with Chulalongkorn University</span>,
            its departments, or any official institutions.
          </p>
        </div>
      </div>

      <div className="container mt-10 text-center text-xs text-labLight/40">
        © {new Date().getFullYear()} B'Deshi Emerging Research Lab. All Rights Reserved.
      </div>
    </footer>
  );
}

