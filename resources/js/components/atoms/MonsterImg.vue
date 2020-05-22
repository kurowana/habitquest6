<template>
    <div class="monster-img">
        <img :src="monster.imgPath" class="img-size" />
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    props: {
        monster: {
            type: Object,
            required: true
        }
    },
    data: function() {
        return {
            // モンスターリスト
            monsterList: {}
        };
    },
    components: {}
};
</script>

<style scoped>
.monster-img {
    position: relative;
    z-index: 10;
    text-align: center;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

/* 立ち絵モーション系 */
.motionBase {
    transition: all 0.5s 0s ease;
}

.attack {
    animation: attack 1s ease-in-out 0s 1;
}

@keyframes attack {
    30% {
        transform: scale(0.8) rotate(-5deg);
    }
    50% {
        transform: scale(1.2) rotate(5deg);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
</style>
