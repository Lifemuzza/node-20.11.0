<template>
  <div class="cart">
    <div class="cart__icon">
      <svg class="cart__icon-img">
        <use xlink:href="#cart" />
      </svg>
    </div>
    <div class="cart__item">
      <h2 class="cart__item-title">Ваша корзина</h2>
      <span class="cart__item-count">{{ productsCount }} товара</span>
      <span class="cart__item-price">{{ formatCurrency(totalAmount) }} ₽</span>
    </div>
  </div>
</template>

<script setup>
import {formatCurrency} from '@/helpers/index.js'
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const productsCount = computed(() => store.getters.getProductsQuantity);
const totalAmount = computed(() => store.getters.getTotalAmount);
</script>

<style lang="less">
@import "./cart.less";
</style>
