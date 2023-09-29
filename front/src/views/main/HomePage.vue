<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="p-3 w-full flex justify-between items-center">
    <div>
      <img src="@/assets/icons/logo.svg" class="h-12" alt="" />
    </div>
    <ul class="flex gap-5 items-center font-medium">
      <li>
        <RouterLink to="/"> Inicio </RouterLink>
      </li>
      <li>
        <RouterLink to="/features"> Características </RouterLink>
      </li>
      <li>
        <RouterLink to="/news"> Noticias </RouterLink>
      </li>
      <li>
        <RouterLink to="/contact"> Contacto </RouterLink>
      </li>
    </ul>
    <RouterLink to="/auth/login"
      class="border-blue-900 text-blue-900 font-medium border-[3px] rounded-3xl py-3 px-5"
    >
      Iniciar sesión
    </RouterLink>
  </nav>
  <main>main</main>
  <footer>footer</footer>
</template>
