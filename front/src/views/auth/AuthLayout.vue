<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
    <section class="bg-auth w-full h-screen overflow-hidden">
        <RouterView/>
    </section>
</template>

<style scoped lang="scss">
.bg-auth{
    background: url('@/assets/backgrounds/auth-bg.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>