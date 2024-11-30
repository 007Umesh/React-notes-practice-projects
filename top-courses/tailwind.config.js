const { BsBorderWidth } = require('react-icons/bs');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        spinner: "spinner 0.75s infinite linear", // Define the spinner animation
      },
      keyframes: {
        spinner: {
          to: {
            transform: "rotate(360deg)", // Full rotation
          },
        },
      },
      spacing: {
        spinner: "56px", // Custom spacing for width and height
      },
      borderWidth: {
        spinner: "11.2px", // Custom border width
      },
      borderColor: {
        spinner: "black", // Custom border color
      },
      fontFamily:{
        sans: ['Roboto', 'Arial', 'sans-serif'], // Add your custom font here
            roboto: ['Roboto', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

/*  width: 56px;
   height: 56px;
   border: 11.2px #474bff double;
   border-left-style: solid;
   border-radius: 50%;
   animation: spinner-aib1d7 0.75s infinite linear;
}

@keyframes spinner-aib1d7 {
   to {
      transform: rotate(360deg);
   }
} */