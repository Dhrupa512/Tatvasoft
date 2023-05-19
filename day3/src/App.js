// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;



import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { Apple } from "./Apple";
import Applet from "./Applet";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./style";
import appStyle from "./appStyle.module.css";

const App = () => (
  <>
    <ThemeProvider theme={theme}>
    <img src="/logo192.png" alt="App logo" style={{ width: "50px", height: "50px" }} />

      <BrowserRouter>
        <div className={appStyle.navbarStyle}>
          <Link to="/" style={{ marginLeft: 5 }}>
            Home
          </Link>
          <Link to="/apple" style={{ marginLeft: 10 }}>
            Apple
          </Link>
          <Link to="/applet" style={{ marginLeft: 10 }}>
            Applet
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apple" element={<Apple />} />
          <Route path="*" element={<Applet />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </>
);

export default App;