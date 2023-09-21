/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
      },
      colors: {
        "Dark-Slate-Grey": "hsl(234, 29%, 20%)",
        "Charcoal-Grey": "hsl(235, 18%, 26%)",
        Grey: "hsl(231, 7%, 60%)",
        White: "hsl(0, 0%, 100%)",
        Tomato: "hsl(4, 100%, 67%)",
      },
      fontFamily: {
        roboto: ["roboto"],
      },
    },
  },
  plugins: [],
};
