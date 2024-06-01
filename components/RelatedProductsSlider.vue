<template>
  <div class="slider">
    <div class="slider__top">
      <h2 class="slider__top-title">Просмотренные товары</h2>
      <div class="slider__top-arrows">
        <svg class="slider__arrow slider__arrow_prev">
          <use xlink:href="#arrow-left" />
        </svg>
        <div class="slider__pagination">
        </div>
        <svg class="slider__arrow slider__arrow_next" >
          <use xlink:href="#arrow-right" />
        </svg>
      </div>
    </div>
    <Swiper
      :modules="[SwiperNavigation, SwiperPagination]"
      :pagination="{
        el: '.slider__pagination',
        type: 'fraction',
      }"
      :navigation="{
        nextEl: '.slider__arrow_next',
        prevEl: '.slider__arrow_prev',
      }"
      ref="swiper"
      :spaceBetween="20"
      :slidesPerView="slidePreview"
      class="slider__body"
    >
      <SwiperSlide v-for="(item, index) in productsList" :key="index" class="slide">
        <ProductCard
          :name="item.name"
          :image="item.image"
          :description="item.description"
          :priceRu="item.price.ru"
          :priceEu="item.price.eu"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import ProductCard from "./related-products-slider/ProductCard.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import "swiper/swiper-bundle.css";

const slidePreview = 4;
const swiper = ref(null);
const sliderPagination = ref(null);

const store = useStore();

const productsList = computed(()=> store.getters.getRelatedProducts )
function setPaginationStyles(el) {
  if (!el) return;

  el.style.fontSize = "1.5rem";
  el.style.color = "#212121";
}



onMounted(async () => {
  store.dispatch("loadRelatedProducts");
  sliderPagination.value = document.querySelector(".swiper-pagination-current");
  setPaginationStyles(sliderPagination.value);
});
</script>

<style scoped>
@import "./related-products-slider.less";
</style>
