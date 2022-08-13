<template>
  <section class="game-carousel-container">
    <h5>Hot Game</h5>  
    <flickity ref="flickity" :options="flickityOptions">
      <div class="carousel-cell" v-for="(item, index) in carousel" :key="index">
        <img :src="item.src" alt="carousel" />
      </div>
    </flickity>
  </section>
</template>

<script>
import Flickity from 'vue-flickity';

export default {
  name: 'GameCarousel',
  components: {
    Flickity
  },  
  data() {
    return {
      carousel: [
        {
          id: 1,
          src: require('../../assets/images/carousel1.jpg'),
        },
        {
          id: 2,
          src: require('../../assets/images/carousel2.jpg'),
        },
        {
          id: 3,
          src: require('../../assets/images/carousel3.jpg'),
        },
        {
          id: 4,
          src: require('../../assets/images/carousel4.jpg'),
        },
        {
          id: 5,
          src: require('../../assets/images/carousel5.jpg'),
        },
        {
          id: 6,
          src: require('../../assets/images/carousel1.jpg'),
        },
        {
          id: 7,
          src: require('../../assets/images/carousel2.jpg'),
        },
        {
          id: 8,
          src: require('../../assets/images/carousel3.jpg'),
        }
      ],
      flickityOptions: {
        draggable: true,
        initialIndex: 3,
        resize: true,
        freeScroll: true,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        groupCells: true
      }
    }
  },
}
</script>

<style scope>
@import './index.css';
</style>
