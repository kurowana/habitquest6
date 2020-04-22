<template>
    <div>
        <transition name="fade">
            <div v-if="this.targetNpc.name">
                <img
                    :src="this.imgSrc"
                    class="npc-img img-size"
                    :style="{ opacity: imgOpacity, zIndex: imgZIndex }"
                />
            </div>
        </transition>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    props: {
        targetNpc: {
            type: Object,
            required: true
        },
        direction: {
            // Right or Left
            type: String,
            required: true
        }
    },
    data: function() {
        return {
            // NPCリスト
            npcList: {
                // sphere
                スフィア1: {
                    name: "スフィア",
                    imgR: "npc001r.png",
                    imgL: "npc001l.png"
                },
                スフィア2: {
                    name: "スフィア",
                    imgR: "npc001_1.png",
                    imgL: "npc001_1.png"
                },
                // eir
                エイル: {
                    name: "エイル",
                    imgR: "npc002r.png",
                    imgL: "npc002l.png"
                },
                // vulcan
                ヴァルカン: {
                    name: "ヴァルカン",
                    imgR: "npc003r.png",
                    imgL: "npc003l.png"
                },
                // fried
                フリート: {
                    name: "フリート",
                    imgR: "npc004r.png",
                    imgL: "npc004l.png"
                },
                // isaac
                アイザック: {
                    name: "アイザック",
                    imgR: "npc005r.png",
                    imgL: "npc005l.png"
                },
                // arthur
                アーサー: {
                    name: "アーサー",
                    imgR: "npc006r.png",
                    imgL: "npc006l.png"
                },
                // zenobia
                ゼノビア: {
                    name: "ゼノビア",
                    imgR: "npc007r.png",
                    imgL: "npc007l.png"
                },
                // hecatia
                ヘカテア: {
                    name: "ヘカテア",
                    imgR: "npc008r.png",
                    imgL: "npc008l.png"
                },
                // micha
                ミカ: {
                    name: "ミカ",
                    imgR: "npc009r.png",
                    imgL: "npc009l.png"
                },
                // luci
                ルシ: {
                    name: "ルシ",
                    imgR: "npc010r.png",
                    imgL: "npc010l.png"
                },
                // gerbera
                ガーベラ: {
                    name: "ガーベラ",
                    imgR: "npc011r.png",
                    imgL: "npc011l.png"
                },
                // cattleya
                カトレア: {
                    name: "カトレア",
                    imgR: "npc012r.png",
                    imgL: "npc012l.png"
                },
                // yanagi
                ヤナギ: {
                    name: "ヤナギ",
                    imgR: "npc013r.png",
                    imgL: "npc013l.png"
                },
                // al
                アル: {
                    name: "アル",
                    imgR: "npc014r.png",
                    imgL: "npc014l.png"
                },
                // zelos
                ゼーロス: {
                    name: "ゼーロス",
                    imgR: "npc015r.png",
                    imgL: "npc015l.png"
                },
                // kratos
                クラトス: {
                    name: "クラトス",
                    imgR: "npc016r.png",
                    imgL: "npc016l.png"
                },
                // sibyl
                シビュラ: {
                    name: "シビュラ",
                    imgR: "npc017r.png",
                    imgL: "npc017l.png"
                },
                // wodan
                ウォーダン: {
                    name: "ウォーダン",
                    imgR: "npc018r.png",
                    imgL: "npc018l.png"
                },
                // ullr
                ウル: {
                    name: "ウル",
                    imgR: "npc019r.png",
                    imgL: "npc019l.png"
                },
                // ask
                アスク: {
                    name: "アスク",
                    imgR: "npc020r.png",
                    imgL: "npc020l.png"
                },
                // minerva
                ミナーヴァ: {
                    name: "ミナーヴァ",
                    imgR: "npc021r.png",
                    imgL: "npc021l.png"
                },
                // nata
                ナタ: {
                    name: "ナタ",
                    imgR: "npc022r.png",
                    imgL: "npc022l.png"
                }
            }
        };
    },
    computed: {
        ...mapGetters({
            windowWidth: "getWindowWidth",
            windowHeight: "getWindowHeight"
        }),
        // 指定されたNPC名を元に画像パスを返す
        imgSrc: function() {
            let imgPath = "";
            if (!this.npcList[this.targetNpc.name]) {
                return "images/clear.png";
            }
            if (this.direction === "right") {
                this.imgPath = this.npcList[this.targetNpc.name].imgR;
            } else {
                this.imgPath = this.npcList[this.targetNpc.name].imgL;
            }
            return "images/npc/" + this.imgPath;
        },
        //画像の透過率、重なり順を返す
        imgOpacity: function() {
            return this.targetNpc.opacity;
        },
        imgZIndex: function() {
            return this.targetNpc.zIndex;
        }
    }
};
</script>

<style scoped>
.npc-img {
    position: relative;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

/* スマホ画面用 */
@media screen and (max-width: 480px) {
    .img-size {
        width: 150px;
        height: 200px;
    }
}
/* レティナスマホ用 */
@media screen and (min-width: 480px) and (max-width: 768px) {
    .img-size {
        width: 150px;
        height: 200px;
    }
}
/* タブレット用 */
@media screen and (min-width: 768px) and (max-width: 1280px) {
    .img-size {
        width: 300px;
        height: 400px;
    }
}
/* PC画面用 */
@media screen and (min-width: 1280px) {
    .img-size {
        width: 300px;
        height: 400px;
    }
}
</style>
