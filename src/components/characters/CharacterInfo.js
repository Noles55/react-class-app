import React, {useState, Fragment} from "react";
import PropTypes from 'prop-types';
import {TextField} from "@material-ui/core"
import * as campaignActions from "../../redux/actions/campaignActions";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

function CharacterInfo({campaign, character, actions}) {

    const [newCharacterValue, setCharacterValue] = useState("")


    const handleNewCharacter = (event) => {
        event.preventDefault();
        var localCharacter = {}
        localCharacter.name = newCharacterValue

        console.log(localCharacter.name);
        
        actions.addNewCharacter(campaign, localCharacter)
    }

    const handleNewCharacterChange = (event) => {
        setCharacterValue(event.target.value)
    }

    return (
        <Fragment>
            {character == null ? 
                <form style={{"padding":"10px"}} onSubmit={handleNewCharacter}>
                    <TextField value={newCharacterValue} id="standard-basic" label="New Character" margin="dense" onChange={handleNewCharacterChange}/>
                </form>
            :
                character.name
            }   
        </Fragment>
    )
}

CharacterInfo.propTypes = {
    campaign: PropTypes.object.isRequired,
    character: PropTypes.object,
    actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...campaignActions}, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(CharacterInfo)