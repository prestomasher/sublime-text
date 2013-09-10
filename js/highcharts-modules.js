var HCPieChart = (function() {

  var chart = null;

  return {

    // Returns chart
    getChart: function(conf) {
      // Return any private methods or variables here
      chart = new Highcharts.Chart({
        "chart": conf.chart || {
          "renderTo": conf.container,
          "type": 'pie',
          "marginBottom": 0,
          "marginTop": 0
        },

        "legend": conf.legend || {
            align: 'right',
            verticalAlign: 'top',
            x: 0,
            y: 100
        },

        "title": conf.title || {
          "text": ""
        },

        "xAxis": conf.xAxis || {},
        "yAxis": conf.yAxis || {},

        "credits": conf.credits || {
          "enabled": false
        },

        "plotOptions": conf.plotOptions || {
          "series": {
            "allowPointSelect": true
          },
          "pie": {
            "dataLabels": {
            "distance": -30,
            "color": 'white'
            }
          }
        },

        "series": conf.series || [{}]
      });

      return chart;
    },

    addSeries: function(data) { 
      chart.addSeries(data);
    },

    // Updates chart without redrawing
    updateSeries: function (data) { 
      chart.series[0].setData(data);
    }
  };

});

/**
 * Builds a Highcharts Column chart
 * @return {Highcharts Column} Returns
 */
var HCColumnChart = (function() {

  var chart = null;
  
  return {
    getChart: function(conf) {
      // Return any private methods or variables here
      chart = new Highcharts.Chart({
        "chart": conf.chart || {
        "renderTo": conf.container,
        "type": 'column',
        "margin": [ 50, 50, 80, 60]
        },

        "title": conf.title || {
          "text": ""
        },

        "credits": conf.credits || {
          "enabled": false
        },

        "xAxis": conf.xAxis || {
            "categories": [
                'Tokyo',
                'Jakarta',
                'New York',
                'Seoul'
            ],
            "labels": {
                "rotation": -45,
                "align": 'right',
                "style": {
                    "fontSize": '13px',
                    "fontFamily": 'Verdana, sans-serif'
                }
            }
        },
        "yAxis": conf.yAxis || {
            "min": 0,
            "title": {
                "text": ''
            }
        },
        "legend": conf.legend || {
            "enabled": false
        },
        "tooltip": conf.tooltip || {},
        "series": conf.series || []
      });

      return chart;
    },

    addSeries: function(data) { 
      chart.addSeries(data);
    }
  };

});