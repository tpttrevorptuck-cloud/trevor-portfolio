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
  title: "Trevor Tuck | Communications and Storytelling Portfolio",
  description:
    "Sustainability-driven communications and customer success work: case studies, writing, and impact briefs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--bg)] text-[var(--text)]`}
      >
        <header className="border-b border-[var(--border)] bg-[var(--text)]">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <a
              href="/"
              className="text-sm font-semibold tracking-wide text-white hover:text-[var(--clay-soft)]"
            >
              Trevor Tuck
            </a>

            <nav className="flex flex-wrap gap-5 text-sm font-semibold text-slate-200">
              <a className="hover:text-white" href="/work">
                Work
              </a>
              <a className="hover:text-white" href="/communications">
                Communications
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

        <footer className="border-t border-[var(--border)]">
          <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-slate-600">
            © {new Date().getFullYear()} Trevor Tuck
          </div>
        </footer>
      </body>
    </html>
  );
}
