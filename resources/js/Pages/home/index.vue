<template>
    <Head title="Home" />
    <div
        class="container mx-auto flex flex-col justify-center items-center h-[90vh] gap-5 lg:gap-6"
    >
        <h1 class="text-2xl md:text-5xl lg:text-6xl font-bold">
            Silahkan ke halaman login
        </h1>
        <Link
            href="/login"
            class="flex flex-col items-center text-5xl md:text-7xl text-emerald-400"
        >
            <i class="pi pi-arrow-circle-right animate-animateArrowRight"></i>
        </Link>
    </div>
</template>

<script setup>
import { Head, Link } from "@inertiajs/vue3";
</script>
