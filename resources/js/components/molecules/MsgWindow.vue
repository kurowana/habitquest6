<template>
    <div class="msg-container">
        <msg-speaker-name
            class="name-area"
            :speakerName="speakerName"
        ></msg-speaker-name>
        <msg-text
            class="text-area"
            :msgText="msgText"
            @msg-completed="changeTextEndFlag"
        ></msg-text>
        <msg-next-icon class="next-icon" :isTextEnd="isTextEnd"></msg-next-icon>
        {{ isTextEnd }}
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
    data: function() {
        return {
            msgText:
                "あいうえお、かきくけこ。\nさしすせて、たちつて\nさしすせて、たちつて",
            speakerName: "名前",
            isTextEnd: false
        };
    },
    methods: {
        changeTextEndFlag: function() {
            setTimeout(() => {
                this.isTextEnd = true;
            }, 500);
        }
    }
};
</script>

<style scoped>
.msg-container {
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
        top: 135px;
        left: 700px;
    }
}
</style>
