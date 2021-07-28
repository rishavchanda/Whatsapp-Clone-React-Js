import React from 'react';
import Chat from './components/chat'
import ContactList from './components/contactList'

const App = () =>{
  return(
    <div className="container">
      <ContactList/>
      <div className="dividerColumn"/>
      <Chat/>
    </div>
  );
};

export default App;
