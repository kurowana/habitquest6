export default {
    data: function() {
        return {
            eventState: {
                sceneNo: 0,
                isSceneEnd: false,
                isMessageEnd: false,
                place: {
                    current: "神殿",
                    next: "街",
                    isShow: true
                },
                message: {
                    name: " ",
                    text: " "
                },
                selection: {
                    isShow: false,
                    content: null
                },
                npc: {
                    L: {
                        name: "",
                        opacity: 1,
                        zIndex: 10,
                        motion: "none",
                        effect: "none"
                    },
                    LC: {
                        name: "",
                        opacity: 1,
                        zIndex: 10,
                        motion: "none",
                        effect: "none"
                    },
                    C: {
                        name: "",
                        opacity: 1,
                        zIndex: 10,
                        motion: "none",
                        effect: "none"
                    },
                    RC: {
                        name: "",
                        opacity: 1,
                        zIndex: 10,
                        motion: "none",
                        effect: "none"
                    },
                    R: {
                        name: "",
                        opacity: 1,
                        zIndex: 10,
                        motion: "none",
                        effect: "none"
                    }
                }
            }
        };
    },
    methods: {
        //イベント進行管理
        $_getCurrentEvent() {
            const vm = this;
            this.eventObj[this.eventState.sceneNo](vm);
        },

        $_clickEventViewer() {
            if (this.eventState.isSceneEnd) {
                this.eventState.sceneNo++;
                this.eventState.isSceneEnd = false;
                this.$store.commit("setSe", "クリック.mp3");
            }
        },

        $_changeMessageEndFlag(boolean) {
            this.eventState.isMessageEnd = boolean;
            if (boolean) {
                this.eventState.isSceneEnd = boolean;
            }
        },
        //イベントタイプに応じた処理の振り分け
        $_setEvent(event) {
            if (event.type) {
                switch (event.type) {
                    case "msg":
                        this.$_messageEvent(event.content);
                        break;
                    case "talk":
                        this.$_talkEvent(
                            event.content.text,
                            event.content.name,
                            event.content.pos
                        );
                        break;
                    case "select":
                        this.$_selectEvent(event.content);
                        break;
                    case "place":
                        this.$_changePlaceEvent(
                            event.content.place,
                            event.content.text
                        );
                        break;
                    default:
                        this.$_eventError();
                        break;
                }
            } else {
                this.$_eventError();
            }
        },
        //メッセージウィンドウへの文章表示処理
        $_messageEvent(text) {
            if (typeof text === "string") {
                // 同じ文が続く場合、文の変更および完了イベントが発火しないので対応
                if (this.eventState.message.text == text) {
                    this.eventState.isSceneEnd = true;
                }
                this.eventState.message.text = text;
            } else {
                this.$_eventError();
            }
        },

        // 話し手が存在するメッセージ処理。対象キャラの名前表示、強調表示つき
        $_talkEvent(text, name, pos) {
            this.$_messageEvent(text);
            this.$_setTalkerName(name);
            this.$_toBackAllCharacter();
            this.$_toForwardCharacter(pos);
        },

        $_selectEvent(selection) {
            if (Array.isArray(selection)) {
                this.$set(this.eventState.selection, "content", selection);
                this.eventState.selection.isShow = true;
            }
        },

        async $_changePlaceEvent(place, text) {
            this.$_setPlace(place);
            await this.$_sleep(1000);
            this.$_messageEvent(text);
        },

        // キャラクター画像表示系
        $_setNpcImg(name, pos) {
            this.eventState.npc[pos].name = name;
        },

        $_resetNpcImg() {
            for (let k of Object.keys(this.eventState.npc)) {
                this.eventState.npc[k].name = "";
                this.eventState.npc[k].opacity = 1;
                this.eventState.npc[k].zIndex = 10;
                this.eventState.npc[k].motion = "none";
                this.eventState.npc[k].effect = 1;
            }
        },
        $_setOpacity(pos, value) {
            this.eventState.npc[pos].opacity = value;
        },
        $_resetOpacity(pos) {
            this.eventState.npc[pos].opacity = 1;
        },
        $_resetAllOpacitye() {
            for (let k of Object.keys(this.eventState.npc)) {
                this.eventState.npc[k].opacity = 1;
            }
        },
        $_setZIndex(pos, value) {
            this.eventState.npc[pos].zIndex = value;
        },
        $_resetZIndex(pos) {
            this.eventState.npc[pos].zIndex = 10;
        },
        $_resetAllZIndex() {
            for (let k of Object.keys(this.eventState.npc)) {
                this.eventState.npc[k].zIndex = 10;
            }
        },

        //NPC画像のモーション
        $_setNpcMotion(motion, pos) {
            for (let k of Object.keys(this.eventState.npc)) {
                this.eventState.npc[k].zIndex = 10;
            }
            this.eventState.npc[pos].zIndex = 20;
            this.eventState.npc[pos].motion = motion;
        },

        //NPC画像のエフェクト
        $_setNpcEffect(effect, pos) {
            for (let k of Object.keys(this.eventState.npc)) {
                this.eventState.npc[k].zIndex = 10;
            }
            this.eventState.npc[pos].zIndex = 20;
            this.eventState.npc[pos].effect = effect;
        },

        //Talk処理用の重ね順、不透明度一括処理
        $_toForwardCharacter(pos) {
            if (
                pos === "L" ||
                pos === "LC" ||
                pos === "C" ||
                pos === "RC" ||
                pos === "R"
            ) {
                this.eventState.npc[pos].opacity = 1;
                this.eventState.npc[pos].zIndex = 10;
            } else {
                this.$_eventError();
            }
        },
        $_toForwardAllCharacter() {
            for (let k of Object.keys(this.eventState.npc)) {
                this.eventState.npc[k].opacity = 1;
                this.eventState.npc[k].zIndex = 10;
                this.eventState.npc[k].motion = "none";
                this.eventState.npc[k].effect = "none";
            }
        },
        $_toBackCharacter(pos) {
            if (
                pos === "L" ||
                pos === "LC" ||
                pos === "C" ||
                pos === "RC" ||
                pos === "R"
            ) {
                this.eventState.npc[pos].opacity = 0.8;
                this.eventState.npc[pos].zIndex = 5;
            } else {
                this.$_eventError();
            }
        },
        $_toBackAllCharacter() {
            for (let k of Object.keys(this.eventState.npc)) {
                this.eventState.npc[k].opacity = 0.8;
                this.eventState.npc[k].zIndex = 5;
                this.eventState.npc[k].motion = "none";
                this.eventState.npc[k].effect = "none";
            }
        },

        //メッセージウィンドウの名前欄の表示処理
        $_setTalkerName(name) {
            if (typeof name === "string") {
                this.eventState.message.name = name;
            } else {
                this.$_eventError();
            }
        },

        //メッセージウィンドウの初期化処理
        $_resetMessage() {
            this.eventState.message.name = " ";
            this.eventState.message.text = " ";
        },

        // 舞台演出関連
        async $_setPlace(place) {
            this.eventState.place.next = place;
            this.eventState.place.isShow = false;
            await this.$_sleep(500);
            this.eventState.place.current = place;
            this.eventState.place.isShow = true;
        },

        //イベント処理中に発生したエラーの共通処理
        $_eventError() {
            console.log("不正なイベントデータです");
        }
    }
};
