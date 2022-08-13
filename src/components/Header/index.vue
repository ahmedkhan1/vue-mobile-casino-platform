<template>
  <section class="header-container">
    <!-- NOTIFICATION ICON -->
    <ImageSrc :image="notification.icon" :label="notification.name" />  

    <!-- LOGO -->
    <ImageSrc :image="logo.icon" :label="logo.name" />  
    
    <!-- MOBLIE MENU ICON -->
    <ImageSrc :image="mobileMenu.icon" :label="mobileMenu.name" />  
  </section>  
</template>

<script>
const ImageSrc = () => import("../Image/index.vue");
import { CommonMethods } from "../../common/common.methods";

export default {
  name: 'Header',
  components: {
    ImageSrc
  },
  data(){
    return {
      notification: {
        name: "notification",
        icon: CommonMethods.loadResponsiveIcons('ho_me')
      },
      logo: {
        name: "logo",
        icon: CommonMethods.loadResponsiveIcons('ho_lo')
      },
      mobileMenu: {
        name: "mobile-menu",
        icon: CommonMethods.loadResponsiveIcons('ho_li')
      }
    }
  },
}
</script>

<style scope>
@import './index.css';
</style>
