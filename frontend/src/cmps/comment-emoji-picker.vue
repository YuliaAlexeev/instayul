<template>
  <emoji-picker class="emoji-wrapper" @emoji="onEmojiSelected" :search="search">
    <button class="emoji-invoker" slot="emoji-invoker" slot-scope="{ events: { click: clickEvent } }"
      @click.stop.prevent="clickEvent">
      <svg>
        <use xlink:href="../assets/sprite.svg#emoji"></use>
      </svg>
    </button>
    <div slot="emoji-picker" slot-scope="{ emojis, insert, display }">
      <div class="emoji-picker">
        <div class="emoji-picker-search">
          <input type="text" v-model="search" v-focus>
        </div>
        <div>
          <div v-for="(emojiGroup, category) in emojis" :key="category">
            <h5>{{ category }}</h5>
            <div class="emojis">
              <span v-for="(emoji, emojiName) in emojiGroup" :key="emojiName" @click="insert(emoji)" :title="emojiName">{{
                emoji }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </emoji-picker>
</template>

<script>
import EmojiPicker from 'vue-emoji-picker';

export default {
  name: 'comment-emoji-picker',
  components: { EmojiPicker },
  data() {
    return {
      search: '',
    }
  },
  methods: {
    onEmojiSelected(emoji) {
      this.$emit('emoji-selected', emoji);
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
}
</script>
