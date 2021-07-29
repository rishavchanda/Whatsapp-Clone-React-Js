import React from 'react';
import Chat from '../chat'
import ContactList from '../contactList'
import './HomePageCss.css'
import PhoneAuth from './PhoneAuth';
import firebase from '../../firebase-Config'
import { useParams } from 'react-router-dom';

const HomePage = () => {
    const {uid} = useParams();
    return (
        <div className="container">
            <h1>{uid}</h1>
            <ContactList
              UID={uid}
            />
            <div className="dividerColumn" />
            <Chat />
        </div>
    );
}

export default HomePage;