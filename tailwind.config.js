module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Saira',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      base: '#23262F',
      accent: '#286F6C',
      grey: {
        DEFAULT: '#919297',
        1: '#D9D9D9',
        2: '#E7E9EB',
        3: '#F5F5F5',
      },
      white: '#fff',
    },
    extend: {
      backgroundImage: {
        hero: 'url("/src/assets/img/hero.png")',
        chair: 'url("/src/assets/img/chair.png")',
        bed: 'url("/src/assets/img/bed.png")',
        cupboard: 'url("/src/assets/img/cupboard.png")',
        lighting: 'url("/src/assets/img/lighting.png")',
        newsletter: 'url("/src/assets/img/newsletter.png")',
      },
      dropShadow: {
        primary: '0px 4px 10px rgba(15, 27, 51, 0.05);',
      },
    },
  },
  plugins: [],
};
