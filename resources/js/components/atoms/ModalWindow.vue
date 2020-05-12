<template>
    <div class="modal-window">
        <div class="modal-main">
            <slot name="main"></slot>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.modal-window {
    position: absolute;
    top: 90px;
    left: 50px;
    z-index: 100;
    width: 700px;
    height: 390px;
    padding: 20px;
    background: rgba(0, 0, 0, 0.9);
    border: 1px solid gold;
    border-radius: 10px;
}
.modal-main {
    overflow: auto;

    color: white;
    height: 360px;
}
</style>
