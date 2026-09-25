import { Inter, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const glikema = localFont({
  src: "./assets/GLIKEMA.otf",
  variable: "--font-glikema",
  display: "swap",
});

export const metadata = {
  /*
   * Replace this with your final portfolio domain.
   *
   * Example:
   */
  
   metadataBase: new URL("https://rishabhsrivastava.vercel.app"),


  title: {
    default: "Rishabh Srivastava | Full Stack Developer & Founder of Webli Studio",
    template: "%s | Rishabh Srivastava",
  },

  description:
    "Rishabh Srivastava is a Full Stack Developer and Founder of Webli Studio, building modern, interactive and scalable digital experiences with Next.js, React, Node.js, MongoDB, GSAP and modern web technologies.",

  keywords: [
    // Personal brand
    "Rishabh Srivastava",
    "Rishabh Srivastava Portfolio",
    "Rishabh Srivastava Developer",
    "Rishabh Srivastava Full Stack Developer",
    "Rishabh Srivastava Web Developer",
    "Rishabh Developer",
    "Developer Rishabh Srivastava",

    // Webli Studio
    "Webli Studio",
    "Webli Studio Founder",
    "Founder of Webli Studio",
    "Rishabh Srivastava Founder of Webli Studio",
    "Rishabh Founder of Webli Studio",
    "Webli Studio Rishabh Srivastava",
    "Webli Studio CEO",
    "CEO of Webli Studio",
    "Rishabh Srivastava CEO Webli Studio",
    "Webli Studio Developer",
    "Webli Studio Web Development",

    // Developer keywords
    "Full Stack Developer",
    "Full Stack Web Developer",
    "Full Stack Developer India",
    "Web Developer India",
    "Frontend Developer India",
    "Backend Developer India",
    "JavaScript Developer India",
    "React Developer India",
    "Next.js Developer India",
    "MERN Stack Developer India",

    // Technology
    "Next.js Developer",
    "React Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "Express.js Developer",
    "MongoDB Developer",
    "MERN Stack Developer",
    "Tailwind CSS Developer",
    "GSAP Developer",
    "Frontend Developer",
    "Backend Developer",

    // Services / expertise
    "Creative Developer",
    "Creative Web Developer",
    "Interactive Web Developer",
    "Website Developer",
    "Modern Website Developer",
    "Custom Website Developer",
    "Responsive Website Developer",
    "Website Development India",
    "Web Development Services India",
    "Creative Web Development",
    "Interactive Website Development",
    "Next.js Website Development",

    // Portfolio searches
    "Full Stack Developer Portfolio",
    "Web Developer Portfolio",
    "Next.js Developer Portfolio",
    "React Developer Portfolio",
    "Creative Developer Portfolio",
    "MERN Stack Developer Portfolio",
  ],

  authors: [
    {
      name: "Rishabh Srivastava",
    },
  ],

  creator: "Rishabh Srivastava",
  publisher: "Rishabh Srivastava",

  category: "technology",

  openGraph: {
    type: "website",
    locale: "en_IN",

    title:
      "Rishabh Srivastava | Full Stack Developer & Founder of Webli Studio",

    description:
      "Portfolio of Rishabh Srivastava, Full Stack Developer and Founder of Webli Studio. Explore selected web development projects, creative digital experiences and modern full-stack work.",

    siteName: "Rishabh Srivastava Portfolio",

    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Rishabh Srivastava - Full Stack Developer and Founder of Webli Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Rishabh Srivastava | Full Stack Developer & Founder of Webli Studio",

    description:
      "Portfolio of Rishabh Srivastava, Full Stack Developer and Founder of Webli Studio.",

    images: ["/og-image.jpeg"],
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
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${glikema.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}