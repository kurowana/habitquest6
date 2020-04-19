<template>
    <div>
        <talk-event-unit></talk-event-unit>
    </div>
</template>

<script>
import TalkEventUnit from "../organisms/TalkEventUnit";

export default {
    components: {
        "talk-event-unit": TalkEventUnit
    },
    data: function() {
        return {
            eventState: {
                message: {
                    name: "",
                    text: ""
                },
                npc: {
                    charL: {
                        name: "",
                        opacity: 1,
                        zIndex: 10,
                        motion: "none",
                        effect: "none"
                    },
                    charLC: {
                        name: "",
                        opacity: 1,
                        zIndex: 10,
                        motion: "none",
                        effect: "none"
                    },
                    charC: {
                        name: "",
                        opacity: 1,
                        zIndex: 10,
                        motion: "none",
                        effect: "none"
                    },
                    charRC: {
                        name: "",
                        opacity: 1,
                        zIndex: 10,
                        motion: "none",
                        effect: "none"
                    },
                    charR: {
                        name: "",
                        opacity: 1,
                        zIndex: 10,
                        motion: "none",
                        effect: "none"
                    }
                }
            }
        };
    }
};
</script>

<style scoped></style>
