<template>
  <div class="msg-container">
    <msg-speaker-name class="name-area" :speaker-name="displayingMessage.name"></msg-speaker-name>
    <msg-text
      class="text-area"
      :msg-text="displayingMessage.text"
      @msg-changed="hasChangedText"
      @msg-completed="hasCompletedText"
    ></msg-text>
    <msg-next-icon class="next-icon" :is-scene-end="isSceneEnd"></msg-next-icon>
  </div>
</template>

<script>
import MsgText from "../atoms/MsgText";
import MsgSpeakName from "../atoms/MsgSpeakerName.vue";
import MsgNextIcon from "../atoms/MsgNextIcon";

import baseMixin from "../../mixins/baseMixin";

export default {
  components: {
    "msg-text": MsgText,
    "msg-speaker-name": MsgSpeakName,
    "msg-next-icon": MsgNextIcon
  },
  mixins: [baseMixin],
  props: {
    displayingMessage: {
      type: Object,
      required: true
    },
    isSceneEnd: {
      type: Boolean,
      required: true
    }
  },
  data: function() {
    return {};
  },
  methods: {
    hasCompletedText: function() {
      setTimeout(() => {
        this.$emit("msg-completed");
      }, 500);
    },
    hasChangedText: function() {
      this.$emit("msg-changed");
    }
  }
};
</script>

<style scoped>
.msg-container {
  position: relative;
  z-index: 50;
  background-image: url(../../../../public/images/ui/msg-window.png);
}

/* スマホ画面用 */
@media screen and (max-width: 480px) {
  .msg-container {
    width: 800px;
    height: 175px;
  }
}
/* レティナスマホ用 */
@media screen and (min-width: 480px) and (max-width: 768px) {
  .msg-container {
    width: 800px;
    height: 175px;
  }
}
/* タブレット用 */
@media screen and (min-width: 768px) and (max-width: 1280px) {
  .msg-container {
    width: 800px;
    height: 175px;
  }
}
/* PC画面用 */
@media screen and (min-width: 1280px) {
  .msg-container {
    width: 800px;
    height: 175px;
  }
  .name-area {
    position: absolute;
    top: 14px;
    left: 30px;
  }
  .text-area {
    position: absolute;
    top: 60px;
    left: 60px;
  }
  .next-icon {
    position: absolute;
    top: 130px;
    left: 720px;
  }
}
</style>
