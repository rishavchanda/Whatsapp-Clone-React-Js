import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PhoneAuth from './PhoneAuth';
import DetailsPage from './DetailsPage';

const LoginPage = () => {
    return(
        <Switch>
            <Route exact path="/" component={PhoneAuth} />
            <Route exact path="/details-page/:id" render={() => <DetailsPage/>}/>
            <Redirect to="/" />
        </Switch>
    );
}

export default LoginPage;