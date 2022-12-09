/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./comps/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-grey': '#E7EBF1',
        'primary-blue' : "#5143FF",
        'dark-grey': "#292B2E",
        'md-grey': '#464A55',
        'light-grey': '#7E7E7E',
      },
      width: {
        '7/24': '32%',
      },
      borderWidth: {
        '1': '1px',
      },
      gridTemplateColumns: {
        "dashboardLayout": '100px 1fr'
      },
      gridTemplateRows: {
        "dashboardLayout": "96px 1fr"
      }
    }
  },
  plugins: [],
  darkMode: 'class' //can be changed to 'media'or 'class'
}
