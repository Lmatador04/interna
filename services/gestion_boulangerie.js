
import {Container, Row, Col} from 'react-bootstrap'

const Looter = () => (
  <>
        <Container className ="footer">
        <Row>
          <Col xs={5} md={6}  lg={6}>
          <h5 >Liens Rapides</h5>
        <ul className="list-unstyled text-small">
          <li><a className="text-white" >Services et marchés</a></li>
          <li><a className="text-white" >Partenaires</a></li>
          <li><a className="text-white" >Accueil</a></li>

        </ul> 
          </Col>
          <Col xs={7} md={6} lg={6}>
          <h5  >Contactez nous</h5>
        <ul className="list-unstyled text-small">
          <li><a className="text-white" >   Tel: +33 749 449 619/ +239 991 17586</a></li>
          <li><a className="text-white" > Location: Rue morta, ao lado do BISTP Sao Tomé et principe</a></li>
          <li><a className="text-white" > Mail: info@macgregor-ms.com</a></li>
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
        <style jsx>{
        `.border-top{
          background-color: #0070f3;
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




export default Looter
