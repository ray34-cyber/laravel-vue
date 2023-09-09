import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],
    mode: "jit",
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                animateArrowRight: {
                    "0%, 100%": {
                        transform: "translateX(0%)",
                        animation_timing_function: "cubic-bezier(0.8, 0, 1, 1)",
                    },
                    "50%": {
                        transform: "translatex(35%)",
                        animation_timing_function: "cubic-bezier(0, 0, 0.2, 1)",
                    },
                },
                animateArrowLeft: {
                    "0%, 100%": {
                        transform: "translateX(0%)",
                        animation_timing_function: "cubic-bezier(0.8, 0, 1, 1)",
                    },
                    "50%": {
                        transform: "translatex(-35%)",
                        animation_timing_function: "cubic-bezier(0, 0, 0.2, 1)",
                    },
                },
                animate1: {
                    "0%": { left: "-100%" },
                    "50%, 100%": { left: "100%" },
                },
                animate2: {
                    "0%": { top: "-100%" },
                    "50%, 100%": { top: "100%" },
                },
                animate3: {
                    "0%": { right: "-100%" },
                    "50%, 100%": { right: "100%" },
                },
                animate4: {
                    "0%": { bottom: "-100%" },
                    "50%, 100%": { bottom: "100%" },
                },
            },
            animation: {
                animate1: "animate1 1s linear infinite",
                animate2: "animate2 1s linear 0.25s infinite",
                animate3: "animate3 1s linear 0.5s infinite",
                animate4: "animate4 1s linear 0.75s infinite",
                animateArrowRight: "animateArrowRight 1s infinite",
                animateArrowLeft: "animateArrowLeft 1s infinite",
            },
        },
    },

    plugins: [forms],
};
