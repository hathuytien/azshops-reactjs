import { Box, Grid, IconButton, List, ListItemButton, ListItemText, MenuItem, TextField } from "@mui/material"
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux"
import SaveIcon from '@mui/icons-material/Save';
import { deleteLanguageItem, saveDetail, updateNewDetail } from "../../store/manageLanguage/action";

const currencies = [
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'vi',
    label: 'Việt nam',
  }
];
function DetailTable() {

  const dispatch = useDispatch()

  const languageDetail = useSelector((state) => state.languageReducer.listDetail)

  
  const newItem = useSelector((state) => state.languageReducer.newDetail)

  useEffect(() => {
    setIsAddNew(false);
  }, [languageDetail])

  const [isAddNew, setIsAddNew] = useState(false);

  const handleAddNewClick = () => {
    setIsAddNew(true);
  }

  const handleChange = (event) => {
    setCurrency(event.target.value);
    dispatch(updateNewDetail({...newItem, locale: event.target.value}));
  };

  const handleContentChange = (event) => {
    dispatch(updateNewDetail({...newItem, content: event.target.value}));
  }

  const handleSaveClick = () => {
    dispatch(saveDetail());
  };

  const [currency, setCurrency] = React.useState('vi');

  let renderItem = (item, index) => {
    return <ListItemButton key={index}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <ListItemText primary={item.content} secondary={item.locale} />
        </Grid>
        <Grid item xs={4}>
          <Grid container
            justifyContent="flex-end">
            <Box>
              <IconButton>
                <EditIcon />
              </IconButton>
              <IconButton onClick={()=>{dispatch(deleteLanguageItem(item.id))}}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </Grid >
        </Grid>
      </Grid>
    </ListItemButton>
  }

  let renderItemNew = (item, index) => {
    if (isAddNew) {
      return <ListItemButton key={index}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <TextField
              onChange={handleContentChange}
              sx={{ width: '100%' }}
              id="outlined-basic"
              label="Content"
              // placeholder="aaa"
              variant="standard" />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="standard-select-currency"
              select
              label="Locale"
              value={currency}
              onChange={handleChange}
              variant="standard"
              sx={{ width: '100%' }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={4}>
            <Grid container
              justifyContent="flex-end">
              <Box>
                <IconButton>
                  <SaveIcon onClick={(event) => handleSaveClick(event)}/>
                </IconButton>
                <IconButton>
                  <DeleteIcon onClick={() => {setIsAddNew(false)}}/>
                </IconButton>
              </Box>
            </Grid >
          </Grid>
        </Grid>
      </ListItemButton>
    } else {
      return <ListItemButton key={index} >
        <IconButton>
          <AddIcon onClick={(event) => {handleAddNewClick(event)}}/>
        </IconButton>
        <ListItemText primary="Thêm mới" />
      </ListItemButton>
    }

  }

  const renderListItem = () => {
    if (languageDetail && languageDetail.length > 0) {
      let container = [];
      container.push(renderItemNew({}, -1))
      languageDetail.forEach((val, indx) => {
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
          <IconButton>
            <ControlPointIcon />
          </IconButton>
          <IconButton>
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
export default DetailTable
