import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Pie3D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Pie3D, FusionTheme);

function graphBuilder(props){

    var array = [];

    props.graphData.forEach((entry)=>{
        const dataModel = {
            label:"",
            value:""
        }
        dataModel.label = entry["Product Name"];
        dataModel.value = entry["Number Of Bugs"];
        array.push(dataModel);
    })

    console.log(array);

  const chartConfigs = {
    type: "pie3d", 
    width: "700", 
    height: "400", 
    dataFormat: "json", 
    dataSource: {
      chart: {
        caption: "Countries With Most Oil Reserves [2017-18]",
        subCaption: "In MMbbl = One Million barrels",
        theme: "fusion",
        startingAngle: "0",
        showPercentValues: "1",
        decimals: "1",
        useDataPlotColorForLabels: "1",
      },
      data: array.slice(0,4)
    }
  };

//   console.log(chartConfigs.dataSource.data);

    return (<ReactFC {...chartConfigs} />);
}

export default graphBuilder;