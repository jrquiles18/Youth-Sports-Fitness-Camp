module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        christmas: {
          green: '#0ca90c',
          red: '#ce0d0d'
        }
      },
      fontFamily: {
        body: ['Montserrat'],
        cursive: ['Shadows Into Light']
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        marquee2: 'marquee2 20s linear infinite', 
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        },
      },
    },
  },
  variants: {
    extend: {
     
    }
  },
  plugins: [],
}
