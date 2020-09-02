import {getChannelStats, getSubscriberCount, getViews} from "../../../util/GoogleApi";

export async function getStats() {
    let channelStats = await getChannelStats();
    return {
        views: getViews(channelStats),
        subscribers: getSubscriberCount(channelStats)
    }
}