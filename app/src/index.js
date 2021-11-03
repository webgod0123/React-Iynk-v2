import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'reactjs-popup/dist/index.css';
import './styles/_common.css'
import './styles/_fonts.css'
import './styles/_filters.css'
import './styles/_modal.css'
import './styles/_auth.css'

import Home from './pages/Home'
import DJExplore from './pages/DJExplore'
import Dashboard from './pages/Dashboard'
import Messages from './pages/Messages'
import SignIn from './pages/SignIn'
import ForgotPassword from './components/auth/ForgotPassword'
import CreateAccount from './components/auth/CreateAccount'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/explore/dj_explore" component={DJExplore} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path='/message' component={Messages} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/forgot-password' component={ForgotPassword} />
        <Route path='/create-account' component={CreateAccount} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
