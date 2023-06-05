<template>
  <div class="post-details-header flex flex-align-center">
    <router-link :to="`/${post.by.userName}`">
      <img class="user-avatar avatar-md avatar" :src=post.by.imgUrl :alt="`${post.by.userName}'s profile picture`" />
    </router-link>
    <div class="post-details-header-info">
      <router-link :to="`/${post.by.userName}`">{{ post.by.userName }}</router-link>
      <span class="post-published-time-bullet">•</span>
      <post-time :post="post"></post-time>
      <small class="post-location">{{ post.location }}</small>
    </div>
    <button class="more-options-btn" @click="showMoreOptions">
      <svg>
        <use xlink:href="../assets/sprite.svg#more-options"></use>
      </svg>
    </button>
    <post-options :post="post" :user="user" @closeModal="closePostOptionsModal" @removedPost="removedPost"
      v-show="isShownRemovePost"></post-options>
  </div>
</template>

<script>
import postOptions from "./post-options.vue";
import postTime from "@/cmps/post-time";

export default {
  name: "post-header",
  props: {
    post: Object,
    user: Object
  },
  data() {
    return {
      isShownRemovePost: false,
    };
  },
  methods: {
    showMoreOptions() {
      this.isShownRemovePost = !this.isShownRemovePost;
    },
    closePostOptionsModal() {
      this.isShownRemovePost = null;
    },
    removedPost() {
      this.$emit("removedPost");
    }
  },
  components: {
    postOptions,
    postTime,
  },
};
</script>