<template>
  <div class="order-summary">
    <h2 class="order-summary__title">Итого</h2>
    <div class="order-summary__details underline">
      <div class="order-summary__row">
        <span class="order-summary__row-label">Итоговая сумма:</span>
        <span class="order-summary__row-value">{{ formatCurrency(totalAmount) }} ₽</span>
      </div>
      <div class="order-summary__row">
        <span class="order-summary__row-label">Количество:</span>
        <span class="order-summary__row-value">{{ totalQuantity }} шт</span>
      </div>
      <div class="order-summary__row">
        <span class="order-summary__row-label">Консультация:</span>
        <span class="order-summary__row-value">{{ counselingCheckbox ? "Да" : "Нет" }}</span>
      </div>
    </div>
    <div class="order-summary__highlight">
      <span class="order-summary__highlight-label">Итоговая сумма:</span>
      <b class="order-summary__highlight-value">{{ formatCurrency(totalAmount) }} ₽</b>
    </div>
    <div class="order-summary__actions">
      <BuyInOneClickButton class="order-summary__actions-btn custom-button custom-button_primary"
        >Оформить заказ</BuyInOneClickButton
      >
      <SubmitButton class="order-summary__actions-btn custom-button custom-button_secondary"
        >Купить в один клик</SubmitButton
      >
    </div>
  </div>
</template>

<script setup>
import { formatCurrency } from "@/utils/formattingUtils.js";
import BuyInOneClickButton from "@/components/page-cart/order-summary/BuyInOneClickButton.vue";
import SubmitButton from "@/components/page-cart/order-summary/SubmitButton.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const totalAmount = computed(() => store.getters.getTotalAmount);
const totalQuantity = computed(() => store.getters.getTotalQuantity);
const counselingCheckbox = computed(() => store.getters.getCounselingCheckbox);
</script>

<style lang="less">
@import "./order-summary.less";
</style>
