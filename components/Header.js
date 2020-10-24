import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';
import { i18n, withTranslation, Link } from '../i18n'
import styles from '../styles/Home.module.css';
import PropTypes from 'prop-types'
const AppLink = ({children, className, href}) =>
<Link href={href}>
  <a className= {className}>{children}</a>
</Link>

//import { Download } from 'react-bootstrap-icons';

 const Header = ({ t }) =>  (
        <>
<Navbar bg="white"  expand="lg" fixed="top" sticky="bottom" >
  <Navbar.Brand href="#home" >
  <img
        src="img/logo.png"
        width="150"
        height="60"
        className="d-inline-block align-top"
        alt="Radiance logo"
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="nav-item mr-auto">
      <AppLink href="/" ><a className="nav-link nav-item" ><i className="fas fa-home"></i>{t('accueil')}</a></AppLink>
     
      <NavDropdown title="Services" id="collasible-nav-dropdown">
    <AppLink  href= "/gestion-des-points-de-vente"><a className="dropdown-item" >{t('pos')}</a></AppLink>
        <AppLink href="/creation_site_internet_et_application"><a className="dropdown-item" >{t('siteweb')}</a> </AppLink>
        <AppLink href="#action/3.3"><a className="dropdown-item" > {t('callcenter')}</a> </AppLink>
        <NavDropdown.Divider />
    <AppLink href= "/emarketing"> <a className="dropdown-item ">{t('marketingdigital')}</a></AppLink>
      </NavDropdown>
    </Nav>
    <Nav>
    <AppLink href="/"><a className="nav-link ">{t('A-propos-de-nous')}</a></AppLink>
      <Nav.Link eventKey={2} href="components/ContactForm">
        Contact
      </Nav.Link>
      
      <Button variant="outline-success"
          onClick={() => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'en')}
        >
         EN 
        </Button>

        <Button variant="outline-success"
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'fr')}
        >
         FR
        </Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>

<style jsx>
  {
    `h1{ 
      color: #002e5d;
      margin-top: 2rem;
      font-size: 2.125rem;
      position: relative;
    }
    
    a{
      color:#76b737;
  text-decoration: none;
  margin-right:3px
    }

    a:hover {
      border-bottom: 3px solid #76b737;
      transition: all 0.2s ease-out;
      text-decoration: none;
      color:#76b737;
      background-color:#fff;
      
    }
    
  
      
      h1::after{
        background-color: fuchsia;
        margin: 2;
        bottom: -0.5rem;
        content: '';
        display: inline-block;
        height: 0.3125rem;
        left: 0;
        position: absolute;
        vertical-align: top;
        width: 5rem;
      
    }`
  }
</style>
</>
 )

 Header.getInitialProps = async () => ({
  namespacesRequired: ['header'],
})
Header.propTypes = {
  t: PropTypes.func.isRequired,
}
export default withTranslation('header')(Header)