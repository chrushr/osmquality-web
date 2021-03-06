import React from 'react';

const PieChartLegend = props => {
  const legendData = props.legendData;
  const roadTagPercentage = legendData.roadTag * 100;
  const roadRelationPercentage = legendData.roadRelation * 100;
  const roadConnectionPercentage = legendData.roadConnections * 100;
  const roundaboutPercentage = legendData.roundabout * 100;
  return (
    <div className='my-legend'>
      <div className='legend-title'>The Title or Explanation of your Map</div>
      <div className='legend-scale'>
        <ul className='legend-labels'>
          <li><span style={{ background: '#E4BC43' }}/><p>Road Tags ({roadTagPercentage.toFixed(0)}%)</p></li>
          <li><span style={{ background: '#F26522' }}/><p>Road Relations ({roadRelationPercentage.toFixed(0)}%)</p></li>
          <li><span style={{ background: '#676766' }}/><p>Roundabouts ({roundaboutPercentage.toFixed(0)}%)</p></li>
          <li><span style={{ background: '#47ACB1' }}/><p>Road Connections ({roadConnectionPercentage.toFixed(0)}%)</p></li>
        </ul>
      </div>
    </div>
  );
};

export default PieChartLegend;