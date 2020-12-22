import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100vw',
        backgroundColor:'#f4f4f4'
    },
    text: {
        padding: '3rem 2rem 3rem 4rem'
    },
    imageBox: {
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        },
    },
    image: {
        opacity:'1',
        // width: '80%',
        // paddingTop: '5rem',
        // paddingBottom: '2rem'
    },
    side: {
        display: 'inline-block',
        backgroundColor: '#1C014C',
        width: '50px'
    },
    footerBox: {
        display: 'flex',
        marginTop: '15px'
    },
    footer: {
        backgroundColor: '#E7EBF1',
        padding: '0 10px 10px 10px'
    }
}));
export default function Table() {
    const classes = useStyles();
    return (

        <>
            <Container>
            <div className="infoIntro">
            <div className="introText">
            <h1>Open Banking Value Tool:</h1>
                <h2>What evidence do we have that open banking is creating benefits for the banks that open APIs? </h2>
                <p>Drawing on the work of API industry leader Maria Garcia Luengo, we have identified a model to measure the value of open APIs for bank themselves.</p>
                <p>Use our open banking value tool to select a location and the type of bank. Choose which type of value you want to review. You will see a collection of data points where the benefits of banking APIs has been documented.</p>
                <p><span>Roadmap:</span> We will release tools that share evidence of the value of open banking APIs for fintech and consumers in 2021.</p>
                <a href="" className="learnMoreBtn">Learn More</a>
            </div>
            <div className="introImg">
            <img className={classes.image} src={process.env.PUBLIC_URL + "/images/table.png"} alt="table" />
            </div>
            </div>
            </Container>
        </>
    )
}