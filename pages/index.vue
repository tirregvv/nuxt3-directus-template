<template>
    <div class="flex flex-col items-center gap-y-4">
        <h1 class="text-center mb-2">Welcome to the public home page</h1>
        <button @click="$router.push('/protected')" class="button">Protected page</button>
    </div>
</template>