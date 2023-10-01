module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial': 'radial-gradient(var(--tw-gradient-stops))',
        'conic': 'conic-gradient(var(--tw-gradient-stops))',
      }
    },
    fontFamily:{
      "inter": ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
}