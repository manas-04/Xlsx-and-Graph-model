import React, { useState } from 'react';
import XLSX  from 'xlsx';
import InputBlock from './components/inputTaker';
import CustomizedMenus from './components/chartSelector';
// import GraphBuilder from './components/testGraph';

function App() {

  const [file,setFile] = useState();
  const [data,setData] = useState([]);
  const [submit, setSubmit] = useState(false);

  function fileHandler(event){
      setFile(event.target.files[0]);
  }

  function clickHandler(){
    if(file){
      const fileReader = new FileReader();
      fileReader.onload = (event)=>{
        const workbook = XLSX.read(event.target.result,{type:"binary"});
        workbook.SheetNames.forEach((sheet)=>{
          const rowObject = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
          setData(rowObject);
          setSubmit(true);
          // document.getElementById("jsonData").innerHTML = JSON.stringify(rowObject,undefined,4);
        })
      }
      fileReader.readAsBinaryString(file);
    } 
  }

  return (
    <div className="container mt-5">
      <InputBlock
        fileHandler = {fileHandler}
        clickHandler = {clickHandler}
      />
      {/* <div className="col-md-12">
        <pre id="jsonData"></pre>
      </div> */}
      {
        submit
        ?<div style={{marginTop:30,textAlign:"center"}}>
          <CustomizedMenus fileData={data}/>
        </div>
        :null
      }
      {/* <GraphBuilder 
        graphData={data}
      /> */}
    </div>
  );
}

export default App;
