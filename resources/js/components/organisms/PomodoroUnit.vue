<template>
    <div>
        <pomodoro-viewer
            :pomodoro-obj="currentPomodoro"
            :pomodoro-status="pomodoroStatus"
            @start-work="startWorkTime"
            @start-break="startBreakTime"
            @finish="stopPomodoro"
        ></pomodoro-viewer>
        <register-pomodoro></register-pomodoro>
        <pomodoro-list
            :pomodoro-list="myPomdoro"
            @set-pomodoro="setPomodoro"
        ></pomodoro-list>
    </div>
</template>

<script>
import axios from "axios";

import RegisterPomodoro from "../molecules/RegisterPomodoro";
import PomodoroList from "../molecules/PomodoroList";
import PomodoroViewer from "../molecules/PomodoroViewer";

import baseMixin from "../../mixins/baseMixin";

export default {
    components: {
        "register-pomodoro": RegisterPomodoro,
        "pomodoro-list": PomodoroList,
        "pomodoro-viewer": PomodoroViewer
    },
    mixins: [baseMixin],
    data: function() {
        return {
            myPomdoro: [],
            currentPomodoro: {
                pomodoro_name: "未実施",
                pomodoro_count: "***"
            },
            pomodoroStatus: {
                isWorking: false,
                isBreaking: false,
                isComplete: false,
                remainingTime: 0
            },
            timerObj: null
        };
    },
    mounted: function() {
        this.getMyPomodoro();
    },
    methods: {
        getMyPomodoro: function() {
            axios.post("./get_my_pomodoro", {}).then(res => {
                this.myPomdoro = res.data;
            });
        },
        setPomodoro: function(task) {
            this.currentPomodoro = this.$_deepCopy(task);
            this.startWorkTime();
        },
        startWorkTime: function() {
            if (this.pomodoroStatus.isWorking === false) {
                this.$set(
                    this.pomodoroStatus,
                    "remainingTime",
                    // テスト用に一時変更
                    this.currentPomodoro.work_time * 60 * 100
                );
                this.$set(this.pomodoroStatus, "isComplete", false);
                this.$set(this.pomodoroStatus, "isWorking", true);
                this.$set(this.pomodoroStatus, "isBreaking", false);
                this.timerObj = setInterval(() => {
                    this.countDown();
                }, 1000);
            }
        },
        startBreakTime: function() {
            if (this.pomodoroStatus.isBreaking === false) {
                this.$set(
                    this.pomodoroStatus,
                    "remainingTime",
                    // テスト用に一時変更
                    this.currentPomodoro.break_time * 60 * 100
                );
                this.$set(this.pomodoroStatus, "isComplete", false);
                this.$set(this.pomodoroStatus, "isWorking", false);
                this.$set(this.pomodoroStatus, "isBreaking", true);
                this.timerObj = setInterval(() => {
                    this.countDown();
                }, 1000);
            }
        },
        countDown: function() {
            if (this.pomodoroStatus.remainingTime <= 0) {
                this.$set(this.pomodoroStatus, "isComplete", true);
                clearInterval(this.timerObj);
            } else {
                this.$set(
                    this.pomodoroStatus,
                    "remainingTime",
                    this.pomodoroStatus.remainingTime - 1000
                );
            }
        },
        stopPomodoro: function() {
            clearInterval(this.timerObj);
            this.$set(this.pomodoroStatus, "isWorking", false);
            this.$set(this.pomodoroStatus, "isBreaking", false);
            this.resetPomodoro();
        },
        resetPomodoro: function() {
            this.$set(this.currentPomodoro, "pomodoro_name", "未実施");
            this.$set(this.currentPomodoro, "pomodoro_count", "***");
            this.$set(this.pomodoroStatus, "isWorking", false);
            this.$set(this.pomodoroStatus, "isBreaking", false);
            this.$set(this.pomodoroStatus, "isComplete", false);
            this.$set(this.pomodoroStatus, "remainingTime", 0);
        }
    }
};
</script>
