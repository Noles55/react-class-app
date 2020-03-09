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
        console.log(campaigns)
        console.log(dungeons)
    });

    const handleNewCampaign = (event) => {
        event.preventDefault();

        // Cant find black barrow in dungeons list
        const newDungeon = dungeons.find(dungeon => dungeon.name === "The Black Barrow") || {
            name: "The Black Barrow",
            reward: "None"
        };

        actions.createCampaign({"partyName":addCampaignValue, "currentDungeon":newDungeon })
        setAddCampaignValue("");
        history.push("/campaign/" + addCampaignValue + "/characters");
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