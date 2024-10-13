import { useState } from "react";
import "./about-me.css";

export default function BigCookie() {
    const [cookies, setCookies] = useState(0);
    const clickCookie = () => {
        setCookies(cookies + 1);
    };

    return (
        <div className="cookie-container">
            {cookies > 0 ? (
                <p className="subheader text-center" style={cookies >= 100 ? { fontSize: "2.5rem" } : { fontSize: "3.5rem" }}>{cookies} cookies</p>
            ) : (
                <p className="subheader text-center"></p>
            )}
            <button
                onClick={clickCookie}
                className="hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer object-cover border-none p-0 bg-transparent"
                aria-label="Click the big cookie"
                style={{ background: "none", border: "none" }}
            >
                <img
                    draggable={false}
                    src="/cookie.webp"
                    alt="The big cookie from Cookie Clicker"
                />
            </button>
        </div>
    );
}
