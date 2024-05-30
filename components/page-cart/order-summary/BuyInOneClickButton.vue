<template>
  <button @click="buyInOneClick">
    <slot></slot>
  </button>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

function buyInOneClick() {
  store.dispatch('submitOrder');
}
</script>
