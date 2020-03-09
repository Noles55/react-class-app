import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function dungeonReducer(state = initialState.dungeons, action)
{
    switch (action.type) {
        case types.CREATE_DUNGEON:
            return [...state, {...action.dungeon}];
        default:
            return state;
    }
}