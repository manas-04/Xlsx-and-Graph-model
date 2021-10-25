import React, { useState } from 'react';
import XLSX  from 'xlsx';
import InputBlock from './components/inputTaker';
import CustomizedMenus from './components/chartSelector';
import { Fade } from '@mui/material';

// import GraphBuilder from './components/testGraph';

function App() {

  const [file,setFile] = useState();
  const [data,setData] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [error,setError] = useState(false);
  const [transition,setTransition] = useState(false);

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
          setError(false);
          setTransition(true);
          // document.getElementById("jsonData").innerHTML = JSON.stringify(rowObject,undefined,4);
        })
      }
      fileReader.readAsBinaryString(file);
    }else{
      setError(true);
      setTransition(false);
    } 
  }

  return (
    <div>
      <InputBlock
        fileHandler = {fileHandler}
        clickHandler = {clickHandler}
        error = {error}
        transition = {transition}
      />
      {/* <div className="col-md-12">
        <pre id="jsonData"></pre>
      </div> */}
      {
        submit
        && <Fade in={true} timeout={1000} style={{transitionDelay:"100ms"}}>
          <div style={{marginTop:30,textAlign:"center"}} id="menu">
            <CustomizedMenus fileData={data} />
          </div>
        </Fade>
      }
    </div>
  );
}

export default App;
