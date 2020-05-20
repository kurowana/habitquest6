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
                    vm.$_setEvent({
                        type: "msg",
                        content: "シンプルなメッセージ"
                    });
                    vm.$_setNpcImg("スフィア1", "L");
                },
                function(vm) {
                    vm.$_setEvent({
                        type: "talk",
                        content: {
                            text: "トークイベント検証",
                            name: "ナタ",
                            pos: "LC"
                        }
                    });
                    vm.$_setNpcImg("ナタ", "LC");
                },
                function(vm) {
                    vm.$_setEvent({
                        type: "select",
                        content: [
                            {
                                text: "選択肢1",
                                event: () => {
                                    vm.$_setEvent({
                                        type: "msg",
                                        content: "選択肢1"
                                    });
                                }
                            },
                            {
                                text: "選択肢2",
                                event: () => {
                                    vm.$_setEvent({
                                        type: "msg",
                                        content: "選択肢2"
                                    });
                                }
                            }
                        ]
                    });
                    vm.$_setNpcMotion("right-slide", "L");
                },
                function(vm) {
                    vm.$_setEventPlace("街");
                },
                function(vm) {
                    vm.$_setTalk("ゼノビア", "トーク関数テスト", "R");
                },
                function(vm) {
                    vm.$_setTalk("ヤナギ", "トーク関数テスト、切り替え", "L");
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
