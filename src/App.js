import React from 'react'; import ContactList from './components/contactList'
import HomePage from './components/Pages/HomePage';
import LoginPage from './components/Pages/LoginPage';
import firebase from './firebase-Config'

class App extends React.Component {
  render() {
    return(
      <LoginPage/>
    );
  }
};

export default App;
