// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#1B5538",
        gold: "#c27700",
      },
      fontFamily: {
        heading: ["Merriweather", "serif"],
        body: ["Open Sans", "sans-serif"],
      },
     backgroundImage: {
  "hero-gradient": "linear-gradient(135deg, #1B5538, #c27700)",
  "pattern-circles": "url('/patterns/circles.svg')",
  "pattern-waves": "url('/patterns/waves.svg')",
},
    },
  },
  plugins: [],
};
