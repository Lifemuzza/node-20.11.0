<template>
  <div class="product-card">
    <div class="product-card__photo">
      <img class="product-card__photo-img" :src="image" :alt="name" />
    </div>
    <ProductDetails
      :name="name"
      :description="description"
      :priceRu="priceRu"
      :priceEu="priceEu"
      :formatCurrency="formatCurrency"
    />
  </div>
</template>

<script setup>
import { formatCurrency } from "@/utils/formattingUtils.js";
import ProductDetails from '@/components/related-products-slider/product-card/ProductDetails.vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priceRu: {
    type: Object,
    required: true,
  },
  priceEu: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="less">
@import "./product-card.less";
</style>
