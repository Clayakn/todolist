import React from 'react';
import Form from './Form/Form';
import Home from './Home/Home';
import {Switch, Route} from 'react-router-dom';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/form/:id' render={({match}) => <Form match={match}/>} />
    </Switch>
)