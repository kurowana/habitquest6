<template>
  <div class="charImgContainer">
    <npc-img :target-npc="npc.L" direction="left" class="img-pos-l"></npc-img>
    <npc-img :target-npc="npc.LC" direction="left" class="img-pos-lc"></npc-img>
    <npc-img :target-npc="npc.C" direction="left" class="img-pos-c"></npc-img>
    <npc-img :target-npc="npc.RC" direction="right" class="img-pos-rc"></npc-img>
    <npc-img :target-npc="npc.R" direction="right" class="img-pos-r"></npc-img>
  </div>
</template>

<script>
import NpcImg from "../atoms/NpcImg";

import { mapGetters } from "vuex";

export default {
  components: {
    "npc-img": NpcImg
  },
  computed: {
    ...mapGetters({
      npc: "getNpc"
    })
  }
};
</script>

<style scoped>
/* スマホ画面用 */
@media screen and (max-width: 480px) {
  .img-pos-l {
    position: absolute;
    top: 0;
    left: 0;
  }
  .img-pos-lc {
    position: absolute;
    top: 0;
    left: 50px;
  }
  .img-pos-c {
    position: absolute;
    top: 0;
    left: 100px;
  }
  .img-pos-rc {
    position: absolute;
    top: 0;
    left: 150px;
  }
  .img-pos-r {
    position: absolute;
    top: 0;
    left: 200px;
  }
}
/* レティナスマホ用 */
@media screen and (min-width: 480px) and (max-width: 768px) {
  .img-pos-l {
    position: absolute;
    top: 0;
    left: 0;
  }
  .img-pos-lc {
    position: absolute;
    top: 0;
    left: 100px;
  }
  .img-pos-c {
    position: absolute;
    top: 0;
    left: 150px;
  }
  .img-pos-rc {
    position: absolute;
    top: 0;
    left: 200px;
  }
  .img-pos-r {
    position: absolute;
    top: 0;
    left: 250px;
  }
}
/* タブレット用 */
@media screen and (min-width: 768px) and (max-width: 1280px) {
  .img-pos-l {
    position: absolute;
    top: 0;
    left: 0;
  }
  .img-pos-lc {
    position: absolute;
    top: 0;
    left: 150px;
  }
  .img-pos-c {
    position: absolute;
    top: 0;
    left: 300px;
  }
  .img-pos-rc {
    position: absolute;
    top: 0;
    left: 450px;
  }
  .img-pos-r {
    position: absolute;
    top: 0;
    left: 600px;
  }
}
/* PC画面用 */
@media screen and (min-width: 1280px) {
  .img-pos-l {
    position: absolute;
    top: 100px;
    left: -50px;
  }
  .img-pos-lc {
    position: absolute;
    top: 100px;
    left: 100px;
  }
  .img-pos-c {
    position: absolute;
    top: 100px;
    left: 250px;
  }
  .img-pos-rc {
    position: absolute;
    top: 100px;
    left: 400px;
  }
  .img-pos-r {
    position: absolute;
    top: 100px;
    left: 550px;
  }
}
</style>
