<template>
    <div>
        <select @change="returnValue" :value="inputValue">
            <option v-for="(value, index) in selectionList" :key="index">
                {{ value }}
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
        selectionList: {
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
