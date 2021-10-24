import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Line2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Line2D, FusionTheme);

function LineGraphBuilder(props){

    var array = [];

    props.fileData.forEach((entry)=>{
      if(entry["Product Name"] === props.filter + ";"){
        const dataModel = {
          label:"",
          value:""
        }
        dataModel.label = entry["Date"];
        dataModel.value = entry["Number Of Bugs"];
        array.push(dataModel);
      }
    })
    console.log(props.filter + ";");

  const chartConfigs = {
    type: "line", 
    width: "1000", 
    height: "400", 
    dataFormat: "json", 
    dataSource: {
      chart: {
        caption: "Bugs Analysis",
        // subCaption: "Last week",
        xAxisName: "Bugs Over the course of time",
        yAxisName: "Number of Bugs",
        lineThickness: "2",
        theme: "fusion"
      },
      data: array,
    }
  };
//   console.log(chartConfigs.dataSource.data);
    return (
      <div>
         <ReactFC {...chartConfigs} />
      </div>
    );
}

export default LineGraphBuilder;