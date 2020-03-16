import React, { useState, Fragment, useEffect } from "react";
import PropTypes from 'prop-types';
import CharacterInfo from "../characters/CharacterInfo";
import {Button} from "@material-ui/core"

function CharacterList({campaign}) {
    const [localCharacterList, setLocalCharacterList] = useState(campaign.characters)
    
    const addLocalCharacter = () => {
        setLocalCharacterList([...localCharacterList, null])
    }

    useEffect(() => {
        if (localCharacterList.length === 0) {
            setLocalCharacterList([null]);
        }
    });

    return (
        <Fragment>
            <table>
                <thead>
                    <tr>
                        {localCharacterList.map(character => {
                         return (
                             <th key={character}>
                                <CharacterInfo campaign={campaign} character={character}/>
                             </th>
                            );
                        })}
                        <th>
                            {localCharacterList.length < 4 && 
                                <Button style={{"marginLeft":"10px"}} color="primary" variant="contained" size="small" onClick={addLocalCharacter}>
                                    +
                                </Button>
                            }
                        </th>
                    </tr>
                </thead>
            </table>
        </Fragment>
    )
}

CharacterList.propTypes = {
    campaign: PropTypes.object.isRequired
};

export default CharacterList;