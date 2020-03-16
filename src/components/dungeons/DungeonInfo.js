import React, {useState} from "react";
import {PropTypes} from "prop-types";
import {Button, TextField} from "@material-ui/core"

function DungeonInfo({dungeon}) {

    const [editing, setEditing] = useState(false);
    const [objective, setNewObjective] = useState(dungeon.objective || null)
    const [reward, setNewReward] = useState(dungeon.reward || null)
    const [enemies, setNewEnemies] = useState(dungeon.enemies || null)
    const [boss, setNewBoss] = useState(dungeon.boss || null)
    const [localDungeon, setLocalDungeon] = useState(dungeon)

    const edit = () => {
        setEditing(!editing);
    }
    
    const save = () => {
        let updatedDungeon = {
            name: localDungeon.name,
            objective: objective,
            reward: reward,
            enemies: [...enemies],
            boss: boss
        }

        setLocalDungeon(updatedDungeon)
        setEditing(!editing)
    }

    const handleObjectiveChange = (event) => {
        setNewObjective(event.target.value)
    }

    const handleRewardChange = (event) => {
        setNewReward(event.target.value)
    }

    const handleEnemiesChange = (event) => {
        setNewEnemies(event.target.value)
    }

    const handleBossChange = (event) => {
        setNewBoss(event.target.value)
    }

    return (
        localDungeon.name === null || localDungeon.name === undefined ? 
        <div align="center">
            None
        </div>
        :
        (editing ? 
        <div align="center">
            <h4 align="center">{localDungeon.name}</h4>
            <TextField value={objective} id="standard-basic" label="Objective" margin="dense" onChange={handleObjectiveChange}></TextField>
            <TextField value={reward} id="standard-basic" label="Reward" margin="dense" onChange={handleRewardChange}></TextField>
            <p>Enemies: 
                {localDungeon.enemies.map(enemyName => {
                    return (
                    <div key={enemyName}>
                        {enemyName}
                    </div> 
                    )
                })}
            </p>
            <TextField value={boss} id="standard-basic" label="Boss" margin="dense" onChange={handleBossChange}></TextField>
            <Button style={{"marginLeft":"10px"}} color="primary" variant="contained" size="small" onClick={save}>
                Save
            </Button>
        </div>
        :
        <div align="center">
            <h4 align="center">{localDungeon.name}</h4>
            <p>Objective: {localDungeon.objective}</p>
            <p>Reward: {localDungeon.reward}</p>
            <p>Enemies: 
                {localDungeon.enemies.map(enemyName => {
                    return (
                    <div key={enemyName}>
                        {enemyName}
                    </div> 
                    )
                })}
            </p>
            <p>Boss: {localDungeon.boss}</p>
            <Button style={{"marginLeft":"10px"}} color="primary" variant="contained" size="small" onClick={edit}>
                Edit
            </Button>
        </div>
        )
    );
}

DungeonInfo.propTypes = {
    dungeon: PropTypes.object
}

export default DungeonInfo;