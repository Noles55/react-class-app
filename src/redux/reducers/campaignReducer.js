import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function campaignReducer(state = initialState.campaigns, action)
{
    switch(action.type) {
        case types.CREATE_CAMPAIGN:
            return [...state, {...action.campaign}];
        default:
            return state;
    }
}
