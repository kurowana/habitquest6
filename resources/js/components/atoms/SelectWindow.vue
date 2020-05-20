<template>
    <div>
        <div class="selection-field" @click="doClickEvent">
            {{ SelectionText }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        SelectionText: {
            type: String,
            required: true
        },
        clickSound: {
            type: String,
            required: false,
            default: "スイッチを押す.mp3"
        }
    },
    methods: {
        doClickEvent: function() {
            this.$emit("click-event");
            this.$store.commit("setSe", this.clickSound);
        }
    }
};
</script>

<style scoped>
.selection-field {
    background: black;
    width: 600px;
    height: 60px;
    margin-bottom: 20px;
    padding-top: 10px;
    border: 1px solid gold;
    border-radius: 10px;
    color: white;
    font-size: 20px;
    text-align: center;
}
</style>
