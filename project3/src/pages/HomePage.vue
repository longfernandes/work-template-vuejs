<template>
    <section>
        <HeaderHome />
        <SectionHome />
        <AsideHome />
        <AdidasHome />
        <ContentHome />
        <MizunoHome />
        <KamitoHome />
        <NewsHome />
    </section>
</template>

<script>
import AdidasHome from '../components/AdidasHome.vue';
import AsideHome from '../components/AsideHome.vue';
import ContentHome from '../components/ContentHome.vue';
import HeaderHome from '../components/HeaderHome.vue';
import KamitoHome from '../components/KamitoHome.vue';
import MizunoHome from '../components/MizunoHome.vue';
import NewsHome from '../components/NewsHome.vue';
import SectionHome from '../components/SectionHome.vue';

export default {
    name: "HomePage",
    components: {
        HeaderHome,
        SectionHome,
        AsideHome,
        AdidasHome,
        ContentHome,
        MizunoHome,
        KamitoHome,
        NewsHome,
    }
};
</script>

<style scoped></style>
