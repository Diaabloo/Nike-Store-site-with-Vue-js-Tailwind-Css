/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "rgb(6 182 212)",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 6px 16px rgba(0, 0, 0, 0.2)',
      },
      spacing: {
        'card-padding': '1.5rem',
      },
      borderRadius: {
        'card': '1rem',
      },
      transitionDuration: {
        'card': '0.3s',
      },
      backgroundImage: {
        'hero': "url('images/card.jpg')",
        'card': "url('images/hero.jpg')",
        'pro': "url('images/po-pro.jpg')"
      },
      screens: {

        "wide": "1440px"
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        widthGrow: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease forwards',
        fadeOut: 'fadeOut 0.2s ease forwards',
        slideIn: 'slideIn 0.6s ease-in-out forwards',
        widthGrow: 'widthGrow 0.8s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
