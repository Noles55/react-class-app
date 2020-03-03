import * as dungeonApi from "../../api/dungeonApi";
import * as types from "./actionTypes";
export function createDungeonSuccess(dungeon) {
    return { type: types.CREATE_DUNGEON_SUCCESS, dungeon: dungeon};
}

export function loadDungeonsSuccess(dungeons) {
    return { type: types.LOAD_DUNGEONS_SUCCESS, dungeons: dungeons };
}


export function saveDungeon(dungeon) {
    return function(dispatch) {
        return dungeonApi.saveDungeon(dungeon).then(
            savedDungeon => dispatch(createDungeonSuccess(savedDungeon))
        ).catch(error => {
            alert("Error saving dungeon " + error);
            throw(error);
        })
    }
}

export function loadDungeons() {
    return function(dispatch) {
        return dungeonApi.getDungeons().then(
            dungeons => dispatch(loadDungeonsSuccess(dungeons))
        ).catch(error => {
            alert("Error loading dungeons " + error);
            throw(error);
        })
    }
}