import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './components/App';
import LoginContainer from './components/LoginContainer';
import Search from './components/Search';
import JokeContainer from './components/JokeContainer';
import MyFavorites from './components/MyFavorites';
import AddJokeForm from './components/AddJokeForm';

ReactDOM.render(
    <Router>
        <Route path="/">
            <App />
        </Route>
        <Switch>
        <Route exact path="/login">
            <LoginContainer />
        </Route>
        <Route exact path="/jokes">
            <JokeContainer />
        </Route>
        <Route exact path="/favorites">
            <MyFavorites />
        </Route>
        <Route exact path="/add">
            <AddJokeForm />
        </Route>
    </Switch>
</Router>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

