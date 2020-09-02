import React, {useState} from 'react';
import './app/styles/style.css';
import {SignInComponent, SignOutComponent, UserDetailsComponent, ViewSelectorComponent} from "./app/components";
import {accessToken, channelId, init} from "./util/GoogleApi";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {
    AnalyticsPage,
    CommentsPage,
    HomePage,
    MonetizationPage,
    PlaylistsPage,
    SubtitlesPage,
    VideosPage,
    AuthPage
} from "./app/pages";

export default function App() {
    init().then();
  return (
    <div className="App">
        <BrowserRouter>
            <div className={"header"}>
                {accessToken === undefined || accessToken === "" &&
                    <SignInComponent />
                }
                {accessToken !== undefined && accessToken !== "" &&
                    <SignOutComponent />
                }
                <div className={"userDetailsContainer"}>
                    <UserDetailsComponent />
                </div>
                <ViewSelectorComponent/>
            </div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/videos" component={VideosPage}/>
                <Route exact path="/playlists" component={PlaylistsPage}/>
                <Route exact path="/analytics" component={AnalyticsPage}/>
                <Route exact path="/comments" component={CommentsPage}/>
                <Route exact path="/subtitles" component={SubtitlesPage}/>
                <Route exact path="/monetization" component={MonetizationPage}/>
                <Route exact path="/auth" component={AuthPage} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}
