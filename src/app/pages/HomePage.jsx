import React, {Component} from 'react';
import {
    CommentActivityComponent, LatestVideoPerformanceComponent,
    SubscribersComponent,
    TotalViewsComponent,
    ViewsComponent,
    WatchHoursComponent
} from "../components";

export default function HomePage() {
    return (
        <div>
            <div className={"stats flex-center"}>
                <ViewsComponent/>
                <SubscribersComponent/>
                <WatchHoursComponent/>
                <TotalViewsComponent/>
                <CommentActivityComponent/>
            </div>
            <div className={"summaries flex-center"}>
                <LatestVideoPerformanceComponent />
            </div>
        </div>
    );
}