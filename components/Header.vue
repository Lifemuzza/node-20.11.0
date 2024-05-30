<template>
  <header class="header">
    <div class="header__container container">
      <Cart class="header__cart" />
    </div>
  </header>
</template>

<script setup>
import Cart from "@/components/header/Cart.vue";
</script>

<style lang="less">
@import "./header.less";
</style>
