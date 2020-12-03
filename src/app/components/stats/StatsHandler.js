import {
    getBannerUrl,
    getChannel, getChannelData, getChannelDescription, getChannelId, getChannelName,
    getChannelStats, getChannelThumbnail,
    getComments,
    getHoursWatched,
    getSubscriberCount,
    getViews
} from "../../../util/GoogleApi";

export async function getStats() {
    // let channelStats = await getChannelStats();
    let channelStats = await getChannel();
    let channelData = await getChannelData();
    if (channelStats === undefined || channelData === undefined) return {};

    return {
        channelId: getChannelId(channelData),
        channelName: getChannelName(channelData),
        channelDescription: getChannelDescription(channelData),
        //channelProfilePicture: getChannelThumbnail(channelData),
        //channelBannerImage: getBannerUrl(channelData, "bannerMobileExtraHdImageUrl"),
        views: getViews(channelStats),
        subscribers: getSubscriberCount(channelStats),
        comments: getComments(channelStats),
        hoursWatched: getHoursWatched(channelStats),
        rawStats: channelStats,
        rawData: channelData
    }
}
