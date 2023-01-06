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
        'dark-grey': "#292B2E",
        'md-grey': '#464A55',
        'light-grey': '#7E7E7E',

        'primary-blue' : "#2196F3",
        'primary-blue-half' : "#2196F350",
        'light-blue': '#E3F2FD',
        'light-deepblue': '#212946',
        'primary-deepblue': '#1a223f',
        'dark-deepblue': '#111936',

        'primary-deeppurple': '#673AB7',

        'primary-yellow': '#FFC107',
        'light-yellow': '#FFF8E1',
      },
      width: {
        '7/24': '32%',
      },
      borderWidth: {
        '1': '1px',
      },
      gridTemplateColumns: {
        "dashboardLayoutMenuClosed": '100px 1fr',
        "dashboardLayoutMenuOpened": '300px 1fr',
      },
      gridTemplateRows: {
        "dashboardLayout": "96px 1fr"
      },
      boxShadow: {
        "headbar-button": "0 0 5px",
      }
    }
  },
  plugins: [],
  darkMode: 'class' //can be changed to 'media'or 'class'
}
