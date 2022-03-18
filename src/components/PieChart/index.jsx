import React from 'react';
import Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';

import PieChart from './PieChart';
import { getChartOptions } from './options/options';

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts);
}

export const Pie = ({ title = '', data = [] }) => {
  const chartOptions = getChartOptions(title, 'Info', data);

  return (
    <div className="pieWrapper">
      <PieChart highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};
