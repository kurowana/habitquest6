<template>
  <button class="form-button" @click="this.toFunc">{{buttonText}}</button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true
    },
    toFunc: {
      type: Function,
      required: true
    }
  }
};
</script>

<style scoped>
.form-button {
  display: inline-block;
  padding: 5px 10px;
  background: linear-gradient(0deg, #000, #111);
  border: solid 1px gold;
  border-radius: 10px;
  color: white;
}
</style>