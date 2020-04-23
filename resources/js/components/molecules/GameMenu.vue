<template>
    <div class="menu-area">
        <menu-button :to-func="this.test" button-text="aiueo"></menu-button>
    </div>
</template>

<script>
import MenuButton from "../atoms/MenuButton";

export default {
    components: {
        "menu-button": MenuButton
    },
    methods: {
        test: function() {
            console.log("aaa");
        }
    }
};
</script>

<style scoped>
.menu-area {
    margin-bottom: 10px;
}
</style>
