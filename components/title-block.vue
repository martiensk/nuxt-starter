<template>
    <h1 class="flex h-full w-full items-center justify-center text-5xl select-none">{{ title }}</h1>
</template>

<script setup lang="ts">
defineProps({
    title: String
});
</script>
