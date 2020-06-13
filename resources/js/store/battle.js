const state = {
    fightingUser: {
        status: {
            hp: 0,
            currentHp: 0,
            mp: 0,
            currentMp: 0,
            atk: 0,
            matk: 0,
            def: 0,
            mdef: 0,
            spd: 0,
            hit: 0,
            avd: 0,
            cri: 0
        }
    },
    fightingMonster: {
        status: {
            hp: 0,
            currentHp: 0,
            mp: 0,
            currentMp: 0,
            atk: 0,
            matk: 0,
            def: 0,
            mdef: 0,
            spd: 0,
            hit: 0,
            avd: 0,
            cri: 0
        }
    }
};
const getters = {
    getBattleUser: state => {
        return state.battleUser;
    },
    getMonster: state => {
        return state.monster;
    }
};
const mutations = {
    setUserStatus(state, status) {
        state.user.battleStatus.hp = status.vit * 10;
        state.user.battleStatus.currentHp = status.vit * 10;
        state.user.battleStatus.mp = status.int * 10;
        state.user.battleStatus.currentMp = status.int * 10;
        state.user.battleStatus.atk = status.str * 3;
        state.user.battleStatus.matk = status.int * 3;
        state.user.battleStatus.def = status.vit * 2;
        state.user.battleStatus.mdef = status.vit + status.int;
        state.user.battleStatus.spd = status.agi * 2;
        state.user.battleStatus.hit =
            100 + Math.ceil(status.agi / 10) + Math.ceil(status.luc / 10);
        state.user.battleStatus.avd =
            100 + Math.ceil(status.agi / 10) + Math.ceil(status.luc / 10);
        state.user.battleStatus.cri = 5 + Math.ceil(status.luc / 10);
    },
    setMonsterStatus(state, status) {
        for (let k of Object.keys(state.battleMonster.status)) {
            state.battleMonster.status[k] = status[k];
        }
    }
};
const actions = {};
