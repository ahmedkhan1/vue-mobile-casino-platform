<template>
  <section class="footer-container">
    <div class="footer-items">
      <ImageSrc 
        v-for="(item, index) in menuList" 
        :key="index" 
        :image="item.active? item.iconActive: item.icon" 
        :label="item.name" 
        @click.native="onSelectMenu(item)"
      />  
    </div>
  </section>
</template>

<script>
const ImageSrc = () => import("../Image/index.vue");
import { CommonMethods } from "../../common/common.methods";

export default {
  name: 'Footer',
  components: {
    ImageSrc
  },
  data(){
    return {
      menuList: [
        {
          id: 1,
          name: "Home",
          active: false,
          icon: CommonMethods.loadResponsiveIcons('ho_ho2'),
          iconActive: CommonMethods.loadResponsiveIcons('ho_ho1')
        },
        {
          id: 2,
          name: "Gifts",
          active: false,
          icon: CommonMethods.loadResponsiveIcons('ho_ac2'),
          iconActive: CommonMethods.loadResponsiveIcons('ho_ac1')
        },
        {
          id: 3,
          name: "earnings",
          active: false,
          icon: CommonMethods.loadResponsiveIcons('ho_wa2'),
          iconActive: CommonMethods.loadResponsiveIcons('ho_wa1')
        },
        {
          id: 4,
          name: "Chat",
          active: false,
          icon: CommonMethods.loadResponsiveIcons('ho_co2'),
          iconActive: CommonMethods.loadResponsiveIcons('ho_co1')
        },
        {
          id: 5,
          name: "Profile",
          active: false,
          icon: CommonMethods.loadResponsiveIcons('ho_my2'),
          iconActive: CommonMethods.loadResponsiveIcons('ho_my1')
        }
      ],
    }
  },
  methods: {
    onSelectMenu(item) {
      this.menuList.map(res=> res.active = false);
      item.active = true;
    }
  }
}
</script>


<style scope>
  @import './index.css';
</style>