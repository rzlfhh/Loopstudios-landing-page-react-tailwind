module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': 'hsl(0, 0%, 100%)',
      'black': 'hsl(0, 0%, 0%)',
      'dGray': 'hsl(0, 0%, 55%)',
    },
    fontFamily: {
      alata: ['"Alata"', 'sans-serif'],
      josefin: ['"Josefin Sans"', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-mobile': "url('/src/images/mobile/image-hero.jpg')",
        'hero-desktop': "url('/src/images/desktop/image-hero.jpg')",
      }
    },
  },
  plugins: [],
}
