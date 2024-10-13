import "./image-with-catption.css";

interface ImageWithCaptionProps {
    children: React.ReactNode,
    caption?: string,
    maxCaptionWidth?: string,
}

export default function ImageWithCaption({ children, caption, maxCaptionWidth }: ImageWithCaptionProps) {
    return (
        <div className="image-with-caption-container">
            {children}
            <p style={{ maxWidth: maxCaptionWidth }} className="caption">{caption}</p>
        </div>
    )
}