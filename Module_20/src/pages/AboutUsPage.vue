<template>
    <div>
        <HeaderAbout />
        <OurAbout />
        <AsideAbout />
    </div>
</template>

<script>

import AsideAbout from '../components/AsideAbout.vue';
import HeaderAbout from '../components/HeaderAbout.vue';
import OurAbout from '../components/OurAbout.vue';

    export default {
        name:'AboutUsPage',
        components: {
            HeaderAbout,
            OurAbout,
            AsideAbout,
        } 
    }
</script>

<style  scoped>

</style>