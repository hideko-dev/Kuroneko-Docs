export default function Copyright() {
    const year = new Date().getFullYear();
    return (
        <>
            <p>© {year} <a href="https://hideko-dev.com/blacklabs" style={{ color: "white" }}>BlackLabs</a>. All Rights Reserved.</p>
        </>
    );
}
