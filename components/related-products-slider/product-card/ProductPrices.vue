<template>
  <div class="product-card__prices">
    <p class="product-card__prices-values">
      {{ `${formatCurrency(priceRu.min)} ₽ - ${formatCurrency(priceRu.max)}` }} ₽
    </p>
    <p class="product-card__prices-values product-card__prices-values_eu">
      {{ `${formatCurrency(priceEu.min, "de-De")} € - ${formatCurrency(priceEu.max, "de-De")}` }} €
    </p>
  </div>
</template>

<script setup>
import { formatCurrency } from "@/utils/formattingUtils.js";
const props = defineProps({
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

<style></style>
