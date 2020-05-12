<template>
    <div>
        <time-viewer :time="remainingTime"></time-viewer>
        <func-button
            :button-text="'タイマー開始'"
            @click-event="startTimer"
        ></func-button>
        <func-button
            :button-text="'停止'"
            @click-event="stopTimer"
        ></func-button>
        <func-button
            :button-text="'再開'"
            @click-event="restartTimer"
        ></func-button>
        <func-button
            :button-text="'リセット'"
            @click-event="resetTimer"
        ></func-button>
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
    data: function() {
        return {
            isCountDown: false,
            remainingTime: 0,
            timerObj: null
        };
    },
    methods: {
        startTimer: function() {
            if (this.isCountDown === false) {
                this.remainingTime = 1800000;
                this.isCountDown = true;
                this.timerObj = setInterval(() => {
                    this.countDown();
                }, 1000);
            }
        },
        stopTimer: function() {
            this.isCountDown = false;
            clearInterval(this.timerObj);
        },
        restartTimer: function() {
            if (this.isCountDown === false) {
                this.isCountDown = true;
                this.timerObj = setInterval(() => {
                    this.countDown();
                }, 1000);
            }
        },
        resetTimer: function() {
            this.isCountDown = false;
            clearInterval(this.timerObj);
            this.remainingTime = 0;
        },
        countDown: function() {
            if (this.remainingTime <= 0) {
                this.isCountDown = false;
                clearInterval(this.timerObj);
            } else {
                this.remainingTime -= 1000;
            }
        }
    }
};
</script>

<style scoped></style>
