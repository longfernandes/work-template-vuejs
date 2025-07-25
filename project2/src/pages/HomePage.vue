<template>
    <section>
        <HeroSection />
        <MenuSection />
        <ServiceSection />
        <BookingSection />
        <ContactSection />
        <ReasonsSection />
    </section>
</template>

<script>
import BookingSection from "../components/BookingSection.vue";
import ContactSection from "../components/ContactSection.vue";
import HeroSection from "../components/HeroSection.vue";
import MenuSection from "../components/MenuSection.vue";
import ReasonsSection from "../components/ReasonsSection.vue";
import ServiceSection from "../components/ServiceSection.vue";

export default {
    name: "HomePage",
    components: {
        HeroSection,
        MenuSection,
        ServiceSection,
        BookingSection,
        ContactSection,
        ReasonsSection,
        
    },
};
</script>

<style scoped></style>
