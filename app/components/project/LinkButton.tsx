import "./link-button.css"

interface LinkButtonProps {
    link: string;
    variant: "Github" | "Play Store" | "App Store";
}

export default function LinkButton({ link, variant }: LinkButtonProps) {
    const variantInfo: {
        [key in LinkButtonProps['variant']]: {
            text: string | null,
            imageSrc: string
        }
    } = {
        "Github": {
            text: "View on GitHub",
            imageSrc: "/icons/Github.svg",
        },
        "Play Store": {
            text: "View on Play Store",
            imageSrc: "/images/playstore-logo.png",
        },
        "App Store": {
            text: null,
            imageSrc: "/icons/App-store.svg",
        },
    };

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <button className={`button link-button button-${variant.toLowerCase()}`}>
                {variantInfo[variant].text}
                {/* <img
                    src={variantInfo[variant].imageSrc}
                    alt={`${variant} logo`}
                    className="button-logo"
                /> */}
            </button>
        </a>
    );
}
