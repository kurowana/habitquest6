<template>
  <div class="event-container">
    <bg-viewer class="bg-container" :bg-img-obj="eventState.place"></bg-viewer>
    <div class="char-img-container">
      <npc-viewer :displaying-npc="eventState.npc"></npc-viewer>
    </div>
    <div class="msg-window-container">
      <msg-window
        :displaying-message="eventState.message"
        :is-scene-end="eventState.isSceneEnd"
        @msg-changed="hasChangedText"
        @msg-completed="hasCompletedText"
      ></msg-window>
    </div>
  </div>
</template>

<script>
import NpcViewer from "../molecules/NpcViewer";
import MsgWindow from "../molecules/MsgWindow";
import bgViewer from "../molecules/BgViewer";

export default {
  components: {
    "npc-viewer": NpcViewer,
    "msg-window": MsgWindow,
    "bg-viewer": bgViewer
  },
  props: {
    eventState: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {};
  },
  computed: {},
  methods: {
    hasCompletedText: function() {
      this.$emit("msg-completed");
    },
    hasChangedText: function() {
      this.$emit("msg-changed");
    }
  }
};
</script>

<style scoped>
.event-container {
  position: relative;
  width: 800px;
  height: 600px;
  background: black;
  /* background: url(../../../../public/images/bg/shinden.jpg); */
  overflow: hidden;
}

.bg-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* スマホ画面用 */
@media screen and (max-width: 480px) {
  .char-img-container {
    position: absolute;
    top: 0;
  }
  .msg-window-container {
    position: absolute;
    top: 200px;
  }
}
/* レティナスマホ用 */
@media screen and (min-width: 480px) and (max-width: 768px) {
  .char-img-container {
    position: absolute;
    top: 0;
  }
  .msg-window-container {
    position: absolute;
    top: 200px;
  }
}
/* タブレット用 */
@media screen and (min-width: 768px) and (max-width: 1280px) {
  .char-img-container {
    position: absolute;
    top: 0;
  }
  .msg-window-container {
    position: absolute;
    top: 400px;
  }
}
/* PC画面用 */
@media screen and (min-width: 1280px) {
  .char-img-container {
    position: absolute;
    top: 0;
  }
  .msg-window-container {
    position: absolute;
    top: 420px;
  }
}
</style>
