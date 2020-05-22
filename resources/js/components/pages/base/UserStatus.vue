<template>
    <div>
        <game-menu></game-menu>
        {{ user }}
        <div>振り分けポイント{{ user.status.point }}</div>
        <div>
            <span>STR:{{ user.status.str }}</span>
            <func-button
                :button-text="'＋'"
                @click-event="increaseStatus('str')"
            ></func-button>
            <func-button
                :button-text="'－'"
                @click-event="decreaseStatus('str')"
            ></func-button>
        </div>
        <div>
            <span>AGI:{{ user.status.agi }}</span>
            <func-button
                :button-text="'＋'"
                @click-event="increaseStatus('agi')"
            ></func-button>
            <func-button
                :button-text="'－'"
                @click-event="decreaseStatus('agi')"
            ></func-button>
        </div>
        <div>
            <span>VIT:{{ user.status.vit }}</span>
            <func-button
                :button-text="'＋'"
                @click-event="increaseStatus('vit')"
            ></func-button>
            <func-button
                :button-text="'－'"
                @click-event="decreaseStatus('vit')"
            ></func-button>
        </div>
        <div>
            <span>INT:{{ user.status.int }}</span>
            <func-button
                :button-text="'＋'"
                @click-event="increaseStatus('int')"
            ></func-button>
            <func-button
                :button-text="'－'"
                @click-event="decreaseStatus('int')"
            ></func-button>
        </div>
        <div>
            <span>DEX:{{ user.status.dex }}</span>
            <func-button
                :button-text="'＋'"
                @click-event="increaseStatus('dex')"
            ></func-button>
            <func-button
                :button-text="'－'"
                @click-event="decreaseStatus('dex')"
            ></func-button>
        </div>
        <div>
            <span>LUC:{{ user.status.luc }}</span>
            <func-button
                :button-text="'＋'"
                @click-event="increaseStatus('luc')"
            ></func-button>
            <func-button
                :button-text="'－'"
                @click-event="decreaseStatus('luc')"
            ></func-button>
        </div>
        <func-button
            :button-text="'決定'"
            @click-event="updateMyStatus"
        ></func-button>
    </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

import FuncButton from "../../atoms/FuncButton";

import GameMenu from "../../molecules/GameMenu";

export default {
    components: {
        "game-menu": GameMenu,
        "func-button": FuncButton
    },
    computed: {
        ...mapGetters({
            user: "getUser"
        })
    },
    methods: {
        getMyStatus: function() {
            axios.post("./get_my_status", {}).then(res => {
                this.status = res.data;
                this.$store.commit("setStatus", this.status);
            });
        },
        updateMyStatus: function() {
            axios
                .post("./update_my_status", {
                    status: this.user.status
                })
                .then(res => {
                    this.getMyStatus();
                });
        },
        increaseStatus: function(type) {
            this.$store.commit("increaseStatus", type);
        },
        decreaseStatus: function(type) {
            this.$store.commit("decreaseStatus", type);
        }
    }
};
</script>
