import { InputAdornment, TextField } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";

type SearchBarProps = {};

// eslint-disable-next-line
const SearchBar = ({}: SearchBarProps) => {
    return (
        <TextField
            placeholder="Search"
            fullWidth={true}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchOutlined />
                    </InputAdornment>
                ),
            }}
        />
    );
}

export default SearchBar;