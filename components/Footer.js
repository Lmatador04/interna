import PropTypes from 'prop-types'
import { version } from 'next-i18next/package.json'
import { withTranslation, Link } from '../i18n'

const Footer = ({ t }) => (
  <>

    <div className="footer" id="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">

                    <h4> Radiance-consulting </h4>
                </div>
                <div className="col-lg-4 col-sm-4 col-xs-4">
                    <h4> {t('Contactez nous')}</h4>
                    <ul>
                    <li><a className="email" ><i className="fas fa-envelope-open-text"></i>Mail: afk1995wilfried@gmail.com </a> </li>
                        <br/>
                        <li> <h6>  <i className="fas fa-phone-square-alt"></i> Tel: +237 69247072 </h6> </li>
                        <li> <h6> FAQ </h6> </li>
                    </ul>
                </div>
                <div className="col-lg-4 col-sm-4 col-xs-4">
                <h4 >  {t('Liens Rapides')} </h4>
                    <ul>
                      
          <Link href= "/gestion-des-points-de-vente"><h5><a className="text-white" >{t('Gestion des points de ventes')}</a></h5></Link>
          <Link href= "/creation_site_internet_et_application"><h5><a className="text-white" > {t('Creation de site web et applications')} </a></h5></Link>
          <Link href= "/emarketing"><h5><a className="text-white" > {t('Référencement et E-marketing')} </a></h5></Link>
          <Link href= "/"><h5><a className="text-white" >  {t('Acceuil')} </a></h5></Link>
                    </ul>
                </div>
               
            
        </div>
        
    </div>
   
                          
    <div className="footer-bottom">
        <div className="container">
            <p className="pull-left copyright"> Copyright © Radiance 2020. All right reserved. </p>
       
        </div>
    </div>
    
</div>



        <style jsx>{
        `.full {
          width: 100%;    
      }
      .gap {
        height: 30px;
        width: 100%;
        clear: both;
        display: block;
      }
      .footer {
        background: #002147;
        height: auto;
        padding-bottom: 30px;
        margin-top: 10px; 
        position: relative;
        width: 100%;
        border-bottom: 1px solid #CCCCCC;
        border-top: 1px solid #DDDDDD;
      }
      .footer p {
        margin: 0;
      }
      .footer img {
        max-width: 100%;
      }
      .footer h3 {
        color: white;
        font-size: 18px;
        font-weight: 600;
        line-height: 27px;
        padding: 40px 0 0px;
        text-transform: uppercase;
        margin-bottom: 15px;
      }
      
      .footer h4 {
        color: white;
        font-size: 2em;
        font-weight: 600;
        line-height: 38px;
        padding: 40px 0 10px;
        font-family: cursive;
        font-weight: lighter
      }
      
      .footer ul {
        font-size: 13px;
        list-style-type: none;
        margin-left: 0;
        padding-left: 0;
        margin-top: 0px;
        color: #7F8C8D;
        padding: 0 0 8px 0;
      }
      
      .email{
        border-bottom: 3px solid #fff;
      }
      .footer ul li a {
        padding: 0 0 12px 0;
        display: block;
      }
      .footer a {
        color: white;
        font-weight: lighter;
      }
      
      .footer p {
        color: white;
        font-weight: lighter;
        font-size: 
      }
      
      .footer a:hover {
        text-decoration:none;
        font-weight: bold;
      }
      .supportLi h4 {
        font-size: 20px;
        font-weight: lighter;
        line-height: normal;
        margin-bottom: 0 !important;
        padding-bottom: 0;
      }
      
      .bg-gray {
        background-image: -moz-linear-gradient(center bottom, #BBBBBB 0%, #F0F0F0 100%);
        box-shadow: 0 1px 0 #B4B3B3;
      }
      
      }
      .footer a {
        color: #78828D
      }
      
      .footer-bottom {
        margin-top: 2em;
        border-top: 1px solid #DDDDDD;
        padding-top: 20px;
        padding-bottom: 10px;
      }
      .footer-bottom p.pull-left {
        padding-top: 6px;
        font-size: 0.75em
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
