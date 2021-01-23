import { Container, Grid } from '@material-ui/core';
import { HelpOutlined, SettingsOutlined } from '@material-ui/icons';
import SearchBar from '../search-bar/search-bar.component';
import './search.style.css';

type SearchComponentProps = {};

// eslint-disable-next-line
const Search = ({}: SearchComponentProps) => {
    return (
        <Container maxWidth={false} disableGutters={true} className="search-container">
            <Grid container spacing={1} direction="row" justify="center" alignItems="center">
                <Grid item xs={10}>
                    <SearchBar />
                </Grid>
                <Grid item xs={2}>
                    <Container maxWidth={false} disableGutters={true}>
                        <Grid container direction="row" justify="space-around" alignItems="center">
                            <Grid item>
                                <HelpOutlined fontSize='large'/>
                            </Grid>
                            <Grid item>
                                <SettingsOutlined fontSize='large'/>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Search;