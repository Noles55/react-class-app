import React from "react";
import {PropTypes} from "prop-types";

function DungeonInfo({dungeon}) {

    return (
        dungeon == null ? 
        <div align="center">
            None
        </div>
        :
        <div align="center">
            <h4 align="center">{dungeon.name}</h4>
            <p>Reward: {dungeon.reward}</p>
        </div>
    );
}

DungeonInfo.propTypes = {
    dungeon: PropTypes.object.isRequired
}

export default DungeonInfo;