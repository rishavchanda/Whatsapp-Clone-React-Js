import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import firebase from "../firebase-Config"

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
const ContactCards = (props) => {
    const classes = UseStyles();
    const db = firebase.firestore();

    const [user,setUser] = useState([]);
    
    useEffect(() => {
        fetchUserDetails();
    }, []);
    const fetchUserDetails = async () => {
        db.collection("Users").doc(props.userId).get()
        .then(snapshot => setUser(snapshot.data()));
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
                            <div className="cardTime">2:00 PM</div>
                        </div>
                        <div className="contactText">dzghsdf fdyhsdfhdfjd dfh</div>
                    </div>
                </div>
            </div>
            <div className="dividerRow" />
        </div>
        </>
    );
};

export default ContactCards;