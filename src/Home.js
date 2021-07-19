import React, { useEffect} from 'react';
import {
  Card,
  Button,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Row,
  Col,
  Container,
} from 'reactstrap';
import styled from 'styled-components';
import logo from './Walpapers/';
import logo1 from './Walpapers/';

import 'bootstrap/dist/css/bootstrap.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import en from './lang/en';
import fr from './lang/fr';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';


counterpart.registerTranslations('en', en);
counterpart.registerTranslations('fr', fr);
counterpart.setLocale('en');


const Styles = styled.div`
  .container {
    padding-top: 75px;
    width: 750px;
  }
`;

const Link = (props) => {
  return (
    <Translate
      content={props.content}
      component="a"
      href="//google.com"
      target="_blank"
    />
  )
}


export const Home = () => {

  useEffect(() => {
    // Update the document title using the browser API
    const langset = localStorage.getItem('lang') === 'en' || localStorage.getItem('lang') === 'fr';
    const lang = langset ? localStorage.getItem('lang') : localStorage.setItem('lang', 'en');
    counterpart.setLocale(lang);
  });

  const link = <Link content="link"/>;

  const renderTooltipGame = (props) => (
    <Tooltip {...props}><Translate content="tooltipbtnGameArea" className="class"/></Tooltip>
  );
  const renderTooltipSubs = (props) => (
    <Tooltip {...props}><Translate content="tooltipbtnSubscription" className="class"/></Tooltip>
  );
  return (
    <Styles>
      <Container>
        <Row>
          <Col sm="6">
            <Card>
              <CardImg top width="100%" src={logo} alt="Card image cap" />
              <CardBody>
                <CardTitle>
                  <h2 style={{ textAlign: 'center' }}>
                    <b><Translate content="GameArea" className="class"/></b>
                  </h2>
                </CardTitle>
                <CardText style={{ textAlign: 'center' }}>
                  <Translate content="DescriptionGameArea" component="h5" className="class"/>
                </CardText>
              </CardBody>
              <OverlayTrigger placement="top" overlay={renderTooltipGame}>
                <Button href="/gameArea"><Translate content="btnGameArea" className="class"/></Button>
              </OverlayTrigger>
            </Card>
          </Col>
          <Col sm="6">
            <Card>
              <CardImg top width="100%" src={logo1} alt="Card image cap" />
              <CardBody>
                <CardTitle>
                  <h2 style={{ textAlign: 'center' }}>
                    <b><Translate content="Subscription" className="class"/></b>
                  </h2>
                </CardTitle>
                <CardText style={{ textAlign: 'center' }}>
                <Translate content="DescriptionSubscription" component="h5" className="class"/>
                </CardText>
              </CardBody>
              <OverlayTrigger placement="top" overlay={renderTooltipSubs}>
                <Button href="/subscription"><Translate content="btnSubscription" className="class"/></Button>
              </OverlayTrigger>
            </Card>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};