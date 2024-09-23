import Image from "../assets/logo.png"

export default function Logo() {
    return (
        <>
            <img
                style={{ width: 50, filter: `invert(1)` }}
                src={Image}
                alt=""
            />
            <p style={{ marginLeft: 5 ,fontSize: 20, fontWeight: 800 }}>Kuroneko Network</p>
        </>
    );
}
