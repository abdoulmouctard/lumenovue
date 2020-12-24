<template>
    <div
        class="bg-warmgray-300 divide-gray-500 divide-y-4 divide-dashed md:divide-solid min-h-5xl max-w-2xl mx-auto p-3 rounded-xl"
    >
        <h1 class="text-center my-7 text-warmgray-700 text-5xl">Index page</h1>
        <h3 class="text-gray-900 my-2">
            Hello world
        </h3>
        <p class="text-gray-700 my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            deleniti dolore omnis sequi facere pariatur officiis consequatur
            exercitationem, architecto perspiciatis beatae molestias id dolores
            eaque hic dicta minima. Mollitia, doloremque!
        </p>
        <div class="text-center">
            <p class="">count: {{ count }}</p>
            <button
                class="bg-white ring-0 p-2 m-2 rounded-lg outline-none shadow-xl"
                @click="$store.dispatch('increment')"
            >
                increment
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Index",
    computed: {
        count() {
            return this.$store.getters.count;
        }
    }
};
</script>
