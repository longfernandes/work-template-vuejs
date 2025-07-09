<template>
    <section>
        <div><HeroSection /></div>
        <ReportSection />
        <AsideSection />
        <FounderSection />
        <ProposeSection />
        <div id="nursery"><NurserySection /></div>
        <ContactSection />

    </section>
</template>

<script>

import AsideSection from '../components/AsideSection.vue';
import ContactSection from '../components/ContactSection.vue';
import FounderSection from '../components/FounderSection.vue';
import HeroSection from '../components/HeroSection.vue';
import NurserySection from '../components/NurserySection.vue';
import ProposeSection from '../components/ProposeSection.vue';
import ReportSection from '../components/ReportSection.vue';

    export default {
        name: 'HomePage',
        components: {
            HeroSection,
            ReportSection,
            AsideSection,
            FounderSection,
            ProposeSection,
            NurserySection,
            ContactSection,
        }

    }
</script>

<style scoped>

</style>