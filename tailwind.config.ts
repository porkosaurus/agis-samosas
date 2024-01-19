import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        custom: {
          'secondary-color': '#F0CEA0',
          'second-section-color': '#F3A712',
          'banner-color': '#00916E',
          'main-black': '#272D2D',
          'main-green': '#717744',
          'primary-color': '#d1495b'
        },
      }
    },
  },
  plugins: [],
}
export default config
