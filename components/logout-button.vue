<template>
    <button @click="handleLogout" class="px-4 py-2 bg-cyan-500 text-slate-800">Logout</button>
</template>

<script setup>
const router = useRouter();
const { logout } = useDirectusAuth();

async function handleLogout() {
    logout().then(() => {
        router.push("/");
    });
}
</script>