<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from "./components/header.vue";
import Visite from "./views/visite.vue";
import Destination from "./views/destination.vue";
import OffreSection from "./views/offre.vue";
import Activity from "./views/activity.vue";
import Explore from "./views/explore.vue";
import Travel from "./views/travel.vue";
import Logo from "./components/logo.vue";
import Footer from "./components/footer.vue";
</script>
<template>
  <Header />
  <main>
    <router-view />
    <Visite />
    <Destination msg="JE suis la" />
    <OffreSection />
    <Activity />
    <Explore />
    <Travel />
    <Logo />
    <Footer />
  </main>
</template>

<style></style>
