import React from 'react';

import './App.css';

import Header from './components/header/Header'
import Button from './components/button/Button'
import Companies from './components/company/Company'

const someAlert = () => {
  alert(123)
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Button className="button__classic" onClick={someAlert}>
          qwerty
        </Button>
        <ul>
          <Companies title="Ginza" description="Some description of restaraunt Ginza"  />

        </ul>
      </div>
    )
  }
}

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

export default App;
