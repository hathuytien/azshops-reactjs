import {Box, Grid, List, ListItemButton, ListItemText, TextField} from "@mui/material"
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux"
import { saveMaster, updateNewMaster, welcome } from "../../store/manageLanguage/action";
import MasterTableItem from "./MasterTableItem";
import { useState } from "react";

function MasterTable() {
  const languageMaster = useSelector((state) => state.languageReducer.listMaster)
  const dispatch = useDispatch()
  
  const newItem = useSelector((state) => state.languageReducer.newMaster)
  const [isAddNew, setIsAddNew] = useState(false);

  useEffect(() => {
    console.log('init');
    dispatch(welcome());
  }, [dispatch]);

  let renderItem = (item, index) => {
    return <MasterTableItem data={item} key={index}/>
  }

  // ------------------ EVENT ------------------
  const handleContentChange = (event) => {
    dispatch(updateNewMaster({ ...newItem, content: event.target.value }));
  }
  
  const handleKeyChange = (event) => {
    dispatch(updateNewMaster({ ...newItem, key: event.target.value }));
  }
  
  const handleSaveClick = () => {
    dispatch(saveMaster()).then((rs)=>{
      if (rs) {
        console.log(rs)
        setIsAddNew(false);
      }
    });
  };

  const renderItemNew = (item, index) => {
    if (isAddNew) {
      return <ListItemButton key={index}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <TextField
              onChange={handleContentChange}
              sx={{ width: '100%' }}
              id="outlined-basic"
              required
              label="Content"
              // placeholder="aaa"
              variant="standard" />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="standard-select-currency"
              label="key"
              required
              onChange={handleKeyChange}
              variant="standard"
              sx={{ width: '100%' }}
            >
            </TextField>
          </Grid>
          <Grid item xs={4}>
            <Grid container
              justifyContent="flex-end">
              <Box>
                <IconButton>
                  <SaveIcon onClick={(event) => handleSaveClick(event)} />
                </IconButton>
                <IconButton>
                  <ClearIcon onClick={() => { setIsAddNew(false) }} />
                </IconButton>
              </Box>
            </Grid >
          </Grid>
        </Grid>
      </ListItemButton>
    } else {
      return <ListItemButton key={index} >
        <IconButton>
          <AddIcon onClick={(event) => { setIsAddNew(true) }} />
        </IconButton>
        <ListItemText primary="Thêm mới" />
      </ListItemButton>
    }
  }

  const renderListItem = () =>{

    let container = [];
    container.push(renderItemNew({}, -1))
    if(languageMaster && languageMaster.length > 0) {
      languageMaster.forEach((val, indx) => {
        container.push(renderItem(val, indx))
      });
    }
    return container;
  }
  return (
    <Box sx={{ bgcolor: 'background.default' }} style={{maxHeight: '100%', overflow: 'auto'}}>
      {/* <Grid container
        justifyContent="flex-end">
        <Box>
          <IconButton aria-label="delete">
            <ControlPointIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Box>
      </Grid > */}
      <List component="nav" sx={{ width: '100%', height: '100%', bgcolor: 'background.paper' }}>
        {renderListItem()}
      </List>
    </Box>
  )
}
export default MasterTable
