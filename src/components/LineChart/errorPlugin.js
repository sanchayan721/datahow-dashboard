import { Chart } from 'chart.js';

const errorBarsPlugin = {
  afterDatasetDraw: function(chart, args, options) {
    const ctx = chart.ctx;
    const datasets = chart.data.datasets;

    ctx.strokeStyle = '#737373';
    
    datasets.forEach((dataset, datasetIndex) => {
      if (dataset.errorBars && Array.isArray(dataset.errorBars)) {
        const meta = chart.getDatasetMeta(datasetIndex);
        const yAxis = chart.scales[meta.yAxisID];

        dataset.errorBars.forEach((error, index) => {
          const point = meta.data[index].getCenterPoint();
          const dataValue = dataset.data[index];

          const plusPixel = yAxis.getPixelForValue(dataValue + error.plus);
          const minusPixel = yAxis.getPixelForValue(dataValue - error.minus);

          ctx.save();
          ctx.beginPath();
          ctx.moveTo(point.x, plusPixel);
          ctx.lineTo(point.x, minusPixel);
          ctx.moveTo(point.x - 5, plusPixel);
          ctx.lineTo(point.x + 5, plusPixel);
          ctx.moveTo(point.x - 5, minusPixel);
          ctx.lineTo(point.x + 5, minusPixel);
          ctx.stroke();
          ctx.restore();
        });
      }
    });
  }
};

Chart.plugins.register(errorBarsPlugin);
