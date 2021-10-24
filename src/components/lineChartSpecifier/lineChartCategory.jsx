import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import LineGraphOptions from "./lineOptions";
import LineGraphByDateOptions from "./graphByDateOptions";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right"
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        "& .MuiMenu-list": {
        padding: "4px 0"
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5)
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        )
      }
    }
  }
}));

export default function CustomizedMenus(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [product,setProduct] = React.useState(false);
  const [date,setDate] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }
  const lineGraphhandler = () => {
    setAnchorEl(null);
    setProduct(false);
    setDate(true);
  };
  const dateGraphHandler = () => {
    setAnchorEl(null);
    setProduct(true);
    setDate(false);
  }
  // console.log(props.fileData);

  return (
    <div>
        <div>
            <Button
                id="demo-customized-button"
                aria-controls="demo-customized-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                style={{width:550,marginTop:30}}
            >
                Please select the type of line graph you want to see.
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                "aria-labelledby": "demo-customized-button"
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem style={{ width: "550px" }} onClick={lineGraphhandler} disableRipple>
                  Line Graph of all the bugs on a Particular Date.
                </MenuItem>
                <MenuItem onClick={dateGraphHandler} disableRipple>
                  Line Graph of a particular product over the entire period of time.
                </MenuItem>
            </StyledMenu>
        </div>
        <div>
            {
                date
                ?<LineGraphByDateOptions fileData={props.fileData}/>
                :null
            }
            {
                product
                ?<LineGraphOptions fileData={props.fileData}/>
                :null
            }
        </div>
    </div>
  );
}
