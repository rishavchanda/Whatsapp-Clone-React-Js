import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import firebase from "../firebase-Config";

const UseStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));
const SearchedPersonCards = (props) => {
    const classes = UseStyles();
    const db = firebase.firestore();

    const [user,setUser] = useState([]);
    
    useEffect(() => {
        fetchUserDetails();
        addNewChatRoom();
    }, []);
    const fetchUserDetails = async () => {
        db.collection("Users").doc(props.ChatPersonId).get()
        .then(snapshot => setUser(snapshot.data()));
    }
    const addNewChatRoom = async () => {
        db.collection("Users").doc(props.ChatPersonId).get()
        .then(snapshot => setUser(snapshot.data()));
    }
    return (
        <a style={{textDecoration: "none;"}} href={`/${props.uid}/${props.chatId}/${props.userId}`}>
        <div className="contactCardsContainer">
            <div className="contactCard">
                <Avatar className={classes.large} src={user.image} />
                <div className="cardTexts">
                    <div>
                        <div className="cardHeading">
                            <div className="contactName">{user.name}</div>
                        </div>
                        <div className="contactText">Start Chatting</div>
                    </div>
                </div>
            </div>
            <div className="dividerRow" />
        </div>
        </a>
    );
};

export default SearchedPersonCards;