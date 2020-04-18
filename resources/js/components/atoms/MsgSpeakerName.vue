<template>
    <div class="name-text">{{ speakerName }}</div>
</template>

<script>
export default {
    props: {
        speakerName: {
            type: String,
            required: true
        }
    }
};
</script>

<style scoped>
.name-text {
    color: white;
    font-size: 18px;
}
</style>
