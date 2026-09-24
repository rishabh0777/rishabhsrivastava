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
  title: "Rishabh Srivastava | Portfolio",
  description: "Full Stack Developer Portfolio",
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