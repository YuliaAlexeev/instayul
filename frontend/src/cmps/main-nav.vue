<template>
  <nav role="navigation" class="main-nav main-header-inner-nav">
    <ul class="main-nav-list">
      <li class="main-nav-list-item">
        <router-link class="main-nav-list-item-nav flex flex-align-center" to="/">
          <svg class="nav-icon">
            <title>Home</title>
            <use v-if="isHomePage" xlink:href="../assets/sprite.svg#home-selected"></use>
            <use v-else xlink:href="../assets/sprite.svg#home"></use>
          </svg>
          <span class="main-nav-list-item-title">Home</span>
        </router-link>
      </li>
      <li class="main-nav-list-item">
        <router-link class="main-nav-list-item-nav flex flex-align-center" to="/explore">
          <svg class="nav-icon">
            <title>Explore</title>
            <use v-if="isExplorePage" xlink:href="../assets/sprite.svg#explore-selected"></use>
            <use v-else xlink:href="../assets/sprite.svg#explore"></use>
          </svg>
          <span class="main-nav-list-item-title">Explore</span>
        </router-link>
      </li>
      <li class="main-nav-list-item">
        <router-link class="main-nav-list-item-nav flex flex-align-center" to="#" @click.native="toggleAddPostModal">
          <svg class="nav-icon">
            <title>Create New Post</title>
            <use v-if="isShowAddPostModal" xlink:href="../assets/sprite.svg#new-post-selected"></use>
            <use v-else xlink:href="../assets/sprite.svg#new-post"></use>
          </svg>
          <span class="main-nav-list-item-title">Create</span>
        </router-link>
      </li>
      <li class="main-nav-list-item">
        <router-link class="main-nav-list-item-nav flex flex-align-center" v-if="loggedInUser"
          :to="`/${loggedInUser.userName}`">
          <span class="nav-icon main-header-user avatar-sm avatar">
            <img :src="loggedInUser.imgUrl" :alt="`${loggedInUser.userName}'s profile picture`" />
          </span>
          <span class="main-nav-list-item-title">Profile</span>
        </router-link>
      </li>
    </ul>
    <add-post v-show="isShowAddPostModal" @closeAddPostModal="toggleAddPostModal" @addPost="onAddPost"></add-post>
  </nav>
</template>

<script>
import addPost from '@/cmps/add-post.vue';
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      isShowAddPostModal: false,
    }
  },
  components: { addPost, RouterLink },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    },
    isHomePage() {
      return this.$route.path === '/';
    },
    isExplorePage() {
      return this.$route.path === '/explore';
    },
  },
  watch: {
    '$route': function (to) {
      if (to.path !== '/to') {
        this.isShowAddPostModal = false;
      }
    },
  },
  methods: {
    toggleAddPostModal() {
      this.isShowAddPostModal = !this.isShowAddPostModal;
    },
    onAddPost(postToAdd) {
      this.$store.dispatch({
        type: 'addPost',
        postToAdd
      })
    },
  }
}
</script>
