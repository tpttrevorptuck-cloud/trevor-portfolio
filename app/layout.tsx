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
<header className="border-b border-slate-800 bg-slate-950">
  <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
    <a href="/" className="text-sm font-semibold tracking-wide text-slate-100 hover:text-white">
      Trevor Tuck
    </a>

    <nav className="flex gap-5 text-sm font-semibold text-slate-100">
      <a className="hover:text-white" href="/work">
        Work
      </a>
      <a className="hover:text-white" href="/writing">
        Writing
      </a>
      <a className="hover:text-white" href="/resume">
        Resume
      </a>
      <a className="hover:text-white" href="/contact">
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
