import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import AppHome from '../AppHome/AppHome';
import About from '../About/About';

import BookAdd from '../Books/BookAdd/BookAdd';
import BookList from '../Books/BookList/BookList';
import BookIssue from '../Books/Book_Issue/BookIssue';
import BookReceive from '../Books/Book_Receive/BookReceive';
import BookSearch from '../Books/BookSearch/BookSearch';
import BookDetails from '../Books/BookDetails/BookDetails';
import BookRemove from '../Books/BookRemove/BookRemove';

import AdminDashboard from '../Admin/Dashboard/Dashboard';

import UserLogin from '../UserLogin/UserLogin';
import UserRegistration from '../UserRegistration/UserRegistration';

import AppPageNotFound from '../AppPageNotFound/AppPageNotFound';

class AppRoutings extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path="/" component={AppHome} exact />
                    <Route path="/home" component={AppHome} />
                    <Route path="/about" component={About} />
                    <Route path="/books" component={BookList} />
                    <Route path="/book/:id" component={BookDetails} />
                    <Route path="/book-search" component={BookSearch} />
                    <Route path="/book-issue" component={BookIssue} />
                    <Route path="/book-receive" component={BookReceive} />
                    <Route path="/book-add" component={BookAdd} />
                    <Route path="/book-remove" component={BookRemove} />

                    <Route path="/admin" component={AdminDashboard} />
                    <Route path="/login" component={UserLogin} />
                    <Route path="/register" component={UserRegistration} />
                    <Route component={AppPageNotFound} />
                </Switch>
            </>
        );
    }
}

export default AppRoutings;