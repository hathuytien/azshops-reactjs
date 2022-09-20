import { Box, Grid, IconButton, List, ListItemButton, ListItemText, MenuItem, TextField } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import SaveIcon from '@mui/icons-material/Save';
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux"
import { saveDetail, updateNewDetail } from "../../store/manageLanguage/action";
import DetailTableItem from "./DetailTableItem";

function DetailTable() {

  const dispatch = useDispatch()

  const languageDetail = useSelector((state) => state.languageReducer.listDetail)

  const newItem = useSelector((state) => state.languageReducer.newDetail)

  const localeList = useSelector((state) => state.languageReducer.localeList)

  useEffect(() => {
    setIsAddNew(false);
    console.log('list change')
  }, [languageDetail])

  const [isAddNew, setIsAddNew] = useState(false);

  const handleAddNewClick = () => {
    setIsAddNew(true);
  }

  const handleChange = (event) => {
    setCurrency(event.target.value);
    dispatch(updateNewDetail({ ...newItem, locale: event.target.value }));
  };

  const handleContentChange = (event) => {
    dispatch(updateNewDetail({ ...newItem, content: event.target.value }));
  }

  const handleSaveClick = () => {
    dispatch(saveDetail());
  };

  const [currency, setCurrency] = React.useState('vi');

  let renderItem = (item, index) => {
      return <DetailTableItem data={item} key={index}/>
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
              {localeList.map((option) => (
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
          <AddIcon onClick={(event) => { handleAddNewClick(event) }} />
        </IconButton>
        <ListItemText primary="Thêm mới" />
      </ListItemButton>
    }
  }

  const renderListItem = () => {
    let container = [];
    if (languageDetail && languageDetail.length > 0) {
      container.push(renderItemNew({}, -1))
      languageDetail.forEach((val, indx) => {
        container.push(renderItem(val, indx))
      });
    } else {
      container.push(<ListItemButton>
        <ListItemText primary="Không có dữ liệu" />
      </ListItemButton>)
    }
    return container;
  }
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      <List component="nav" sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {renderListItem()}
      </List>
    </Box>
  )
}
export default DetailTable
