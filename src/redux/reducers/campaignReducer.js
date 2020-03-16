import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function campaignReducer(state = initialState.campaigns, action)
{
    switch(action.type) {
        case types.CREATE_CAMPAIGN:
            return [...state, {...action.campaign}];
        case types.ADD_CHARACTER:
            var localState = state;
            for (var campaign in localState) {
                if (campaign.partyName === action.campaign.partyName) {
                    campaign.characters.push(action.character);
                }
            }
            return localState;
        default:
            return state;
    }
}
