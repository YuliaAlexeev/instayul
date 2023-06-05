<template>
  <div class="screen flex flex-align-center" @click="closeModal">
    <div class="screen-box modal">
      <div class="post-options flex flex-column">
        <button class="post-options-btn btn-remove" v-if="isByLoggedUser(post.by._id)"
          @click="removePost(post._id)">Remove post</button>
        <button class="post-options-btn" @click="closeModal">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "remove-post",
  props: {
    post: Object,
    user: Object
  },
  data() {
    return {
      isCloseModal: false,
    };
  },
  computed: {
    isByLoggedUser() {
      return (postId) => postId === this.user._id;
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    removePost(postId) {
      this.$store.dispatch({
        type: "removePost",
        postId,
      });
      this.$emit("removedPost")
    },
  },
};
</script>