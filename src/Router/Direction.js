import React from 'react';
import Demo from '../Component/Demo';
import AddNew from '../Component/AddNew';
import { Routes, Route } from "react-router-dom";
import ItemDetail from '../Component/ItemDetail';
import Samples from '../pages/Samples/ListSample'
import ListOrder from '../pages/QuanLyDonHang/ListOrder';
import ListProduct from '../pages/QuanLySanPham/ListProduct';
import QLCauHinh from '../pages/QuanLyCauHinh';
import QuanLyDonHang from '../pages/QuanLyDonHang/ListOrder'
import ManageLanguage from '../pages/ManageLanguage'
import { useSelector } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

function Direction() {

  const selectedMenu = useSelector((state) => state.navReducer.activeMenu);

  return (
    <Box>
      <Box style={{ height: '35px' }}>
        <Typography variant="h5" component="h5">{selectedMenu.name}</Typography>
      </Box>
      <Routes>
        <Route path="/" element={<AddNew />} />
        <Route path="product" element={<ListProduct />} />
        <Route path="config" element={<QLCauHinh />} />
        <Route path="order" element={<ListOrder />} />
        <Route path="sample" element={<Samples />} />
        <Route path="item-detail/:id.:name" element={<ItemDetail />} />
        <Route path="order2" element={<QuanLyDonHang />} />
        <Route path="setup/language" element={<ManageLanguage />} />
      </Routes>
    </Box>
  );
}
export default Direction;
