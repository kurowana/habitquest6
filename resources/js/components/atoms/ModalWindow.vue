<template>
    <div class="modal-window">
        <slot name="content"></slot>
        <slot name="footer"></slot>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.modal-window {
    position: absolute;
    top: 100px;
    left: 50px;
    z-index: 100;
    width: 700px;
    height: 500px;
    background: rgba(0, 0, 0, 0.8);
    border: 1px solid gold;
    border-radius: 10px;
    color: white;
}
</style>
