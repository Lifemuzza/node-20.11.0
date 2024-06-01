<template>
  <div class="cart-items">
    <div class="cart-items__header">
      <h1 class="cart-items__title">Ваша корзина</h1>
      <span class="cart-items__count">{{ productsQuantity }} товара</span>
      <button @click="clearItemsList" class="cart-items__clear-btn">Очистить корзину</button>
    </div>
    <div class="cart-items__list">
      <CartItem :item="item" v-for="item in cartList" :key="item.id" />
    </div>

    <Counseling class="cart-item__counseling" />
  </div>
</template>

<script setup>
import CartItem from "@/components/page-cart/cart-items/CartItem.vue";
import Counseling from "@/components/page-cart/cart-items/Counseling.vue";
import { useStore } from "vuex";
import { onMounted } from "vue";

const store = useStore();

const clearItemsList = () => store.dispatch("clearCart");
const cartList = computed(() => store.getters.getItems);
const productsQuantity = computed(() => store.getters.getProductsQuantity);

onMounted(() => {
  store.dispatch("loadCartItems");
});
</script>

<style>
@import "./cartItems.less";
</style>
