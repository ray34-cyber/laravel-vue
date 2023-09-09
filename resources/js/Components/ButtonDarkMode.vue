<template>
    <div class="self-baseline">
        <button
            @click="toggleDarkMode"
            class="w-28 h-10 md:w-32 md:h-12 lg:w-40 lg:h-16 bg-slate-500 rounded-full flex items-center px-2 dark:bg-white"
        >
            <i
                v-if="ButtonDarkMode"
                class="pi pi-moon text-3xl lg:text-5xl transition duration-300 ease-in-out"
                id="moon"
            ></i>
            <i
                v-if="!ButtonDarkMode"
                class="pi pi-sun text-3xl lg:text-5xl text-yellow-300 transition duration-500 ease-in-out"
                id="sun"
            ></i>
        </button>
    </div>
</template>

<script setup>
import { ref } from "vue";

const ButtonDarkMode = ref(false);

function toggleDarkMode() {
    const htmlElement = document.documentElement;

    if (htmlElement.classList.contains("dark")) {
        htmlElement.classList.remove("dark");
        ButtonDarkMode.value = false;
    } else {
        htmlElement.classList.add("dark");
        ButtonDarkMode.value = true;

        setTimeout(() => {
            const moon = document.getElementById("moon");
            moon.classList.add("lg:translate-x-24");
            moon.classList.add("md:translate-x-20");
            moon.classList.add("translate-x-16");
        });
    }
}
</script>
