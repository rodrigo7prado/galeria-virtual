import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'system-ui'],
        montserrat: ['Montserrat', 'system-ui'],
        oswald: ['Oswald','system-ui'],
        openSans: ['Open Sans', 'sans-serif'],
        serif: ['Lora', 'serif'],
        heading: ['Opens', 'sans-serif']
        // sans: ['Raleway', 'sans-serif'], // Substitua 'Roboto' pelo nome da sua fonte
      },
      fontVariationSettings: {
        'width-75': "'wdth' 75",
        'width-100': "'wdth' 100",
        'width-125': "'wdth' 125",
      },
      // fontWeight: {
      //   thin: 100,  // Adiciona um peso 'thin' com valor 100
      //   light: 300, // Adiciona um peso 'light' com valor 300
      //   normal: 400, // Peso normal
      //   medium: 500, // Peso médio
      //   bold: 700, // Peso negrito
      //   extrabold: 900, // Peso extra negrito
      // },
      colors: {
        'rp7verdeLimao': {
          100: 'hsl(66, 100%, 100%)',
          150: 'hsl(66, 100%, 95%)',
          200: 'hsl(66, 100%, 90%)',
          250: 'hsl(66, 100%, 85%)',
          300: 'hsl(66, 100%, 80%)',
          350: 'hsl(66, 100%, 75%)',
          400: 'hsl(66, 100%, 70%)',
          450: 'hsl(66, 100%, 65%)',
          500: 'hsl(66, 100%, 60%)',
          550: 'hsl(66, 100%, 55%)',
          600: 'hsl(66, 100%, 50%)',
          650: 'hsl(72, 70%, 50%)',
          700: 'hsl(66, 100%, 40%)',
          750: 'hsl(66, 100%, 35%)',
          800: 'hsl(66, 100%, 30%)',
          850: 'hsl(66, 100%, 25%)',
          900: 'hsl(66, 100%, 20%)',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
