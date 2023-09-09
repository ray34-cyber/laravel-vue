<template>
    <Head title="login" />
    <div class="h-screen md:flex">
        <SideBg />
        <FormLogin />
    </div>
</template>

<script setup>
import { Head } from "@inertiajs/vue3";
import FormLogin from "@/Pages/login/partials/FormLogin.vue";
import SideBg from "@/Pages/login/partials/SideBg.vue";
</script>
