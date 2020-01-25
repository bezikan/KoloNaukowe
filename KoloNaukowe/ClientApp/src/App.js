import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { FetchStudent } from './components/FetchStudent';  
import { AddStudent } from './components/AddStudent';  


export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/fetchstudent' component={FetchStudent} />  
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} />
        <Route path='/addstudent' component={AddStudent} />  
            <Route path='/student/edit/:stid' component={AddStudent} />  

      </Layout>
    );
  }
}
