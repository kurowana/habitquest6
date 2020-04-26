export default {
    data: function() {
        return {
            $_eventState: {
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
            $_eventPlace: "神殿",
            $_isDisplay: true
        };
    },
    methods: {
        // メッセージ表示関係
        $_setMessage(name, text) {
            this.$data.$_eventState.message.name = name;
            this.$data.$_eventState.message.text = text;
        },

        $_resetMessage() {
            this.$data.$_eventState.message.name = " ";
            this.$data.$_eventState.message.text = " ";
        },
        $_setTalk(name, text) {
            for (let k of Object.keys(this.$data.$_eventState.npc)) {
                if (this.$data.$_eventState.npc[k].name === name) {
                    this.$data.$_eventState.npc[k].opacity = 1;
                    this.$data.$_eventState.npc[k].zIndex = 10;
                    this.$data.$_eventState.message.name = name;
                    this.$data.$_eventState.message.text = text;
                } else {
                    this.$data.$_eventState.npc[k].opacity = 0.8;
                    this.$data.$_eventState.npc[k].zIndex = 5;
                }
            }
        },

        // NPC画像表示系
        $_setNpcImg(name, pos) {
            this.$data.$_eventState.npc[pos].name = name;
        },

        $_resetNpcImg() {
            for (let k of Object.keys(this.$data.$_eventState.npc)) {
                this.$data.$_eventState.npc[k].name = "";
                this.$data.$_eventState.npc[k].opacity = 1;
                this.$data.$_eventState.npc[k].zIndex = 10;
                this.$data.$_eventState.npc[k].motion = "none";
                this.$data.$_eventState.npc[k].effect = 1;
            }
        },
        $_setOpacity(pos, value) {
            this.$data.$_eventState.npc[pos].opacity = value;
        },
        $_resetOpacity(pos) {
            this.$data.$_eventState.npc[pos].opacity = 1;
        },
        $_resetAllOpacitye() {
            for (let k of Object.keys(this.$data.$_eventState.npc)) {
                this.$data.$_eventState.npc[k].opacity = 1;
            }
        },
        $_setZIndex(pos, value) {
            this.$data.$_eventState.npc[pos].zIndex = value;
        },
        $_resetZIndex(pos) {
            this.$data.$_eventState.npc[pos].zIndex = 10;
        },
        $_resetAllZIndex() {
            for (let k of Object.keys(this.$data.$_eventState.npc)) {
                this.$data.$_eventState.npc[k].zIndex = 10;
            }
        },

        // 舞台演出関連
        async $_setEventPlace(place) {
            this.$data.$_isDisplay = false;
            await this.$_sleep(300);
            this.$data.$_eventPlace = place;
            await this.$_sleep(300);
            this.$data.$_isDisplay = true;
        },

        //NPC画像のモーション
        $_setNpcMotion(motion, pos) {
            for (let k of Object.keys(this.$data.$_eventState.npc)) {
                this.$data.$_eventState.npc[k].zIndex = 10;
            }
            this.$data.$_eventState.npc[pos].zIndex = 20;
            this.$data.$_eventState.npc[pos].motion = motion;
        }
    }
};
