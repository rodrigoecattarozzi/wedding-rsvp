/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            screens: {
                sm: '340px',
                md: "640px",
                lg: "768px",
                xl: "896px",
                '2xl': "1024px",
                "3xl": "1152px",
                "4xl": "1280px",
                "5xl": "1408px",
            },
        },
    },
    plugins: [],
};
