import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export default function LineGraphByDateOptions(props) {
  const [value, setValue] = React.useState(null);

  return (<div style={{paddingTop:20}}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
            label="Basic example"
            value={value}
            onChange={(newValue) => {
            setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
    </div>
  );
}
