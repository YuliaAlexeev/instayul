<template>
  <aside role="complementary" class="main-sidebar flex flex-column">
    <MainLogo />
    <MainNav />
    <ThemeSwitcher />
  </aside>
</template>

<script>
import MainLogo from './main-logo.vue';
import MainNav from './main-nav.vue';
import ThemeSwitcher from './theme-switcher.vue';

export default {
  components: { MainLogo, MainNav, ThemeSwitcher }
}
</script>
