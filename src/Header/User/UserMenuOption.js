export default function UseerMenuOption({ text, image }) {
    return (
        <div className="userMenuOption">
            <div className="userMenuIkon" style={{ backgroundImage: `url(${image})`, backgroundRepeat: `no-repeat`, backgroundSize: `contain` }}></div>
            <div className="userMenuTitle">{text}</div>
        </div>
    )
}