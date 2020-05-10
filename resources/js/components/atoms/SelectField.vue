<template>
    <div>
        <select @change="returnValue" :value="inputValue">
            <option v-for="(choice, index) in choices" :key="index">
                {{ choice }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        inputValue: {
            type: String,
            required: true
        },
        choices: {
            type: Array,
            required: true
        }
    },
    methods: {
        returnValue: function(event) {
            this.$emit("return-value", event.target.value);
        }
    }
};
</script>
