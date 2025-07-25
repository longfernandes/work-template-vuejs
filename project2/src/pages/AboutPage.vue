<template>
    <section>
        <HeroAbout />
        <SectionAbout />
        <AsideAbout />
        <SidebarAbout />
    </section>
</template>

<script>
import AsideAbout from "../components/AsideAbout.vue";
import HeroAbout from "../components/HeroAbout.vue";
import SectionAbout from "../components/SectionAbout.vue";
import SidebarAbout from "../components/SidebarAbout.vue";

export default {
    name: "AboutPage",
    components: {
        HeroAbout,
        SectionAbout,
        AsideAbout,
        SidebarAbout,
    },
};
</script>

<style scoped></style>
