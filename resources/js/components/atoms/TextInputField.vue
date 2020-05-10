<template>
    <div>
        <input type="text" @change="returnText" :value="inputText" />
    </div>
</template>

<script>
export default {
    props: {
        inputText: {
            type: String,
            required: false
        }
    },
    methods: {
        returnText: function(event) {
            this.$emit("return-text", event.target.value);
        }
    }
};
</script>

<style></style>
