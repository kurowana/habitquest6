<template>
    <div>
        <register-habit @change-habit="initUnit"></register-habit>
        <habit-list :habit-list="myHabit" @change-habit="initUnit"></habit-list>
    </div>
</template>

<script>
import axios from "axios";

import RegisterHabit from "../molecules/RegisterHabit";
import HabitList from "../molecules/HabitList";

export default {
    components: {
        "register-habit": RegisterHabit,
        "habit-list": HabitList
    },
    data: function() {
        return {
            myHabit: []
        };
    },
    mounted: function() {
        this.initUnit();
    },
    methods: {
        initUnit: function() {
            this.getMyHabit();
        },
        getMyHabit: function() {
            axios.post("./get_my_habit", {}).then(res => {
                this.myHabit = res.data;
            });
        }
    }
};
</script>
