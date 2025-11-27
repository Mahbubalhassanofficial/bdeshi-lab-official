"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Tools", href: "/tools" },
    { name: "Research", href: "/research" },
    { name: "Publications", href: "/publications" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F1F]/90 backdrop-blur-md border-b border-white/10">
      <div className="container flex items-center justify-between py-4">
        
        {/* Brand */}
        <div className="text-lg font-bold text-labLight tracking-wide">
          B'Deshi Lab
          <span className="block text-xs text-labBlue opacity-80 -mt-1">
            Transportation · AI · Sustainability
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm hover:text-labBlue transition ${
                pathname === link.href
                  ? "text-labBlue font-semibold"
                  : "text-labLight"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}
