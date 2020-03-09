import * as types from "./actionTypes";

export function createDungeon(dungeon) {
    return { type: types.CREATE_DUNGEON, dungeon: dungeon};
}