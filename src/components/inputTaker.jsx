import React from 'react';
import { Button } from '@mui/material';

function InputBlock(props){

    return <center style={ props.transition ? {paddingTop:"0"} : {paddingTop:"33vh"} }>
    <p style={{fontSize:20,marginBottom:0,marginTop:10,paddingTop:20}}>
      Upload the file of similar format as of attachment file to get appropriate results.
    </p>
    <div style={{display:'inline-flex',paddingTop:10}}>
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
  {
    props.error
    ?<p style={{fontSize:15,color:"red"}}>
      * Please Upload the file first.
    </p>
    :<p style={{fontSize:15}}>
      * Upload the file and then click on Retrieve Data.
    </p>
  }
  </center>
}

export default InputBlock;