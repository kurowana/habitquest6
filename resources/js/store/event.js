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
        content: " "
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
const getters = {};
const mutations = {
    setCurrentEvent(state, eventName) {
        state.currentEvent = eventName;
    },
    setSceneNo(state, int) {
        state.sceneNo = int;
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
    setMessageContent(state, text) {
        state.message.content = text;
    },
    setSelectionFlag(state, boolean) {
        state.selection.isDisplay = boolean;
    },
    setSelectionContent(state, selectionList) {
        state.selection.content = selectionList;
    }
};
const actions = {};
