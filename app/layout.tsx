import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "../components/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MK Detailing Algérie - Expert PPF & Protection carrosserie à Azazga",
  description: "MK Detailing, situé à Azazga en Algérie, est l'un des meilleurs experts en film de protection carrosserie (PPF). Nous offrons un service haut de gamme de detailing, polissage et correction peinture. 100% clients satisfaits.",
  keywords: [
    "PPF Algérie",
    "PPF Azazga",
    "protection carrosserie Algérie",
    "film de protection peinture Algérie",
    "detailing Algérie",
    "detailing Azazga",
    "garage Azazga",
    "expert PPF Algérie",
    "MK Detailing",
    "Hamid detailing",
    "vitres teintées Algérie",
    "correction peinture Algérie"
  ],
  authors: [{ name: "MK Detailing", url: "https://mk-detailing-garageazazga.vercel.app/" }],
  openGraph: {
    title: "MK Detailing Algérie - Expert PPF & Detailing à Azazga",
    description: "Garage à Azazga en Algérie, expert en PPF (film de protection carrosserie), detailing, polissage et correction peinture. Service premium, 100% satisfaction.",
    url: "https://mk-detailing-garageazazga.vercel.app/",
    siteName: "MK Detailing Algérie",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "MK Detailing - Expert PPF à Azazga Algérie",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
