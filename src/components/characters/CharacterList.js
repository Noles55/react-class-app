import React from "react";
import PropTypes from 'prop-types';
import * as campaignActions from "../../redux/actions/campaignActions";
import * as characterActions from "../../redux/actions/characterActions";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import CharacterInfo from "../characters/CharacterInfo";

function CharacterList({campaign, actions}) {

    return (
        <div>
            <CharacterInfo/>
        </div>
    )
}

function addCharacter() {
    console.log("Adding Character");
}

CharacterList.propTypes = {
    campaign: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...campaignActions, ...characterActions}, dispatch)
    }
}

export default connect(mapDispatchToProps)(CharacterList);