<template>
  <div class="quantity-controls">
    <button @click="decreaseQuantity" class="quantity-controls__decrease"></button>
    <div class="quantity-controls__quantity">
      <span class="quantity-controls__quantity-number">{{ quantity }}</span>
      <span v-if="quantity > 1" class="quantity-controls__product-price">{{ price }} ₽/шт.</span>
    </div>
    <button @click="increaseQuantity" class="quantity-controls__increase"></button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
const props = defineProps({
  quantity: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required:true,
  }
});

const increaseQuantity = () => {
  store.dispatch("incrementItemQuantity", props.id );
};

const decreaseQuantity = () => {
  store.dispatch("decrementItemQuantity",  props.id );
};
</script>

<style lang="less">
@import "./quantity-controls.less";
</style>
