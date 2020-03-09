import * as types from "./actionTypes";

export function createCampaign(campaign) {
    return { type: types.CREATE_CAMPAIGN, campaign: campaign};
}

export function saveCampaign(campaign) {
  return function (dispatch) {
      dispatch(createCampaign(campaign));
  }
}