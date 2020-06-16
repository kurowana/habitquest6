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
        return state.eventState;
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
    setPlaceFlag(state, boolean) {
        state.place.isDisplay = boolean;
    },
    setCurrentPlace(state, placeName) {
        state.place.current = placeName;
    },
    setNextPlace(state, placeName) {
        state.place.next = placeName;
    },
    //メッセージ管理変数のSetter
    setMessageFlag(state, boolean) {
        state.message.isMessageEnd = boolean;
    },
    setMessageName(state, name) {
        state.message.name = name;
    },
    setMessageText(state, text) {
        state.message.text = text;
    },
    //選択肢の表示管理用のSetter
    setSelectionFlag(state, boolean) {
        state.selection.isDisplay = boolean;
    },
    setSelectionContent(state, selectionList) {
        state.selection.content = selectionList;
    },
    //NPC表示管理用のSetter
    setNpc(state, { name, position }) {
        state.npc[position].name = name;
    },
    setNpcOpacity(state, { opacity, position }) {
        state.npc[position].opacity = opacity;
    },
    setNpcZIndex(state, { zIndex, position }) {
        state.npc[position].zIndex = zIndex;
    },
    setNpcMotion(state, { motion, position }) {
        state.npc[position].motion = motion;
    },
    setNpcEffect(state, { effect, position }) {
        state.npc[position].effect = effect;
    }
};
const actions = {
    updateNextScene({ state, commit }, type) {
        commit("setSceneNo", state.scene.no + 1);
        commit("setSceneType", type);
    },
    updateSceneScript({ commit }, script) {
        commit("setSceneScript", script);
        commit("setSceneNo", 0);
    },

    updateEvent({ dispatch }, event) {
        if (event.type) {
            switch (event.type) {
                case "msg":
                    dispatch("messageEvent", { text: event.content });
                    break;
                case "talk":
                    dispatch("talkEvent", {
                        text: event.content.text,
                        name: event.content.name,
                        pos: event.content.pos
                    });
                    break;
                case "select":
                    dispatch("selectionEvent", event.content);
                    break;
                case "place":
                    dispatch("placeEvent", {
                        place: event.content.place,
                        text: event.content.text
                    });
                    break;
                default:
                    dispatch("eventStoreError");
                    break;
            }
        }
    },

    eventStoreError() {
        console.log("イベントストアの処理でエラーが発生しました");
    },

    //旧処理
    updateCurrentEvent({ commit }, eventName) {
        commit("setCurrentEvent", eventName);
    },
    updateSceneNo({ commit }, sceneNo) {
        commit("setSceneNo", sceneNo);
    },
    updateSceneFlag({ commit }, boolean) {
        commit("setSceneFlag", boolean);
    },
    updatePlaceFlag({ commit }, boolean) {
        commit("setPlaceFlag", boolean);
    },
    updateCurrentPlace({ commit }, placeName) {
        commit("setCurrentPlace", placeName);
    },
    updateNextPlace({ commit }, placeName) {
        commit("setNextPlace", placeName);
    },
    updateMessageFlag({ commit }, boolean) {
        commit("setMessageFlag", boolean);
    },
    updateMessage({ commit }, { name, text }) {
        commit("setMessageName", name);
        commit("setMessageText", text);
    },
    updateSelectionFlag({ commit }, boolean) {
        commit("setSelectionFlag", boolean);
    },
    updateSelectionContent({ commit }, selectionList) {
        commit("setSelectionContent", selectionList);
    },
    updateNpc({ commit }, { name, position }) {
        commit("setNpc", { name, position });
    },
    updateNpcOpacity({ commit }, { opacity, position }) {
        commit("setNpcOpacity", { opacity, position });
    },
    updateNpcZIndex({ commit }, { zIndex, position }) {
        commit("setNpcZIndex", { zIndex, position });
    },
    updateNpcMotion({ commit }, { motion, position }) {
        commit("setNpcMotion", { motion, position });
    },
    updateNpcEffect({ commit }, { effect, position }) {
        commit("setNpcEffect", { effect, position });
    }
};
export default {
    state,
    getters,
    mutations,
    actions
};
