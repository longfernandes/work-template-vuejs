<template>
    <section>
        <Header />
        <main>
            <router-view />
        </main>
        <Footer />
    </section>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
export default {
    name: "MainLayout",
    components: {
        Header,
        Footer,
    },
};
</script>

<style scoped></style>
