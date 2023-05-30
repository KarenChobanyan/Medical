export default function NoteDoctorProfileImage({ image }) {
    return (
        <div className="noteDoctorImage" style={{ backgroundImage: `url(${image})` }}></div>
    )
}