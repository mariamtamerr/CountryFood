<script setup>
// import { RouterLink, RouterView } from "vue-router";

import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Merits from "./components/Merits.vue";
import Merits2 from "./components/Merits2.vue";
import Merits3 from "./components/Merits3.vue";
import Merits4 from "./components/Merits4.vue";
import Services from "./components/Services.vue";
import Reviews from "./components/Reviews.vue";
import Download from "./components/Download.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <header>
    <Navbar />
    <Hero />

    <div id="about">
      <About />
    </div>

    <div id="merits">
      <Merits />
    </div>

    <Merits2 />
    <Merits3 />
    <Merits4 />

    <div id="services">
      <Services />
    </div>

    <div id="reviews">
      <Reviews />
    </div>

    <div id="download-app">
      <Download />
    </div>

    <Footer />
    <!-- <RouterLink to="/">Home</RouterLink> -->
  </header>

  <!-- <RouterView /> -->
</template>

<style scoped>
/* @font-face {
  font-family: "PingAR";
  src: url("@/assets/font/Ping.Font.Tlwen.com/PingAR+LT-Regular.woff2")
      format("woff2"),
    url("@/assets/font/Ping.Font.Tlwen.com/PingAR+LT-Regular.woff")
      format("woff");
  font-weight: normal;
  font-style: normal;
} */
</style>
