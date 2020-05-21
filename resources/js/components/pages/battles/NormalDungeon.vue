<template>
    <div>
        <battle-event :event-obj="eventObj"></battle-event>
        <timer></timer>
        <text-form></text-form>
    </div>
</template>

<script>
import BattleEvent from "../../templates/BattleEvent";

import Timer from "../../molecules/Timer";
import form from "../../molecules/TextForm";
export default {
    components: {
        "battle-event": BattleEvent,
        timer: Timer,
        "text-form": form
    },
    data: function() {
        return {
            eventObj: [
                // 引数vmは、子コンポーネントのthis
                function(vm) {
                    vm.$_setEvent({
                        type: "msg",
                        content: "ダンジョン"
                    });
                }
            ]
        };
    },
    computed: {},
    methods: {}
};
</script>
