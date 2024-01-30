import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      animation: {
        "bounce-normal": "bounce 0.9s infinite",
        "bounce-fast": "bounce 0.8s infinite",
      },
    },
  },
  plugins: [require('daisyui')],
}
export default config
