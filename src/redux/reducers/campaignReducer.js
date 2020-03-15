import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function campaignReducer(state = initialState.campaigns, action)
{
    switch(action.type) {
        case types.CREATE_CAMPAIGN:
            return [...state, {...action.campaign}];
        case types.ADD_CHARACTER:
            return state.map((campaign) => {
                if (campaign.partyName === action.campaign.partyName) {
                    return [...campaign.characters, action.character]
                }
                return campaign;
            });
        default:
            return state;
    }
}
