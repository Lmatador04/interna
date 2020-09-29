import PropTypes from 'prop-types'
import {  Link, withTranslation } from '../i18n'
import {Carousel, Card, Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import styles from '../styles/Pos.module.css';

//import { motion, AnimatePresence } from "framer-motion"
const Homepage = ({ t }) => (
  <>
  <Head>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous"></link><script type="text/javascript" src="floating-wpp.min.js"></script>
 
  </Head>
    <main>
      <Header  />
  
      <div>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="callcenter.jpg"
      width="100"
      height="500"
      alt=""
    />
<Carousel.Caption>
</Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="POS.jpg"
      width="100"
      height="500"
      alt=""
    />
<Carousel.Caption>
</Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="restaurant-bar.jpg"
      width="100"
      height="500"
      alt=""
    />
<Carousel.Caption>
</Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="seo.jpg"
      width="100"
      height="500"
      alt=""
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<h1 className={styles.tool_index}>
Nos services
</h1>
<div className="jumbotron mt-3">
<div className ="container">
  <div className="row">
    <div className="col-md-4">
    
        <h2>Site Internet et Application</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p><Link href="/creation_site_internet_et_application"><a class="btn btn-success"  role="button">View details »</a></Link></p>
      
  </div>
  <div className="col-md-4">

  <h2>Gestion des points de ventes</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p><Link href="/gestion-des-points-de-vente"><a class="btn btn-success"  role="button">View details »</a></Link></p>
  </div>
  <div className="col-md-4">

  <h2>Référencement et e-marketing</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p><Link href="emarketing"  ><a class="btn btn-success" role="button" >View details »</a></Link></p>
  </div> 
</div>
<div className="row">

<h2>Installation d'un système pour Call Center </h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p><a class="btn btn-success" href="#" role="button">View details »</a></p>
    
</div>
</div>
</div>

        
      
      </div>
    </main>
    <Footer />
    <div className="border-top">
   
        </div>
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
        `
      }

      </style>

  </>
)

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
})

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Homepage)
