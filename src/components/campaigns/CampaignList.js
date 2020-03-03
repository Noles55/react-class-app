import React from 'react';
import PropTypes from "prop-types";
import {Button} from "@material-ui/core";

function CampaignList ({campaigns, history}) {

    const handleViewCampaign = (partyName, dungeonName) => {
        history.push("campaign/" + partyName + "/" + dungeonName);
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Party Name</th>
                    <th>Current Dungeon</th>
                    <th/>
                </tr>
            </thead>
            <tbody>
            {campaigns.map(campaign => {

                const dungeonName = campaign.currentDungeon ? campaign.currentDungeon.name : "" ;

                return (
                    <tr key={campaign.partyName}>
                        <td>
                            {campaign.partyName}
                        </td>
                        <td>
                            {dungeonName}
                        </td>
                        <td>
                            <Button fullWidth color="primary" variant="contained" onClick={() => handleViewCampaign(campaign.partyName, dungeonName)}>
                                View
                            </Button>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
}

CampaignList.propTypes = {
    campaigns: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired,
};

export default CampaignList;