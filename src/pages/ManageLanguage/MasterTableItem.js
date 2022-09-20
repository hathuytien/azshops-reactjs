import { Box, Grid, IconButton, ListItemButton, ListItemText, TextField } from "@mui/material"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMasterItem, getDetail, setSelectedMaster, updateDetail } from "../../store/manageLanguage/action";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import UndoIcon from '@mui/icons-material/Undo';
import { useEffect } from "react";
import { messageBox, TYPE } from "../../core/message-box";

function MasterTableItem(props) {

  const dispatch = useDispatch()

  const [isEditable, setIsEditable] = useState(false);

  const [content, setContent] = useState('');

  const [key, setKey] = useState('');

  const selectedMaster = useSelector((state) => state.languageReducer.selectedMaster)

  useEffect(() => {
    console.log(content);
  }, [content])

  // ------------------------- EVENT ---------------------
  function handleEditClick() {
    setIsEditable(true);
    setContent(props.data.content);
    setKey(props.data.key);
  }

  function handleSaveClick() {
    dispatch(updateDetail({ id: props.data.id, key: key, content: content }));
    setIsEditable(false);
  }
  const handleListItemClick = (event, item) => {
    dispatch(getDetail(item.key));
    dispatch(setSelectedMaster(item));
  };

  const handleClickDelete = (event, item) => {
    if (messageBox.show('COM_000', 'Ngôn ngữ này đã tồn tại!', TYPE.CONFIRM)) {
      dispatch(deleteMasterItem(props.data));
    }
  };

  function renderItem() {
    if (isEditable) {
      return <Grid container spacing={2}>
        <Grid item xs={5}>
          <TextField
            sx={{ width: '100%' }}
            id="outlined-basic"
            label="Content"
            required
            onChange={(event) => setContent(event.target.value)}
            value={content}
            // placeholder="aaa"
            variant="standard" />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="standard-select-key"
            label="key"
            value={key}
            required={true}
            onChange={(event) => setKey(event.target.value)}
            variant="standard"
            sx={{ width: '100%' }}
          >
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
          <ListItemText primary={props.data.content} secondary={props.data.key} />
        </Grid>
        <Grid item xs={4}>
          <Grid container
            justifyContent="flex-end">
            <Box>
              <IconButton>
                <EditIcon onClick={() => { handleEditClick() }} />
              </IconButton>
              <IconButton onClick={() => { handleClickDelete() }}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </Grid >
        </Grid>
      </Grid>
    }
  }

  return (
    <ListItemButton onClick={(event) => handleListItemClick(event, props.data)} selected={props.data.id === selectedMaster.id}>
      {renderItem()}
    </ListItemButton>
  )
}
export default MasterTableItem
