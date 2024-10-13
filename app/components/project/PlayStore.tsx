import "./link-button.css"

interface LinkButtonProps {
    link: string;
}

export default function PlayStore({ link }: LinkButtonProps) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <img
                src="/icons/Play-store.svg"
                alt="Play Store logo"
                className="store-logo"
            />
        </a>
    );
}
