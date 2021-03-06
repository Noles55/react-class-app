import React from 'react';
import {Switch, Route} from "react-router-dom";
import HomePage from "./home/HomePage";
import CampaignsPage from "./campaigns/CampaignsPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import DungeonPage from "./dungeons/DungeonPage";

export default function App() {
    return (
        <div className="container-fluid">
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/campaigns" component={CampaignsPage}/>
                <Route path="/campaign/:partyName/:dungeonName" component={DungeonPage}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    )
}

