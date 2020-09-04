import React, {Component} from 'react';
import {
    AuthComponent,
    CommentActivityComponent, LatestVideoPerformanceComponent,
    SubscribersComponent,
    TotalViewsComponent,
    ViewsComponent,
    WatchHoursComponent
} from "../components";

export default function HomePage() {
    return (
        <div>
            <AuthComponent />
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