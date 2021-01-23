import './external-connector.style.css';

type ExternalConnectorProps = {
    icon: any    
};

const ExternalConnector = ({ icon }: ExternalConnectorProps) => {
    const Icon: any = icon;
    return (
        <div className="external-connector">
            <Icon fontSize='large'></Icon>
        </div>
    )
}

export default ExternalConnector;