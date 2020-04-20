<template>
    <div>
        オープニング
        <talk-event :current-event="currentEvent"></talk-event>
        <button @click="testFunc">test</button>
    </div>
</template>

<script>
import TalkEvent from "../templates/TalkEvent";

import eventMixin from "../../mixins/eventMixin";

export default {
    components: {
        "talk-event": TalkEvent
    },
    mixins: [eventMixin],
    data: function() {
        return {
            eventObj: [
                function() {
                    this.$_test();
                    this.eventState.message.text =
                        "あいうえおかきくけこ\maaaaaaaa";
                },
                function() {
                    this.$_test();
                    this.eventState.message.name = "名前";
                    this.eventState.message.text =
                        "かきくけこああああああ\nまみまいまい";
                    this.eventState.npc.LC.name = "ナタ";
                }
            ],
            sceneNo: 0
        };
    },
    computed: {
        currentEvent: function() {
            return this.eventObj[this.sceneNo];
        }
    },
    methods: {
        testFunc: function() {
            this.sceneNo++;
        }
    }
};
</script>
