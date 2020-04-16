<template>
  <div>
    <img src />
    {{this.targetNpc}}
  </div>
</template>
    
<script>
import { mapGetters } from "vuex";

export default {
  data: function() {
    return {
      // NPCリスト
      npcList: {
        // sphere
        スフィア1: {
          name: "スフィア",
          imgR: "npc001r.jpg",
          imgL: "npc001l.jpg"
        },
        スフィア2: {
          name: "スフィア",
          imgR: "npc001_1.jpg",
          imgL: "npc001_1.jpg"
        },
        // eir
        エイル: {
          name: "エイル",
          imgR: "npc002r.jpg",
          imgL: "npc002l.jpg"
        },
        // vulcan
        ヴァルカン: {
          name: "ヴァルカン",
          imgR: "npc003r.jpg",
          imgL: "npc003l.jpg"
        },
        // fried
        フリート: {
          name: "フリート",
          imgR: "npc004r.jpg",
          imgL: "npc004l.jpg"
        },
        // isaac
        アイザック: {
          name: "アイザック",
          imgR: "npc005r.jpg",
          imgL: "npc005l.jpg"
        },
        // arthur
        アーサー: {
          name: "アーサー",
          imgR: "npc006r.jpg",
          imgL: "npc006l.jpg"
        },
        // zenobia
        ゼノビア: {
          name: "ゼノビア",
          imgR: "npc007r.jpg",
          imgL: "npc007l.jpg"
        },
        // hecatia
        ヘカテア: {
          name: "ヘカテア",
          imgR: "npc008r.jpg",
          imgL: "npc008l.jpg"
        },
        // micha
        ミカ: {
          name: "ミカ",
          imgR: "npc009r.jpg",
          imgL: "npc009l.jpg"
        },
        // luci
        ルシ: {
          name: "ルシ",
          imgR: "npc010r.jpg",
          imgL: "npc010l.jpg"
        },
        // gerbera
        ガーベラ: {
          name: "ガーベラ",
          imgR: "npc011r.jpg",
          imgL: "npc011l.jpg"
        },
        // cattleya
        カトレア: {
          name: "カトレア",
          imgR: "npc012r.jpg",
          imgL: "npc012l.jpg"
        },
        // yanagi
        ヤナギ: {
          name: "ヤナギ",
          imgR: "npc013r.jpg",
          imgL: "npc013l.jpg"
        },
        // al
        アル: {
          name: "アル",
          imgR: "npc014r.jpg",
          imgL: "npc014l.jpg"
        },
        // zelos
        ゼーロス: {
          name: "ゼーロス",
          imgR: "npc015r.jpg",
          imgL: "npc015l.jpg"
        },
        // kratos
        クラトス: {
          name: "クラトス",
          imgR: "npc016r.jpg",
          imgL: "npc016l.jpg"
        },
        // sibyl
        シビュラ: {
          name: "シビュラ",
          imgR: "npc017r.jpg",
          imgL: "npc017l.jpg"
        },
        // wodan
        ウォーダン: {
          name: "ウォーダン",
          imgR: "npc018r.jpg",
          imgL: "npc018l.jpg"
        },
        // ullr
        ウル: {
          name: "ウル",
          imgR: "npc019r.jpg",
          imgL: "npc019l.jpg"
        },
        // ask
        アスク: {
          name: "アスク",
          imgR: "npc020r.jpg",
          imgL: "npc020l.jpg"
        },
        // minerva
        ミナーヴァ: {
          name: "ミナーヴァ",
          imgR: "npc021r.jpg",
          imgL: "npc021l.jpg"
        },
        // nata
        ナタ: {
          name: "ナタ",
          imgR: "npc022r.jpg",
          imgL: "npc022l.jpg"
        }
      }
    };
  },
  props: {
    targetNpc: {
      type: String,
      required: true
    },
    direction: {
      // Right or Left
      type: String,
      required: true
    }
  },
  computed: {
    imgSrc: function() {
      if (this.direction === "right") {
        this.npcList[this.targetNpc].imgR;
      } else {
        this.npcList[this.targetNpc].imgL;
      }
    }
  }
};
</script>

<style scoped></style>