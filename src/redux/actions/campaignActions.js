import * as types from "./actionTypes";

export function createCampaign(campaign) {
    return { type: types.CREATE_CAMPAIGN_SUCCESS, campaign: campaign};
}

export function updateCampaign(campaign) {
    return { type: types.UPDATE_CAMPAIGN_SUCCESS, campaign: campaign};
}

export function saveCampaign(campaign) {
  return function (dispatch) {
      dispatch(createCampaign(campaign));
  }
}