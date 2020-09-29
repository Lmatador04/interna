import styles from '../styles/Pos.module.css';
import {Link, withTranslation} from '../i18n'; 
import PropTypes from 'prop-types';
import {motion} from 'framer-motion';
import Header from '../components/Header'
import { Row, Col, Card, Container,CardDeck, Image } from 'react-bootstrap'; 
import Footer  from '../components/Footer'
const Post= ({t})=>(
<>
<Header />
<div  className={styles.begin}>
<motion.div
        initial={{x: '-100vw'}}
        animate={{x: 0}}
        transition={{type:'spring', delay:0.5}}>
  <h1 className={styles.begin_content}  > {t('solutions-de-gestion')} </h1>
  </motion.div> <br></br>
<h2 className="text-white text-center  pt-3"> { t('notre-mission') }</h2>

</div>
<Container className="mt-3">
  <Row>
    <Col>
      <Link href ="/">
        <motion.div
        initial={{x: '-100vw'}}
        animate={{x: 0}}
        transition={{type:'spring', delay:0.5}}>
          <CardDeck className={styles.colum}>
  <Card style={{ width: '8rem' }}>
    <Card.Img variant="top" src="boulangerie.jpg" alt="boulagerie" />
    <Card.Body>
      <Card.Title className = {styles.title}>{t('boulangerie')} </Card.Title>
    </Card.Body>
  </Card>
  </CardDeck>
  </motion.div></Link>
  </Col>
<Col>
<motion.div
initial={{y:-250}}
animate={{y: -10}}
>
<Card style={{ width: '8rem' }}>
    <Card.Img variant="top" src="commerce.png"  alt="store"/>
    <Card.Body>
      <Card.Title className = {styles.title}>{t('magazin')}</Card.Title>
    </Card.Body>
  </Card>
  </motion.div>
  </Col>
<Col>
<motion.div
        initial={{x: '100vw'}}
        animate={{x: 0}}
        transition={{type:'spring', delay:0.5}}>
<Card style={{ width: '8rem' }}>
    <Card.Img variant="top" src="bar.jpg" />
    <Card.Body>
      <Card.Title className = {styles.title}>{t('bar restaurant')}</Card.Title>
    </Card.Body>
  </Card>
  </motion.div>
  </Col>
  </Row>
  <hr></hr>
</Container>
<h1 className={styles.tool}> {t('des outils pour')}</h1>
<Container>
<Row className="mt-5">
<Col md={7}>

    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
        <h3 className="text-center">{t('point of sale')}</h3>
<ul>
<h4> {t('transform')} </h4 >
  <li> {t('issue')}</li>
  <li> {t('apply')}</li>
  <li> {t('keep')}</li>
  <li> {t('connect')}</li>
</ul>
    
      </div>
      </div>
</Col>


<Col md={5}>
<motion.div
        initial={{x: '100vw'}}
        animate={{x: 0}}
        transition={{type:'spring', delay:0.5}}>
<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="pos.jpg" />
  </Card>
  </motion.div>
</Col>
</Row>


<Row className="mt-5">
<Col md={7}>
    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
        <h3 className="text-center">{t('inventory management')}</h3>
       
<ul>
<h4> {t('transform')} </h4 >
  <li> {t('need run out')}</li>
  <li> {t('track stock')}</li>
  <li> {t('receive automatic')}</li>
  <li> {t('send orders')}</li>
  <li> {t('transfert stock')}</li>
  <li> {t('print barcode')}</li>
</ul>
    
      </div>
      </div>
      
</Col>


<Col md={5}>
<motion.div
        initial={{x: '-100vw'}}
        animate={{x: 0}}
        transition={{type:'spring', delay:0.5}}>
<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="inventory.jpg"  alt="image inventaire" />
  </Card>
  </motion.div>
</Col>
</Row>

<Row className="mt-5">
<Col md={7}>
    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
        <h3 className="text-center">{t('sales analytics')}</h3>
       
<ul>
<h4> {t('access your')} </h4 >
  <li> {t('view revenu')}</li>
  <li> {t('track')}</li>
  <li> {t('determine bes')}</li>
  <li> {t('view')}</li>
  
</ul>
    
      </div>
      </div>
</Col>


<Col md={5}>
<motion.div
        initial={{x: '100vw'}}
        animate={{x: 0}}
        transition={{type:'spring', delay:0.5}}>
<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="analytic.png"  alt="image des ventes" />
  </Card>
  </motion.div>
</Col>
</Row>

<Row className="mt-5">
<Col md={7}>
    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
        <h3 className="text-center">{t('Multi store')}</h3>
<ul>
<h4> {t('grow your business')} </h4 >
  <li> {t('compare')}</li>
  <li> {t('manage items')}</li>
</ul>
    
      </div>
      </div>
</Col>


<Col md={5}>
<motion.div
        initial={{x: '100vw'}}
        animate={{x: 0}}
        transition={{type:'spring', delay:0.5}}>
<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="multistore.jpg"  alt="image multi site " />
  </Card>
  </motion.div>
</Col>
</Row>


</Container>

<Footer />
</>
    )
   
   
    Post.getInitialProps = async () => ({
        namespacesRequired: ['header', 'post', 'footer'],
      })
      Post.propTypes = {
        t: PropTypes.func.isRequired,
      }
    
export default withTranslation ('post')(Post)