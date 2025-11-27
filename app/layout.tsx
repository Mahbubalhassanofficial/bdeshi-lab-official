import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "B'Deshi Emerging Research Lab",
  description: "Building Smarter, Safer, and More Sustainable Mobility Systems with Artificial Intelligence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

