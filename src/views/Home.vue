<script setup>
</script>
<template>


    <div class="container mx-auto px-4">

        <div class="flex justify-between items-center py-4 border-b border-b-orange-200">

            <nav class="w-full">
                <ul>
                    <li class="font-bold">anasayfa</li>
                </ul>
            </nav>

            <div class="flex gap-8 whitespace-nowrap">
                <p class="text-slate-900">merhaba, <span class="font-bold text-orange-600">@test</span></p>
                <p class="text-zinc-500 cursor-pointer hover:underline" @click="$router.push({ name: 'login' })">çıkış
                    yap</p>
            </div>

        </div>

    </div>

</template>
<style scoped>

</style>