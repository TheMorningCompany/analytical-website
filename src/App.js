import React, {useState} from 'react';
import './app/styles/style.css';
import {
    LatestVideoPerformanceComponent,
    SubscribersComponent,
    UserDetailsComponent,
    ViewsComponent,
    WatchHoursComponent,
    TotalViewsComponent,
    CommentActivityComponent, ViewSelectorComponent
} from "./app/components";
import {selectedScreen} from "./app/components/misc/ViewSelectorComponent";

export function useForceUpdate() {
    let [value, setState] = useState(true);
    return () => setState(!value);
}

export default function App() {
    let forceUpdate = useForceUpdate();
  return (
    <div className="App">
        <div className={"header"}>
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
