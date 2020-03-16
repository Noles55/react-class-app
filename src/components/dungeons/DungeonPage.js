import React, {useEffect} from "react";
import {PropTypes} from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as campaignActions from '../../redux/actions/campaignActions';
import * as dungeonActions from '../../redux/actions/dungeonActions';
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";
import DungeonInfo from "./DungeonInfo";
import CharacterList from "../characters/CharacterList";

function DungeonPage({campaign, dungeon, actions}) {
    
    useEffect(() => {
        actions.createDungeon(dungeon);
    })

    return (
        <div>
            <h2>
                {campaign.partyName}
            </h2>
            <CharacterList campaign={campaign}/>
            <Grid container spacing={2} style={{"padding":"10px"}}>
                <Grid item xs={3}>
                    <Paper style={{"padding":"10px"}} variant="elevation" elevation={3}>
                        <h5 align="center">Links From</h5>
                        <DungeonInfo dungeon={dungeon.prev}/>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper style={{"padding":"10px"}} variant="elevation" elevation={3}>
                        
                        <DungeonInfo dungeon={dungeon}/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper style={{"padding":"10px"}} variant="elevation" elevation={3}>
                        <h5 align="center">Links To</h5>
                        <DungeonInfo dungeon={dungeon.next}/>
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
        actions: bindActionCreators({...dungeonActions, ...campaignActions}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DungeonPage);
