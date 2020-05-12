<template>
    <div>
        <text-input-field
            :input-text="currentText"
            @return-text="reciveText"
        ></text-input-field>
        <func-button
            :button-text="'test'"
            @click-event="testFunc"
        ></func-button>
        <select-field
            :input-value="currentValue"
            :selectionList="choiceArr"
            @return-value="reciveValue"
        ></select-field>
        <func-button
            :button-text="'test2'"
            @click-event="testFunc2"
        ></func-button>
    </div>
</template>

<script>
import TextInputField from "../atoms/TextInputField";
import SelectField from "../atoms/SelectField";
import FuncButton from "../atoms/FuncButton";

export default {
    components: {
        "text-input-field": TextInputField,
        "select-field": SelectField,
        "func-button": FuncButton
    },
    data: function() {
        return {
            currentText: "",
            currentValue: "",
            choiceArr: [10, 20, 30, 40, 50, 60]
        };
    },
    methods: {
        reciveText: function(text) {
            this.currentText = text;
        },
        testFunc: function() {
            console.log(this.currentText);
        },
        reciveValue: function(value) {
            this.currentValue = value;
        },
        testFunc2: function() {
            console.log(this.currentValue);
        }
    }
};
</script>

<style></style>
