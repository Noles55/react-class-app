import React from "react";
import {Button} from "@material-ui/core";
import PropTypes from 'prop-types';

function HomePage({history}) {

    function handleClick() {
        history.push("/campaigns");
    }

    return (
        <div className="jumbotron">
            <h1>Gloomhaven Campaign Tracker</h1>
            <p>Track the path your party has taken in each of your campaigns!</p>
            <Button variant={"contained"} onClick={handleClick}>
                View Active Campaigns
            </Button>
        </div>
    );
}


HomePage.propTypes = {
    history: PropTypes.object.isRequired
}

export default HomePage;