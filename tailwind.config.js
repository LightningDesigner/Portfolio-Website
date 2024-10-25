module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'manifesto-green': '#00ff00',  // Adjust this to your preferred green
        'manifesto-blue': '#0000ff',   // Adjust this to your preferred blue
        'manifesto-yellow': '#ffff00', // Adjust this to your preferred yellow
      },
    },
  },
  plugins: [],
};
