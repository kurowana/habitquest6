<template>
    <div>
        <div class="event-container">
            <div class="char-img-container">
                <npc-viewer :displaying-npc="eventState.npc"></npc-viewer>
            </div>
            <div class="msg-window-container">
                <msg-window
                    :displaying-message="eventState.message"
                ></msg-window>
            </div>
        </div>
    </div>
</template>

<script>
import NpcViewer from "../molecules/NpcViewer";
import MsgWindow from "../molecules/MsgWindow";

export default {
    components: {
        "npc-viewer": NpcViewer,
        "msg-window": MsgWindow
    },
    props: {
        eventState: {
            type: Object,
            required: true
        }
    },
    data: function() {
        return {};
    }
};
</script>

<style scoped>
.event-container {
    position: relative;
    width: 800px;
    height: 600px;
    background: url(../../../../public/images/bg/shinden.jpg);
    overflow: hidden;
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
