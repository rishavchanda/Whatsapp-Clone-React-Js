import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
import { useParams } from 'react-router-dom';

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

const Chats = () => {
    const classes = UseStyles();
    const {chatId} = useParams();
    return (
        <div className="chatsContainer">
            <div className="topBar">
                <div style={{ display: "flex" }}>
                    <Avatar className={classes.small} src="https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F150487284_949671329187245_2215871401401544621_n.jpg%3Fccb%3D11-4%26oh%3D6ca2894440c518cabc9b5f695d18afcb%26oe%3D610616F7&t=s&u=918902029392%40c.us&i=1621765318&n=%2BFiy8vhJGyJGPihYmfDfLYZmhYMhsyL7as5joWRtMEw%3D" />
                    <div className="titleChat">Rishav Chanda</div>
                </div>
                <div className="topIcons">
                    <SearchIcon className="Icons margin-icon" style={{ fontSize: "24px" }} />
                    <MoreVertIcon className="Icons margin-icon" style={{ fontSize: "24px" }} />
                </div>
            </div>
            <div className="chatsSection">

            </div>
            <div class="bottomTextBox">
                <div className="boxIcon">
                    <InsertEmoticonIcon className="Icons margin-icon-chat" style={{ fontSize: "26px" }} />
                    <AttachFileIcon className="Icons margin-icon-chat" style={{ fontSize: "26px" }} />
                </div>
                <div className="TypeBox">
                    <input type="text" placeholder="Type a message" />
                </div>
                <div className="boxIcon">
                    <SendIcon className="Icons margin-icon-chat" style={{ fontSize: "26px", display: "none" }} />
                    <MicIcon className="Icons margin-icon-chat" style={{ fontSize: "26px" }} />
                </div>
            </div>
        </div>
    );
};

export default Chats;