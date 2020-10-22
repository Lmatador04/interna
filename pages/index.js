import PropTypes from 'prop-types'
import {  Link, withTranslation } from '../i18n'
import {Carousel, Card, Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import styles from '../styles/Pos.module.css';


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
 
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));




//import { motion, AnimatePresence } from "framer-motion"
const Homepage = ({ t }) =>{
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
   return(
  <>
  <Head>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous"></link><script type="text/javascript" src="floating-wpp.min.js"></script>
 
  <script async data-id="64729" src="https://cdn.widgetwhats.com/script.min.js"></script>
  </Head>
  
    <main>
      <Header />
      
      <div className={styles.begin_conten} > </div>
      <div>
 
<h1 className={styles.tool_index}>
Nos services
</h1>

      
      </div>
    </main>

    <div id="service" className="three_box">
         <div className="container">
            <div className="row">
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="Soft-box">
                     <i><img src="img/service1.png" alt="#" /></i>
                     <h3> Software</h3>
                     <p>It is a long established fact that a reader will be distracted by the readable contentt has a more-or-less norf letters,</p>
                     <p><Link href="emarketing"  ><a class="btn btn-success" role="button" >View details »</a></Link></p>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="Soft-box">
                     <i><img src="img/service2.png" alt="#" /></i>
                     <h3>For Mobile</h3>
                     <p>It is a long established fact that a reader will be distracted by the readable contentt has a more-or-less norf letters,</p>
                     <p><Link href="/gestion-des-points-de-vente"><a class="btn btn-success"  role="button">View details »</a></Link></p>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="Soft-box">
                     <i><img src="img/service3.png" alt="#" /></i>
                     <h3>For Computer</h3>
                     <p>It is a long established fact that a reader will be distracted by the readable contentt has a more-or-less norf letters,</p>
                     <p><Link href="/creation_site_internet_et_application"><a class="btn btn-success"  role="button">View details »</a></Link></p>
                  </div>
               </div>
            </div>
         </div>
      </div>

     

      <div id="why" className="weare">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Who <span className="white">We Are</span></h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div className="main_weare">
                     <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                           <div id="box_ho" className="weare-img_box">
                              <figure><img src="img/why1.png" alt="#" /></figure>
                           </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                           <div className="weare-box">
                              <h3>middle of text.</h3>
                              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat</p>
                              <a className="read_more bg" href="#">Read More</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="main_weare2 ">
                     <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                           <div id="box_ho" className="weare-img_box">
                              <figure><img src="img/why2.png" alt="#" /></figure>
                           </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                           <div className="weare-box">
                              <h3>middle of text.</h3>
                              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat</p>
                              <a className="read_more bg" href="#">Read More</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="container-fluid">
        <div className="row">
        <div className="col-md-6">
                  <div className="ask_img">
                  <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="img/ask.jpg" />
  </Card>
                     
                  </div>
               </div>
               <div className= "col-md-6">




               
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>General settings</Typography>
          <Typography className={classes.secondaryHeading}>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Users</Typography>
          <Typography className={classes.secondaryHeading}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
            diam eros in elit. Pellentesque convallis laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Advanced settings</Typography>
          <Typography className={classes.secondaryHeading}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    







               </div>
        </div>
      </div>

    <Footer />
    
        <style jsx>{
        `.border-top{
          background-color: #76b737;
          padding:10px;
           margin-top:4rem;
           border-top: 1px
          
        }
        h5{
          color: #fff;
          font-size: 20px;
          margin-top:4rem;
          align-items: center;
        }
        li{
         font-size: 17px;
         color: #ffffff;
         margin: 7px; 
        }
        a{
          color: white; 
        }
        }
        .three_box {
          font-family: Poppins;
     }
     
     .three_box .Soft-box i {
          background: #fff;
          width: 120px;
          height: 120px;
          border-radius: 77px;
          border: #41c365 solid 4px;
          align-items: center;
          display: flex;
          justify-content: center;
          margin: 0 auto;
          flex-wrap: wrap;
          transition: ease-in all 0.5s;
     }
     
     .three_box .Soft-box i:hover {
          background: #000;
          transition: ease-in all 0.5s;
     }
     
     .three_box .Soft-box h3 {
          padding: 20px 0px 20px 0px;
          font-size: 30px;
          line-height: 30px;
          color: #1f1716;
          display: block;
          font-weight: 500;
     }
     
     .three_box .Soft-box {
          text-align: center;
          background-color: transparent;
          padding: 20px 15px;
     }
     
     .three_box .Soft-box p {
          font-size: 17px;
          line-height: 30px;
          color: #1f1716;
     }


     .weare {
      margin-top: 70px;
      background: #d5ede0;
      font-family: Poppins;
      padding: 80px 0;
 }
 
 .weare .titlepage {
      text-align: center;
 }
 
 .weare .titlepage h2 {
      color: #000;
 }
 
 .weare .weare-box h3 {
      padding: 20px 0px 20px 0px;
      font-size: 29px;
      line-height: 30px;
      color: #090808;
      display: block;
      font-weight: 500;
      text-transform: uppercase;
 }
 
 .weare .weare-box {
      text-align: center;
      background-color: transparent;
      border-radius: 20px;
      transition: ease-in all 0.5s;
      text-align: left;
 }
 
 .weare .weare-box p {
      font-size: 17px;
      line-height: 34px;
      color: #090808;
      padding: 5px 0;
 }
 
 .weare .weare-img_box figure {
      margin: 0;
 }
 
 .weare .weare-img_box figure img {
      width: 100%;
 }
 
 .bg {
      font-size: 17px;
      background-color: transparent;
      color: #3fbc61;
      padding: 9px 0px;
      width: 100%;
      max-width: 190px;
      float: left;
      text-align: center;
      margin-top: 20px;
      border: #3fbc61 solid 2px;
      text-transform: uppercase;
      font-weight: 500;
 }
 
 .bg:hover {
      background: #3fbc61;
      color: #fff;
 }
 
 .main_weare {
      padding-bottom: 30px;
 }
 
     
        `
      }

      </style>

  </>
)

}

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
})

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Homepage)