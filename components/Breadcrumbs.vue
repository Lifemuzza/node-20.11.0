<template>
  <nav class="breadcrumbs">
    <ul class="breadcrumbs__list">
      <li v-for="item in links" :key="item.id" class="breadcrumbs__list-item">
        <NuxtLink :to="item.path" class="breadcrumbs__link">{{ item.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import { PAGE_NAMES } from "@/utils/constans.js";

const route = useRoute();
const links = ref([{ id: 0, name: PAGE_NAMES["index"], path: "/" }]);

const updateBreadcrumbs = () => {
  if (route.path === "/") {
    removeLinksHandler(0);
    return;
  }

  const link = links.value.find((item) => item.path === route.path);

  if (link) {
    removeLinksHandler(link.id);
  }

  const index = links.value.length - 1;
  links.value.push({ id: index, name: PAGE_NAMES[route.name], path: route.path });
};

function removeLinksHandler(id) {
  if (!id) return (links.value.length = 1);

  links.value = links.value.filter((link) => link.id >= id);
}

watch(route, () => {
  updateBreadcrumbs();
});

onMounted(() => updateBreadcrumbs());
</script>

<style lang="less">
@import "./breadcrumbs.less";
</style>
