<template>
    <div>
        <span v-if="isTextEnd" class="next-icon">▼</span>
    </div>
</template>

<script>
export default {
    props: {
        isTextEnd: {
            type: Boolean,
            required: true
        }
    }
};
</script>

<style scoped>
.next-icon {
    color: gold;
    font-size: 20px;
    font-weight: bold;
}
</style>
