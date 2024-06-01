<template>
  <div class="product-photo">
    <img class="product-photo__img" :src="image" :alt="name" />
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
</script>

<style lang="less">
@import "./product-photo.less";
</style>
