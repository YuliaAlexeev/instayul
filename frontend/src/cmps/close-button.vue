<template>
  <button class="screen-close-btn" @click="$emit('closeModal')">
    <svg class="icon-close">
      <use xlink:href="../assets/sprite.svg#close"></use>
    </svg>
  </button>
</template>

<script>
export default {
  name: "close-button"
}
</script>

