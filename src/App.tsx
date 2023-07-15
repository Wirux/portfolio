import React from 'react';
// import './App.css';
import Navbar from './components/Navbar'

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

      <h1 className="text-3xl font-bold bg-sky-400 underline">
        Hello world!
      </h1>
      <Navbar /> {/* Corrected component usage */}
    </div>
  )
}
//
export default App;
//
// create navbars and footers and stuf
export { }
