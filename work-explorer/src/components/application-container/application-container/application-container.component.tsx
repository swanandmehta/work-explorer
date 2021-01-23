import { Container, Grid } from '@material-ui/core';
import FolderListing from '../folder-listing/folder-listing.component';
import QuickAccess from '../quick-access/quick-access.component';
import Search from '../search/search.component';
import './application-container.style.css';

type ApplicationContainerProps = {};

// eslint-disable-next-line
const ApplicationContainer = ({}: ApplicationContainerProps) => {
    return (
        <Container maxWidth={false} disableGutters={true}>
            <Grid container direction="column" wrap="nowrap">
                <Grid item>
                    <Search></Search>
                </Grid>
                <Grid item>
                    <QuickAccess></QuickAccess>
                </Grid>
                <Grid item>
                    <FolderListing></FolderListing>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ApplicationContainer;