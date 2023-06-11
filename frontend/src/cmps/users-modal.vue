<template>
  <div class="screen flex flex-align-center">
    <div class="screen-box modal">
      <div class="screen-box-top flex flex-between flex-align-center">
        <slot name="title"></slot>
        <button class="screen-box-top-button" @click="closeModal">
          <svg class="screen-box-top-button-icon">
            <use xlink:href="../assets/sprite.svg#close"></use>
          </svg>
        </button>
      </div>
      <div class="screen-box-bottom">
        <slot name="users"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'users-modal',
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>