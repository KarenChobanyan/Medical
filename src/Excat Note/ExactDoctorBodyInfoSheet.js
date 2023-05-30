import ExactDoctorBodyInfoText from "./ExactDoctorBodyInfoText";
import ExactDoctorBodyinfoTitle from "./ExactDoctorBodyInfoTitle";

export default function ExctDoctorBodyInfoSheet({ ikon, titleText, text }) {
    return (
        <div className="exactDoctorBodyInfoSheet">
            <ExactDoctorBodyinfoTitle ikon={ikon} titleText={titleText} />
            <ExactDoctorBodyInfoText text={text} />
        </div>
    )
}