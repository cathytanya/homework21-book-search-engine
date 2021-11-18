import React from 'react';
// import apollo provider
import {ApolloProvider} from '@apollo/react-hooks'
// import ApolloClient
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

// Create an Apollo Provider to make every request work with the Apollo Server.
const client= new ApolloClient({
  request: operation =>{
    const token = localStorage.getItem('id_token');
    operation.setContext({
      header:{ authorization:token?`Bearer ${token}`:''}
    })
  },
  url:'/graphql'
})


function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={SearchBooks} />
          <Route exact path='/saved' component={SavedBooks} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
