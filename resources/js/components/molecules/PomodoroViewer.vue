<template>
    <div>
        <p>{{ pomodoroObj.pomodoro_name }}</p>
        <p>{{ pomodoroObj.pomodoro_count }}</p>
        <time-viewer :time="pomodoroStatus.remainingTime"></time-viewer>
        <div v-if="pomodoroStatus.isComplete === true">
            <div v-if="pomodoroStatus.isWorking">
                <func-button
                    :button-text="'休憩をしてから次のサイクルへ'"
                    @click-event="startBreak"
                ></func-button>
            </div>
            <div v-if="pomodoroStatus.isBreaking">
                <func-button
                    :button-text="'作業開始'"
                    @click-event="startWork"
                ></func-button>
            </div>
            <func-button
                :button-text="'終了'"
                @click-event="finish"
            ></func-button>
        </div>
        <div v-else>
            <func-button
                :button-text="'中止(実行回数は増えません)'"
                @click-event="finish"
            ></func-button>
        </div>
    </div>
</template>

<script>
import TimeViewer from "../atoms/TimeViewer";
import FuncButton from "../atoms/FuncButton";

export default {
    components: {
        "time-viewer": TimeViewer,
        "func-button": FuncButton
    },
    props: {
        pomodoroObj: {
            type: Object,
            required: true
        },
        pomodoroStatus: {
            type: Object,
            required: true
        }
    },
    methods: {
        startBreak: function() {
            this.$emit("start-break");
        },
        startWork: function() {
            this.$emit("start-work");
        },
        finish: function() {
            this.$emit("finish");
        }
    }
};
</script>
