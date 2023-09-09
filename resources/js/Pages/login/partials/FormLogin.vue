<template>
    <div
        class="grid grid-row-2 gap-y-4 md:gap-y-0 lg:gap-y-0 justify-items-center md:w-1/2 py-10 dark:bg-slate-800"
    >
        <ButtonDarkMode />
        <form class="p-8" @submit.prevent="login">
            <p
                class="text-2xl dark:text-white font-bold md:text-3xl lg:text-4xl text-gray-600 mb-7 text-center"
            >
                Please Login
            </p>
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl mt-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                </svg>
                <Input
                    type="email"
                    title="Email"
                    name="email"
                    id="email"
                    v-model="FormData.email"
                />
            </div>

            <div class="flex items-center border-2 py-2 px-3 rounded-2xl mt-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                    />
                </svg>
                <Input
                    type="password"
                    title="Password"
                    name="password"
                    id="password"
                    v-model="FormData.password"
                />
            </div>
            <div class="text-center py-4">
                <Button title="Login" type="submit" />
            </div>
        </form>
        <div
            class="flex flex-col justify-center items-center gap-5 md:hidden lg:hidden"
        >
            <h1
                class="text-2xl md:text-3xl lg:text-4xl text-slate-700 dark:text-white font-bold"
            >
                Silahkan kembali ke home
            </h1>
            <Link
                href="/"
                class="flex flex-col items-center text-4xl md:text-5xl text-emerald-400"
            >
                <i class="pi pi-arrow-circle-left animate-animateArrowLeft"></i>
            </Link>
        </div>
    </div>
</template>

<script>
import Input from "@/Components/Input.vue";
import ButtonDarkMode from "@/Components/ButtonDarkMode.vue";
import Button from "@/Components/Button.vue";
import { router } from "@inertiajs/vue3";
import { Link } from "@inertiajs/vue3";
export default {
    name: "FormLogin",
    components: {
        Input,
        Button,
        ButtonDarkMode,
        Link,
    },
    data() {
        return {
            FormData: {
                email: "",
                password: "",
            },
        };
    },
    methods: {
        login() {
            router.post("/login", this.FormData);
        },
    },
};
</script>
