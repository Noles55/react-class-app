import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function campaignReducer(state = initialState.characters, action)
{
    switch(action.type) {
        case types.CREATE_CHARACTER:
            return [...state, {...action.character}];
        default:
            return state;
    }
}
