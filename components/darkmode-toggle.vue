<template>
    <div style="z-index: 99999;" @click="toggleMode" class="absolute top-5 right-5 rounded-full p-2 h-10 w-10 hover-effect">
        <ClientOnly fallback-tag="span">
            <template #fallback>
                <Icon size="1.5rem" name="eos-icons:loading" />
            </template>
            <Icon v-if="enabled" size="1.5rem" name="material-symbols:wb-sunny-rounded" />
            <Icon v-else size="1.5rem" name="material-symbols:nights-stay-rounded" />
        </ClientOnly>
    </div>
</template>

<script setup>
const colorMode = useColorMode();
const enabled = ref(colorMode.preference === "dark");

onMounted(() => {
    enabled.value = colorMode.preference === "dark";
});

const toggleMode = () => {
    enabled.value = !enabled.value;
    colorMode.preference = enabled.value ? "dark" : "light";
};
</script>