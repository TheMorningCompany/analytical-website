import React, {useState} from 'react';
import './app/styles/style.css';
import {
    CommentActivityComponent,
    LatestVideoPerformanceComponent, SignInComponent,
    SubscribersComponent,
    TotalViewsComponent,
    UserDetailsComponent,
    ViewsComponent,
    ViewSelectorComponent,
    WatchHoursComponent
} from "./app/components";
import {selectedScreen} from "./app/components/misc/ViewSelectorComponent";
import {init} from "./util/GoogleApi";

export function useForceUpdate() {
    let [value, setState] = useState(true);
    return () => setState(!value);
}

export default function App() {
    init().then();
    let forceUpdate = useForceUpdate();
  return (
    <div className="App">
        <div className={"header"}>
            <SignInComponent />
            <div className={"userDetailsContainer"}>
                <UserDetailsComponent />
            </div>
            <div className={"viewSelectorContainer"} onClick={forceUpdate}>
                <ViewSelectorComponent/>
            </div>
        </div>
        { selectedScreen === 0 &&
            <>
                <div className={"stats flex-center"}>
                    <ViewsComponent />
                    <SubscribersComponent />
                    <WatchHoursComponent />
                    <TotalViewsComponent />
                    <CommentActivityComponent />
                </div>
                <div className={"summaries flex-center"}>
                    <LatestVideoPerformanceComponent />
                </div>
            </>
        }
    </div>
  );
}
