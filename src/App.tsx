import React from 'react';
import { Grid } from 'semantic-ui-react';
import Store from './components/Store';


function App() {
  return (
    <Grid centered>
      <Grid.Row>
        <h1>To-Do List with React &amp; Redux</h1>
      </Grid.Row>
      <Grid.Row>
      <h1>To-Do List Form</h1>
      </Grid.Row>
      <Grid.Row>
      <Store />
      </Grid.Row>
    </Grid>
    
  );
}

export default App;
