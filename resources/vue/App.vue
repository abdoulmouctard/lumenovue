<template>
    <component :is="layout">
        <router-view></router-view>
    </component>
</template>
<script>
export default {
    name: "App",
    computed: {
        layout() {
            const layout = this.$route.meta.layout || "default";
            return () => import(`./layouts/${layout}.vue`);
        }
    }
};
</script>
