import { Grid, InputBase, Paper, styled } from "@mui/material"
import { Box } from "@mui/system";
import DetailTable from "./DetailTable";
import MasterTable from "./MasterTable";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { searchByCond } from "../../store/manageLanguage/action";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function ManageLanguage() {
  const dispatch = useDispatch();

  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    const timeOutId = setTimeout(() => dispatch(searchByCond(searchVal)), 500);
    return () => clearTimeout(timeOutId);
  }, [dispatch, searchVal]);
  
  // --------------- EVENT ---------------------

  return (
    <Box height="calc(100vh - 35px)" display="flex" flexDirection="column">
      <Box style={{ marginBottom: '15px' }}>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
            onChange={(event) => setSearchVal(event.target.value)}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
      <Grid container spacing={2} flex={1} overflow="auto" style={{ paddingBottom: '10px' }}>
        <Grid item xs={6} style={{ height: '100%' }} overflow="auto">
          <Item style={{ height: '100%' }} overflow="auto">
            <MasterTable></MasterTable>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <DetailTable></DetailTable>
          </Item>
        </Grid>
      </Grid>

    </Box>


  )
}
export default ManageLanguage
