/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
      colors: {
        'miso-orange': '#E76F51', 
        'miso-cream': '#FAF4ED',  
        'miso-gray': '#2A2A2A',   
        'miso-pink': '#F4ACB7',   
        'miso-blue': '#A0E8E9',   
    }
    },
  },
  plugins: [],
};