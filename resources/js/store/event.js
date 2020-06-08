const state = {
    currentEvent: "event1",
    sceneNo: 0,
    isAdvance: false,
    place: {
        isDisplay: true,
        current: "神殿",
        next: "神殿"
    },
    message: {
        name: " ",
        text: " "
    },
    selection: {
        isDisplay: false,
        content: []
    },
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
    getEventState: state => {
        return {
            currentEvent: state.currentEvent,
            sceneNo: state.sceneNo,
            isAdvance: state.isAdvance
        };
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
    setCurrentEvent(state, eventName) {
        state.currentEvent = eventName;
    },
    setSceneNo(state, sceneNo) {
        state.sceneNo = sceneNo;
    },
    setAdvanceFlag(state, boolean) {
        state.isAdvance = boolean;
    },
    setPlaceFlag(state, boolean) {
        state.place.isDisplay = boolean;
    },
    setCurrentPlace(state, placeName) {
        state.place.current = placeName;
    },
    setNextPlace(state, placeName) {
        state.place.next = placeName;
    },
    setMessageName(state, name) {
        state.message.name = name;
    },
    setMessageText(state, text) {
        state.message.text = text;
    },
    setSelectionFlag(state, boolean) {
        state.selection.isDisplay = boolean;
    },
    setSelectionContent(state, selectionList) {
        state.selection.content = selectionList;
    },
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
    updateCurrentEvent({ commit }, eventName) {
        commit("setCurrentEvent", eventName);
    },
    updateSceneNo({ commit }, sceneNo) {
        commit("setSceneNo", sceneNo);
    },
    updateAdvanceFlag({ commit }, boolean) {
        commit("setAdvanceFlag", boolean);
    },
    updateCurrentPlace({ commit }, placeName) {
        commit("setCurrentPlace", placeName);
    },
    updateNextPlace({ commit }, placeName) {
        commit("setNextPlace", placeName);
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
    updateNpcEffect({ commit }, { effect, effect }) {
        commit("setNpcEffect", { effect, position });
    }
};
