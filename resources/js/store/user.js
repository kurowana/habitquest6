const state = {
    // ユーザーのログイン情報、ステータスの保存
    user: {
        id: "",
        name: "",
        status: {
            lv: 0,
            point: 0,
            stage: 0,
            str: 0,
            agi: 0,
            vit: 0,
            int: 0,
            dex: 0,
            luc: 0
        },
        battleStatus: {
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
        },
        checkStatus: {
            lv: 0,
            point: 0,
            stage: 0,
            str: 0,
            agi: 0,
            vit: 0,
            int: 0,
            dex: 0,
            luc: 0
        }
    },
    //ユーザーイメージに使うキャラ画像のリスト
    charFaceImgDir: "images/player_face/",
    charStandImgDir: "images/player_stand/",
    charImgList: {
        P001: {
            face: "f001.png",
            stand: "p001.png"
        },
        P002: {
            face: "f002.png",
            stand: "p002.png"
        },
        P003: {
            face: "f003.png",
            stand: "p003.png"
        },
        P004: {
            face: "f004.png",
            stand: "p004.png"
        },
        P005: {
            face: "f005.png",
            stand: "p005.png"
        },
        P006: {
            face: "f006.png",
            stand: "p006.png"
        },
        P007: {
            face: "f007.png",
            stand: "p007.png"
        },
        P008: {
            face: "f008.png",
            stand: "p008.png"
        },
        P009: {
            face: "f009.png",
            stand: "p009.png"
        },
        P010: {
            face: "f010.png",
            stand: "p010.png"
        },
        P011: {
            face: "f011.png",
            stand: "p011.png"
        },
        P012: {
            face: "f012.png",
            stand: "p012.png"
        },
        P013: {
            face: "f013.png",
            stand: "p013.png"
        },
        P014: {
            face: "f014.png",
            stand: "p014.png"
        },
        P015: {
            face: "f015.png",
            stand: "p015.png"
        },
        P016: {
            face: "f016.png",
            stand: "p016.png"
        },
        P017: {
            face: "f017.png",
            stand: "p017.png"
        },
        P018: {
            face: "f018.png",
            stand: "p018.png"
        },
        P019: {
            face: "f019.png",
            stand: "p019.png"
        },
        P020: {
            face: "f020.png",
            stand: "p020.png"
        },
        P021: {
            face: "f021.png",
            stand: "p021.png"
        },
        P022: {
            face: "f022.png",
            stand: "p022.png"
        },
        P023: {
            face: "f023.png",
            stand: "p023.png"
        },
        P024: {
            face: "f024.png",
            stand: "p024.png"
        },
        P025: {
            face: "f025.png",
            stand: "p025.png"
        },
        P026: {
            face: "f026.png",
            stand: "p026.png"
        },
        P027: {
            face: "f027.png",
            stand: "p027.png"
        },
        P028: {
            face: "f028.png",
            stand: "p028.png"
        },
        P029: {
            face: "f029.png",
            stand: "p029.png"
        },
        P030: {
            face: "f030.png",
            stand: "p030.png"
        }
    }
};
const getters = {
    getUser: state => {
        return state.user;
    },
    getFaceImgDir: state => {
        return state.charFaceImgDir;
    },
    getStandImgDir: state => {
        return state.charStandImgDir;
    },
    getCharImgList: state => {
        return state.charImgList;
    }
};
const mutations = {
    setUser(state, user) {
        state.user.id = user.id;
        state.user.name = user.name;
    },
    setStatus(state, status) {
        for (let k of Object.keys(state.user.status)) {
            state.user.status[k] = status[k];
        }
        for (let k of Object.keys(state.user.checkStatus)) {
            state.user.checkStatus[k] = status[k];
        }
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
    increaseStatus(state, type) {
        if (state.user.status.point > 0) {
            state.user.status[type]++;
            state.user.status.point--;
        }
    },
    decreaseStatus(state, type) {
        if (state.user.status[type] > state.user.checkStatus[type]) {
            state.user.status[type]--;
            state.user.status.point++;
        }
    }
};
export default {
    state,
    getters,
    mutations
};
