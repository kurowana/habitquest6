<template>
    <div>
        <register-pomodoro></register-pomodoro>
        <pomodoro-list :pomodoro-list="myPomdoro"></pomodoro-list>
    </div>
</template>

<script>
import axios from "axios";

import RegisterPomodoro from "../molecules/RegisterPomodoro";
import PomodoroList from "../molecules/PomodoroList";

export default {
    components: {
        "register-pomodoro": RegisterPomodoro,
        "pomodoro-list": PomodoroList
    },
    data: function() {
        return {
            myPomdoro: []
        };
    },
    mounted: function() {
        this.getMyPomodoro();
    },
    methods: {
        getMyPomodoro: function() {
            axios.post("./get_my_pomodoro", {}).then(res => {
                console.log(res.data);
                this.myPomdoro = res.data;
            });
        }
    }
};
</script>
