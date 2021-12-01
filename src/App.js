import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import { adminRoutes } from './routes'
import Frame from './componets/Frame/Index'
import { isLogined } from './utils/auth'
// import Home from "./views/Home";
// import About from "./views/About";

function App() {
  return isLogined() ? (
    <Frame>
      <Switch>
        {adminRoutes.map(route => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={routeProps => {
                return <route.component {...routeProps} />;
              }}
            />
          );
        })}
        <Redirect to={adminRoutes[0].path} from='/admin' />
        <Redirect to="/404" />
      </Switch>
    </Frame>) : (
      <Redirect to="/login" />
    );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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
