/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Legacy (keep for any residual refs)
        obsidian: '#080E12',
        champagne: '#C9A84C',
        ivory: '#EFF6F2',
        slate: '#2A2A35',
        // New NEXERA palette
        void:        '#080E12',
        forest:      '#0A1F1A',
        cobalt:      '#0B1A2E',
        emerald:     '#1A4A3A',
        ocean:       '#162847',
        'neon-green': '#00E5A0',
        'neon-blue':  '#3B9EFF',
      },
      fontFamily: {
        sans:  ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono:  ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
    },
  },
  plugins: [],
}
