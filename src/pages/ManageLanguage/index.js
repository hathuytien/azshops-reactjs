import { Grid, Paper, styled } from "@mui/material"
import DetailTable from "./DetailTable";
import MasterTable from "./MasterTable";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function ManageLanguage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Item>xs=12</Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          <MasterTable></MasterTable>
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          <DetailTable></DetailTable>
        </Item>
      </Grid>
    </Grid>

  )
}
export default ManageLanguage
