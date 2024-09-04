<template>
    <div class="h-dvh w-dvw overflow-y-auto no-scrollbar px-4 py-32 bg-cello-200 dark:bg-cello-950">
        <NuxtLayout name="default">
            <DarkmodeToggle/>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.1s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(.5rem);
}
</style>