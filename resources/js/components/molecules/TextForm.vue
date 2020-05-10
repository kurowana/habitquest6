<template>
    <div>
        <text-input-field
            :input-text="currentText"
            @return-text="reciveText"
        ></text-input-field>
        <form-button :button-text="'test'" :to-func="testFunc"></form-button>
        <select-field
            :input-value="currentValue"
            :choices="choiceArr"
            @return-value="reciveValue"
        ></select-field>
        <form-button :button-text="'test2'" :to-func="testFunc2"></form-button>
    </div>
</template>

<script>
import TextInputField from "../atoms/TextInputField";
import SelectField from "../atoms/SelectField";
import FormButton from "../atoms/FormButton";

export default {
    components: {
        "text-input-field": TextInputField,
        "select-field": SelectField,
        "form-button": FormButton
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
