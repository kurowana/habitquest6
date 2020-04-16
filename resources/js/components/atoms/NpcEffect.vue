<template>
  <div>
    <img src />
  </div>
</template>
    
<script>
import { mapGetters } from "vuex";

export default {
  props: {
    effectSrc: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>