<template>
    <div>
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
