<template>
    <section>
        <HeroReport />
        <AllReport />
    </section>
</template>

<script>

import AllReport from '../components/AllReport.vue';
import HeroReport from '../components/HeroReport.vue';

    export default {
        name: "ReportPage",
        components: {
            HeroReport,
            AllReport,
        }
        
    }
</script>

<style lang="scss" scoped>

</style>