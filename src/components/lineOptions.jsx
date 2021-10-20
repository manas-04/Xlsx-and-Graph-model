import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function LineGraphOptions(){    
    return <div style={{paddingTop:30}}>
        <Box
            component="form"
            sx={{
                "& > :not(style)": { m: 1, width: "25ch" }
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="outlined-basic" label="Enter the Product Name" variant="standard" />
        </Box>
    </div>
}

export default LineGraphOptions;