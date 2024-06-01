<template>
  <nav class="breadcrumbs">
    <ul class="breadcrumbs__list">
      <li v-for="item in links" :key="item.id" class="breadcrumbs__list-item">
        <NuxtLink :to="item.link" active-class="breadcrumbs__link_active" class="breadcrumbs__link">{{
          item.name
        }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import {PAGE_NAMES} from '@/utils/constans.js'

const route = useRoute();
const links = ref([]);

const updateBreadcrumbs = () => {
  const breadcrumbs = [];
  const matchedRoutes = route.matched;

  matchedRoutes.forEach((route) => {
    breadcrumbs.push({ id: route.path, name: PAGE_NAMES[route.name], link: route.path });
  });

  links.value = breadcrumbs;
};

watch(route, () => {
  updateBreadcrumbs();
});

onMounted(() => updateBreadcrumbs());
</script>

<style lang="less">
@import "./breadcrumbs.less";
</style>
