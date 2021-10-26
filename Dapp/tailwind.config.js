module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#e24717",
                    muted: "#FFE7E0"
                },
                secondary: {
                    DEFAULT: "#f0af6d",
                    light: "#ffe2da"
                },
            },
            borderRadius: {
                '8xl': '3rem'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
