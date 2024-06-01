<template>
  <button @click="removeItem" class="product-remove"></button>
</template>

<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});
import { useStore } from "vuex";

const store = useStore();

const removeItem = () => {
  store.dispatch("removeItemFromCart", props.id);
};
</script>

<style lang="less">
@import './btn-product-remove.less';
</style>
