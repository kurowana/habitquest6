<template>
  <div class="msgContainer">
    <msg-text :text="text"></msg-text>
    <msg-next-icon :isTextEnd="isTextEnd"></msg-next-icon>
  </div>
</template>

<script>
import MsgText from "../atoms/MsgText";
import MsgNextIcon from "../atoms/MsgNextIcon";

export default {
  components: {
    "msg-text": MsgText,
    "msg-next-icon": MsgNextIcon
  },
  data: function() {
    return {
      text: "aieu",
      isTextEnd: false
    };
  }
};
</script>

<style scoped>
/* スマホ画面用 */
@media screen and (max-width: 480px) {
  .msgContainer {
    width: 800px;
    height: 175px;
    background-image: url(../../../../public/images/ui/msg-window.png);
  }
}
/* レティナスマホ用 */
@media screen and (min-width: 480px) and (max-width: 768px) {
  .msgContainer {
    width: 800px;
    height: 175px;
    background-image: url(../../../../public/images/ui/msg-window.png);
  }
}
/* タブレット用 */
@media screen and (min-width: 768px) and (max-width: 1280px) {
  .msgContainer {
    width: 800px;
    height: 175px;
    background-image: url(../../../../public/images/ui/msg-window.png);
  }
}
/* PC画面用 */
@media screen and (min-width: 1280px) {
  .msgContainer {
    width: 800px;
    height: 175px;
    background-image: url(../../../../public/images/ui/msg-window.png);
  }
}
</style>