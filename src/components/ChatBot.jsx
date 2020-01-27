import React from 'react'
import Bot from './Bot';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    root: {
        width: '70%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        Link: {
            fontSize: "30px"
        }
    },
}));

export default function ChatBot() {
    const classes = useStyles();
    const preventDefault = event => event.preventDefault();
    return (
        <div className={classes.root}>
            <h1
                style={{ fontFamily: "fangsong", marginTop: "5px", colorAdjust: "revert", color: "Red" }}>
                Levels of crime</h1>
            <Alert severity="error">Sexual Assault, Murder</Alert>
            <Alert severity="warning">CyberCrime, Smuggling, Terrorism</Alert>
            <Alert severity="info">Theft, Speeding, Shoplifting</Alert>
            <Alert severity="success">White Collar Crime , Vandalism, Torture</Alert>
            <div className={classes.Link} style={{ fontFamily: "fangsong", marginTop: "50px", marginLeft: "15px" }}>
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSevWa_hnD09NOBhl4EH5pRCHICmkVNrOC_MjhocqgU8GOSH1Q/viewform?vc=0&c=0&w=1" onClick={preventDefault} variant="body2" target="_blank" >
                    <h1>
                        <u>
                            Crime Registration
                       </u>
                    </h1>
                </Link>
            </div>
            <Bot />
        </div>
    )
}
