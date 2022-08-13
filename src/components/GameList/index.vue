<template>
  <div class="game-list-items">
    <div class="maintained" v-if="image && image.maintained"><p>Maintained</p></div>
    <img :src="image.icon" :alt="image.name">
  </div>  
</template>

<script>

export default {
  name: 'GameList',
  props: ['image']
}
</script>

<style scope>
  @import './index.css';
</style>