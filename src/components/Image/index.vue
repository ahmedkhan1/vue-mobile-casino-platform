<template>
  <picture>
    <source v-if="image && image.ic_lg" media="(min-width:751px)" :srcset="image.ic_lg">
    <source v-if="image && image.ic_sm" media="(min-width:465px)" :srcset="image.ic_sm">
    <img :src="image.ic_xm" :alt="image.name" style="width:auto;" :id="label">
  </picture>
</template>

<script>

export default {
  name: 'Image',
  props: ['image', 'label']
}
</script>

<style>
</style>
