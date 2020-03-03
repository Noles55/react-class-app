import { handleError, handleResponse } from "./apiUtils";
const baseUrl = "http://localhost:8080/campaigns/";

export function getCampaigns() {
    return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveCampaign(campaign) {
    return fetch(baseUrl + (campaign.id || ""), {
        method: campaign.id ? "PUT" : "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(campaign)
    }).then(handleResponse).catch(handleError);
}

export function deleteCampaign(campaignId) {
    return fetch(baseUrl + campaignId, { method: "DELETE" })
        .then(handleResponse)
        .catch(handleError);
}

export function getCampaign(campaignId) {
    return fetch(baseUrl + campaignId, { method: "GET" })
        .then(handleResponse)
        .catch(handleError);
}

export function setCurrentDungeon(campaignId, dungeonId) {
    return fetch(baseUrl + campaignId + "/currentDungeon=" + dungeonId, { method: "PUT" })
        .then(handleResponse)
        .catch(handleError);
}
