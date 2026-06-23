/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        sage: {
          DEFAULT: '#778873',
          50: '#f5f6f4',
          100: '#e8ebe6',
          200: '#d1d7cd',
          300: '#a8b4a1',
          400: '#778873',
          500: '#5e6f5a',
          600: '#4a5847',
          700: '#3d493b',
          800: '#333d31',
          900: '#2d352b',
        },
        mint: {
          DEFAULT: '#A1BC98',
          50: '#f4f7f3',
          100: '#e4ebe1',
          200: '#c9d8c3',
          300: '#A1BC98',
          400: '#7fa375',
          500: '#608655',
          600: '#4b6b42',
          700: '#3d5636',
          800: '#34462f',
          900: '#2c3a29',
        },
        sand: {
          DEFAULT: '#DCCFC0',
          50: '#faf8f5',
          100: '#f3efe9',
          200: '#e8e0d6',
          300: '#DCCFC0',
          400: '#c9b8a3',
          500: '#b9a089',
          600: '#a6886e',
          700: '#8a6f5a',
          800: '#725c4c',
          900: '#5e4d40',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
        organic: "60% 40% 30% 70% / 60% 30% 70% 40%",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        soft: "0 10px 40px -10px rgba(119, 136, 115, 0.3)",
        glow: "0 0 30px rgba(161, 188, 152, 0.4)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "morph": {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "25%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
          "50%": { borderRadius: "50% 60% 30% 60% / 30% 60% 70% 40%" },
          "75%": { borderRadius: "60% 40% 60% 30% / 60% 30% 40% 70%" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "morph": "morph 8s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
