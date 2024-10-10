import { useState } from "react"

export default function BigCookie() {
    const [cookies, setCookies] = useState(0);
    const clickCookie = () => {
        setCookies(cookies + 1)
    }
    return (
        <div>
            {cookies > 0 && (
                <p className="subheader text-center ">{cookies} cookies</p>
            )}
            <img
                className="hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer object-cover"
                src="/cookie.webp"
                alt="The big cookie from Cookie Clicker"
                onClick={clickCookie}
            />
        </div>
    )
}