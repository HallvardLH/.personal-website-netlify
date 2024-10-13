import "./hero.css";
interface ProfilePictureProps {
    src?: string;
}

export default function ProfilePicture({ src = "/profile.jpg" }: ProfilePictureProps) {
    return (
        <div className="hero-profile-picture-container">
            <img className="hero-profile-picture" src={src} alt="A portrait of Hallvard" />
        </div>
    )
}