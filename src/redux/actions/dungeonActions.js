import * as types from "./actionTypes";
export function createDungeon(dungeon) {
    return { type: types.CREATE_DUNGEON_SUCCESS, dungeon: dungeon};
}

export function loadDungeons(dungeons) {
    return { type: types.LOAD_DUNGEONS_SUCCESS, dungeons: dungeons };
}