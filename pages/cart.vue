<template>
  <main class="page-cart">
    <div class="page-cart__container container">
      <div class="page-cart__content">
        <CartItems class="page-cart__cart-items" />
        <OrderSummary class="page-cart__order-summary" />
      </div>
      <RelatedProductsSlider class="page-cart__slider" />
    </div>
  </main>
</template>

<script setup>
import CartItems from "@/components/page-cart/CartItems.vue";
import OrderSummary from "@/components/page-cart/OrderSummary.vue";
</script>

<style lang="less">
@import "./page-cart.less";
</style>
