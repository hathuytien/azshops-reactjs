import React from 'react';
import {BrowserRouter, Link} from "react-router-dom";
import AddNew from './AddNew';
import Demo from './Demo';
/* import Collapsible from 'react-collapsible';
import { Accordion } from 'react-bootstrap-accordion'; */
import { Accordion, Card, Button } from "react-bootstrap";
import { IconButton, useTheme } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { ColorModeContext } from '../App';


function Nav () {

  const [mode, setMode] = React.useState('light');
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <div>
      {/* <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link  to="/">Trang chủ</Link><i className="bi bi-chevron-right"></i></li>
          <li className="breadcrumb-item"><Link  to="/demo">Quản lý sản phẩm</Link><i className="bi bi-chevron-right"></i></li>
          <li className="breadcrumb-item active" aria-current="page">Thêm sản phẩm</li>
        </ol>
      </nav>
      <Collapsible trigger={'Sản phẩm'} id={'menu'}>
        <ul>
          <li><Link  to="/">Thêm sản phẩm</Link></li>
          <li><Link  to="/demo">Quản lý sản phẩm</Link></li>
          <li><Link  to="/demo">Gợi ý sản phẩm hot</Link></li>
        </ul>
      </Collapsible>
      <Collapsible trigger={'Sản phẩm'} id="sp2">
        <ul>
          <li><Link  to="/">Thêm sản phẩm</Link></li>
          <li><Link  to="/demo">Quản lý sản phẩm</Link></li>
          <li><Link  to="/demo">Gợi ý sản phẩm hot</Link></li>
        </ul>
      </Collapsible> 
      <Accordion title="Sản phẩm" defaultActiveKey={this.state.nameclass}>
        <ul>
          <li><Link  to="/">Thêm sản phẩm</Link></li>
          <li><Link  to="/demo">Quản lý sản phẩm</Link></li>
          <li><Link  to="/demo">Gợi ý sản phẩm hot</Link></li>
        </ul>
      </Accordion>
      <Accordion title="Sản phẩm" >
        <ul>
          <li><Link  to="/">Thêm sản phẩm</Link></li>
          <li><Link  to="/demo">Quản lý sản phẩm</Link></li>
          <li><Link  to="/demo">Gợi ý sản phẩm hot</Link></li>
        </ul>
      </Accordion>*/}
       <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0" id="sp">
          <Accordion.Header><i className="bi bi-bag-fill"></i> Sản phẩm <i className="bi bi-dot"></i></Accordion.Header>
          <Accordion.Body>
            <ul>
              <li className="active"><Link  to="/">Thêm sản phẩm</Link></li>
              <li><Link  to="/demo">Quản lý sản phẩm</Link></li>
              <li><Link  to="/demo">Gợi ý sản phẩm hot</Link></li>
              <li><Link  to="/sample">Samples</Link></li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header><i className="bi bi-bag-fill"></i> Sản phẩm</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li><Link  to="/">Thêm sản phẩm</Link></li>
              <li><Link  to="/demo">Quản lý sản phẩm</Link></li>
              <li><Link  to="/demo">Gợi ý sản phẩm hot <span className="badge bg-danger">New</span></Link></li>
              <li><Link  to="/sample">Samples</Link></li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header><i className="bi bi-bag-fill"></i>Đơn hàng</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li><Link  to="/order">Đơn đặt hàng</Link></li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </div>
  );
}

// class Nav extends React.Component {
//   constructor(props) {
//     super(props);
//     // Don't call this.setState() here!
//     this.state = { 
//       id:"sp",
//       nameclass:"SP",
//       mode: "main"
//     };

    
    
//     const theme = useTheme();
//   }


//   render() {
//     return (
//       <div>
//         {/* <nav aria-label="breadcrumb">
//           <ol className="breadcrumb">
//             <li className="breadcrumb-item"><Link  to="/">Trang chủ</Link><i className="bi bi-chevron-right"></i></li>
//             <li className="breadcrumb-item"><Link  to="/demo">Quản lý sản phẩm</Link><i className="bi bi-chevron-right"></i></li>
//             <li className="breadcrumb-item active" aria-current="page">Thêm sản phẩm</li>
//           </ol>
//         </nav>
//         <Collapsible trigger={'Sản phẩm'} id={'menu'}>
//           <ul>
//             <li><Link  to="/">Thêm sản phẩm</Link></li>
//             <li><Link  to="/demo">Quản lý sản phẩm</Link></li>
//             <li><Link  to="/demo">Gợi ý sản phẩm hot</Link></li>
//           </ul>
//         </Collapsible>
//         <Collapsible trigger={'Sản phẩm'} id="sp2">
//           <ul>
//             <li><Link  to="/">Thêm sản phẩm</Link></li>
//             <li><Link  to="/demo">Quản lý sản phẩm</Link></li>
//             <li><Link  to="/demo">Gợi ý sản phẩm hot</Link></li>
//           </ul>
//         </Collapsible> 
//         <Accordion title="Sản phẩm" defaultActiveKey={this.state.nameclass}>
//           <ul>
//             <li><Link  to="/">Thêm sản phẩm</Link></li>
//             <li><Link  to="/demo">Quản lý sản phẩm</Link></li>
//             <li><Link  to="/demo">Gợi ý sản phẩm hot</Link></li>
//           </ul>
//         </Accordion>
//         <Accordion title="Sản phẩm" >
//           <ul>
//             <li><Link  to="/">Thêm sản phẩm</Link></li>
//             <li><Link  to="/demo">Quản lý sản phẩm</Link></li>
//             <li><Link  to="/demo">Gợi ý sản phẩm hot</Link></li>
//           </ul>
//         </Accordion>*/}
//          <Accordion defaultActiveKey="0">
//           <Accordion.Item eventKey="0" id="sp">
//             <Accordion.Header><i className="bi bi-bag-fill"></i> Sản phẩm <i className="bi bi-dot"></i></Accordion.Header>
//             <Accordion.Body>
//               <ul>
//                 <li className="active"><Link  to="/">Thêm sản phẩm</Link></li>
//                 <li><Link  to="/demo">Quản lý sản phẩm</Link></li>
//                 <li><Link  to="/demo">Gợi ý sản phẩm hot</Link></li>
//                 <li><Link  to="/sample">Samples</Link></li>
//               </ul>
//             </Accordion.Body>
//           </Accordion.Item>
//           <Accordion.Item eventKey="1">
//             <Accordion.Header><i className="bi bi-bag-fill"></i> Sản phẩm</Accordion.Header>
//             <Accordion.Body>
//               <ul>
//                 <li><Link  to="/">Thêm sản phẩm</Link></li>
//                 <li><Link  to="/demo">Quản lý sản phẩm</Link></li>
//                 <li><Link  to="/demo">Gợi ý sản phẩm hot <span className="badge bg-danger">New</span></Link></li>
//                 <li><Link  to="/sample">Samples</Link></li>
//               </ul>
//             </Accordion.Body>
//           </Accordion.Item>
//           <Accordion.Item eventKey="2">
//             <Accordion.Header><i className="bi bi-bag-fill"></i>Đơn hàng</Accordion.Header>
//             <Accordion.Body>
//               <ul>
//                 <li><Link  to="/order">Đơn đặt hàng</Link></li>
//               </ul>
//             </Accordion.Body>
//           </Accordion.Item>
//         </Accordion>
//         <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
//           {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
//         </IconButton>
//       </div>
//     );
//   }
// }

export default Nav;
