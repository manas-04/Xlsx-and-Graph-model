import React from 'react';
import { Button,Input } from '@mui/material';

function InputBlock(props){
    return <center>
    <div style={{display:'inline-flex',paddingTop:30}}>
    <Button
      variant="contained"
      component="label"
    >
      Upload File
      <input
        type="file"
        onChange={props.fileHandler}
        id="input" 
        accept=".xls, .xlsx"  
        hidden
      />
    </Button>
    <div style={{paddingLeft:20}}>
        <Button
          id="button"
          variant="contained"
          onClick={props.clickHandler}
        >
          Retrieve Data
        </Button>
    </div>
  </div>
  <p style={{fontSize:15,color:"green"}}>
    * Please Upload the file and then click on Retrieve Data.
  </p>
  </center>
}

export default InputBlock;