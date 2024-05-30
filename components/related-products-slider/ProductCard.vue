<template>
  <div class="product-card">
    <div class="product-card__photo">
      <img class="product-card__photo-img" :src="`/relatedProducts/${image}.png`" :alt="name" />
    </div>
    <div class="product-card__details">
      <h2 class="product-card__name">{{ name }}</h2>
      <p class="product-card__description">{{ description }}</p>
      <div class="product-card__prices">
        <p class="product-card__prices-values">
          {{ formatCurrency(priceRu.min) }} ₽ - {{ formatCurrency(priceRu.max) }} ₽
        </p>
        <p class="product-card__prices-values product-card__prices-values_eu">
          {{ formatCurrency(priceEu.min, "de-De") }} € - {{ formatCurrency(priceEu.max, "de-De") }} €
        </p>
      </div>
      <button class="product-card__btn custom-button custom-button_primary">Подробнее</button>
    </div>
  </div>
</template>

<script setup>
import { formatCurrency } from "@/helpers/index.js";

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
