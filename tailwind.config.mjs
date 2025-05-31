/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        minty: "#cefff4",
        lRed: "#f02652",
        midBlue: "#006eff",
        midBluey: "#0055cc",
        boldPurple: "#4845fd", 
        borderBlue: "#062c4c",
        blue: "#2684ff",
        lBlue: "#4f9bff",
        llBlue: "#00d9ff",
        lllBlue: "#80ecff",
        llllBlue: "#bff6ff",
        cyan: "#01fff7",
        lightestBlue: "#63f8f1",
        volt: "#c8ff00",
        darkBlue: "#072752",
        yellow: "#e5dc15", 
        darkYellow: "#c2bb11", 
        bootstrapDark: "#212529", 
        bootstrapLighter: "#364459",
        bootstrapLightest: "#96a4b3",
        gold: "#ffc107",

      },
      fontFamily: {
        'amatic-sc': ['var(--font-amatic-sc)', 'cursive'],
        'source-code-pro': ['var(--font-source-code-pro)', 'monospace'],
        'rubik': ['var(--font-rubik)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};