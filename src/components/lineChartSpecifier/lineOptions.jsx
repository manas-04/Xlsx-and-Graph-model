import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import _ from "lodash";

import styles from "./components.module.css";
import LineGraphBuilder from "../graphBuilder/lineGraphBuilder";

function LineGraphOptions(props){    

    const [filter,setFilter] = useState();
    const [showGraph,setShowGraph] = useState(false);

    function inputHandler(event){
        setFilter(_.startCase(_.toLower(event.target.value)));
        setShowGraph(false);
    }

    function submitHandler(event){
        event.preventDefault();
        if(filter){
            setShowGraph(true);
        }
    }

    return <div style={{paddingTop:30}}>
        <Box
            component="form"
            onSubmit={submitHandler}
            sx={{
                "& > :not(style)": { m: 1, width: "25ch" }
            }}
            noValidate
            autoComplete="off"
            >
            <TextField 
                id="outlined-basic" 
                label="Enter the Product Name" 
                variant="standard"     
                onChange={inputHandler}
                // value={filter}
            />
            <Button 
                variant="contained" 
                color="primary"
                type="submit"
            >
                Submit
            </Button>
        </Box>
        <p className={styles.warningp}>
        {/* {console.log(props.fileData)} */}
            * This is a prototype, please enter the same product name (without semi-colon) mentioned in the file whose graph you want to see.
        </p>
        {
            showGraph
            ?<LineGraphBuilder 
                fileData={props.fileData}
                filter={filter}   
            />
            :null
        }
    </div>
}

export default LineGraphOptions;