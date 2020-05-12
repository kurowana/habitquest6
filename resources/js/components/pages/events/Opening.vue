<template>
    <div>
        <talk-event :event-obj="eventObj" @showImgModal="isShowImgModal = true">
        </talk-event>
        <!-- キャラクターイメージ選択用のモーダル -->
        <modal-window v-if="isShowImgModal">
            <template v-slot:main>
                <div class="img-container">
                    <span v-for="(img, index) in imgList" :key="index">
                        <a @click="selectCharImg(index)">
                            <img-card
                                :img-path="faceImgDir + img.face"
                                :size="'S'"
                            ></img-card>
                        </a>
                    </span>
                </div>
            </template>
        </modal-window>
        <modal-window v-if="isShowStatusModal">
            <template v-slot:main>
                <p>能力の振り分けを行ってください</p>
                <img
                    :src="standImgDir + imgList[selectedCharType].stand"
                    class="stand-img"
                />
                <div>
                    <div>
                        STR:{{ tempStatus.str }}
                        <func-button
                            :button-text="'+'"
                            @click-event="upStatus('str')"
                        ></func-button>
                        <func-button
                            :button-text="'-'"
                            @click-event="downStatus('str')"
                        ></func-button>
                    </div>
                    <div>
                        AGI:{{ tempStatus.agi }}
                        <func-button
                            :button-text="'+'"
                            @click-event="upStatus('agi')"
                        ></func-button>
                        <func-button
                            :button-text="'-'"
                            @click-event="downStatus('agi')"
                        ></func-button>
                    </div>
                    <div>
                        VIT:{{ tempStatus.vit }}
                        <func-button
                            :button-text="'+'"
                            @click-event="upStatus('vit')"
                        ></func-button>
                        <func-button
                            :button-text="'-'"
                            @click-event="downStatus('vit')"
                        ></func-button>
                    </div>
                    <div>
                        INT:{{ tempStatus.int }}
                        <func-button
                            :button-text="'+'"
                            @click-event="upStatus('int')"
                        ></func-button>
                        <func-button
                            :button-text="'-'"
                            @click-event="downStatus('int')"
                        ></func-button>
                    </div>
                    <div>
                        DEX:{{ tempStatus.dex }}
                        <func-button
                            :button-text="'+'"
                            @click-event="upStatus('dex')"
                        ></func-button>
                        <func-button
                            :button-text="'-'"
                            @click-event="downStatus('dex')"
                        ></func-button>
                    </div>
                    <div>
                        LUC:{{ tempStatus.luc }}
                        <func-button
                            :button-text="'+'"
                            @click-event="upStatus('luc')"
                        ></func-button>
                        <func-button
                            :button-text="'-'"
                            @click-event="downStatus('luc')"
                        ></func-button>
                    </div>
                </div>
                <func-button
                    :button-text="'画像選択へ戻る'"
                    @click-event="returnSelectModal"
                ></func-button>
                <func-button
                    :button-text="'決定'"
                    @click-event="goConfirmModal"
                ></func-button>
            </template>
        </modal-window>
        <modal-window v-if="isShowConfirmModal">
            <template v-slot:main>
                <img
                    :src="standImgDir + imgList[selectedCharType].stand"
                    class="stand-img"
                />
                <div v-for="(value, index) in tempStatus" :key="index">
                    {{ index }}:{{ value }}
                </div>
                <func-button
                    :button-text="'決定'"
                    @click-event="registerChar"
                ></func-button>
            </template>
        </modal-window>
    </div>
</template>

<script>
import TalkEvent from "../../templates/TalkEvent";
import ModalWindow from "../../atoms/ModalWindow";
import ImgCard from "../../atoms/ImgCard";
import FuncButton from "../../atoms/FuncButton";

import { mapGetters } from "vuex";

export default {
    components: {
        "talk-event": TalkEvent,
        "modal-window": ModalWindow,
        "img-card": ImgCard,
        "func-button": FuncButton
    },
    data: function() {
        return {
            selectedCharType: "",
            tempStatus: {
                str: 10,
                agi: 10,
                vit: 10,
                int: 10,
                dex: 10,
                luc: 10
            },

            isShowImgModal: false,
            isShowStatusModal: false,
            isShowConfirmModal: false,

            eventObj: [
                // 引数vmは、子コンポーネントのインスタンス
                function(vm) {
                    vm.$_setMessage("ヤナギ", "これはオープニングです");
                    vm.$_setNpcImg("ヤナギ", "L");
                },
                function(vm) {
                    vm.$emit("showImgModal");
                    vm.$_setMessage("ゼノビア", "モーダル表示");
                },
                function(vm) {
                    vm.$emit("modal2");
                    vm.$_setMessage("ゼノビア", "モーダル変更");
                },
                function(vm) {
                    vm.$_setMessage("ゼノビア", "モーダル非表示");
                },
                function(vm) {
                    vm.$_setNpcImg("", "L");
                    vm.$_setTalk("ゼノビア", "トーク関数テスト", "R");
                },
                function(vm) {
                    vm.$_setEventPlace("小屋");
                    vm.$_setTalk("ゼノビア", "トーク関数テスト2", "R");
                },
                function(vm) {
                    vm.$_setTalk("ナタ", "トーク関数テスト、切り替え", "LC");
                    vm.$_resetAllZIndex();
                },
                function(vm) {
                    vm.$_resetAllOpacity();
                },
                function(vm) {
                    vm.$_resetNpcImg();
                    vm.$_resetMessage();
                }
            ]
        };
    },
    computed: {
        ...mapGetters({
            faceImgDir: "getFaceImgDir",
            standImgDir: "getStandImgDir",
            imgList: "getCharImgList"
        })
    },
    mounted: function() {},
    methods: {
        selectCharImg: function(type) {
            this.selectedCharType = type;
            this.isShowImgModal = false;
            this.isShowStatusModal = true;
        },
        returnSelectModal: function() {
            this.selectedCharType = "";
            this.isShowStatusModal = false;
            this.isShowImgModal = true;
        },
        goConfirmModal: function() {
            this.isShowStatusModal = false;
            this.isShowConfirmModal = true;
        },
        upStatus: function(type) {
            this.tempStatus[type]++;
            console.log(type);
            console.log(this.tempStatus["str"]);
        },
        downStatus: function(type) {
            this.tempStatus[type]--;
        },
        registerChar: function() {}
    }
};
</script>

<style scoped>
.stand-img {
    height: 320px;
}
</style>
