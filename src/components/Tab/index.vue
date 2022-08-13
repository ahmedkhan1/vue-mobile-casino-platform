<template>
  <div class="tab-container">
    <img :src="image" alt="icon" />
  </div>  
</template>

<script>
export default {
  name: 'Tab',
  props: ['image']
}
</script>

<style scope>
@import './index.css';
</style>