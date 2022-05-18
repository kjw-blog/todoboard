module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        post: '3px 5px 5px rgba(0,0,0,0.4)',
        hover: '3px 5px 7px rgba(0,0,0,0.37)',
      },
      borderRadius: {
        post: '30px 5px',
        hover: '37.5px 15px',
      },
      backgroundImage: {
        board: "url('/board.png')",
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('tailwind-scrollbar-hide'),
  ],
};
