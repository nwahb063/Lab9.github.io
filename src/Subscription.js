import React, { useEffect } from 'react'
import { Card, Button, CardBody, CardTitle, CardText, CardImg, Row, Col, Container } from 'reactstrap';
import styled from 'styled-components';

import bronze from './assets/bronze.png';
import silver from './assets/silver.jpeg';
import gold from './assets/gold.jpg';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './lang/en';
import fr from './lang/fr';
counterpart.registerTranslations('en', en);
counterpart.registerTranslations('fr', fr);
counterpart.setLocale('en');

const Styles = styled.div`
  .container {
    padding-top: 75px;
    width: 100%;
  }
`;


export const Subscription = () => {

  useEffect(() => {
    // Update the document title using the browser API
    const langset = localStorage.getItem('lang') === 'en' || localStorage.getItem('lang') === 'fr';
    const lang = langset ? localStorage.getItem('lang') : localStorage.setItem('lang', 'en');
    counterpart.setLocale(lang);
  });

  return (
    <Styles>
      <Container>
        <Row>
          <Col sm="4">
          <Card>
            <CardImg top width="100%" src={bronze} alt="Card image cap" />
            <CardBody>
              <CardText style={{ textAlign: 'center' }}><Translate content="BronzeSubscription" className="class" /></CardText>
            </CardBody>
            <Button style={{backgroundColor: "#cd7f32"}}><Translate content="btnBronzeSubscription" className="class" /></Button>
          </Card>
          </Col>
          <Col sm="4">
          <Card>
            <CardImg top width="100%" src={silver} alt="Card image cap" />
            <CardBody>
              <CardText style={{ textAlign: 'center' }}><Translate content="SilverSubscription" className="class" /></CardText>
            </CardBody>
            <Button><Translate content="btnSilverSubscription" className="class" /></Button>
          </Card>
          </Col>
          <Col sm="4">
          <Card>
            <CardImg top width="100%" src={gold} alt="Card image cap" />
            <CardBody>
              <CardText style={{ textAlign: 'center' }}><Translate content="GoldSubscription" className="class" /></CardText>
            </CardBody>
            <Button style={{backgroundColor: "#FFD700"}}><Translate content="btnGoldSubscription" className="class" /></Button>
          </Card>
          </Col>
        </Row>
      </Container>
    </Styles>
    );
};