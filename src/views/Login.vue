<script setup>
import { reactive } from 'vue';
import Spinner from "../components/Spinner.vue"

const loginForm = reactive({
    username: undefined,
    password: undefined,
})

import { useAuthStore } from "../store/auth"
const authStore = useAuthStore();

</script>
<template>

    <div class="flex items-center justify-center h-screen bg-slate-900">
        <form class="border border-slate-800 lg:w-[600px] p-12 rounded-lg"
            @submit.prevent="authStore.handleLogin(loginForm)">
            <h2 class="font-bold text-3xl text-white">Giriş Yap.</h2>

            <div class="my-4">
                <input type="text"
                    class="w-full h-10 px-4 py-4 rounded-lg border border-slate-800 focus:border-orange-600 bg-transparent focus:bg-slate-800 text-white outline-none transition-all focus:duration-800"
                    placeholder="kullanıcı adı" v-model="loginForm.username">
            </div>

            <div class="my-4">
                <input type="password"
                    class="w-full h-10 px-4 py-4 rounded-lg border border-slate-800 focus:border-orange-600  bg-transparent focus:bg-slate-800 text-white outline-none transition-all focus:duration-600"
                    placeholder="parola" v-model="loginForm.password">
            </div>

            <div class="mt-6">
                <button type="submit"
                    class="text-center flex gap-4 px-6 py-2 bg-orange-600 hover:bg-orange-900 text-slate-50 font-bold rounded-lg outline-none transition-all focus:duration-600"
                    :disabled="authStore.loading">
                    <Spinner v-if="authStore.loading" />
                    giriş yap
                </button>
            </div>

        </form>

    </div>
</template>
<style scoped>

</style>