/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#ffffff',
        bone: '#F8F5EF',
        ash: '#ececec',
        stone: '#6a6a6a',
        graphite: '#333333',
        ink: '#1f1d1e',
        obsidian: '#000000',
        brand: {
          primary: '#8C460C',    // Dark burnt orange
          secondary: '#D17E3A',  // Warm orange
          bg: '#F8F5EF',         // Warm off-white / bone
        }
      },
      fontFamily: {
        lunar: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Cinzel', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.03em', // Signature universal tracking of Nornorm
        normal: '0',
      },
      borderRadius: {
        'card': '8px',
        'pill': '9999px',
      }
    },
  },
  plugins: [],
}
