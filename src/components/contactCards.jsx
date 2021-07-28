import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const UseStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    large: {
        width: theme.spacing(4.8),
        height: theme.spacing(4.8),
    },
}));
const contactCards = () => {
    const classes = UseStyles();
    return (
        <div className="contactCardsContainer">
            <div className="contactCard">
                <Avatar className={classes.large} src="https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F150487284_949671329187245_2215871401401544621_n.jpg%3Fccb%3D11-4%26oh%3D6ca2894440c518cabc9b5f695d18afcb%26oe%3D610616F7&t=s&u=918902029392%40c.us&i=1621765318&n=%2BFiy8vhJGyJGPihYmfDfLYZmhYMhsyL7as5joWRtMEw%3D" />
                <div className="cardTexts">
                    <div>
                        <div class="cardHeading">
                            <div className="contactName">Rishav Chanda</div>
                            <div className="cardTime">2:00 PM</div>
                        </div>
                        <div className="contactText">dzghsdf fdyhsdfhdfjd dfh</div>
                    </div>
                    <div className="dividerRow" />
                </div>
            </div>
        </div>
    );
};

export default contactCards;