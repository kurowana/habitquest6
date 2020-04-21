<template>
    <div>
        <talk-event :event-obj="eventObj"></talk-event>
    </div>
</template>

<script>
import TalkEvent from "../templates/TalkEvent";

import eventMixin from "../../mixins/eventMixin";

export default {
    components: {
        "talk-event": TalkEvent
    },
    mixins: [eventMixin],
    data: function() {
        return {
            eventObj: [
                // 引数vmは、子コンポーネントのthis
                function(vm) {
                    vm.$_setMessage("ヤナギ", "登場コメントをここに");
                    vm.$_setNpcImg("ヤナギ", "L");
                },
                function(vm) {
                    vm.$_setMessage("ナタ", "キャラクター追加");
                    vm.$_setNpcImg("ナタ", "LC");
                },
                function(vm) {
                    vm.$_setMessage("ゼノビア", "左右判定テスト");
                    vm.$_setNpcImg("ゼノビア", "R");
                },
                function(vm) {
                    vm.$_resetNpcImg();
                    vm.$_resetMessage();
                }
            ]
        };
    },
    computed: {},
    methods: {}
};
</script>
