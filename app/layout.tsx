import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
