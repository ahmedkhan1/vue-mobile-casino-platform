<template>
  <div class="home-container">
    <Header/> 
    <Banner/> 
    <GamesCarousel/> 
    <GamesMenu/> 
    <Footer/> 
  </div>
</template>

<script>
const Header = () => import("../components/Header/index.vue");
const Banner = () => import("../components/Banner/index.vue");
const GamesCarousel = () => import("../components/GamesCarousel/index.vue");
const GamesMenu = () => import("../components/GamesMenu/index.vue");
const Footer = () => import("../components/Footer/index.vue");

export default {
  name: 'Home',
  components: {
    Header,
    Banner,
    GamesCarousel,
    GamesMenu,
    Footer
  },
}
</script>
