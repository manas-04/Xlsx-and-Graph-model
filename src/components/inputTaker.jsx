import React from 'react';

function InputBlock(props){
    return <div className="row">
    <div className="col-md-4"></div>
    <div className="col-md-3">
        <input 
          onChange={props.fileHandler}
          className="form-control" 
          type="file" 
          id="input" 
          accept=".xls, .xlsx"   
        />
    </div>
    <div className="col-md-3">
        <button 
          className="btn btn-primary" 
          id="button"
          onClick={props.clickHandler}
        >
          Retrieve Data
        </button>
    </div>
  </div>
}

export default InputBlock;