module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width'
      },
    },
    fontFamily:{
      "inter": ['Inter', 'sans-serif'],
      "rale": ['Raleway', 'sans-serif'],
      "pop": ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}