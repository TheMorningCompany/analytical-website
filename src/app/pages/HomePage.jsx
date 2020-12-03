import React, {useState} from 'react';
import {
    AuthComponent,
    CommentActivityComponent,
    LatestVideoPerformanceComponent,
    SubscribersComponent,
    TotalViewsComponent,
    ViewsComponent,
    WatchHoursComponent
} from "../components";
import {
    getChannel, getChannel24H,
    getChannelData,
    getComments,
    getHoursWatched,
    getSubscriberCount,
    getViews
} from "../../util/GoogleApi";

export default function HomePage() {

    const [realtimeViews, setRealtimeViews] = useState();
    const [watchHours, setWatchHours] = useState();
    const [subscribers, setSubscribers] = useState();
    const [totalViews, setTotalViews] = useState();
    const [comments, setComments] = useState();

    getChannel().then(channelStats => {
        getChannelData().then(channelData => {
            if (channelStats === undefined || channelData === undefined) return;
            setWatchHours(getHoursWatched(channelStats));
            setSubscribers(getSubscriberCount(channelStats));
            setTotalViews(getViews(channelStats));
            setComments(getComments(channelStats));
        });
    });

    getChannel24H().then(channelStats => {
        if (channelStats === undefined) return;
        console.log(channelStats);
        setRealtimeViews(getViews(channelStats));
    })

    return (
        <div>
            <AuthComponent />
            <div className={"stats flex-center"}>
                <ViewsComponent views={realtimeViews}/>
                <SubscribersComponent subscribers={subscribers}/>
                <WatchHoursComponent watchHours={watchHours}/>
                <TotalViewsComponent views={totalViews}/>
                <CommentActivityComponent comments={comments}/>
            </div>
            <div className={"summaries flex-center"}>
                <LatestVideoPerformanceComponent />
            </div>
        </div>
    );
}
