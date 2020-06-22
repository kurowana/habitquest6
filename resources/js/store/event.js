const state = {
    //イベント中の進行管理を行うstate
    scene: {
        script: "event1",
        no: 0,
        type: "msg", //msg or talk or select or place
        isEnd: false
    },
    //イベント中の舞台表示を管理するstate
    place: {
        isDisplay: true,
        current: "神殿",
        next: "神殿"
    },
    //イベント中のメッセージ表示を管理するstate
    message: {
        isEnd: false,
        name: " ",
        text: " "
    },
    //イベント中の選択肢処理を管理するstate
    selection: {
        isDisplay: false,
        content: []
    },
    //Npc表示を管理するstate
    npc: {
        L: {
            name: "",
            opacity: 1,
            zIndex: 10,
            motion: "none",
            effect: "none"
        },
        LC: {
            name: "",
            opacity: 1,
            zIndex: 10,
            motion: "none",
            effect: "none"
        },
        C: {
            name: "",
            opacity: 1,
            zIndex: 10,
            motion: "none",
            effect: "none"
        },
        RC: {
            name: "",
            opacity: 1,
            zIndex: 10,
            motion: "none",
            effect: "none"
        },
        R: {
            name: "",
            opacity: 1,
            zIndex: 10,
            motion: "none",
            effect: "none"
        }
    }
};
const getters = {
    getScene: state => {
        return state.scene;
    },
    getPlace: state => {
        return state.place;
    },
    getMessage: state => {
        return state.message;
    },
    getSelection: state => {
        return state.selection;
    },
    getNpc: state => {
        return state.npc;
    }
};
const mutations = {
    //シーン管理変数のSetter
    setSceneScript(state, scriptName) {
        state.scene.script = scriptName;
    },
    setSceneNo(state, sceneNo) {
        state.scene.no = sceneNo;
    },
    setSceneType(state, sceneType) {
        state.scene.type = sceneType;
    },
    setSceneEndFlag(state, boolean) {
        state.scene.isEnd = boolean;
    },
    //舞台管理変数のSetter
    setPlacecDisplayFlag(state, boolean) {
        state.place.isDisplay = boolean;
    },
    setCurrentPlace(state, placeName) {
        state.place.current = placeName;
    },
    setNextPlace(state, placeName) {
        state.place.next = placeName;
    },
    //メッセージ管理変数のSetter
    setMessageEndFlag(state, boolean) {
        state.message.isMessageEnd = boolean;
    },
    setMessageName(state, name) {
        state.message.name = name;
    },
    setMessageText(state, text) {
        state.message.text = text;
    },
    //選択肢の表示管理用のSetter
    setSelectionDisplayFlag(state, boolean) {
        state.selection.isDisplay = boolean;
    },
    setSelectionContent(state, selectionList) {
        state.selection.content = selectionList;
    },
    //NPC表示管理用のSetter
    setNpc(state, { name, pos }) {
        state.npc[pos].name = name;
    },
    setNpcOpacity(state, { opacity, pos }) {
        state.npc[pos].opacity = opacity;
    },
    setNpcZIndex(state, { zIndex, pos }) {
        state.npc[pos].zIndex = zIndex;
    },
    setNpcMotion(state, { motion, pos }) {
        state.npc[pos].motion = motion;
    },
    setNpcEffect(state, { effect, pos }) {
        state.npc[pos].effect = effect;
    }
};
const actions = {
    //シーン進行管理
    increaseSceneNo({ state, commit }) {
        commit("setSceneNo", state.scene.no + 1);
        commit("setSceneEndFlag", false);
    },

    changeSceneScript({ commit }, script) {
        commit("setSceneScript", script);
        commit("setSceneNo", 0);
    },

    //イベントタイプに応じた処理の振り分け
    mainEvent({ dispatch }, event) {
        if (event.type) {
            switch (event.type) {
                case "msg":
                    commit("setSceneType", "msg");
                    dispatch("messageEvent", { text: event.content });
                    break;
                case "talk":
                    commit("setSceneType", "talk");
                    dispatch("talkEvent", {
                        text: event.content.text,
                        name: event.content.name,
                        pos: event.content.pos
                    });
                    break;
                case "select":
                    commit("setSceneType", "select");
                    dispatch("selectionEvent", event.content);
                    break;
                case "place":
                    commit("setSceneType", "place");
                    dispatch("placeEvent", {
                        place: event.content.place,
                        text: event.content.text
                    });
                    break;
                default:
                    commit("setSceneType", "none");
                    dispatch("eventStoreError");
                    break;
            }
        }
    },

    //メッセージウィンドウへの文章表示処理
    messageEvent({ state, commit }, text) {
        if (typeof text === "string") {
            commit("setMessageEndFlag", false);
            // 同じ文が続く場合、文の変更および完了イベントが発火しないので対応
            if (state.message.text == text) {
                commit("setMessageText", "");
            }
            commit("setMessageName", "");
            commit("setMessageText", text);
        } else {
            this.eventError();
        }
    },
    completeMessage({ state, commit }) {
        commit("setMessageEndFlag", true);
        if (state.sceneType === "msg" || state.sceneType === "talk") {
            commit("setSceneEndFlag", true);
        }
    },

    // 話し手が存在するメッセージ処理。対象キャラの名前表示、強調表示つき
    talkEvent({ commit, dispatch }, { text, name, pos }) {
        if (typeof name === "string") {
            commit("setMessageEndFlag", false);
            commit("setMessageName", name);
            dispatch("messageEvent", text);
        } else {
            dispatch("eventStoreError");
        }

        this.toBackAllCharacter();
        this.toForwardCharacter(pos);
    },
    //選択肢イベント
    selectEvent({ commit, selection }) {
        commit("setSelectionContent", selection);
        commit("setSelectionDisplayFlag", true);
    },
    doSelectedEvent({ state }, index) {
        state.selection.content[index].event();
        commit("setSelectionDisplayFlag", false);
    },

    //場面変更イベント
    async placeEvent({ dispatch }, { place, text }) {
        await dispatch("changeNextPlace", { place: place, time: 500 });
        await dispatch("changeCurrentPlace", { place: place, time: 500 });
        dispatch("messageEvent", text);
    },

    //NPCの表示制御処理
    changeNpcImg({ commit }, { name, pos }) {
        commit("setNpc", { name, pos });
    },
    resetNpcImg({ state, commit }) {
        for (let k of Object.keys(state.npc)) {
            commit("setNpc", { name: "", pos: k });
            commit("setNpcOpacity", { opacity: 1, pos: k });
            commit("setNpcZIndex", { zIndex: 10, pos: k });
            commit("setNpcMotion", {
                motion: "none",
                position: k
            });
            commit("setNpcEffect", {
                effect: "none",
                pos: k
            });
        }
    },

    changeNpcOpacity({ commit }, { opacity, pos }) {
        commit("setNpcOpacity", {
            opacity: opacity,
            pos: pos
        });
    },
    resetNpcOpacity({ commit }, pos) {
        commit("setNpcOpacity", {
            opacity: 1,
            pos: pos
        });
    },
    resetAllNpcOpacity({ state, dispatch }) {
        for (let k of Object.keys(state.npc)) {
            dispatch("changeNpcOpacity", {
                opacity: 1,
                pos: k
            });
        }
    },
    changeNpcZIndex({ commit }, { zIndex, pos }) {
        commit("setNpcZIndex", {
            zIndex: zIndex,
            pos: pos
        });
    },
    resetNpcZIndex({ commit }, pos) {
        commit("setNpcZIndex", { zIndex: 10, pos: pos });
    },
    resetAllNpcZIndex({ state, dispatch }) {
        for (let k of Object.keys(state.npc)) {
            dispatch("changeZIndex", {
                zIndex: 10,
                position: k
            });
        }
    },
    changeNpcMotion({ commit }, { motion, pos }) {
        commit("setNpcMotion", {
            motion: motion,
            pos: pos
        });
    },
    changeNpcEffect({ commit }, { effect, pos }) {
        commit("setNpcEffect", {
            effect: effect,
            pos: pos
        });
    },
    //Talk処理用の重ね順、不透明度一括処理
    toForwardNpc({ dispatch }, pos) {
        dispatch("changeNpcOpacity", {
            opacity: 1,
            pos: pos
        });
        dispatch("changeNpcZIndex", {
            zIndex: 20,
            pos: pos
        });
        dispatch("changeNpcMotion", {
            motion: "none",
            pos: pos
        });
        dispatch("changeNpcEffect", {
            effect: "none",
            pos: pos
        });
    },
    toForwardAllNpc({ state, dispatch }) {
        for (let k of Object.keys(state.npc)) {
            dispatch("toFowardNpc", k);
        }
    },
    toBackNpc({ dispatch }, pos) {
        dispatch("changeNpcOpacity", {
            opacity: 0.8,
            position: pos
        });
        dispatch("changeNpcZIndex", {
            zIndex: 5,
            position: pos
        });
        dispatch("changeNpcMotion", {
            motion: "none",
            position: pos
        });
        dispatch("changeNpcEffect", {
            effect: "none",
            position: pos
        });
    },
    toBackAllNpc({ state, dispatch }) {
        for (let k of Object.keys(state.npc)) {
            dispatch("toBackNpc", k);
        }
    },

    //メッセージウィンドウの初期化処理
    resetMessage({ commit }) {
        commit("setMessageEndFlag", false);
        commit("setMessageName", "");
        commit("setMessageText", "");
    },

    // 舞台演出関連
    async changePlace({ commit, dispatch }, place) {
        await dispatch("changeNextPlace", { place: place, time: 500 });
        dispatch("changeCurrentPlace", { place: place, time: 0 });
    },
    changeCurrentPlace({ commit }, { place, time }) {
        return new Promise(resolve => {
            setTimeout(() => {
                commit("setCurrentPlace", place);
                commit("setPlaceDisplayFlag", true);
                resolve();
            }, time);
        });
    },
    changeNextPlace({ commit }, { place, time }) {
        return new Promise(resolve => {
            setTimeout(() => {
                commit("setNextPlace", place);
                commit("setPlaceDisplayFlag", false);
                resolve();
            }, time);
        });
    },

    //ストア格納時の制御処理
    eventStoreError() {
        console.log("イベントストアの処理でエラーが発生しました");
    }
};
export default {
    state,
    getters,
    mutations,
    actions
};
