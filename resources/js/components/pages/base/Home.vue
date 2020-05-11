<template>
    <div>
        <talk-event :event-obj="eventObj"></talk-event>
    </div>
</template>

<script>
import TalkEvent from "../../templates/TalkEvent";

export default {
    components: {
        "talk-event": TalkEvent
    },
    data: function() {
        return {
            eventObj: [
                // 引数vmは、子コンポーネントのthis
                function(vm) {
                    vm.$_setMessage("スフィア", "これはホームイベントです");
                    vm.$_setNpcImg("スフィア1", "L");
                },
                function(vm) {
                    vm.$_setMessage("ナタ", "キャラクター追加");
                    vm.$_setNpcImg("ナタ", "LC");
                },
                function(vm) {
                    vm.$_setMessage("ゼノビア", "左右判定テスト");
                    vm.$_setNpcImg("ゼノビア", "R");
                    vm.$_setNpcMotion("right-slide", "L");
                },
                function(vm) {
                    vm.$_setTalk("ゼノビア", "トーク関数テスト");
                },
                function(vm) {
                    vm.$_setTalk("ヤナギ", "トーク関数テスト、切り替え");
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
