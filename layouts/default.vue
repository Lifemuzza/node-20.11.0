<template>
  <Header />
  <ModalMessage/>
  <SvgSprite />
  <Breadcrumbs class="page-cart__breadcrumbs container" />
  <slot />
</template>

<script setup>
import ModalMessage from '@/components/modals/ModalMessage.vue';
</script>
