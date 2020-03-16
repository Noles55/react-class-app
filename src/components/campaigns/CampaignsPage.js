import React, {useEffect, useState, Fragment} from "react";
import {bindActionCreators} from "redux";
import * as campaignActions from "../../redux/actions/campaignActions";
import * as dungeonActions from "../../redux/actions/dungeonActions";
import CampaignList from "./CampaignList";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {TextField} from "@material-ui/core";

function CampaignsPage({campaigns, dungeons, actions, history}) {
    const [addCampaignValue, setAddCampaignValue] = useState("");

    const handleNewCampaign = (event) => {
        event.preventDefault();

        const nextDungeon = {
            name: "The Barrow Lair",
            reward: "20g, item",
            objective: "Kill all revealed enemies and the scenario boss",
            enemies: ["Bandit Archer", "Bandit Guard", "Living Bones"],
            boss: "Yes",
            prev: "The Black Barrow",
            next: null,
        }

        // Cant find black barrow in dungeons list
        const newDungeon = dungeons.find(dungeon => dungeon.name === "The Black Barrow") || {
            name: "The Black Barrow",
            objective: "Kill all enemies",
            reward: "10g",
            enemies: ["Bandit Archer", "Bandit Guard", "Living Bones"],
            boss: "No",
            next: nextDungeon.name,
            prev: null
        };


        actions.createCampaign({"partyName":addCampaignValue, "currentDungeon":newDungeon, "characters": []})
        actions.createDungeon(newDungeon);
        actions.createDungeon(nextDungeon);
        setAddCampaignValue("");
        history.push("/campaign/" + addCampaignValue + "/" + newDungeon.name);
    };

    const handleChangeNewCampaign = (event) => {
        setAddCampaignValue(event.target.value);
    };

    return (
        <div>
            <h2 style={{"padding":"10px", "float":"left"}}>Active Campaigns</h2>
            <form onSubmit={handleNewCampaign}>
                <TextField value={addCampaignValue} variant="outlined" style={{"float":"right"}} label="Start a New Party" onChange={handleChangeNewCampaign}/>
            </form>
            <CampaignList campaigns={campaigns} history={history}/>
        </div>
    );
}

CampaignsPage.propTypes = {
    campaigns: PropTypes.array,
    dungeons: PropTypes.array,
    actions: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        campaigns: state.campaigns,
        dungeons: state.dungeons
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...campaignActions, ...dungeonActions}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignsPage);