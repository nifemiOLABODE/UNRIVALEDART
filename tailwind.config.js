/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#07080b',
          900: '#0d0f17',
          850: '#131520',
          800: '#181b29',
          700: '#222638',
          600: '#32374d',
        },
        brand: {
          accent: '#FF3366', // bold electric crimson/rose
          accentHover: '#FF1A53',
          cyber: '#00F0FF',  // vibrant cyan
          amber: '#FFB800',  // warm gold/amber
          purple: '#9333EA', // rich violet
          muted: '#8E92A8',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Outfit"', '"Syne"', 'sans-serif'],
        brand: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'solid-sm': '2px 2px 0px 0px rgba(0, 0, 0, 0.9)',
        'solid': '4px 4px 0px 0px rgba(0, 0, 0, 0.9)',
        'solid-lg': '6px 6px 0px 0px rgba(0, 0, 0, 0.9)',
        'solid-accent': '4px 4px 0px 0px #FF3366',
        'solid-cyber': '4px 4px 0px 0px #00F0FF',
        'solid-amber': '4px 4px 0px 0px #FFB800',
        'glow-accent': '0 0 24px -4px rgba(255, 51, 102, 0.4)',
        'glow-cyber': '0 0 24px -4px rgba(0, 240, 255, 0.35)',
      },
      letterSpacing: {
        'widest-brand': '0.35em',
        'super-wide': '0.5em',
      }
    },
  },
  plugins: [],
}
