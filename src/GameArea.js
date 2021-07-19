import React from 'react';
import {
  Container,
} from 'reactstrap';
import Games from './components/Games';
import styled from 'styled-components';

const Styles = styled.div`
  #containerInput {
    padding-top: 50px;
    width: 100%;
  }
  #checkbox {
    padding: 8px 0 4px 10px;
  }
  #containerGames {
    width: 100%px;
  }
`;

// https://reactjs.org/docs/thinking-in-react.html

export const GameArea = () => {
  return (
    <Styles>
      <Container id="containerGames">
        <Games />
      </Container>
    </Styles>
  );
};