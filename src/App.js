import React, { useState } from 'react';
import XLSX  from 'xlsx';
import GraphBuilder from './components/testGraph';
import InputBlock from './components/inputTaker';
import CustomizedMenus from './components/chartSelector';

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
        const data = event.target.result;
        const workbook = XLSX.read(data,{type:"binary"});
        workbook.SheetNames.forEach((sheet)=>{
          const rowObject = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
          setData(rowObject);
          setSubmit(true);
          // document.getElementById("jsonData").innerHTML = JSON.stringify(rowObject,undefined,4);
          // if(rowObject){
          //   setShowData(true);
          // }
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
          <CustomizedMenus />
        </div>
        :null
      }
    </div>
  );
}

export default App;
