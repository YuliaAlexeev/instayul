<template>
  <header role="banner" class="main-header full main-layout">
    <div class="main-header-inner flex flex-align-center flex-between">
      <main-logo></main-logo>
      <input type="search" class="main-header-search" placeholder="Search" />
    </div>
  </header>
</template>

<script>
import mainLogo from './main-logo.vue';

export default {
  name: "main-header",
  components: { mainLogo },
};
</script>

