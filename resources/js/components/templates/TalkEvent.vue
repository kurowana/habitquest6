<template>
    <div @click="clickEventViewer">
        <talk-event-unit :event-state="$data.$_eventState"></talk-event-unit>
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
        eventObj: {
            type: Array,
            required: true
        }
    },
    data: function() {
        return {
            sceneNo: 0
        };
    },
    mounted: function() {
        this.currentEvent();
    },
    watch: {
        sceneNo: function() {
            this.currentEvent();
        }
    },
    methods: {
        clickEventViewer: function() {
            this.sceneNo++;
        },
        currentEvent: function() {
            const vm = this;
            this.eventObj[this.sceneNo](vm);
        }
    }
};
</script>

<style scoped></style>
