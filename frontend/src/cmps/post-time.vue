<template>
  <time class="post-published-time">{{ postPublishDate }}</time>
</template>

<script>
import moment from "moment";
export default {
  name: "post-time",
  props: {
    post: Object
  },
  computed: {
    postPublishDate() {
      return moment(this.post.createdAt).fromNow();
    },
  },
};
</script>
