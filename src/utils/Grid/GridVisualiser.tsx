import React from 'react';
import styled from 'styled-components';
import Grid from "./index";

export const Container = styled.div`
  position: fixed;
  pointer-events: none;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
`;

export const Item = styled(Grid.Item)`
  position: relative;
`;

export const Fill = styled.div`
  background-color: #00000011;
  height: 100vh;
  width: 100%;
`;

export default function GridVisualiser() {
  return (
    <Container>
      <Grid.Container>
        <Grid.Row justifyContent="flex-start">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, i) => {
            return (
              <Item key={i} config={{ col: 1 }}>
                <Fill />
              </Item>
            );
          })}
        </Grid.Row>
      </Grid.Container>
    </Container>
  );
}
