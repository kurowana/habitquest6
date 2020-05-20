<template>
    <div>
        <div v-for="(option, index) in selection" :key="index">
            <select-window
                :selection-text="option.text"
                @click-event="selected(option.event)"
            ></select-window>
        </div>
    </div>
</template>

<script>
import SelectWindow from "../atoms/SelectWindow";

export default {
    components: {
        "select-window": SelectWindow
    },
    props: {
        selection: {
            type: Array,
            required: true
        }
    },
    methods: {
        selected: function(event) {
            this.$emit("selected", event);
        }
    }
};
</script>

<style scoped></style>
