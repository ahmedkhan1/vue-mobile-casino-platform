<template>
  <section class="game-menu-container">

    <!-- GAME MENU HEADER SECTION -->
    <div class="game-menu-header">
      <!-- USER DETAILS SECTION -->
      <div class="user-details">
        <div class="wallet-container">
          <img :src="walletIcon" />  
        </div>
        <div class="user-ranks-details-container">
          <div class="user-ranks">
            <span>KEN</span>
            <div class="crown-container">
              <ImageSrc :image="crownIcon" :label="'crown'" />  
            </div>
            <span>7</span>
          </div>
          <div class="user-wallet">
            <span>$ </span><span>{{balance}}</span>
          </div>
        </div>
      </div>

      <div class="separaotor-container"><img :src="separator" /></div>

      <!-- SOUND SECTION -->
      <div class="music-container">
        <ImageSrc :image="soundIcon" :label="'crown'" />  
        <span>{{song}}</span>
      </div>
    </div>

    <!-- GAME MENU MAIN CONTENT -->
    <div class="game-menu-content">
      <!-- TABS SECTION -->
      <div class="tab-section">
        <Tab 
          v-for="(item) in tabList" 
          :key="item.id" 
          :image="item.active? item.iconActive: item.icon"
          @click.native="onSelectMenu(item)"
        />  
      </div>

      <!-- GAMES LIST SECTION -->
      <div class="game-list-section">
        <GameList 
          v-for="(item) in gameList" 
          :key="item.id" 
          :image="item" 
        />  
      </div>
    </div>
  </section>
</template>

<script>
const Tab = () => import("../Tab/index.vue");
const ImageSrc = () => import("../Image/index.vue");
const GameList = () => import("../GameList/index.vue");
import { CommonMethods } from "../../common/common.methods";

export default {
  name: 'GameMenu',
  components: {
    Tab,
    GameList,
    ImageSrc
  },
  data(){
    return {
      song: ` :Dragon Boat Festival holiday!holiday!holiday
      !holiday!Dragon Boat Festival holiday!estival holiday!`,
      balance: 122121233,
      walletIcon: CommonMethods.loadIcon('ho_mo'),
      crownIcon: CommonMethods.loadResponsiveIcons3x('ho_vi'),
      soundIcon: CommonMethods.loadResponsiveIcons('ho_no'),
      separator: CommonMethods.loadIcon('separator'),
      tabList: [
        {
          id: 1,
          name: "Used",
          active: false,
          icon: CommonMethods.loadIcon('ho_us2@3x'),
          iconActive: CommonMethods.loadIcon('ho_us1@3x'),
        },
        {
          id: 2,
          name: "Live",
          active: false,
          icon: CommonMethods.loadIcon('ho_li2@3x'),
          iconActive: CommonMethods.loadIcon('ho_li1@3x'),
        },
        {
          id: 3,
          name: "Sport",
          active: false,
          icon: CommonMethods.loadIcon('ho_sp2@3x'),
          iconActive: CommonMethods.loadIcon('ho_sp1@3x'),
        },
        {
          id: 4,
          name: "Lottery",
          active: false,
          icon: CommonMethods.loadIcon('ho_lo2@3x'),
          iconActive: CommonMethods.loadIcon('ho_lo1@3x'),
        },
        {
          id: 5,
          name: "Pocker",
          active: false,
          icon: CommonMethods.loadIcon('ho_po2@3x'),
          iconActive: CommonMethods.loadIcon('ho_po1@3x'),
        },
        {
          id: 6,
          name: "Games",
          active: false,
          icon: CommonMethods.loadIcon('ho_ga2@3x'),
          iconActive: CommonMethods.loadIcon('ho_ga1@3x'),
        }
      ],
      gameList: [
        {
          id: 10,
          name: "list1",
          maintained: true,
          icon: CommonMethods.loadImage('game_list1'),
        },
        {
          id: 20,
          name: "list2",
          maintained: false,
          icon:  CommonMethods.loadImage('game_list2'),
        },
        {
          id: 30,
          name: "list3",
          maintained: false,
          icon:  CommonMethods.loadImage('game_list3'),
        },
        {
          id: 40,
          name: "list4",
          maintained: false,
          icon:  CommonMethods.loadImage('game_list4'),
        },
      ],
    }
  },
  methods: {
    onSelectMenu(item) {
      this.tabList.map(res=> res.active = false);
      item.active = true;
    }
  }
}
</script>

<style scope>
@import './index.css';
</style>