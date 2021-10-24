import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Pie3D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Pie3D, FusionTheme);

function PieGraphBuilderByDate(props){

    var array = [];

    props.fileData.forEach((entry)=>{
      if(entry["Date"] === props.filter + ";"){
        const dataModel = {
          label:"",
          value:""
        }
        dataModel.label = entry["Product Name"];
        dataModel.value = entry["Number Of Bugs"];
        array.push(dataModel);
      }
    })
    console.log(props.filter + ";");

  const chartConfigs = {
    type: "pie3d", 
    width: "900", 
    height: "400", 
    dataFormat: "json", 
    dataSource: {
      chart: {
        caption: "Bugs Analysis through PieChart",
        // subCaption: "Last week",
        xAxisName: "Date",
        yAxisName: "Number of Bugs",
        lineThickness: "2",
        theme: "candy"
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

export default PieGraphBuilderByDate;