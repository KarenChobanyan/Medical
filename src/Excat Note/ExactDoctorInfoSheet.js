
export default function ExactDoctorInfoSheet(props) {
    const { name, surName, title, experience } = props
    return (
        <div className="exactDoctorInfoSheet">
            <div className="exactDocotorName">{name} {surName}</div>
            <div className="exactDoctorTitle">{title}</div>
            <div className="exactDoctorExperience">{experience}</div>
        </div>
    )
}