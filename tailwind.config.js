/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        deep: '#050816',
        'deep-alt': '#081223',
        cyan: '#67e8f9',
        blue: '#60a5fa',
        teal: '#2dd4bf',
        amber: '#fbbf24',
      },
      boxShadow: {
        glow: '0 0 28px rgba(103, 232, 249, 0.28)',
        panel: '0 18px 80px rgba(3, 7, 18, 0.45)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(circle at 12% 18%, rgba(34, 211, 238, 0.16), transparent 28%), radial-gradient(circle at 85% 10%, rgba(96, 165, 250, 0.18), transparent 22%), radial-gradient(circle at 60% 62%, rgba(45, 212, 191, 0.1), transparent 30%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
    },
  },
  plugins: [],
};
