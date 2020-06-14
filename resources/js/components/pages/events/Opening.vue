<template>
  <div>
    <novel-template :event-obj="eventObj" @showImgModal="isShowImgModal = true"></novel-template>
    <!-- キャラクターイメージ選択用のモーダル -->
    <modal-window v-if="isShowImgModal">
      <template v-slot:main>
        <div class="img-container">
          <span v-for="(img, index) in imgList" :key="index">
            <a @click="selectCharImg(index)">
              <img-card :img-path="faceImgDir + img.face" :size="'S'"></img-card>
            </a>
          </span>
        </div>
      </template>
    </modal-window>
    <modal-window v-if="isShowStatusModal">
      <template v-slot:main>
        <p>能力の振り分けを行ってください</p>
        <img :src="standImgDir + imgList[tempCharImg].stand" class="stand-img" />
        <div>
          <div v-for="(value, key) in tempStatus" :key="key">
            {{ key }}:{{ value }}
            <func-button :button-text="'+'" @click-event="upStatus(key)"></func-button>
            <func-button :button-text="'-'" @click-event="downStatus(key)"></func-button>
          </div>
          振り分け可能ポイント:{{ availablePoint }}
        </div>
        <func-button :button-text="'画像選択へ戻る'" @click-event="returnImgModal"></func-button>
        <func-button :button-text="'決定'" @click-event="toConfirmModal"></func-button>
      </template>
    </modal-window>
    <modal-window v-if="isShowConfirmModal">
      <template v-slot:main>
        <img :src="standImgDir + imgList[tempCharImg].stand" class="stand-img" />
        <div v-for="(value, key) in tempStatus" :key="key">{{ key }}:{{ value }}</div>
        <func-button :button-text="'ステータス振り分けへ戻る'" @click-event="returnStatusModal"></func-button>
        <func-button :button-text="'決定'" @click-event="registerChar"></func-button>
      </template>
    </modal-window>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

import NovelTemplate from "../../templates/NovelTemplate";
import ModalWindow from "../../atoms/ModalWindow";
import ImgCard from "../../atoms/ImgCard";
import FuncButton from "../../atoms/FuncButton";

export default {
  components: {
    "novel-template": NovelTemplate,
    "modal-window": ModalWindow,
    "img-card": ImgCard,
    "func-button": FuncButton
  },
  data: function() {
    return {
      tempCharImg: "",
      tempStatus: {
        STR: 10,
        AGI: 10,
        VIT: 10,
        INT: 10,
        DEX: 10,
        LUC: 10
      },
      availablePoint: 5,

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
      this.tempCharImg = type;
      this.isShowImgModal = false;
      this.isShowStatusModal = true;
    },

    upStatus: function(type) {
      if (this.availablePoint > 0) {
        this.tempStatus[type]++;
        this.availablePoint--;
      }
    },
    downStatus: function(type) {
      if (this.availablePoint <= 5 && this.tempStatus[type] >= 11) {
        this.tempStatus[type]--;
        this.availablePoint++;
      }
    },
    registerChar: function() {
      axios
        .post("./insert_my_status", {
          char_img: this.tempCharImg,
          status_obj: this.tempStatus
        })
        .then(res => {});
    },
    toConfirmModal: function() {
      this.isShowStatusModal = false;
      this.isShowConfirmModal = true;
    },
    returnImgModal: function() {
      this.tempCharImg = "";
      this.isShowStatusModal = false;
      this.isShowImgModal = true;
    },
    returnStatusModal: function() {
      for (let k of Object.keys(this.tempStatus)) {
        this.$set(this.tempStatus, k, 10);
      }
      this.availablePoint = 5;
      this.isShowConfirmModal = false;
      this.isShowStatusModal = true;
    }
  }
};
</script>

<style scoped>
.stand-img {
  height: 320px;
}
</style>
