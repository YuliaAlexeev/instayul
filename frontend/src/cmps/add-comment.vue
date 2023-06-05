<template>
  <form @submit.prevent="addComment" class="post-details-add-comment flex flex-align-center">
    <textarea v-model="commentToAdd.content" class="comment-input" ref="comment" rows="1"
      @keydown.enter.prevent="addComment" placeholder="Add a comment…"></textarea>
    <button v-if="showButton" type="submit" class="post-details-add-comment-btn">Post</button>
    <comment-emoji-picker @emoji-selected="appendEmoji"></comment-emoji-picker>
  </form>
</template>

<script>
import { utilService } from '@/services/util-service.js';
import { eventBus } from '../main.js';
import commentEmojiPicker from '../cmps/comment-emoji-picker.vue';

export default {
  name: "add-comment",
  props: {
    post: Object,
    user: Object,
    isUserDetails: Boolean
  },
  components: { commentEmojiPicker },
  data() {
    return {
      commentToAdd: { id: utilService.makeId(), content: "", createdAt: Date.now() },
      showButton: false,
    }
  },
  computed: {
    isAlphanumeric() {
      return /\S+/.test(this.commentToAdd.content);
    }
  },
  watch: {
    isAlphanumeric(value) {
      this.showButton = value;
    }
  },
  methods: {
    appendEmoji(emoji) {
      this.commentToAdd.content += emoji;
    },
    addComment() {
      if (!this.commentToAdd.content.trim()) return;
      const commentCopy = JSON.parse(JSON.stringify(this.commentToAdd));
      this.$store.dispatch({
        type: "addComment",
        comment: commentCopy,
        postId: this.post._id,
        user: this.user,
        isUserDetails: this.isUserDetails || false
      });
      this.commentToAdd = { content: "" };
    },
    focus() {
      this.$refs.comment.focus();
    },
  },
  created() {
    eventBus.$on(`focusOnInput-${this.post._id}`, this.focus);
  },
  destroyed() {
    eventBus.$off(`focusOnInput-${this.post._id}`);
  },
};
</script>