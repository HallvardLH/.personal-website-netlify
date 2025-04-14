import "./Footer.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="">
            <div className="navbar-inner">
                <ul className="navbar-list">
                    <li>
                        <p>Hallvard Lygre Hetlelid, {currentYear}</p>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
