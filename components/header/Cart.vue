<template>
  <div class="cart">
    <div class="cart__icon">
      <svg class="cart__icon-img">
        <use xlink:href="#cart" />
      </svg>
    </div>
    <div class="cart__item">
      <h2 class="cart__item-title">Ваша корзина</h2>
      <span class="cart__item-count">{{ productsCountLabel }}</span>
      <span class="cart__item-price">{{ formatCurrency(totalAmount) }} ₽</span>
    </div>
  </div>
</template>

<script setup>
import { formatCurrency } from "@/utils/formattingUtils.js";
import { computed } from "vue";
import { useStore } from "vuex";
import { formatProductsCount } from '@/helpers/countHelpers.js';

const store = useStore();

const productsCountLabel = computed(() => {
  const count = store.getters.getProductsQuantity;
  return formatProductsCount(count);
});

const totalAmount = computed(() => store.getters.getTotalAmount);
</script>

<style lang="less">
@import "./cart.less";
</style>
..feat(utils): Move formatCurrency function to utils directory

- Moved the formatCurrency function from helpers to utils for better organization
- Created countHelpers.js in helpers directory to handle product counting logic