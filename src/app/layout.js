import {
  Rubik,
  Source_Code_Pro,
  Edu_AU_VIC_WA_NT_Guides,
  Rock_Salt,
} from "next/font/google";
import "../../styles/globals.css";

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

const rockSalt = Rock_Salt({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rock-salt",
});

export const metadata = {
  title: "Fiction Map",
  description: "Tips and Techniques for Fiction Writing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
        ${rubik.variable} 
        ${sourceCodePro.variable} 
        ${eduFont.variable}
        ${rockSalt.variable}
        antialiased`}>
        {children}
      </body>
    </html>
  );
}
