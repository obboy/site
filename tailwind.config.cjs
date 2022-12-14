const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        'theme-primary': '#70EE9C',
        'theme-gray': '#323232',
        'theme-black': '#1E1E1E',
        'theme-white': 'rgba(255, 255, 255, 0.8)'
      },
      fontFamily: {
        'theme-rubik': ['Rubik', 'sans-serif'],
        'theme-inter': ['Inter', 'sans-serif'],
        'theme-monda': ['Monda', 'sans-serif']
      }
    },
  },

  plugins: [],
};

module.exports = config;
