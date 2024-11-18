/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alata: ["Alata", "serif"],
        josefin: ["Josefin Sans", "serif"],
      },
      colors: {
        "dark-gray": "hsl(0, 0%, 55%)",
        "very-dark-gray": "hsl(0, 0%, 41%)",
      },
      backgroundImage: {
        "hero-desktop": "url('./src/images/desktop/image-hero.jpg')",
        "hero-mobile": "url('./src/images/mobile/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
