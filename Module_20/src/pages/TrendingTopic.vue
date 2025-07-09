<template>
    <section>
        <HeroTrending />
        <UpdateTrending />
    </section>
</template>

<script>
import HeroTrending from "../components/HeroTrending.vue";
import UpdateTrending from "../components/UpdateTrending.vue";

export default {
    name: "TrendingTopic",
    components: {
        HeroTrending,
        UpdateTrending,
    },
};
</script>

<style scoped></style>
