<template>
  <div class="product-card__details">
    <h2 class="product-card__name">{{ name }}</h2>
    <p class="product-card__description">{{ description }}</p>
    <ProductPrices :priceRu="priceRu" :priceEu="priceEu" :formatCurrency="formatCurrency" />
    <CustomButton class="product-card__button custom-button_primary">Подробнее</CustomButton>
  </div>
</template>

<script setup>
import ProductPrices from './ProductPrices.vue'
const props = defineProps({
  name: {
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
  formatCurrency: {
    type: Function,
    required: true,
  },
});
</script>

<style></style>
