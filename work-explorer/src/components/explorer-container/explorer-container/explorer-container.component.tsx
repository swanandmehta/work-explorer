import { Container, Grid } from '@material-ui/core';
import Storage from '../storage/storage.component';
import TreeView from '../tree-view/tree-view.component';
import './explorer-container.style.css';

type ExplorerContainerProps = {

};

// eslint-disable-next-line
const ExplorerContainer = ({}: ExplorerContainerProps) => {
    return (
        <Container maxWidth={false} disableGutters>
            <Grid container spacing={0} direction="column">
                <Grid item xs={12}>
                    <TreeView></TreeView>
                </Grid>
                <Grid item xs={12}>
                    <Storage total={105} used={73.5} type={"GB"}></Storage>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ExplorerContainer;