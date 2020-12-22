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
                <h2>What business value do APIs generate? </h2>
                <p>When regulators and industry decide to move to an open banking approach, they do so because they believe that there are substantial benefits for fintech market entrants, consumers, businesses, the wider economy, and for banks themselves.</p>
                <p>But as a new technological and business approach, we are still at the early days of being able to quantify the benefits that open banking can generate.</p>
                <p>Drawing on the work of API industry leader Maria Garcia Luengo, Platformable has developed an open banking values model that identifies how banks are generating value from their API strategies. </p>
                <p>We research unstructured data (industry interviews, case studies, reports, presentations, and blog posts) that describe and quantify how open banking APIs have created real value for the banks making them available. Our Open Banking Value Tool helps you identify the example use cases that will help you advocate for an open banking platform approach.</p>
                <div className={classes.footerBox}>
                    <div className={classes.side}></div>
                    <div className={classes.footer}>
                        <p>To learn more about our model or to provide feedback, check out our blog post: Introducing the Open Banking Value Tool.</p>
                    </div>
                </div>
            </div>
            <div className="introImg">
            <img className={classes.image} src={process.env.PUBLIC_URL + "/images/table.png"} alt="table" />
            </div>
            </div>
            </Container>
        </>
    )
}