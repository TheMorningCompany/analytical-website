import {
    getChannel,
    getChannelStats,
    getComments,
    getHoursWatched,
    getSubscriberCount,
    getViews
} from "../../../util/GoogleApi";

export async function getStats() {
    // let channelStats = await getChannelStats();
    let channelStats = await getChannel();
    if (channelStats === undefined) return {};

    return {
        views: getViews(channelStats),
        subscribers: getSubscriberCount(channelStats),
        comments: getComments(channelStats),
        hoursWatched: getHoursWatched(channelStats)
    }
}