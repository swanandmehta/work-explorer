import { Container } from "@material-ui/core";
import file from '../../../assets/img/file.png';
import folder from '../../../assets/img/folder.png';

import './quick-access-link.style.css';

type QuickAccessLinkProps = {
    type: string
};

// eslint-disable-next-line
const QuickAccessLink = ({type}: QuickAccessLinkProps) => {
    return (
        <Container maxWidth={false} disableGutters={true}>
            {
                type === 'file' ? 
                <img src={file} className="quick-access-img" alt="file" /> :
                <img src={folder} className="quick-access-img" alt="file" />
            }
            <p>File Name</p>
            <p>Apr 24 2020</p>
        </Container>
    )
}

export default QuickAccessLink;