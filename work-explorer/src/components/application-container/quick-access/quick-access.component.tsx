import { Container, Grid } from '@material-ui/core';
import QuickAccessLink from '../quick-access-link/quick-access-link.component';
import './quick-access.style.css';

type QuickAccessProps = {

}

// eslint-disable-next-line
const QuickAccess = ({}: QuickAccessProps) => {
    return (
        <Container maxWidth={false} disableGutters={true}>
            <p>Quick Access</p>
            <Grid container spacing={2} direction="row" justify="center" alignItems="center">
                <Grid item xs={3}>
                    <QuickAccessLink type="file"/>
                </Grid>
                <Grid item xs={3}>
                    <QuickAccessLink type="folder"/>
                </Grid>
                <Grid item xs={3}>
                    <QuickAccessLink type="file"/>
                </Grid>
                <Grid item xs={3}>
                    <QuickAccessLink type="folder"/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default QuickAccess;