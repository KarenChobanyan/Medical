export default function NoteDateInfo({ image, text }) {
    return (
        <div className="noteDateInfo">
            <div className="noteDateIkon" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="noteDateTitle">{text}</div>
        </div>
    )
}