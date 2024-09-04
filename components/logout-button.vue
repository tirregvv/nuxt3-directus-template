<template>
    <button @click="handleLogout" class="button">Logout</button>
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