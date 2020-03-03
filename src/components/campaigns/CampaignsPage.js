import React, {useEffect, useState} from "react";
import {bindActionCreators} from "redux";
import * as campaignActions from "../../redux/actions/campaignActions";
import * as dungeonActions from "../../redux/actions/dungeonActions";
import CampaignList from "./CampaignList";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {TextField} from "@material-ui/core";

function CampaignsPage({campaigns, dungeons, actions, history}) {
    const [addCampaignValue, setAddCampaignValue] = useState("");

    useEffect( () => {
        if (campaigns.length === 0) {
            console.log("Loading campaigns");
            actions.loadCampaigns();
        }

        if (dungeons.length === 0) {
            console.log("Loading dungeons");
            actions.loadDungeons();
        }
    });

    const handleNewCampaign = (event) => {
        event.preventDefault();

        console.log(dungeons.size);

        // Cant find black barrow in dungeons list
        const newDungeon = dungeons.find(dungeon => dungeon.name === "The Black Barrow") || {
            name: "The Black Barrow",
            reward: "None"
        };

        actions.saveCampaign({"partyName":addCampaignValue, "currentDungeon":newDungeon }).then(() => {
            setAddCampaignValue("");
            history.push("/campaign/" + addCampaignValue + "/The Black Barrow");
        }).catch(error => {});
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