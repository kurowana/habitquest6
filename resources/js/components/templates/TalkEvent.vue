<template>
    <div>
        <game-menu></game-menu>
        {{ $data.$_isDisplay }}
        <div @click="clickEventViewer">
            <talk-event-unit
                :event-state="$data.$_eventState"
                :event-place="$data.$_eventPlace"
            ></talk-event-unit>
        </div>
    </div>
</template>

<script>
import TalkEventUnit from "../organisms/TalkEventUnit";
import GameMenu from "../molecules/GameMenu";

import baseMixin from "../../mixins/baseMixin";
import eventMixin from "../../mixins/eventMixin";

export default {
    components: {
        "talk-event-unit": TalkEventUnit,
        "game-menu": GameMenu
    },
    mixins: [baseMixin, eventMixin],
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
        this.getCurrentEvent();
    },
    watch: {
        sceneNo: function() {
            this.getCurrentEvent();
        }
    },
    methods: {
        clickEventViewer: function() {
            this.sceneNo++;
        },
        getCurrentEvent: function() {
            const vm = this;
            this.eventObj[this.sceneNo](vm);
        }
    }
};
</script>

<style scoped></style>
