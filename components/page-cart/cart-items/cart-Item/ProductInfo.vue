<template>
  <div class="cart-item__product-info product-info">
    <h2 class="product-info__name">{{ name }}</h2>
    <p class="product-info__description">{{ description }}</p>
    <span class="product-info__article">{{ article }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  article: {
    type: String,
    default: "",
  },
});
</script>

<style lang="less">
@import "./product-info.less";
</style>
