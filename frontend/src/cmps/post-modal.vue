<template>
  <div class="screen flex flex-align-center">
    <close-button @closeModal="closePostModal" />
    <div class="post-modal modal flex">
      <img class="post-modal-img" :src=userPost.imgUrl :alt="`Photo by ${loggedInUser.userName}`" />
      <div class="post-modal-right flex flex-column">
        <post-header :post="userPost" :user="loggedInUser" @removedPost="removedPost"></post-header>
        <post-author class="post-modal-author" :post="userPost"></post-author>
        <post-comments class="post-modal-comments" :comments="userPost.comments" :post="userPost"
          :user="loggedInUser"></post-comments>
        <div class="post-modal-bottom">
          <post-actions :post="userPost" :user="loggedInUser"></post-actions>
          <post-likes :post="userPost"></post-likes>
          <post-time :post="userPost"></post-time>
        </div>
        <add-comment :post="userPost" :isUserDetails="true" :user="loggedInUser"></add-comment>
      </div>
    </div>
  </div>
</template>

<script>
import postHeader from '@/cmps/post-header';
import postComments from '@/cmps/post-comments';
import postLikes from '@/cmps/post-likes';
import addComment from '@/cmps/add-comment';
import postActions from '@/cmps/post-actions';
import postTime from '@/cmps/post-time';
import postAuthor from '@/cmps/post-author';
import closeButton from '@/cmps/close-button';

export default {
  name: 'post-modal',
  props: {
    userPost: Object
  },
  data() {
    return {
      commentToAdd: { content: "", createdAt: Date.now() },
    };
  },
  methods: {
    closePostModal() {
      this.$emit('closePostModal');
    },
    removedPost() {
      this.closePostModal();
    }
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    },
  },
  components: {
    postHeader,
    postComments,
    postLikes,
    addComment,
    postActions,
    postTime,
    postAuthor,
    closeButton
  },
};
</script>
