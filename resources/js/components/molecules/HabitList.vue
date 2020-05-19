<template>
    <div>
        日課の一覧をここに
        <table>
            <thead>
                <tr>
                    <th>実行</th>
                    <th>日課名</th>
                    <th>実行回数</th>
                    <th>削除</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in habitList" :key="index">
                    <td>
                        <func-button
                            :button-text="'実行'"
                            :click-sound="'決定、ボタン押下4.mp3'"
                            @click-event="finishHabit(task)"
                        ></func-button>
                    </td>
                    <td>{{ task.habit_name }}</td>
                    <td>{{ task.habit_count }}</td>
                    <td>
                        <func-button
                            :button-text="'削除'"
                            @click-event="deleteHabit(task)"
                        ></func-button>
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
        habitList: {
            type: Array,
            required: true
        }
    },
    methods: {
        finishHabit: function(task) {
            axios
                .post("./finish_habit", {
                    id: task.id
                })
                .then(res => {
                    this.$emit("change-habit");
                });
        },
        deleteHabit: function(task) {
            axios
                .post("./delete_habit", {
                    id: task.id
                })
                .then(res => {
                    this.$emit("change-habit");
                });
        }
    }
};
</script>
