import { useContext } from "react";
import ExactDoctorProfile from "./ExactDoctorProfile";
import ExactDoctorServicePriceSheet from "./ExactDoctorServicePriceSheet";
import { Doctor } from "../contexts/ExactDoctor";
import { useTranslation } from "react-i18next";

export default function ExactDoctorMainDivProfile() {
    const {t} = useTranslation()
    const [doctor] = useContext(Doctor)
    const price = doctor.price
    const priceText = `${price} ₽ / ${t(`OtherTexts.doctorServicePrice.consultation`)}`
    const durationText = `30 ${t(`OtherTexts.doctorServicePrice.minutes`)}`
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