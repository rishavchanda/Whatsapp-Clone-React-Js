import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import SearchIcon from '@material-ui/icons/Search';
import ContactCards from './contactCards';

const UseStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(5.5),
        height: theme.spacing(5.5),
    }
}));

const contactList = () => {
    const classes = UseStyles();
    return (
        <div className="contactListContainer">
            <div className="topBar">
                <Avatar className={classes.small} src="https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F150487284_949671329187245_2215871401401544621_n.jpg%3Fccb%3D11-4%26oh%3D6ca2894440c518cabc9b5f695d18afcb%26oe%3D610616F7&t=s&u=918902029392%40c.us&i=1621765318&n=%2BFiy8vhJGyJGPihYmfDfLYZmhYMhsyL7as5joWRtMEw%3D" />
                <div className="topIcons">
                    <DonutLargeIcon className="Icons margin-icon" style={{ fontSize: 26}}/>
                    <ChatIcon className="Icons margin-icon" style={{ fontSize: 26}}/>
                    <MoreVertIcon className="Icons margin-icon" style={{ fontSize: 26}}/>
                </div>
            </div>

            <div className="searchBar">
                <div className="search">
                    <SearchIcon className="Icons-search" style={{ fontSize: 22}}/>
                    <input type="text" placeholder="Search or start new chat" />
                </div>
            </div>

            <div className="dividerRow" />

            <div className="chatsList">
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
                <ContactCards/>
            </div>
        </div>
    );
};

export default contactList;