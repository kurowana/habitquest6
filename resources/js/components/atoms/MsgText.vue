<template>
    <div>
        <vue-typer
            class="text-content"
            :text="msgText"
            :repeat="0"
            :type-delay="delayTime"
            @completed="hasCompletedText"
        ></vue-typer>
    </div>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
    components: {
        "vue-typer": VueTyper
    },
    data: function() {
        return {
            delayTime: 30
        };
    },
    props: {
        msgText: {
            type: String,
            required: true
        }
    },
    watch: {
        msgText: function() {
            this.$emit("msg-changed");
        }
    },
    methods: {
        hasCompletedText: function() {
            this.$emit("msg-completed");
        }
    }
};
</script>

<style>
/* vue-typer用のCSS */
.char.custom.typed {
    color: white;
    font-size: 20px;
}
</style>

<style scoped></style>
