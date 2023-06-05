<template>
  <div class="screen flex flex-align-center">
    <close-button @closeModal="closeModal" />
    <form class="add-post-modal modal flex flex-column" @submit.prevent="addPost">
      <div class="add-post-modal-top flex flex-between flex-align-center">
        <button class="add-post-modal-reset-btn" @click="resetAddPost" v-if="postToAdd.imgUrl">
          Reset
        </button>
        <h4 class="add-post-modal-top-title">Create new post</h4>
        <button class="add-post-modal-btn" v-if="postToAdd.imgUrl">
          Share
        </button>
      </div>
      <div class="add-post-content">
        <textarea class="add-post-modal-textarea" @input="limitCharacters" v-model="postToAdd.content" rows="3"
          placeholder="Write a caption..."></textarea>
        <comment-emoji-picker @emoji-selected="appendEmoji"></comment-emoji-picker>
        <span class="letters-length">{{ lettersLength }}/{{ maximumLettersLength.toLocaleString() }}</span>
      </div>
      <div class="add-post-modal-location flex flex-align-center">
        <input type="text" v-model="postToAdd.location" ref="locationInput" placeholder="Add location" />
        <svg class="icon">
          <use xlink:href="../assets/sprite.svg#location"></use>
        </svg>
      </div>
      <div class="add-post-modal-upload flex-center">
        <img src="@/assets/loader.svg" class="main-loader" v-if="isUploading" />
        <template v-else-if="!postToAdd.imgUrl">
          <label class="add-post-modal-upload-create flex-center" for="imgUploader">
            <svg class="icon-image-upload">
              <use xlink:href="../assets/sprite.svg#icon-to-represent-images"></use>
            </svg>
            <h3>Click here to add image</h3>
          </label>
          <input type="file" id="imgUploader" name="img-uploader" @change="onUploadImg" />
        </template>
        <img :src="postToAdd.imgUrl" v-if="postToAdd.imgUrl" class="add-post-modal-upload-img" />
      </div>
    </form>
  </div>
</template>

<script>
import { uploadImg } from "@/services/img-upload-service.js";
import { postService } from '@/services/post-service.js';
import commentEmojiPicker from '../cmps/comment-emoji-picker.vue';
import closeButton from '@/cmps/close-button.vue';

export default {
  name: "add-post",
  components: { commentEmojiPicker, closeButton },
  data() {
    return {
      isUploading: false,
      postToAdd: postService.getEmpty(),
      maximumLettersLength: 2200,
    };
  },
  mounted() {
    const options = { fields: ["icon", "name"], };
    const autocomplete = new google.maps.places.Autocomplete(this.$refs.locationInput, options);
    autocomplete.setFields(["formatted_address"]);
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      this.postToAdd.location = place.name;
    });
  },
  computed: {
    lettersLength() {
      return this.postToAdd.content.length.toLocaleString();
    }
  },
  methods: {
    appendEmoji(emoji) {
      this.appendAndTrimEmoji(emoji);
    },
    appendAndTrimEmoji(emoji) {
      if (this.postToAdd.content.length < this.maximumLettersLength) {
        this.postToAdd.content += emoji;
        this.limitCharacters();
      }
    },
    limitCharacters() {
      if (this.postToAdd.content.length > this.maximumLettersLength) {
        this.postToAdd.content = this.postToAdd.content.slice(0, this.maximumLettersLength);
      }
    },
    async onUploadImg(ev) {
      this.isUploading = true;
      const res = await uploadImg(ev);
      this.postToAdd.imgUrl = res.url;
      this.isUploading = false;
    },
    addPost() {
      if (!this.postToAdd.imgUrl) return;
      this.$emit("addPost", this.postToAdd);
      this.postToAdd = postService.getEmpty()
      this.closeModal();
      this.scrollTop();
    },
    resetAddPost() {
      this.postToAdd.imgUrl = null;
      this.postToAdd.content = '';
      this.postToAdd.location = '';
    },
    closeModal() {
      this.$emit("closeAddPostModal");
    },
    scrollTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
