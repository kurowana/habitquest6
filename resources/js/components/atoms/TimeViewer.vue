<template>
    <div>{{ formatedTime }}</div>
</template>

<script>
import moment from "moment";

export default {
    props: {
        time: {
            type: Number,
            required: true
        }
    },
    computed: {
        formatedTime: function() {
            const duration = moment.duration(this.time);
            const hours = duration.hours();
            const minutes = duration.minutes();
            const seconds = duration.seconds();
            return hours + "時間" + minutes + "分" + seconds + "秒";
        }
    }
};
</script>

<style scoped></style>
