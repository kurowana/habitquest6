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
            }
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
        }
    }
};
