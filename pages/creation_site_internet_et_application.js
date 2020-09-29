import { Container,Row, Card} from 'react-bootstrap';
import { i18n, withTranslation, Link } from '../i18n'
import styles from '../styles/siteweb.module.css';
import Header from '../components/Header';
import Footer  from '../components/Footer'
import PropTypes from 'prop-types'
import motion from 'framer-motion'
const SiteWeb= ({t})=>(
    <>
    <Header />
    <div className= {styles.begin}>
<h1 className={styles.begin_content}  >{t('site vitrine')} </h1>
</div>
<Container>
<Row className="mt-5">
<div className="col-lg-7 col-md-6">

    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
            <h3 className= "text-center">{t('creation de site')} </h3>
<h6> {t('une realisation')} </h6 >
  
    
      </div>
      </div>
</div>


<div className= "col-md-6 col-lg-5">

<Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src="webdesign.jpg" />
  </Card>
  
</div>
</Row>
</Container>
<hr></hr>
<div className="container">
<div className="row">

      <div className="col-md-4">
      <Card style={{ width: '7rem' }}>
    <Card.Img   variant="top" src="website.jpg" alt="balise " />
    </Card>
    
<h2>{t('creation site vitrine')}</h2>
<p>{t('nos designers')}</p>
        
      </div>
      <div className="col-md-4">
      <Card style={{ width: '6rem', }}>
    <Card.Img   variant="top" src="icon.png" alt="balise " />
    </Card>
<h2> {t('developpement web')}</h2>
<p> {t('nos developpeurs')}  </p>
      </div>
      <div className="col-md-4">
      <Card style={{ width: '8rem' }}>
    <Card.Img variant="top" src="app.jpg" alt="mobile app" />
    </Card>
    <h2> {t('developpement mobile')}</h2>
<p> {t('nous vous')}  </p>
             </div>
    </div>
    </div>
    <Footer />
    </>
)

SiteWeb.getInitialProps = async () => ({
        namespacesRequired: ['header', 'siteweb', 'footer'],
      })
      SiteWeb.propTypes = {
        t: PropTypes.func.isRequired,
      }
    
export default withTranslation ('siteweb')(SiteWeb)