const colors = ['#22C38E', '#F54D4D', '#F38B01', '#55A7F3'];

export const getChartOptions = (title = '', seriesName = '', data = []) => {
  return {
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle',
            },
          },
        },
      ],
    },
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      height: 200,
    },
    exporting: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
    },
    title: {
      text: title,
      useHTML: false,
      enabled: true,
      align: 'left',
      verticalAlign: 'top',
      y: 25,
    },
    subtitle: {
      enabled: false,
    },
    tooltip: {
      distance: 10,
      headerFormat: '<b>{series.name}:</b><br/>',
      pointFormat: '{point.name}: {point.y}',
      borderRadius: 10,
      borderWidth: 2,
      outside: true,
      style: {
        fontSize: '14px',
      },
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },

    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        shadow: false,
        colors: colors,
        startAngle: -230,
        endAngle: 390,
        center: ['50%', '50%'],
        size: '110%',
        dataLabels: {
          enabled: false,
          align: 'center',
          distance: -35,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        type: 'pie',
        innerSize: '55%',
        name: `${seriesName}`,
        data,
        states: {
          hover: {
            halo: {
              size: 0,
            },
          },
        },
        events: {
          click: (e) => e.preventDefault(),
        },
      },
    ],
  };
};
