<template>
    <div>
        <label>作業名</label>
        <text-input-field
            :input-text="pomodoroName"
            @retunr-text="reciveName"
        ></text-input-field>
        <label>作業時間</label>
        <select-field
            :inputValue="workTime"
            :selectionList="timeList"
            @return-value="reciveWorkTime"
        ></select-field>
        <label>休憩時間</label>
        <select-field
            :inputValue="breakTime"
            :selectionList="timeList"
            @return-value="reciveBreakTime"
        ></select-field>
        <form-button
            :button-text="'登録'"
            :to-func="registerPomodoro"
        ></form-button>
    </div>
</template>

<script>
import axios from "axios";

import TextInputField from "../atoms/TextInputField";
import SelectField from "../atoms/SelectField";
import FormButton from "../atoms/FormButton";

export default {
    components: {
        "text-input-field": TextInputField,
        "select-field": SelectField,
        "form-button": FormButton
    },
    data: function() {
        return {
            pomodoroName: "",
            workTime: "",
            breakTime: "",
            timeList: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]
        };
    },
    methods: {
        reciveName: function(text) {
            this.pomodoroName = text;
        },
        reciveWorkTime: function(time) {
            this.workTime = time;
        },
        reciveBreakTime: function(time) {
            this.breakTime = time;
        },
        registerPomodoro: function() {
            axios
                .post("./api/regiser_pomodoro", {
                    name: this.pomodoroName,
                    work_time: this.workTime,
                    break_time: this.breakTime
                })
                .then(res => {});
        }
    }
};
</script>

<style scoped></style>
