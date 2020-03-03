import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function campaignReducer(state = initialState.campaigns, action)
{
    switch(action.type) {
        case types.CREATE_CAMPAIGN:
            return [...state, {...action.campaign}];
        case types.LOAD_CAMPAIGNS_SUCCESS:
            return action.campaigns;
        case types.UPDATE_CAMPAIGN_SUCCESS:
            return state.map((campaign) => (campaign.id === action.campaign.id ? action.campaign : campaign))
        default:
            return state;

    }
}
