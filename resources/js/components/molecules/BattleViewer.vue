<template>
    <div class="battle-viewer">
        <monster-img :monster="monsterObj"></monster-img>
    </div>
</template>

<script>
import MonsterImg from "../atoms/MonsterImg";

export default {
    components: {
        "monster-img": MonsterImg
    },
    props: {
        monsterObj: {
            type: Object,
            required: true
        }
    }
};
</script>

<style scoped>
.battle-viewer {
}
</style>
