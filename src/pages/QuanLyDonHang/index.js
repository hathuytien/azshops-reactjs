import React from 'react';
import { Box, Tab, Tabs, FormLabel, Button, Paper, Typography, Grid} from "@mui/material"
import TabPanel from "./TabPanel"

function QuanLyDonHang () {

  const [value, setValue] = React.useState(0);

  const [isBookToday, setIsBookToday] = React.useState(false);
  const [isBookTomorrow, setIsBookTomorrow] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <div style={{backgroundColor: "#EEF0F4"}}>
      <FormLabel>Quản lý đơn hàng</FormLabel>
      <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
        <Tab label="Tất cả" {...a11yProps(0)} />
        <Tab label="Chưa thanh toán" {...a11yProps(1)} />
        <Tab label="Chờ đóng gói & bàn giao" {...a11yProps(2)} />
        <Tab label="Đang vận chuyển" {...a11yProps(2)} />
        <Tab label="Đã giao hàng" {...a11yProps(2)} />
        <Tab label="Giao hàng thất bại" {...a11yProps(2)} />
        <Tab label="Hủy đơn hàng" {...a11yProps(2)} />
        <Tab label="Hoàn hàng/ Hoàn tiền" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box sx={{p: 2, bgcolor: 'background.default'}}>
            <Box sx={{mb: 1}}>
              <FormLabel sx={{mr: 1}}>Ngày đặt hàng:</FormLabel>
              <Button size="small" color={isBookToday ? "main" : "secondary"} /*disabled={!isBookTomorrow}*/ variant="contained" onClick={() => {setIsBookToday(!isBookToday)}}>Ngày hôm nay</Button>
              <Button size="small" color={isBookTomorrow ? "main" : "secondary"} variant="contained" onClick={() => {setIsBookTomorrow(!isBookTomorrow)}}>Ngày hôm qua</Button>
              <Button size="small" color="primary" variant="contained">7 Ngày qua</Button>
              <Button size="small" color="secondary" variant="contained">30 Ngày qua</Button>
              <Button size="small" color="secondary" variant="contained">Từ ngày</Button>
            </Box>
            <Box>
              <FormLabel sx={{mr: 1}}>Loại đơn hàng:</FormLabel>
              <Button size="small" color={isBookToday ? "main" : "secondary"} disabled={!isBookTomorrow} variant="contained" onClick={() => {setIsBookToday(!isBookToday)}}>Ngày hôm nay</Button>
              <Button size="small" color={isBookTomorrow ? "main" : "secondary"} variant="contained" onClick={() => {setIsBookTomorrow(!isBookTomorrow)}}>Ngày hôm qua</Button>
              <Button size="small" color="primary" variant="contained">7 Ngày qua</Button>
              <Button size="small" color="secondary" variant="contained">30 Ngày qua</Button>
              <Button size="small" color="secondary" variant="contained">Từ ngày</Button>
            </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  )
}
export default QuanLyDonHang
