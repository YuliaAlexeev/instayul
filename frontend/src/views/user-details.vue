<template>
  <div class="user-details" v-if="user">
    <section class="profile flex">
      <img class="profile-img avatar" :src="user.imgUrl" />

      <div class="profile-description">
        <div class="profile-description-top">
          <h2 class="profile-description-top-username">{{ user.userName }}</h2>
        </div>

        <div class="profile-description-count">
          <span class="profile-count">
            <span class="profile-count-num">{{ getPostsOfUser.length }}</span> posts
          </span>
          <button class="profile-count" @click="toggleFollowersModal">
            <span class="profile-count-num">{{ user.followers.length }}</span> followers
          </button>

          <users-modal @closeModal="toggleFollowersModal" v-show="isShownFollowersModal">
            <h4 slot="title" class="screen-box-top-title">Followers</h4>
            <div slot="users" @click="toggleFollowersModal" v-for="user in user.followers" :key="user._id"
              class="screen-row flex flex-align-center">
              <router-link :to="`/${user.userName}`"><img class="user-avatar avatar-lg avatar" :src="user.imgUrl"
                  alt="profile pic" /></router-link>
              <div class="screen-row-name">
                <div class="screen-row-name-username" :title="user.userName">
                  <router-link :to="`/${user.userName}`">{{ user.userName }}</router-link>
                </div>
                <div v-if="user.fullName" class="screen-row-name-fullname">{{ user.fullName }}</div>
              </div>
            </div>
          </users-modal>

          <button class="profile-count" @click="toggleFollowingModal">
            <span class="profile-count-num">{{ user.following.length }}</span> following
          </button>

          <users-modal @closeModal="toggleFollowingModal" v-show="isShownFollowingModal">
            <h4 slot="title" class="screen-box-top-title">Following</h4>
            <div slot="users" @click="toggleFollowingModal" v-for="user in user.following" :key="user._id"
              class="screen-row">
              <router-link :to="`/${user.userName}`"><img class="user-avatar avatar-lg avatar" :src="user.imgUrl"
                  alt="profile pic" /></router-link>
              <div class="screen-row-name">
                <div class="screen-row-name-username" :title="user.userName">
                  <router-link :to="`/${user.userName}`">{{ user.userName }}</router-link>
                </div>
                <div v-if="user.fullName" class="screen-row-name-fullname">{{ user.fullName }}</div>
              </div>
            </div>
          </users-modal>
        </div>

        <div class="profile-description-bio">
          <h3>{{ user.fullName }}</h3>
          <p>{{ user.bio }}</p>
        </div>
      </div>
    </section>
    <div class="profile-tabs">
      <span class="profile-tabs-tab flex flex-align-center">
        <svg class="profile-tabs-icon">
          <use xlink:href="../assets/sprite.svg#posts"></use>
        </svg>
        Posts
      </span>
    </div>
    <section class="profile-posts">
      <div class="profile-posts-no-posts flex flex-align-center flex-column" v-if="getPostsOfUser.length === 0">
        <div class="profile-posts-no-posts-icon">
          <svg class="icon">
            <use xlink:href="../assets/sprite.svg#no-posts"></use>
          </svg>
        </div>
        No posts yet
      </div>

      <div v-else class="profile-posts-item" @click="selectedPostIdx = idx" v-for="(userPost, idx) in getPostsOfUser"
        :key="userPost.id">
        <img class="profile-posts-item-img" :src="userPost.imgUrl" />
        <div class="profile-posts-item-count">
          <span>
            <svg class="profile-posts-item-count-icon-heart">
              <use xlink:href="../assets/sprite.svg#heart-bold"></use>
            </svg>
            {{ userPost.likes.length }}
          </span>
          <span>
            <svg class="profile-posts-item-count-icon-comment">
              <use xlink:href="../assets/sprite.svg#comment"></use>
            </svg>
            {{ userPost.comments.length }}
          </span>
        </div>
      </div>
      <post-modal v-if="selectedPostIdx !== null" @closePostModal="selectedPostIdx = null"
        :userPost="getPostsOfUser[selectedPostIdx]"></post-modal>
    </section>
  </div>
</template>

<script>
import userService from '@/services/user-service.js';
import usersModal from '@/cmps/users-modal';
import postModal from '@/cmps/post-modal';
export default {
  data() {
    return {
      user: null,
      isShownFollowersModal: false,
      isShownFollowingModal: false,
      selectedPostIdx: null,
      createdTimestamp: Date.now()
    }
  },
  computed: {
    getPostsOfUser() {
      let allPosts = this.$store.getters.getPosts;
      let postsOfUser = allPosts.filter(post => post.by.userName === this.user.userName);
      return postsOfUser;
    }
  },
  methods: {
    loadPostsOfUser() {
      this.$store.dispatch({
        type: 'loadPosts',
      })
    },
    toggleFollowersModal() {
      this.isShownFollowersModal = !this.isShownFollowersModal;
    },
    toggleFollowingModal() {
      this.isShownFollowingModal = !this.isShownFollowingModal;
    },
  },
  async created() {
    const userName = this.$route.params.userName;
    const user = await userService.getByUserName(userName);
    this.user = user[0];
    this.loadPostsOfUser();
  },
  watch: {
    async '$route.params.userName'(newUserName) {
      const user = await userService.getByUserName(newUserName);
      this.user = user[0];
      this.selectedPostIdx = null;
    },
  },
  components: {
    usersModal,
    postModal
  }
}
</script>