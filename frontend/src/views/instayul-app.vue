<template>
  <section class="home-page">
    <post-list v-if="!isLoading" :posts="postsToShow" />
    <img v-if="isLoading" class="main-loader" src="@/assets/loader.svg" />
  </section>
</template>

<script>
import postList from '@/cmps/post-list.vue';

export default {
  name: 'instayul-app',
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
    postsToShow() {
      return this.$store.getters.getPosts;
    },
  },
  methods: {
    loadPosts() {
      this.$store.dispatch({
        type: 'loadPosts'
      })
    },
  },
  created() {
    this.loadPosts();
  },
  components: {
    postList,
  }
}
</script>
