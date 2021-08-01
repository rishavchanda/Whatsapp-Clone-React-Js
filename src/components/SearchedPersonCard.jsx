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
        db.collection("chatRooms").doc(`${props.uid}_${props.ChatPersonId}`).set({
               timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(
            addChatIdToUser()
        )
    }

    const addChatIdToUser = () => {
        db.collection("User").doc(props.uid).collection("Rooms").add({
            chatId:`${props.uid}_${props.ChatPersonId}`,
            userId: `${props.ChatPersonId}`
        })
        db.collection("User").doc(props.ChatPersonId).collection("Rooms").add({
            chatId:`${props.uid}_${props.ChatPersonId}`,
            userId: `${props.uid}`
        })
        window.location.href = `https://whatsapp-clone-rishav.web.app/${props.uid}/${props.uid}_${props.ChatPersonId}/${props.ChatPersonId}`
    }
    return (
        <>
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
        </>
    );
};

export default SearchedPersonCards;