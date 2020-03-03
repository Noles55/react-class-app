import {handleError, handleResponse} from "./apiUtils";

const baseUrl = "http://localhost:8080/dungeons/";

export function getDungeon(dungeonId) {
    return fetch(baseUrl + dungeonId, { method: "GET" }).then(handleResponse).catch(handleError);
}

export function getDungeons() {
    return fetch(baseUrl, {method: "GET" }).then(handleResponse).catch(handleError);
}

export function deleteDungeon(dungeonId) {
    return fetch(baseUrl + dungeonId, { method: "DELETE" }).then(handleResponse).catch(handleError);
}

export function saveDungeon(dungeon) {
    return fetch(baseUrl + (dungeon.id || ""), {
        method: dungeon.id ? "PUT" : "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(dungeon)
    })
        .then(handleResponse)
        .catch(handleError);
}

export function linkDungeons(parentId, childId) {
    return fetch(baseUrl + parentId + "/child=" + childId, { method: "PUT" })
        .then(handleResponse).catch(handleResponse);
}

export function getParents(dungeonId) {
    return fetch(baseUrl + dungeonId + "/parents", { method: "GET" })
        .then(handleResponse)
        .catch(handleError);
}

export function getChildren(dungeonId) {
    return fetch(baseUrl + dungeonId + "/children", { method: "GET" })
        .then(handleResponse)
        .catch(handleError);
}
