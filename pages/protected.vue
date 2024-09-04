<template>
    <div class="flex flex-col items-center gap-y-4">
        <h1 class="text-center mb-2">Welcome to the protected page</h1>
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