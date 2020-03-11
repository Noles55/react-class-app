import React, {useState} from "react";
import PropTypes from 'prop-types';
import {Button, TextField} from "@material-ui/core"

function CharacterInfo({character}) {

    const [inputActive, setInputActive] = useState(false)
    const [newCharacterValue, setCharacterValue] = useState("")


    const handleNewCharacter = (event) => {
        event.preventDefault()
       // Use Redux

    }

    const handleNewCharacterChange = (event) => {
        setCharacterValue(event.target.value)
    }

    const addCharacter = () => {
        setInputActive(true)
    }

    return (
        <h5 style={{"padding":"10px", "white-space":"nowrap"}}>Party Members: 
            {inputActive ? 
                //This will be replaced by DynamicTextField??
                <form onSubmit={handleNewCharacter}>
                    <TextField value={newCharacterValue} id="standard-basic" label="New Character" margin="dense" onChange={handleNewCharacterChange}/>
                </form>
            :
                <Button style={{"marginLeft":"10px"}} color="primary" variant="contained" size="small" onClick={addCharacter}>
                    +
                </Button>}
        </h5>

    )
}

CharacterInfo.propTypes = {
   character: PropTypes.object.isRequired
};

export default CharacterInfo