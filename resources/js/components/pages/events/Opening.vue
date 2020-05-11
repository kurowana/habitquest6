<template>
    <div>
        <talk-event
            :event-obj="eventObj"
            @modal1="test1 = true"
            @modal2="
                test1 = false;
                test2 = true;
            "
        >
        </talk-event>
        <modal-window v-if="test1">
            <template v-slot:content>aaa</template>
            <template v-slot:footer>bbb</template>
        </modal-window>
        <modal-window v-if="test2">
            <template v-slot:content>ccc</template>
            <template v-slot:footer>ddd</template>
        </modal-window>
    </div>
</template>

<script>
import TalkEvent from "../../templates/TalkEvent";

import ModalWindow from "../../atoms/ModalWindow";

export default {
    components: {
        "talk-event": TalkEvent,
        "modal-window": ModalWindow
    },
    data: function() {
        return {
            test1: false,
            test2: false,
            eventObj: [
                // 引数vmは、子コンポーネントのインスタンス
                function(vm) {
                    vm.$_setMessage("ヤナギ", "これはオープニングです");
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
                    vm.$emit("modal1");
                    vm.$_setMessage("ゼノビア", "モーダル表示");
                },
                function(vm) {
                    vm.$emit("modal2");
                    vm.$_setMessage("ゼノビア", "モーダル変更");
                },
                function(vm) {
                    vm.$_setMessage("ゼノビア", "モーダル非表示");
                },
                function(vm) {
                    vm.$_setNpcImg("", "L");
                    vm.$_setTalk("ゼノビア", "トーク関数テスト", "R");
                },
                function(vm) {
                    vm.$_setEventPlace("小屋");
                    vm.$_setTalk("ゼノビア", "トーク関数テスト2", "R");
                },
                function(vm) {
                    vm.$_setTalk("ナタ", "トーク関数テスト、切り替え", "LC");
                    vm.$_resetAllZIndex();
                },
                function(vm) {
                    vm.$_resetAllOpacity();
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
