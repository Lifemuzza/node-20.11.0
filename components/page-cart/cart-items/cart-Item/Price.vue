<template>
  <p class="price">Цена: {{ formatCurrency((price * quantity)) }} ₽</p>
</template>

<script setup>

import {formatCurrency} from '@/utils/formattingUtils.js'
const props = defineProps({
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  }
});
</script>

<style lang="less">
@import "./price.less";
</style>
