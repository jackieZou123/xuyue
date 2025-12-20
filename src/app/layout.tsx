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
  title: {
    default: "GRAND MOON 旭越家族辦公室 | 財富傳承與事務管理服務",
    template: "%s | GRAND MOON 旭越家族辦公室",
  },
  description: "GRAND MOON 旭越家族辦公室，由跨領域專業團隊共同創立，匯聚文化底蘊、東方智慧與現代金融視野，致力為卓越家族提供全方位的財富傳承與事務管理服務。",
  keywords: [
    "家族辦公室",
    "財富傳承",
    "家族信託",
    "資產管理",
    "家族事務管理",
    "GRAND MOON",
    "旭越",
    "香港家族辦公室",
    "財富管理",
    "家族規劃",
  ],
  authors: [{ name: "GRAND MOON 旭越家族辦公室" }],
  creator: "GRAND MOON 旭越家族辦公室",
  publisher: "GRAND MOON 旭越家族辦公室",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.grandmoon.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_HK",
    url: "https://www.grandmoon.com",
    title: "GRAND MOON 旭越家族辦公室 | 財富傳承與事務管理服務",
    description: "為卓越家族提供全方位的財富傳承與事務管理服務，旭日初升，越創財富傳承",
    siteName: "GRAND MOON 旭越家族辦公室",
  },
  twitter: {
    card: "summary_large_image",
    title: "GRAND MOON 旭越家族辦公室",
    description: "為卓越家族提供全方位的財富傳承與事務管理服務",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 结构化数据 (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GRAND MOON 旭越家族辦公室",
    "alternateName": "旭越家族辦公室",
    "url": "https://www.grandmoon.com",
    "logo": "https://www.grandmoon.com/logo.png",
    "description": "為卓越家族提供全方位的財富傳承與事務管理服務",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "HK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "admin@grandmoon.com",
      "contactType": "customer service"
    },
    "sameAs": [
      // 可以添加社交媒体链接
    ]
  };

  return (
    <html lang="zh-HK">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        role="document"
        aria-label="旭越家族辦公室"
      >
        {children}
      </body>
    </html>
  );
}
