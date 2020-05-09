<template>
    <div>
        <time-viewer :time="remainingTime"></time-viewer>
        <form-button
            :button-text="'タイマー開始'"
            :to-func="startTimer"
        ></form-button>
        <form-button :button-text="'停止'" :to-func="stopTimer"></form-button>
        <form-button
            :button-text="'再開'"
            :to-func="restartTimer"
        ></form-button>
        <form-button
            :button-text="'リセット'"
            :to-func="resetTimer"
        ></form-button>
    </div>
</template>

<script>
import TimeViewer from "../atoms/TimeViewer";
import FormButton from "../atoms/FormButton";

export default {
    components: {
        "time-viewer": TimeViewer,
        "form-button": FormButton
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
