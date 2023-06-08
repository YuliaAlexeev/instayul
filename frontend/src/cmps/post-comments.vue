<template>
  <div>
    <div class="post-row" v-for="comment in comments" :key="comment.id">
      <span class="post-row-username" :title="comment.by.userName">
        <router-link :to="`/${comment.by.userName}`">{{ comment.by.userName }}</router-link>
      </span>
      {{ comment.content }}
      <button class="post-row-remove-btn" v-if="isByLoggedUser(comment.by._id)" @click="removeComment(post, comment.id)">
        <svg class="icon-remove">
          <use xlink:href="../assets/sprite.svg#close"></use>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "post-comments",
  props: {
    post: Object,
    comments: Array,
    user: Object
  },
  computed: {
    isByLoggedUser() {
      return (commentById) => commentById === this.user._id;
    },
  },
  methods: {
    removeComment(post, commentId) {
      const commentIdx = this.post.comments.findIndex(comment => comment.id === commentId)
      const postCopy = JSON.parse(JSON.stringify(post))
      postCopy.comments.splice(commentIdx, 1)
      this.$store.dispatch({
        type: 'updatePost',
        updatedPost: postCopy
      })
    },
  },
};
</script>
