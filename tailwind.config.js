module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "h-xl": ["3rem", "4.5rem"], // 48px
        "h-lg": ["2rem", "3rem"], // 32px
        "h-md": ["1.5rem", "2.25rem"], // 24px
        "h-sm": ["1.25rem", "1.875rem"], // 20px
        "b-xl": ["1.125rem", "2rem"], // 18px
        "b-lg": ["1rem", "1.75rem"], // 16px
        "b-md": ["0.875rem", "1.5rem"], // 14px
        "b-sm": ["0.75rem", "1.3rem"], // 12px
      },
      colors: {
        purple: {
          light: "#F0F0F5",
          300: "#DDDDF6",
          dark: "#09006F",
        },
        blue: {
          200: "#93C5FD",
          300: "#59A7FF",
        },
        yellow: {
          200: "#FFD770",
          300: "#F6C035",
        },
        red: {
          300: "#EC8A69",
        },
      },
      fontSize: {
        navbar: [
          "48px",
          {
            lineHeight: "52px",
            fontWeight: "600",
          },
        ],
        heading: [
          "32px",
          {
            lineHeight: "36px",
            fontWeight: "600",
          },
        ],
        subHeading: [
          "24px",
          {
            lineHeight: "28px",
            fontWeight: "600",
          },
        ],
        subHeadingM: [
          "18px",
          {
            lineHeight: "24px",
            fontWeight: "600",
          },
        ],
        lilSubHeading: [
          "18px",
          {
            lineHeight: "24px",
            fontWeight: "600",
          },
        ],
        lilSubHeadingM: [
          "14px",
          {
            lineHeight: "16px",
            fontWeight: "600",
          },
        ],
        content: "16px",
        contentM: "12px",
      },
      screens: {
        mobile: { MIN: "360px", max: "639px" },
        navbar1: { MIN: "1280px", max: "1400px" },
        xsm: "400px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        display: ["Poppins", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      animation: {
        fade: "fadeIn 500ms",
      },
      dropShadow: {
        medium: "0 14px 16px rgba(0, 0, 0, 0.15)",
        nav: "0 8px 8px rgba(158, 158, 158, 0.15)",
        foot: "12px 0 12px rgba(158, 158, 158, 0.15)",
      },
      // that is actual animation
      keyframes: (theme) => ({
        fadeIn: {
          "0%": { opacity: "50%" },
          "100%": { opacity: "100%" },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
