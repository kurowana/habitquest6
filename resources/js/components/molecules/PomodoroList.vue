<template>
    <div>
        ポモドーロの一覧をここに
        <table>
            <thead>
                <tr>
                    <th>作業名</th>
                    <th>作業時間</th>
                    <th>休憩時間</th>
                    <th>実行回数</th>
                    <th>実行</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in pomodoroList" :key="index">
                    <td>{{ task.pomodoro_name }}</td>
                    <td>{{ task.work_time }}</td>
                    <td>{{ task.break_time }}</td>
                    <td>{{ task.pomodoro_count }}</td>
                    <td>
                        <func-button
                            :button-text="'実行'"
                            @click-event="startPomodoro(task)"
                        >
                        </func-button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
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
        }
    }
};
</script>

<style scoped></style>
