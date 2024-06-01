<template>
  <div class="cart-item underline">
    <ProductPhoto class="cart-item__product-photo" :name="item.name" :image="item.image" />
    <ProductInfo
      class="cart-item__product-info"
      :name="item.name"
      :description="item.description"
      :article="item.article"
    />
    <QuantityControls
      class="cart-item__quantity-controls"
      :price="item.price"
      :quantity="item.quantity"
      :id="item.id"
    />
    <Price :quantity="item.quantity" :price="item.price" class="cart-item__price" />
    <BtnProductRemove class="cart-item__product-remove" :id="item.id" />
  </div>
</template>

<script setup>
import ProductPhoto from "@/components/page-cart/cart-items/cart-item/ProductPhoto.vue";
import ProductInfo from "@/components/page-cart/cart-items/cart-item/ProductInfo.vue";
import QuantityControls from "@/components/page-cart/cart-items/cart-item/QuantityControls.vue";
import BtnProductRemove from "@/components/page-cart/cart-items/cart-item/BtnProductRemove.vue";
import Price from "@/components/page-cart/cart-items/cart-item/Price.vue";

const props = defineProps({
  item: {
    type: Object,
    required: false,
  },
});
</script>

<style lang="less">
@import "./cart-item.less";
</style>
