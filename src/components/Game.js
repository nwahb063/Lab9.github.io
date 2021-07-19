import React, { Component, useState } from 'react';
import GameList from './GameList';
import GameData from '../data/GameData.js';
import searchIcon from '../Walpapers/iconsearch.png';

import 'bootstrap/dist/css/bootstrap.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import en from '../lang/en';
import fr from '../lang/fr';
counterpart.registerTranslations('en', en);
counterpart.registerTranslations('fr', fr);
counterpart.setLocale('en');

export default class Games extends Component {
  constructor(props) {
    super();

    this.state = {
      games: GameData.getGames(),
    };
    this.filterGamesPrice(true);
  }

  componentDidMount() {
    const langset = localStorage.getItem('lang') === 'en' || localStorage.getItem('lang') === 'fr';
    const lang = langset ? localStorage.getItem('lang') : localStorage.setItem('lang', 'en');
    counterpart.setLocale(lang);
  }

  filterGames = (value) => {
    if (value.length > 0) {
      const array = [];
      this.state.games.forEach((element) => {
        console.log(value, element.title);
        var title = element.title.toLowerCase();
        if (title.includes(value.toLowerCase())) {
          array.push(element);
        }
      });
      this.setState(() => ({ games: array }));
    } else {
      this.setState(() => ({ games: GameData.getGames() }));
    }
  };

  filterGamesPrice = (value) => {
    console.log(value);
    if (value) {
      var array = this.state.games;
      array.sort(function (a, b) {
        var nameA = a.price;
        var nameB = b.price;
        console.log(nameA, nameB);
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      this.setState(() => ({ games: array }));
    } else {
      this.setState(() => ({ games: this.state.games }));
    }
  };

  filterGamesDate = (value) => {
    if (value) {
      var array = this.state.games;
      array.sort(function (a, b) {
        var nameA = a.year;
        var nameB = b.year;
        console.log(nameA, nameB);
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      this.setState(() => ({ games: array }));
    } else {
      this.setState(() => ({ games: this.state.games }));
    }
  };

  render() {
    const renderTooltipSearch = (props) => (  
      <Tooltip {...props}><Translate content="tooltipSearchByTitle" className="class" /></Tooltip>
    );
    const renderTooltipPrice = (props) => (
      <Tooltip {...props}><Translate content="tooltipFilterByPrice" className="class" /></Tooltip>
    );
    const renderTooltipDate = (props) => (
      <Tooltip {...props}><Translate content="tooltipFilterByDate" className="class" /></Tooltip>
    );
    return (
      <div className="container-fluid" style={{ marginLeft: '-15px' }}>
        <div className="row" style={{ paddingTop: '50px', width: '100%' }}>
          <div className="col-9">
            <OverlayTrigger placement="top" overlay={renderTooltipSearch}>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    {' '}
                    <img
                      src={searchIcon}
                      style={{ width: '30px' }}
                      atl="Icon Search"
                    ></img>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search ..."
                  onChange={(event) => this.filterGames(event.target.value)}
                  style={{ height: '50px' }}
                />
              </div>
            </OverlayTrigger>
          </div>
          <div className="col-3">
            <span className="input-group-text" style={{ height: '50px' }}>
            <Translate content="Filter" className="class" /> :
              <div style={{ padding: '13px 0 4px 10px' }}>
              <OverlayTrigger placement="top" overlay={renderTooltipPrice}>
                <label
                  class="radio-inline"
                  style={{ padding: '0px 10px 0px 10px' }}
                >
                  <input
                    name="groupFilter"
                    type="radio"
                    value=""
                    onClick={(event) =>
                      this.filterGamesPrice(event.target.checked)
                    }
                    defaultChecked
                  />
                  <Translate content="Price" className="class" />
                </label>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={renderTooltipDate}>
                <label class="radio-inline">
                  <input
                    name="groupFilter"
                    type="radio"
                    value=""
                    style={{ padding: '0px 10px 0px 10px' }}
                    onClick={(event) =>
                      this.filterGamesDate(event.target.checked)
                    }
                  />
                  <Translate content="Date" className="class" />
                </label>
                </OverlayTrigger>
              </div>
            </span>
          </div>
        </div>
        <div className="d-flex flex-row">
          <div className="col-sm-12">
            <GameList games={this.state.games} />
          </div>
        </div>
      </div>
    );
  }
}