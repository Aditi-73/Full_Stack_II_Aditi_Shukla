/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'pine-teal': '#254439',
        'ash-grey': '#B6BDBB',
        'jet-black': '#0F1A18',
      },
    },
  },
  plugins: [],
};
