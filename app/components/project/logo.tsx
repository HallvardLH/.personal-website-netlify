export type BrandType = "React Native" | "React" | "Supabase" | "TypeScript" | "CSS" | "JavaScript" | "HTML" | "Cordova";

interface LogoProps {
    brand: BrandType;
}

const iconLinks: Record<LogoProps["brand"], string> = {
    "React Native": "/icons/React-icon.svg",
    "React": "/icons/React-icon.svg",
    "TypeScript": "/icons/Typescript.png",
    "Supabase": "/icons/Supabase.png",
    "JavaScript": "/icons/JavaScript.png",
    "CSS": "/icons/CSS.svg",
    "HTML": "/icons/HTML.svg",
    "Cordova": "/icons/Cordova.png",
};

export default function Logo({ brand }: LogoProps) {
    return (
        <div style={{ display: "grid", flexDirection: "column", justifyContent: "center" }}>
            <img style={{ height: "2rem", justifySelf: "center" }} src={iconLinks[brand]} alt={brand} />
            <p style={{ fontSize: "0.85rem", letterSpacing: "0.05rem", fontWeight: "500" }}>{brand}</p>
        </div>
    );
}
