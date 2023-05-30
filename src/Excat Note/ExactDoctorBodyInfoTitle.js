export default function ExactDoctorBodyinfoTitle({ ikon, titleText }) {
    return (
        <div className="exactDoctorBodyInfoTitle">
            <div className="exactDoctorBodyInfoTitleIkon" style={{ backgroundImage: `url(${ikon})` }}></div>
            <div className="exactDoctorBodyInfoTitleText">{titleText}</div>
        </div>
    )
}