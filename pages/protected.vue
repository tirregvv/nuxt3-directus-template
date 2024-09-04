<template>
    <div class="flex flex-col items-center gap-y-4">
        <h1 class="text-white text-2xl font-semibold text-center">Welcome to the protected page</h1>

        <LogoutButton />
    </div>
</template>

<script setup>
definePageMeta({
    middleware: [
        'auth',
    ],
});
</script>