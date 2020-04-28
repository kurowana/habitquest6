export default {
    data: function() {
        return {
            eventState: {
                message: {
                    name: " ",
                    text: " "
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
            },
            eventPlace: "神殿",
            sceneNo: 0,
            isSceneEnd: false,
            isMessageEnd: false,
            isDisplay: true
        };
    },
    methods: {
        // メッセージ表示関係
        $_setMessage(name, text) {
            this.eventState.message.name = name;
            this.eventState.message.text = text;
        },

        $_resetMessage() {
            this.eventState.message.name = " ";
            this.eventState.message.text = " ";
        },
        $_setTalk(name, text) {
            for (let k of Object.keys(this.eventState.npc)) {
                if (this.eventState.npc[k].name === name) {
                    this.eventState.npc[k].opacity = 1;
                    this.eventState.npc[k].zIndex = 10;
                    this.eventState.message.name = name;
                    this.eventState.message.text = text;
                } else {
                    this.eventState.npc[k].opacity = 0.8;
                    this.eventState.npc[k].zIndex = 5;
                }
            }
        },

        // NPC画像表示系
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

        // 舞台演出関連
        async $_setEventPlace(place) {
            this.isDisplay = false;
            await this.$_sleep(300);
            this.eventPlace = place;
            await this.$_sleep(300);
            this.isDisplay = true;
        },

        //NPC画像のモーション
        $_setNpcMotion(motion, pos) {
            for (let k of Object.keys(this.eventState.npc)) {
                this.eventState.npc[k].zIndex = 10;
            }
            this.eventState.npc[pos].zIndex = 20;
            this.eventState.npc[pos].motion = motion;
        },

        //イベント進行管理
        $_clickEventViewer() {
            if (this.isSceneEnd) {
                this.sceneNo++;
                this.isSceneEnd = false;
            }
        },

        $_changeMessageEndFlag(boolean) {
            this.isMessageEnd = boolean;
            if (boolean) {
                this.isSceneEnd = boolean;
            }
        }
    }
};
