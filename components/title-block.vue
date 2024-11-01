<template>
    <h1 class="flex h-full w-full select-none items-center justify-center text-5xl">{{ title }}</h1>
</template>

<script setup lang="ts">
defineProps({
    title: String
});
</script>
