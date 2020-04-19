<template>
    <div>
        オープニング
        <talk-event></talk-event>
    </div>
</template>

<script>
import TalkEvent from "../templates/TalkEvent";

export default {
    components: {
        "talk-event": TalkEvent
    },
    data: function() {
        return {
            eventObj: [() => {}, () => {}]
        };
    }
};
</script>
