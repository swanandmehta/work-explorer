import { Container, Grid } from '@material-ui/core';
import { Alarm, AssessmentOutlined, CallSplitOutlined } from '@material-ui/icons';
import ExternalConnector from '../external-connector/external-connector.component';
import './external-container.style.css';

type ExternalContainerProp = {

}

// eslint-disable-next-line
const ExternalContainer = ({}: ExternalContainerProp) => {
    const appIcon1 = Alarm;
    const appIcon2 = AssessmentOutlined;
    const appIcon3 = CallSplitOutlined;
    return (
        <Container maxWidth={false} disableGutters>
            <Grid container spacing={0} direction="column" justify="center" alignItems="center">
                <Grid item xs={12} className='external-container'>
                    <ExternalConnector icon={appIcon1}></ExternalConnector>
                </Grid>
                <Grid item xs={12} className='external-container'>
                    <ExternalConnector icon={appIcon2}></ExternalConnector>
                </Grid>
                <Grid item xs={12} className='external-container'>
                    <ExternalConnector icon={appIcon3}></ExternalConnector>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ExternalContainer;