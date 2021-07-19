import React, { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import counterpart from 'counterpart';
import en from '../lang/en';
import fr from '../lang/fr';
import Translate from 'react-translate-component';
counterpart.registerTranslations('en', en);
counterpart.registerTranslations('fr', fr);
counterpart.setLocale('en');

// https://reactjs.org/docs/thinking-in-react.html

export const GameDescription = (props) => {
  useEffect(() => {
    // Update the document title using the browser API
    const langset =
      localStorage.getItem('lang') === 'en' ||
      localStorage.getItem('lang') === 'fr';
    const lang = langset
      ? localStorage.getItem('lang')
      : localStorage.setItem('lang', 'en');
    counterpart.setLocale(lang);
  });

  // <Translate content="MoreInfo" className="class" />
  const renderTooltipButton = (props) => (
    <Tooltip {...props}>
      {' '}
      <Translate content="tooltipMoreInfo" className="class" />
    </Tooltip>
  );

  const renderTooltipRating = (props) => (
    <Tooltip {...props}>
      <Translate content="tooltipRating" className="class" /> {props}
    </Tooltip>
  );

  return (
    <div className="container" style={{ paddingTop: '50px', width: '100%' }}>
      <div className="row">
        <div className="col-6">
          <img
            src={props.location.state.data.imageUrl}
            alt=""
            style={{ width: '100%' }}
          />
        </div>
        <div className="col-6">
          <div className="row">
            <span className="input-group-text" style={{ width: '100%' }}>
              <h3>{props.location.state.data.title}</h3>
            </span>
          </div>
          <div className="row">
            <div className="card" style={{ height: '100%' }}>
              <div className="card-body">
                <h5 className="card-title">
                  {' '}
                  <div className="row">
                    <div className="col-6">
                      <span className="input-group-text">
                      <Translate content="Date" className="class" /> : {props.location.state.data.year}
                      </span>
                    </div>
                    <div className="col-6">
                      <span className="input-group-text">
                      <Translate content="Price" className="class" /> : {props.location.state.data.price} $
                      </span>
                    </div>
                  </div>
                </h5>

                <span className="input-group-text">Description</span>
                <p className="card-text" style={{ marginTop: '15px' }}>
                  {props.location.state.data.description}
                </p>
                <span className="input-group-text">      <Translate content="Rating" className="class" /></span>
                <OverlayTrigger
                  placement="top"
                  overlay={renderTooltipRating(
                    props.location.state.data.rating
                  )}
                >
                  <div className="progress" style={{ marginTop: '15px' }}>
                    <div
                      className="progress-bar progress-bar-striped bg-info"
                      role="progressbar"
                      style={{
                        width: props.location.state.data.rating,
                        ariaValuemax: '75',
                        ariaValuemin: '0',
                        ariaValuemax: '100',
                      }}
                    ></div>
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={renderTooltipButton}>
                  <a
                    href="/gameArea"
                    className="btn btn-dark"
                    style={{ marginTop: '15px' }}
                  >
                  <Translate content="btnReturnList" className="class" />
                  </a>
                </OverlayTrigger>
              </div>
            </div>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};