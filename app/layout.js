import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { DEFAULT_IMAGE_ALT, HOME_DESCRIPTION, HOME_TITLE, IMAGES, SITE_NAME, SITE_URL, organizationNode, websiteNode } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import BrochureWrapper from "@/components/BrochureWrapper";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s | Sobha Parqcity",
  },
  description: HOME_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: SITE_URL + "/",
    siteName: SITE_NAME,
    images: [{ ...IMAGES.banner, alt: DEFAULT_IMAGE_ALT }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [IMAGES.banner.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  authors: [{ name: SITE_NAME, url: SITE_URL + "/" }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Real Estate",
  verification: {
    google: "jfQkn0fChTPcvsfH3VQRtpAmuU6W3vqQcEBTTuF0NbM",
  },
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [organizationNode, websiteNode],
  };

  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>

      <body
        className={`${poppins.variable} ${robotoMono.variable} antialiased`}
      >
        <Header />
        <BrochureWrapper/>
        {children}
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}