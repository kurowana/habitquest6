<template>
    <button class="menu-button" @click="doClickEvent">{{ buttonText }}</button>
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
.menu-button {
    display: inline-block;
    padding: 5px 10px;
    background: black;
    border: 1px solid gold;
    color: white;
}
/* スマホ画面用 */
@media screen and (max-width: 480px) {
}
/* レティナスマホ用 */
@media screen and (min-width: 480px) and (max-width: 768px) {
}
/* タブレット用 */
@media screen and (min-width: 768px) and (max-width: 1280px) {
}
/* PC画面用 */
@media screen and (min-width: 1280px) {
}
</style>
