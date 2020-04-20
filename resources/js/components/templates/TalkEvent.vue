<template>
    <div>
        <talk-event-unit :event-state="eventState"></talk-event-unit>
        {{ currentEvent }}
        {{ eventState.message.text }}
    </div>
</template>

<script>
import TalkEventUnit from "../organisms/TalkEventUnit";

import eventMixin from "../../mixins/eventMixin";

export default {
    components: {
        "talk-event-unit": TalkEventUnit
    },
    mixins: [eventMixin],
    props: {
        currentEvent: {
            type: Function,
            required: true
        }
    },
    data: function() {
        return {
            eventState: {
                message: {
                    name: "test",
                    text: "aaaaaa"
                },
                npc: {
                    L: {
                        name: "ヤナギ",
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
    mounted: function() {
        this.currentEvent();
    },
    watch: {
        currentEvent: function() {
            this.currentEvent();
        }
    }
};
</script>

<style scoped></style>
