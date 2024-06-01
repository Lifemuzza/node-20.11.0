<template>
    <div @click.self="onClickModalClose()" v-if="modalText" class="modal-message">
      <div class="modal-message__body">
        <p class="modal-message__text">
          {{ modalText }}
        </p>
        <CustomButton
          class="modal-message__button order-summary__actions-btn custom-button_secondary"
          @click="onClickModalClose()"
          >Ок</CustomButton
        >
      </div>
    </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

function onClickModalClose() {
  store.dispatch("setModalMessage", "");
}

const modalText = computed(() => store.getters.getModalMessage.message);
</script>

<style lang="less">
@import "./modal-message.less";
</style>
