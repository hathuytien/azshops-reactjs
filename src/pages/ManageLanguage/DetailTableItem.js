import { Box, Grid, IconButton, ListItemButton, ListItemText, MenuItem, Paper, styled, TextField } from "@mui/material"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteLanguageItem, updateDetail } from "../../store/manageLanguage/action";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import UndoIcon from '@mui/icons-material/Undo';
import { useEffect } from "react";

function DetailTableItem(props) {

  const dispatch = useDispatch()

  const [isEditable, setIsEditable] = useState(false);

  const [content, setContent] = useState('');

  const [locale, setLocale] = useState('');

  const localeList = useSelector((state) => state.languageReducer.localeList)

  useEffect(()=>{
    console.log(content);
  }, [content])

  function handleEditClick() {
    setIsEditable(true);
    setContent(props.data.content);
    setLocale(props.data.locale);
  }

  function handleSaveClick() {
    let a = dispatch(updateDetail({id: props.data.id, locale: locale, content: content }));
    console.log(a);
    setIsEditable(false);
  }

  function renderItem() {
    if (isEditable) {
      return <Grid container spacing={2}>
        <Grid item xs={5}>
          <TextField
                sx={{ width: '100%' }}
                id="outlined-basic"
                label="Content"
                onChange={(event) => setContent(event.target.value)}
                value={content}
                // placeholder="aaa"
                variant="standard" />
        </Grid>
        <Grid item xs={3}>
            <TextField
              id="standard-select-currency"
              select
              label="Locale"
              value={locale}
              onChange={(event) => setLocale(event.target.value)}
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
              <IconButton onClick={() => { handleSaveClick() }} >
                <SaveIcon />
              </IconButton>
              <IconButton onClick={() => { setIsEditable(false); }}>
                <UndoIcon />
              </IconButton>
            </Box>
          </Grid >
        </Grid>
      </Grid>
    } else {
      return <Grid container spacing={2}>
        <Grid item xs={8}>
          <ListItemText primary={props.data.content} secondary={props.data.locale} />
        </Grid>
        <Grid item xs={4}>
          <Grid container
            justifyContent="flex-end">
            <Box>
              <IconButton>
                <EditIcon onClick={() => { handleEditClick() }} />
              </IconButton>
              <IconButton onClick={() => { dispatch(deleteLanguageItem(props.data)) }}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </Grid >
        </Grid>
      </Grid>
    }
  }

  return (
    <ListItemButton>
      {renderItem()}
    </ListItemButton>
  )
}
export default DetailTableItem
