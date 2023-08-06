import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import EngagementHelper from './EngagementHelper';

const EngagementMessagesOverTime = ({ channels, messageCountList }) => {

    /* gets the filtered channels based on our condition  */
    const filteringChannels = channels.filter((channel) => {
        return messageCountList.some(
            (messageCount) => messageCount.channelId === channel.value && messageCount.count > 1
        );
    });

    const options = EngagementHelper.engagementMessageOverTimeChartOptions(
        messageCountList,
        filteringChannels
    );

    return (
        <> <HighchartsReact highcharts={Highcharts} options={options} /></>
    )
}

export default EngagementMessagesOverTime 