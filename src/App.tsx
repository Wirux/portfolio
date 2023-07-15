import React from 'react';
// import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About';
import Skills from './components/Skills';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">

      <Navbar /> {/* Corrected component usage */}
      <Home />  {/* Corrected component usage */}
      <About /> {/* Corrected component usage */}
      <Skills /> {/* Corrected component usage */}
    </div>
  )
}
//
export default App;
//
// create navbars and footers and stuf
