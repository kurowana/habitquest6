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
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in pomodoroList" :key="index">
                    <td>{{ task.pomodoro_name }}</td>
                    <td>{{ task.work_time }}</td>
                    <td>{{ task.break_time }}</td>
                    <td>{{ task.pomodoro_count }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        pomodoroList: {
            type: Array,
            required: true
        }
    }
};
</script>

<style scoped></style>
