import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PhoneAuth from './PhoneAuth';
import DetailsPage from './DetailsPage';
import HomePage from '../Pages/HomePage'
import firebase from '../../firebase-Config'

const LoginPage = () => {
    return (
        <Switch>
            <Route exact path="/" component={PhoneAuth}/>
            <Route exact path="/details-page/:uid" render={() => <DetailsPage />} />
            <Route exact path="/:uid" render={() => <HomePage/>} />
            <Redirect to="/" />
        </Switch>
    );
}

export default LoginPage;