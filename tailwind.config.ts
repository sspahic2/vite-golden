/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '80px',
      },
      screens: {
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      screens: {
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px",
      },
      fontSize: {
        customTextFont: ['20px', { lineHeight: '1.5' }],
        'customTextFont-md': ['22px', { lineHeight: '1.5' }],
        'customTextFont-lg': ['34px', { lineHeight: '1.5' }],
        'customTextFont-xl': ['45px', { lineHeight: '1.5' }],

        customTextP: ['16px', { lineHeight: '1.5' }],
        'customTextP-md': ['18px', { lineHeight: '1.5' }],
        'customTextP-lg': ['20px', { lineHeight: '1.5' }],
        'customTextP-xl': ['25px', { lineHeight: '1.5' }],

        customTextRegister: ['12px', { lineHeight: '1.5' }],
        'customTextRegister-md': ['14px', { lineHeight: '1.5' }],
        'customTextRegister-lg': ['16px', { lineHeight: '1.5' }],
        'customTextRegister-xl': ['20px', { lineHeight: '1.5' }],

        customBigFont: ['18px', { lineHeight: '1.5' }],
        'customBigFont-md': ['20px', { lineHeight: '1.5' }],
        'customBigFont-lg': ['25px', { lineHeight: '1.5' }],
        'customBigFont-xl': ['30px', { lineHeight: '1.5' }],

        customLargeFont: ['12px', { lineHeight: '1.5' }],
        'customLargeFont-md': ['14px', { lineHeight: '1.5' }],
        'customLargeFont-lg': ['16px', { lineHeight: '1.5' }],
        'customLargeFont-xl': ['20px', { lineHeight: '1.5' }],

        customNormalFont: ['10px', { lineHeight: '1.5' }],
        'customNormalFont-md': ['12px', { lineHeight: '1.5' }],
        'customNormalFont-lg': ['14px', { lineHeight: '1.5' }],
        'customNormalFont-xl': ['16px', { lineHeight: '1.5' }],




      },
      colors: {
        primary: '#f5b66d',
        secondary: '#71797E',
        gray: '#929292'
      },
      backgroundColor: {
        'bgLogin': 'rgba(248, 215, 138, 0.65)',
        'bgRegister': 'rgba(249, 245, 234, 0.65)',
      },
      backgroundImage: {
        'bgUsers': 'linear-gradient(180deg, rgb(248, 215, 138) 0%, rgb(249, 232, 204) 100%)',
        'bgReviews': 'linear-gradient(431deg, rgb(249, 245, 234) 0%, rgb(249, 232, 206) 100%)',
      },
    },
  },
  plugins: [],
}
