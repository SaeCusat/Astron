import { Orbitron } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Astron Endurance",
  description: "Astron Endurance - Driven by Power, Defined by Endurance",
  icons: {
    icon: [
      { url: "/astron_logo_icon.svg", type: "image/svg+xml" },
      { url: "/astron_logo_icon.ico" }
    ],
    apple: { url: "/apple-icon.svg", type: "image/svg+xml" }
  },
  manifest: "/manifest.json",
  applicationName: "Astron Endurance"
};

export const viewport = {
  themeColor: "#E4572E",
  width: "device-width",
  initialScale: 1.0
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hydrated bg-white text-black">
      <head>
        {/* Properly formatted favicon references */}
        <link rel="icon" href="/astron_logo_icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/astron_logo_icon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${orbitron.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
