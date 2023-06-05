<template>
  <div class="post-actions">
    <button @click="addLike" class="post-actions-btn">
      <svg v-if="!getLike" class="post-icon nolike">
        <title>Like</title>
        <use xlink:href="../assets/sprite.svg#heart"></use>
      </svg>
      <svg v-else class="post-icon like" :class="{ likeAnimation: getLike }">
        <title>Unlike</title>
        <use xlink:href="../assets/sprite.svg#heart-bold"></use>
      </svg>
    </button>
    <button @click="addCommentBtnClicked" class="post-actions-btn">
      <svg class="post-icon">
        <title>Comment</title>
        <use xlink:href="../assets/sprite.svg#comment"></use>
      </svg>
    </button>
    <button class="post-actions-btn">
      <svg class="post-icon">
        <use xlink:href="../assets/sprite.svg#share"></use>
      </svg>
    </button>
    <button class="post-actions-btn">
      <svg class="post-icon">
        <use xlink:href="../assets/sprite.svg#save"></use>
      </svg>
    </button>
  </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
  name: "post-actions",
  props: {
    post: Object,
    user: Object
  },
  computed: {
    getLike() {
      const res = this.post.likes.findIndex(
        (userLike) => userLike._id === this.user._id
      );
      return res !== -1;
    },
  },
  methods: {
    addCommentBtnClicked() {
      eventBus.$emit(`focusOnInput-${this.post._id}`);
    },
    addLike() {
      this.$store.dispatch({
        type: "addLike",
        postId: this.post._id,
        user: this.user,
      });
    },
  },
};
</script>