<template>
    <div
        class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-teal-500 to-purple-700 i justify-around items-center hidden"
    >
        <div class="flex flex-col justify-center items-center gap-5 lg:gap-6">
            <h1 class="text-2xl md:text-3xl lg:text-4xl text-white font-bold">
                Silahkan kembali ke home
            </h1>
            <Link
                href="/"
                class="flex flex-col items-center md:text-6xl text-emerald-400"
            >
                <i class="pi pi-arrow-circle-left animate-animateArrowLeft"></i>
            </Link>
        </div>
        <div
            class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"
        ></div>
        <div
            class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"
        ></div>
        <div
            class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"
        ></div>
        <div
            class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"
        ></div>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
</script>
