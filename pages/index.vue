<template>
    <div class="flex flex-col items-center gap-y-4">
        <h1 class="text-white text-2xl font-semibold text-center">Welcome to the public home page</h1>
        <button @click="$router.push('/protected')" class="px-4 py-2 bg-cyan-500 text-slate-800">Protected page</button>
    </div>
</template>