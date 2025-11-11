import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers/Providers";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "BulkArena - Learn, Think, Trade Fast",
  description: "An engaging game inspired by BulkTrade - the fastest decentralized perpetual futures exchange on Solana",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-bulk-dark text-white min-h-screen">
        <Providers>
          <Header />
          <main className="pt-16">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
