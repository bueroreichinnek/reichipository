/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000',
        white: '#FFFFFF',
        secondary: {
          1: '#6F003C',
          2: '#004B5B',
          3: '#00B19C',
          4: '#8100A1',
          5: '#D675D8',
          6: '#2E4FC4',
          7: '#D4D4FF',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}; 