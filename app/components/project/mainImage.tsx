interface MainImageProps {
    src: string;
    alt: string;
}

export default function MainImage(props: MainImageProps) {
    const { src, alt } = props
    return (
        <img style={{ maxHeight: "40rem", margin: "auto" }} src={src} alt={alt} />
    )
}