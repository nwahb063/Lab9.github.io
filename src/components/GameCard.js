import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const Styles = styled.div`
  .movie-card {
    margin-top: 25px;
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 10px;
    max-width: 300px;
    width: 300px;
  }
  .movie-card.card {
    ${'' /* min-height: 350px; */}
    height: 585px;
  }
`;

// https://github.com/drminnaar/react-movie-cards/tree/master/src/components

const Game = (props) => {
  const renderTooltipInfo = (props) => (
    <Tooltip {...props}>
      <Translate content="tooltipMoreInfo" className="class" />
    </Tooltip>
  );

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

  return (
    <Styles>
      <div className="movie-card">
        <div className="movie-card card">
          <img
            className="card-img-top"
            // src="https://picsum.photos/seed/picsum/318/180"
            src={props.game.imageUrl}
            alt=""
            style={{ width: '100%', height: '200px' }}
          />
          <div className="card-body">
            <h4 className="card-title">{props.game.title}</h4>
            <h6 className="card-subtitle mb-2 text-muted">Description</h6>
            <p className="text-justify" style={{ fontSize: '14px' }}>
              {props.game.description}
            </p>
          </div>
          <div className="card-footer">
            <div className="clearfix">
              <div className="card-footer-badge ">
                <div className="float-left">
                  {props.game.year}/{props.game.price} $
                </div>

                <div className="float-right">
                  <OverlayTrigger placement="top" overlay={renderTooltipInfo}>
                    <Link
                      to={{
                        pathname: '/gameInfo',
                        state: {
                          data: props.game,
                        },
                      }}
                    >
                      <Translate content="MoreInfo" className="class" />
                    </Link>
                  </OverlayTrigger>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

Game.defaultProps = {
  movie: {},
};

Game.propTypes = {
  movie: PropTypes.object,
};
export default Game;