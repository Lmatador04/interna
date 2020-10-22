import { i18n, withTranslation, Link } from '../i18n'
import styles from '../styles/siteweb.module.css';
import Header from '../components/Header';
import {Card, Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types'
import {motion}  from 'framer-motion'
import Footer  from '../components/Footer'
const Emarketing= ({t})=>(
    <>
    <Header />
    <div className= {styles.begin_emarketing}>
        <motion.div
        initial={{y: -300}}
        animate={{y: -15}} 
        >
<h1 className={styles.begin_content} >{t('referencement')} </h1>
</motion.div>
</div>
<Container>
<Row className="mt-5">
<div className="col-lg-7 col-md-6">

    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
        <motion.div
        initial={{x: -300}}
        animate={{x:0 }} >
            <h3 className= "text-center">{t('optimiser le referencement')} </h3>
            </motion.div>
            <motion.div
        initial={{y: -200}}
        animate={{y:-10 }}
        transition={{delay: 0.2, type:'spring', stiffness: 5}} >         
<p className="mt-3"> {t('pourquoi la recherche')} </p >
</motion.div>
  </div>
      </div>
</div>
<div className= "col-md-6 col-lg-5">
<motion.div
        initial={{x: 100}}
        animate={{x: 0}} >
<Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src="seo.jpg" />
  </Card>
  </motion.div>
</div>
</Row>
</Container>
<hr></hr>
<div className="container">
<div className="row">

      <div className="col-md-4">
      
    
<h2>{t('optimisation')}</h2>
<p>{t('nos designer')}</p>
        
      </div>
      
      <div className="col-md-4">
          
<h2> {t('booster')}</h2>
<p> {t('google est le')}  </p>
      </div>
      <div className="col-md-4">
     
    <h2> {t('solution webmarketing')}</h2>
<p> {t('afin de repondre')}  </p>
             </div>
    </div>
    </div>
    <Footer />
    </>
)

Emarketing.getInitialProps = async () => ({
        namespacesRequired: ['header','emarketing', 'footer' ],
      })
      Emarketing.propTypes = {
        t: PropTypes.func.isRequired,
      }
    
export default withTranslation ('emarketing')(Emarketing)