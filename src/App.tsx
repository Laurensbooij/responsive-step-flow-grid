import React from 'react';
import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles';
import OrderedStepFlow from 'components/modules/OrderedStepFlow';

const Container = styled.div`
  min-height: 100vh;
  padding: 100px 30px;
  background-color: ${themeStyles.colors.grey4};

  @media (min-width: 768) {
    padding: 100px 50px;
  }

  @media (min-width: 1280px) {
    padding: 100px 150px;
  }

`

function App() {
  return (
    <Container>
      <OrderedStepFlow
      
      />
    </Container>
  );
}

export default App;
