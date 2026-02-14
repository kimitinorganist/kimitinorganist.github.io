import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Kimitin Organist",
  description: "Professional Organist & Musician",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
