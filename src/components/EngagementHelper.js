const EngagementHelper = {
    engagementMessageOverTimeChartOptions: (messageCountList, channels) => {
        const seriesData = channels.map((channel) => {
            const messageCounts = messageCountList.filter(
                (messageCount) => messageCount.channelId === channel.value
            );

            return {
                name: channel.label,
                data: messageCounts.map((messageCount) => [
                    Date.parse(messageCount.timeBucket),
                    parseInt(messageCount.count),
                ]),
            };
        });

        return {
            chart: {
                type: "line",
            },
            title: {
                text: "Engagement Messages Over Time",
            },
            xAxis: {
                type: "datetime",
                title: {
                    text: "Date",
                },
            },
            yAxis: {
                title: {
                    text: "Message Count",
                },
            },
            series: seriesData,
        };
    },
};

export default EngagementHelper;
