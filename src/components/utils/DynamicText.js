import React, {useState, Fragment, useEffect} from "react";
import PropTypes from 'prop-types';
import { TextField } from "@material-ui/core";

function DynamicText ({defaultValue, onSubmit}) {
    const [active, setActive] = useState(false)
    const [value, setValue] = useState(defaultValue)
    
    useEffect(() => {
        //Bind handle click to UseEffect???
    })

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const handleClick = (event) => {
        
        setActive(this.node.contains(event.target))
    }

    const onSubmitOverride = (event) => {
        event.preventDefault()
        onSubmit()
    }
    return (
        <Fragment>
            active ?
            <form onSubmit={onSubmitOverride}>
                    <TextField value={value} id="standard-basic" onChange={onChange}/>
            </form>
            :
            {value}
        </Fragment>
    );
}

export default DynamicText