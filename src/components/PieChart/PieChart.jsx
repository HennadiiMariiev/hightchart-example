import React, { useMemo } from 'react';
import HighchartsReact from 'highcharts-react-official';

const PieChart = ({ options, highcharts }) => {
  const HighchartsComponent = useMemo(
    () => (
      <HighchartsReact highcharts={highcharts} constructorType={'chart'} options={options} style={{ width: '100%' }} />
    ),
    [options, highcharts]
  );

  return <React.Fragment>{HighchartsComponent}</React.Fragment>;
};
export default PieChart;
