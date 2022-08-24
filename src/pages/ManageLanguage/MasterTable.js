import {Box, Grid, List, ListItemButton, ListItemText} from "@mui/material"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux"
import { getDetail, setSelectedMaster, welcome } from "../../store/manageLanguage/action";

function MasterTable() {
  const languageMaster = useSelector((state) => state.languageReducer.listMaster)
  const dispatch = useDispatch()
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  useEffect(() => {
    console.log('init');
    dispatch(welcome());
  }, [dispatch]);

  const handleListItemClick = (event, item) => {
    setSelectedIndex(item.id);
    dispatch(getDetail(item.key));
    dispatch(setSelectedMaster(item));
  };

  let renderItem = (item, index) => {
    return <ListItemButton key={index} selected={selectedIndex === item.id} onClick={(event) => handleListItemClick(event, item)}>
      <ListItemText primary={item.content} secondary={item.key} />
    </ListItemButton>
  }

  const renderListItem = () =>{
    if(languageMaster && languageMaster.length > 0) {
      let container = [];

      languageMaster.forEach((val, indx) => {
        container.push(renderItem(val, indx))
      });
      return container;
    }
  }
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      <Grid container
        justifyContent="flex-end">
        <Box>
          <IconButton aria-label="delete">
            <ControlPointIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Box>
      </Grid >
      <List component="nav" sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {renderListItem()}
      </List>
    </Box>
  )
}
export default MasterTable
