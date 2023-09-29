<script setup>
import { RouterLink } from "vue-router";
import { useLogin } from "@/composables/auth/useLogin";
const { userCredentials, onSubmit } = useLogin();
</script>

<template>
  <div class="w-full md:w-[45%] bg-white rounded-lg p-4 flex flex-col">
    <img
      src="@/assets/icons/logo.svg"
      class="h-9 md:h-12 mt-6 md:mt-12 mb-2"
      alt="Logo"
    />
    <h2
      class="text-center text-xl md:text-3xl font-semibold tracking-wide text-blue-900 mb-2"
    >
      Bienvenido de nuevo
    </h2>
    <p class="text-center text-gray-600 mb-4">Ingresa tus crendenciales</p>

    <form
      @submit.prevent="onSubmit(userCredentials)"
      class="flex flex-col m-auto w-[90%] md:w-[75%] mt-4 md:mt-8"
    >
      <div class="flex flex-col mb-4">
        <label class="text-gray-600" for="email">Correo</label>
        <input
          v-model="userCredentials.email"
          id="email"
          type="email"
          placeholder="Ingresa tu correo"
          class="border-b-4 outline-0 pb-2"
        />
      </div>
      <div class="flex flex-col">
        <label class="text-gray-600" for="password">Contraseña</label>
        <input
          v-model="userCredentials.password"
          id="password"
          type="password"
          placeholder="Ingresa tu correo"
          class="border-b-4 outline-0 pb-2"
        />
      </div>

      <div class="mt-8 flex flex-col gap-4">
        <button
          type="submit"
          class="bg-blue-900 w-full p-4 rounded-3xl text-white md:text-lg"
        >
          Iniciar sesión
        </button>
        <button
          type="button"
          class="bg-gray-200 w-full p-4 rounded-3xl flex gap-2 items-center justify-center"
        >
          <img src="@/assets/icons/google.svg" class="h-8" alt="Google Logo" />
          <p class="text-black md:text-lg">Iniciar con Google</p>
        </button>
      </div>
    </form>
    <p class="text-gray-600 text-center my-4">
      ¿No tienes una cuenta?
      <RouterLink class="font-semibold" to="/auth/register"
        >Crea una.</RouterLink
      >
    </p>
  </div>
</template>
