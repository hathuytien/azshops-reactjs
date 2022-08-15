import { ThemeProvider, createTheme } from '@mui/material';
import React, { useState } from 'react';
/* import Demo from './Component/Demo';
import AddNew from './Component/AddNew';
import { Routes, Route} from "react-router-dom"; */
import Nav from './Component/Nav';
import Direction from './Router/Direction';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
function App () {
  const [mode, setMode] = useState("light");

  const themee = React.useMemo(
    () =>
    createTheme({      
      typography: {
        button: {
          textTransform: 'none'
        }
      },
      palette: {
        // mode: 'dar',
        mode: mode === "dark" ? "dark" : "light",
        
        main: {
          light: '#17C6C6',
          main: '#0971f1',
          dark: '#17C617',
          contrastText: "#FFFFFF"
        },
        // primary: {
        //   // light: '#E25141',
        //   main: '#E25141',
        //   dark: '#D8E517',
        //   // contrastText: "#FF23E9"
        // },
        // secondary: {
        //   main: '#F2F3F7',
        //   darker: '#D8E517',
        //   // contrastText: "#FFFFFF"
        // }
      }
    }),
    [mode],
  );

  // const themee = createTheme({      
  //   typography: {
  //     button: {
  //       textTransform: 'none'
  //     }
  //   },
  //   palette: {
  //     mode: mode === "dark" ? "dark" : "light",
      
  //     // main: {
  //     //   main: '#0971f1',
  //     //   dark: '#D8E517',
  //     //   // contrastText: "#FFFFFF"
  //     // },
  //     // primary: {
  //     //   // light: '#E25141',
  //     //   main: '#E25141',
  //     //   dark: '#D8E517',
  //     //   // contrastText: "#FF23E9"
  //     // },
  //     // secondary: {
  //     //   main: '#F2F3F7',
  //     //   darker: '#D8E517',
  //     //   // contrastText: "#FFFFFF"
  //     // }
  //   }
  // });

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  
  return (
    
    <ThemeProvider theme={themee}>
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <ColorModeContext.Provider value={colorMode}>
            <Nav/>
          </ColorModeContext.Provider>
        </div>
        <div className="col-10">
          <Direction/>
        </div>
      </div>
      
    </div>
    
    </ThemeProvider>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     // Don't call this.setState() here!
//     this.state = { 
      
//     };
//   }
//   render() {
//     return (
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-2">
//             <Nav/>
//           </div>
//           <div className="col-10">
//             <Direction/>
//           </div>
//         </div>
        
//       </div>
//     );
//   }
// }

export default App;
