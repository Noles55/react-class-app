import React from "react";
import PropTypes from 'prop-types';
import * as campaignActions from "../../redux/actions/campaignActions";
import * as characterActions from "../../redux/actions/characterActions";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {Button} from "@material-ui/core";

function CharactersPage({campaign, actions}) {


    return (
        <div>
            <h2 style={{"padding":"10px"}}>
                {campaign.partyName}
            </h2>
            <Button style={{"padding":"10px"}} onClick={addCharacter}>
                New Party Member +
            </Button>
        </div>
    )
}

function addCharacter() {
    console.log("Adding Character");
}

CharactersPage.propTypes = {
    campaign: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {

    const partySlug = ownProps.match.params.partyName;
    //const dungeonSlug = ownProps.match.params.dungeonName;

    let currentCampaign = state.campaigns.find((campaign) => (campaign.partyName === partySlug));

    if (currentCampaign === undefined)
        currentCampaign = null;

    return {
        campaign: currentCampaign
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...campaignActions, ...characterActions}, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CharactersPage);