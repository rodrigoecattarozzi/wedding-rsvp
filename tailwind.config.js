/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            screens: {
                sm: "640px",
                md: "768px",
                lg: "896px",
                xl: "1024px",
                "2xl": "1152px",
                "3xl": "1280px",
                "4xl": "1408px",
            },
        },
    },
    plugins: [],
};
