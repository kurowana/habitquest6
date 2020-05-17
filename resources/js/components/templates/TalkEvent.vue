<template>
    <div>
        <game-menu></game-menu>
        <div @click="$_clickEventViewer">
            <talk-event-unit
                :event-state="eventState"
                @msg-changed="$_changeMessageEndFlag(false)"
                @msg-completed="$_changeMessageEndFlag(true)"
            ></talk-event-unit>
        </div>
        <pomodoro-unit></pomodoro-unit>
        <habit-unit></habit-unit>
    </div>
</template>

<script>
import TalkEventUnit from "../organisms/TalkEventUnit";
import GameMenu from "../molecules/GameMenu";
import PomodoroUnit from "../organisms/PomodoroUnit";
import HabitUnit from "../organisms/HabitUnit";

import baseMixin from "../../mixins/baseMixin";
import eventMixin from "../../mixins/eventMixin";

export default {
    components: {
        "talk-event-unit": TalkEventUnit,
        "game-menu": GameMenu,
        "pomodoro-unit": PomodoroUnit,
        "habit-unit": HabitUnit
    },
    mixins: [baseMixin, eventMixin],
    props: {
        eventObj: {
            type: Array,
            required: true
        }
    },
    data: function() {
        return {
            isShowModal: false
        };
    },
    mounted: function() {
        // 親ページのイベントオブジェクトから現在シーンの処理を読み込み
        // 読み込み処理についてはeventMixinに記載
        this.$_getCurrentEvent();
    },
    watch: {
        // シーンが変わる度に処理を読み込み直す
        // 読み込み処理についてはeventMixinに記載
        "eventState.sceneNo": function() {
            this.$_getCurrentEvent();
        }
    },
    methods: {}
};
</script>

<style scoped></style>
