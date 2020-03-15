import * as types from "./actionTypes";

export function createCampaign(campaign) {
    return { type: types.CREATE_CAMPAIGN, campaign: campaign};
}

export function saveCampaign(campaign) {
  return function (dispatch) {
      dispatch(createCampaign(campaign));
  }
}

export function addCharacter(campaign, character) {
  return {type: types.ADD_CHARACTER, campaign: campaign, character: character}
}

export function addNewCharacter(campaign, character) {
  return function (dispatch) {
    dispatch(addCharacter(campaign, character));
  }
}