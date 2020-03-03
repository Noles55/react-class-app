import React from "react";
import {PropTypes} from "prop-types";

function DungeonInfo({dungeon}) {

    return (
        <div align="center">
            <p>Reward: {dungeon.reward}</p>
        </div>
    );
}

DungeonInfo.propTypes = {
    dungeon: PropTypes.object.isRequired
}

export default DungeonInfo;