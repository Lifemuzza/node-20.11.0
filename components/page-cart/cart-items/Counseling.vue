<template>
  <div class="counseling">
    <div class="counseling__checkbox">
      <input
        type="checkbox"
        id="counseling-checkbox"
        class="counseling__checkbox-input"
        :checked="counselingCheckbox"
        @change="handleCheckboxChange"
      />
      <label for="counseling-checkbox" class="counseling__checkbox-label"></label>
    </div>
    <div class="counseling__icon">
      <svg class="counseling__icon-img">
        <use xlink:href="#instruments" />
      </svg>
    </div>
    <div class="counseling__info">
      <h2 class="counseling__info-title">Установка</h2>
      <p class="counseling__info-text">
        Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const counselingCheckbox = computed(() => store.getters.getCounselingCheckbox);

const handleCheckboxChange = (event) => {
  store.dispatch('updateCounselingCheckbox', event.target.checked);
};
</script>

<style lang="less">
@import "./counseling.less";
</style>
