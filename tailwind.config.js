/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    extend: {
      colors: {
        "primary-accent": "var(--primary-accent)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "border-primary": "var(--border-primary)",
        "background-secondary": "var(--background-secondary)",
      },
    },
  },
  plugins: [],
};
