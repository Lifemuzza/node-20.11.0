<template>
  <nav class="breadcrumbs">
    <ul class="breadcrumbs__list">
      <li v-for="link in links" :key="link" class="breadcrumbs__item">
        <a href="#" class="breadcrumbs__link">{{ link }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
let links = ["Главная", "Корзина"];
</script>

<style lang="less">
@import "./breadcrumbs.less";
</style>
