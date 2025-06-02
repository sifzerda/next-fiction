import { 
  Geist, 
  Geist_Mono, 
  Amatic_SC, 
  Rubik, 
  Source_Code_Pro,
  Edu_AU_VIC_WA_NT_Guides,

} from "next/font/google";
import "../../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const amatic = Amatic_SC({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-amatic-sc',
});

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500'], 
  variable: '--font-rubik',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-source-code-pro',
});

const eduFont = Edu_AU_VIC_WA_NT_Guides({
  subsets: ['latin'],
  weight: ['400'], 
  variable: '--font-edu-au',
});

export const metadata = {
  title: "The Fiction Map",
  description: "Tips and Techniques for Fiction Writing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
        ${geistSans.variable} 
        ${geistMono.variable} 
        ${amatic.variable} 
        ${rubik.variable} 
        ${sourceCodePro.variable} 
         ${eduFont.variable}
        antialiased`}>
        {children}
      </body>
    </html>
  );
}
