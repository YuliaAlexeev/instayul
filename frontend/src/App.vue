<template>
  <div id="app" class="main-layout">
    <main-sidebar />
    <main class="main">
      <router-view />
      <vue-ins-progress-bar></vue-ins-progress-bar>
      <main-footer />
    </main>
  </div>
</template>

<script>
import MainFooter from "@/cmps/main-footer.vue";
import MainSidebar from "@/cmps/main-sidebar.vue";

export default {
  name: "App",
  methods: {
    loadUser() {
      this.$store.dispatch({
        type: 'loadUser'
      })
    }
  },
  mounted() {
    this.$insProgress.finish();
    this.$store.commit("initializeDarkMode");
  },
  created() {
    this.loadUser();
    this.$insProgress.start();
    this.$router.beforeEach((to, from, next) => {
      this.$insProgress.start();
      next();
    });
    this.$router.afterEach((to, from) => {
      this.$insProgress.finish();
    });
  },
  components: {
    MainFooter,
    MainSidebar
  },
};
</script>
