import * as types from "./actionTypes";

export function createCharacter(character) {
    return { type: types.CREATE_CHARACTER, character: character};
}

export function saveCharacter(character) {
    return function (dispatch) {
        dispatch(createCharacter(character));
    }
  }