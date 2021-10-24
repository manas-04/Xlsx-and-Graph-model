import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { Button } from '@mui/material';
import PieGraphBuilderByDate from '../graphBuilder/pieGraphBydate';

export default function PieGraphByDateOptions(props) {

  const [value, setValue] = React.useState(null);
  const [renderLineGraph,setRenderLineGraph] = React.useState(false);

  const convertedStartDate = new Date(value);
  var date;
  var month;
  if(convertedStartDate.getDate()<10){
    date = ("0" + convertedStartDate.getDate()); 
  } else {
    date = convertedStartDate.getDate();
  }
  if((convertedStartDate.getMonth() + 1 )<10){
    month = ("0" + (convertedStartDate.getMonth() +1)); 
  } else {
    month = convertedStartDate.getMonth() + 1;
  }
  const shortStartDate = month + "/" + date + "/" + convertedStartDate.getFullYear();

  return (<div style={{paddingTop:20}}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
            label="Select the Date"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
              setRenderLineGraph(false);
            }}
            renderInput={(params) => <TextField {...params} />}
        />
        {console.log(shortStartDate)}
        <Button 
            style={{
              marginLeft:20,
              marginTop:10
            }}
            variant="contained" 
            color="primary"
            type="submit"
            onClick={()=>{
              setRenderLineGraph(true);
            }}
        >
            Submit
        </Button>
        </LocalizationProvider>
        {
          renderLineGraph 
          && <div style={{paddingTop:30}}>
                <PieGraphBuilderByDate 
                    filter={shortStartDate}
                    fileData={props.fileData}
                />
           </div>
        }
    </div>
  );
}
