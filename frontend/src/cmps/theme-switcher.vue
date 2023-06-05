<template>
  <div class="theme-switcher">
    <svg class="theme-switcher-icon">
      <title>Theme icon</title>
      <use v-show="darkMode" xlink:href="../assets/sprite.svg#dark-mode"></use>
      <use v-show="!darkMode" xlink:href="../assets/sprite.svg#light-mode"></use>
    </svg>
    <label class="switch">
      <input type="checkbox" :class="{ 'checked': darkMode }" @click="toggleDarkMode">
      <div class="slider"></div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'theme-switcher',
  computed: {
    darkMode() {
      return this.$store.getters.darkMode;
    }
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit('toggleDarkMode');
    }
  },
}
</script>

