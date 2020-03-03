import {combineReducers} from "redux";
import campaignReducer from "./campaignReducer";
import dungeonReducer from "./dungeonReducer";

const rootReducer = combineReducers( {
    campaigns: campaignReducer,
    dungeons: dungeonReducer
});

export default rootReducer;