<template>
    <div class="bg-warmgray-400 min-h-screen min-w-screen">
        <p class="text-center text-warmgray-700">
            default layout
        </p>
        <slot />
    </div>
</template>

<script>
export default {
    name: "default"
};
</script>
