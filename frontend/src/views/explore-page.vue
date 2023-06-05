<template>
  <section class="user-details">
  </section>
</template>

<script>
export default {

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

}
</script>
