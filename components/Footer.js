import PropTypes from 'prop-types'
import { version } from 'next-i18next/package.json'
import { withTranslation, Link } from '../i18n'
import {Container, Row, Col} from 'react-bootstrap'
import styles from '../styles/Pos.module.css'

const Footer = ({ t }) => (
  <>
    <div className="border-top">
    <Container  >
        <Row>
          <Col xs={5} md={6}  lg={6}>
          <h5 >  {t('Liens Rapides')} </h5>
        <ul className="list-unstyled text-small">
<Link href= "/gestion-des-points-de-vente"><a className="text-white" >{t('Gestion des points de ventes')}</a></Link><br />
          <Link href= "/creation_site_internet_et_application"><a className="text-white" > {t('Creation de site web et applications')} </a></Link><br />
          <Link href= "/emarketing"><a className="text-white" > {t('Référencement et E-marketing')} </a></Link><br />
          <Link href= "/"><a className="text-white" >  {t('Acceuil')} </a></Link><br />
        </ul> 
          </Col>
          <Col xs={7} md={6} lg={6}>
          <h5  >  {t('Contactez nous')} </h5>
        <ul className="list-unstyled text-small">
          <li><a className="text-white" > <i class="fas fa-phone-square-alt"></i>  Tel: +237 69247072</a></li>
          <li><a className="text-white" > Mail: afk1995wilfried@gmail.com </a> </li>
          <li><a className="text-white" >  FAQ</a></li>
        </ul>
          </Col>
         
        </Row>

      <Row className= "mt-2">
				<Col xs={12} sm={12} md={12}className="mt-2 text-center text-white" >
        	<p className="h6 text-center">©all right reserve 2020 </p>
          
				</Col>	
        </Row>
        
        </Container>
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


Footer.getInitialProps = async () => ({
  namespacesRequired: ['common','footer'],
})

Footer.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('footer')(Footer)
