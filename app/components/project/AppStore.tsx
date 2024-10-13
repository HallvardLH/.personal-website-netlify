import "./link-button.css"

interface LinkButtonProps {
    link: string;
}

export default function AppStore({ link }: LinkButtonProps) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <img
                src="/icons/App-store.svg"
                alt="App Store logo"
                className="store-logo"
            />
        </a>
    );
}
