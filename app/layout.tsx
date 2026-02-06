import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trevor Tuck | Communications & Social Media Portfolio",
  description:
    "Sustainability-driven communications + customer success work: case studies, writing, and impact briefs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        <header className="border-b border-slate-200">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <a href="/" className="text-sm font-semibold tracking-wide">
              Trevor Tuck
            </a>
            <nav className="flex gap-4 text-sm font-medium text-slate-700">
              <a className="hover:text-slate-900" href="/work">
                Work
              </a>
              <a className="hover:text-slate-900" href="/resume">
                Resume
              </a>
              <a className="hover:text-slate-900" href="/contact">
                Contact
              </a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t border-slate-200">
          <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-slate-500">
            © {new Date().getFullYear()} Trevor Tuck
          </div>
        </footer>
      </body>
    </html>
  );
}
