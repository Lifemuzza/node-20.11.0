<template>
  <button @click="submitOrder">
    <slot></slot>
  </button>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const submitOrder = () => {
  store.dispatch("submitOrder");
};
</script>
