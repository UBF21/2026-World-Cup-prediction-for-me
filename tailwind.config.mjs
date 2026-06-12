/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        night: '#07111C',
        surface: '#0D1E2E',
        border: '#1A3244',
        pitch: '#1FE08C',
        'pitch-dim': '#0E8F5A',
        gold: '#F6C544',
        'gold-dim': '#b98f1f',
        coral: '#FF5470',
        muted: '#4A6B82',
        'muted-2': '#3a5568',
        ink: '#F0F4F8',
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['Spline Sans Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
