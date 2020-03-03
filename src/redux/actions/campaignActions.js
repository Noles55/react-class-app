import * as campaignApi from "../../api/campaignApi";
import * as types from "./actionTypes";

export function loadCampaignsSuccess(campaigns) {
    return { type: types.LOAD_CAMPAIGNS_SUCCESS, campaigns: campaigns};
}

export function createCampaignSuccess(campaign) {
    return { type: types.CREATE_CAMPAIGN_SUCCESS, campaign: campaign};
}

export function updateCampaignSuccess(campaign) {
    return { type: types.UPDATE_CAMPAIGN_SUCCESS, campaign: campaign};
}

export function saveCampaign(campaign) {
  return function (dispatch) {
      return campaignApi.saveCampaign(campaign)
          .then(savedCampaign => {
              dispatch(createCampaignSuccess(savedCampaign));
          }).catch(error => {
              alert("Saving campaign failed " + error);
              throw(error);
          })
  }
}

export function loadCampaigns() {
    return function(dispatch) {
        return campaignApi.getCampaigns().then(campaigns => {
            dispatch(loadCampaignsSuccess(campaigns))
        }).catch(error => {
            alert("Loading campaigns failed " + error);
            throw(error);
        })
    }
}

export function updateCampaign(campaign) {
    return function(dispatch) {
        return campaignApi.saveCampaign(campaign).then(campaign => {
            dispatch(updateCampaignSuccess(campaign))
        }).catch(error => {
            alert("Updating campaign failed " + error);
            throw(error);
        })
    }
}