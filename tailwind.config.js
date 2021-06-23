module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mercury: '#e9e9e9',
        lockmara: '#0078D4'
      },
      backgroundImage: (theme) => ({
        'nav-pattern': "url('/src/assets/nav-bar.png')"
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
