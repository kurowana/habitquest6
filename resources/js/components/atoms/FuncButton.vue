<template>
    <button class="form-button" @click="doClickEvent">{{ buttonText }}</button>
</template>

<script>
export default {
    props: {
        buttonText: {
            type: String,
            required: true
        }
    },
    methods: {
        doClickEvent: function() {
            this.$emit("click-event");
        }
    }
};
</script>

<style scoped>
.form-button {
    display: inline-block;
    padding: 5px 10px;
    background: linear-gradient(45deg, #222, #333);
    border: solid 1px gold;
    border-radius: 10px;
    color: white;
}
</style>
