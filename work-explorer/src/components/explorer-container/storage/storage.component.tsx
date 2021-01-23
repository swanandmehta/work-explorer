import { Container, LinearProgress } from '@material-ui/core';
import './storage.style.css';

type StorageProps = {
    total: number,
    used: number,
    type: string
};

// eslint-disable-next-line 
const Storage = ({total, used, type}: StorageProps) => {
    return (
        <Container className='storage-container'>
            <p>Storage {used} {type} of {total} {type} used.</p>
            <LinearProgress variant='determinate' value={normalise(used, total)} className='progress-bar-height' />
        </Container>
    )
}

const normalise = (used: number, total: number) => (used / total) * 100;

export default Storage;