<script setup>
import { useAuthStore } from "../store/auth";
const authStore = useAuthStore();

const currentUser = authStore.getCurrentUser;
</script>
<template>


    <div class="container mx-auto px-4">

        <div class="flex justify-between items-center py-4 border-b border-b-orange-200">

            <nav class="w-full">
                <ul>
                    <li class="font-bold text-slate-200">anasayfa</li>
                </ul>
            </nav>

            <div class="flex gap-6 whitespace-nowrap">
                <p class="text-slate-200">merhaba, <span class="font-bold text-orange-600">@{{ currentUser?.username ||
                        "null"
                }}</span></p>
                <p class="text-slate-400 cursor-pointer underline hover:text-slate-200" @click="authStore.handleLogout">çıkış
                    yap</p>
            </div>

        </div>

    </div>

</template>
<style scoped>

</style>