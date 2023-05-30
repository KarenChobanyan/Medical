import { useContext } from "react";
import ExactDoctorProfile from "./ExactDoctorProfile";
import ExactDoctorServicePriceSheet from "./ExactDoctorServicePriceSheet";
import { Language } from "../contexts/langContext";
import { Doctor } from "../contexts/ExactDoctor";

export default function ExactDoctorMainDivProfile() {
    const [doctor] = useContext(Doctor)
    const translation = useContext(Language)
    const price = doctor.price
    const priceText = `${price} ₽ / ${translation.OtherTexts.doctorServicePrice.consultation}`
    const durationText = `30 ${translation.OtherTexts.doctorServicePrice.minutes}`
    return (
        <div className="exactDoctorMainDivProfile">
            <ExactDoctorProfile />
            <ExactDoctorServicePriceSheet
                priceText={priceText}
                durationText={durationText}
            />
        </div>
    )
}