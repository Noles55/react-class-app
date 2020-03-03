import initialState from "./initialState";
import {CREATE_DUNGEON_SUCCESS, LOAD_DUNGEONS_SUCCESS} from "../actions/actionTypes";


export default function dungeonReducer(state = initialState.dungeons, action)
{
    switch (action.type) {
        case CREATE_DUNGEON_SUCCESS:
            return [...state, {...action.dungeon}];
        case LOAD_DUNGEONS_SUCCESS:
            return action.dungeons;
        default:
            return state;
    }
}