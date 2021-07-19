import React from 'react';
import PropTypes from 'prop-types';
import GameCard from './GameCard';

const getGames = (games) => {
    return (
        <div className="card-deck">
            {
                games.map(game => <GameCard key={game.id} game={game} />)
            }
        </div>
    );
};

const GameList = (props) => (
    <div>
        {getGames(props.games)}
    </div>
);

GameList.defaultProps = {
    games: []
};

GameList.propTypes = {
    games: PropTypes.array
};

export default GameList;