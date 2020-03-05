import React, {useEffect} from "react";
import {PropTypes} from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as campaignActions from '../../redux/actions/campaignActions'
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";
import DungeonInfo from "./DungeonInfo";

function DungeonPage({campaign, dungeon, actions}) {
   
    useEffect(() => {
      console.log(campaign);
      console.log(dungeon);
    });

    if (campaign === undefined || campaign === null)
        return <p>Loading....</p>;

    return (
        <div>
            <h2 style={{"padding":"10px"}}>
                {campaign.partyName}
            </h2>
            <Grid container spacing={2} style={{"padding":"10px"}}>
                <Grid item xs={3}>
                    <Paper style={{"background":"gray"}}>
                        <h5 align="center">Links From</h5>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper style={{"background":"gray"}}>
                        <h4 align="center">{dungeon.name}</h4>
                        <DungeonInfo dungeon={dungeon}/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper style={{"background":"gray"}}>
                        <h5 align="center">Links To</h5>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

DungeonPage.propTypes = {
    dungeon: PropTypes.object,
    campaign: PropTypes.object,
    actions: PropTypes.object.isRequired
}


function mapStateToProps(state, ownProps) {

    const partySlug = ownProps.match.params.partyName;
    //const dungeonSlug = ownProps.match.params.dungeonName;

    let currentCampaign = state.campaigns.find((campaign) => (campaign.partyName === partySlug));

    if (currentCampaign === undefined)
        currentCampaign = null;

    let dungeon = null;
    if (currentCampaign !== null)
        dungeon = currentCampaign.currentDungeon;

    return {
        campaign: currentCampaign,
        dungeon: dungeon
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...campaignActions}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DungeonPage);
