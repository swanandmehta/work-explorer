import { Container, Grid } from '@material-ui/core';

import './App.css';
import ExplorerContainer from './components/explorer-container/explorer-container/explorer-container.component';
import ApplicationContainer from './components/application-container/application-container/application-container.component';
import ExternalContainer from './components/external-container/external-container/external-container.component';


function App() {
  return (
    <Container maxWidth={false} disableGutters>
      <Grid container spacing={0}>
        <Grid item xs={3}>
          <ExplorerContainer></ExplorerContainer>
        </Grid>

        <Grid item xs={8}>
          <ApplicationContainer></ApplicationContainer>
        </Grid>

        <Grid item xs={1}>
          <ExternalContainer></ExternalContainer>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
