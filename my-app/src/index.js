import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './components/App';
import LoginContainer from './components/LoginContainer';
import Search from './components/Search';
import JokeItem from './components/JokeItem';
import MyFavorites from './components/MyFavorites';
import AddJokeForm from './components/AddJokeForm';

ReactDOM.render(
    <Router>
        <Route path="/">
            <App />
        </Route>
        <Switch>
        <Route path="/login">
            <LoginContainer />
        </Route>
        <Route path="/jokes">
            <Search />
            <JokeItem />
        </Route>
        <Route path="/favorites">
            <MyFavorites />
        </Route>
        <Route path="/add">
            <AddJokeForm />
        </Route>
    </Switch>
</Router>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

