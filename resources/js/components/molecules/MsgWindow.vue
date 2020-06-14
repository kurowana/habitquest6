<template>
  <div class="msg-container">
    <div class="name-area">{{message.name}}</div>
    <typed-text
      class="text-area"
      :msg-text="message.text"
      @msg-changed="hasChangedText"
      @msg-completed="hasCompletedText"
    ></typed-text>
    <down-arrow class="next-icon" v-if="eventState.isSceneEnd"></down-arrow>
  </div>
</template>

<script>
import TypedText from "../atoms/TypedText";
import DownArrow from "../atoms/DownArrow";
import baseMixin from "../../mixins/baseMixin";

import { mapGetters } from "vuex";

export default {
  components: {
    "typed-text": TypedText,
    "down-arrow": DownArrow
  },
  mixins: [baseMixin],
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters({
      eventState: "getEventState",
      message: "getMessage"
    })
  },
  methods: {
    hasCompletedText: function() {
      setTimeout(() => {
        this.$emit("msg-completed");
      }, 100);
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
