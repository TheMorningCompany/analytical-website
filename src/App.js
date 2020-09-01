import React from 'react';
import './app/styles/style.css';
import {
    LatestVideoPerformanceComponent,
    SubscribersComponent,
    UserDetailsComponent,
    ViewsComponent
} from "./app/components";

function App() {
  return (
    <div className="App">
        <div className={"header"}>
            <div className={"userDetailsContainer"}>
                <UserDetailsComponent />
            </div>
        </div>
        <div className={"stats flex-center"}>
          <ViewsComponent />
          <SubscribersComponent />
          <SubscribersComponent />
          <SubscribersComponent />
          <SubscribersComponent />
        </div>
        <div className={"summaries flex-center"}>
            <LatestVideoPerformanceComponent />
        </div>
    </div>
  );
}

export default App;
