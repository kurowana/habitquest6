<template>
    <div>
        ポモドーロの一覧をここに
        <table>
            <thead>
                <tr>
                    <th>実行</th>
                    <th>作業名</th>
                    <th>作業時間</th>
                    <th>休憩時間</th>
                    <th>実行回数(累計)</th>
                    <th>実行回数(当日)</th>
                    <th>削除</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in pomodoroList" :key="index">
                    <td>
                        <func-button
                            :button-text="'実行'"
                            @click-event="startPomodoro(task)"
                        >
                        </func-button>
                    </td>
                    <td>{{ task.pomodoro_name }}</td>
                    <td>{{ task.work_time }}</td>
                    <td>{{ task.break_time }}</td>
                    <td>{{ task.pomodoro_count }}</td>
                    <td>{{ task.todays_count }}</td>
                    <td>
                        <func-button
                            :button-text="'削除'"
                            @click-event="deletePomodoro(task.id)"
                        >
                        </func-button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from "axios";

import FuncButton from "../atoms/FuncButton";

export default {
    components: {
        "func-button": FuncButton
    },
    props: {
        pomodoroList: {
            type: Array,
            required: true
        }
    },
    methods: {
        startPomodoro: function(task) {
            this.$emit("set-pomodoro", task);
        },
        deletePomodoro: function(id) {
            axios
                .post("./delete_pomodoro", {
                    id: id
                })
                .then(res => {
                    this.$emit("change-pomodoro");
                });
        }
    }
};
</script>

<style scoped></style>
