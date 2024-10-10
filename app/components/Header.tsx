interface HeaderProps {
    text: string;
    color: string;
}

export default function Header(props: HeaderProps) {
    const { text, color } = props;

    // fontSize: "clamp(1.1rem, 1rem + 5vw, 4rem)"

    return (
        <h1 className="text-6xl" style={{ color: color, fontFamily: "Verdana", fontWeight: 900 }}>
            {text}
        </h1>
    );
}
