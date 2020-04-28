<template>
  <div>
    <game-menu></game-menu>
    <transition name="fade">
      <div v-show="isDisplay">
        <div @click="$_clickEventViewer">
          <talk-event-unit
            :event-state="eventState"
            :event-place="eventPlace"
            :is-scene-end="isSceneEnd"
            @msg-changed="$_changeMessageEndFlag(false)"
            @msg-completed="$_changeMessageEndFlag(true)"
          ></talk-event-unit>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import TalkEventUnit from "../organisms/TalkEventUnit";
import GameMenu from "../molecules/GameMenu";

import baseMixin from "../../mixins/baseMixin";
import eventMixin from "../../mixins/eventMixin";

export default {
  components: {
    "talk-event-unit": TalkEventUnit,
    "game-menu": GameMenu
  },
  mixins: [baseMixin, eventMixin],
  props: {
    eventObj: {
      type: Array,
      required: true
    }
  },
  //   data: function() {
  //     return {
  //       eventState: {
  //         message: {
  //           name: " ",
  //           text: " "
  //         },
  //         npc: {
  //           L: {
  //             name: "",
  //             opacity: 1,
  //             zIndex: 10,
  //             motion: "none",
  //             effect: "none"
  //           },
  //           LC: {
  //             name: "",
  //             opacity: 1,
  //             zIndex: 10,
  //             motion: "none",
  //             effect: "none"
  //           },
  //           C: {
  //             name: "",
  //             opacity: 1,
  //             zIndex: 10,
  //             motion: "none",
  //             effect: "none"
  //           },
  //           RC: {
  //             name: "",
  //             opacity: 1,
  //             zIndex: 10,
  //             motion: "none",
  //             effect: "none"
  //           },
  //           R: {
  //             name: "",
  //             opacity: 1,
  //             zIndex: 10,
  //             motion: "none",
  //             effect: "none"
  //           }
  //         }
  //       },
  //       eventPlace: "神殿",
  //       sceneNo: 0,
  //       isSceneEnd: false,
  //       isMessageEnd: false,
  //       isDisplay: true
  //     };
  //   },
  mounted: function() {
    this.$_getCurrentEvent();
  },
  watch: {
    sceneNo: function() {
      this.$_getCurrentEvent();
    }
  },
  methods: {
    $_getCurrentEvent() {
      const vm = this;
      this.eventObj[this.sceneNo](vm);
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
