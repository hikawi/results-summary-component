/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {
        p: {
          "light-red": "hsl(0, 100%, 67%)",
          "orange-yellow": "hsl(39, 100%, 56%)",
          "green-teal": "hsl(166, 100%, 37%)",
          "cobalt-blue": "hsl(234, 85%, 45%)",
        },
        g: {
          "light-slate-blue": "hsl(252, 100%, 67%)",
          "light-royal-blue": "hsl(241, 81%, 54%)",
          "violet-blue": "hsl(256, 72%, 46%)",
          "persian-blue": "hsla(241, 72%, 46%)",
        },
        n: {
          "pale-blue": "hsl(221, 100%, 96%)",
          "light-lavender": "hsl(241, 100%, 89%)",
          "dark-gray-blue": "hsl(224, 30%, 27%)",
        },
      },
      fontFamily: {
        "hanken-grotesk": ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
