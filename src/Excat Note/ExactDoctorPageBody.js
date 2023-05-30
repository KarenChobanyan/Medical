import ExctDoctorBodyInfoSheet from "./ExactDoctorBodyInfoSheet";
import calendar from '../Img/Exact-Doctor-Page/calendar.png';
import hat from "../Img/Exact-Doctor-Page/hat.png";
import plus from '../Img/Exact-Doctor-Page/+.png';
import ikonOther from "../Img/Exact-Doctor-Page/other.png"
import { useContext } from "react";
import { Language } from "../contexts/langContext";
import { Doctor } from "../contexts/ExactDoctor";
import { NoteLanguage } from "../contexts/NoteLanguage";
import DoctorPageCalendarHeader from "./DoctorPageCalendarHeder";

export default function ExactDoctorPageBody() {
    const translation = useContext(Language)
    const language = useContext(NoteLanguage)
    const [doctor] = useContext(Doctor)
    const date = getDate(doctor.near_date)
    const specialization = doctor.user_categories[0].category.description
    const othetInformation = doctor.user_categories[0].category.full_description
    const currentText = translation.OtherTexts.doctorPage.titleTexts;
    const calendarHeaderBoldText = translation.OtherTexts.doctorPage.calendar.headerBoldText
    const calendarHeaderThinText = translation.OtherTexts.doctorPage.calendar.headerThinText

    function getDate(fullDate) {
        const date = fullDate.slice(0, 10)
        return date
    };
    return (
        <div className="exactDoctorPageBody">
            <div className="exactDoctorInformationBox">
                <ExctDoctorBodyInfoSheet ikon={calendar} titleText={currentText.nextEntry} text={date} />
                <ExctDoctorBodyInfoSheet ikon={hat} titleText={currentText.education} text={language == "ru" ? "Информация не найдена" : "Information not found"} />
                <ExctDoctorBodyInfoSheet ikon={plus} titleText={currentText.specializes} text={language == "ru" ? specialization.ru : specialization.en} />
                <ExctDoctorBodyInfoSheet ikon={ikonOther} titleText={currentText.additionally} text={language == "ru" ? othetInformation.ru : othetInformation.en} />
            </div>
            <div className="doctorPageCalendar">
                <DoctorPageCalendarHeader boldtext={calendarHeaderBoldText} thinText={calendarHeaderThinText} />
            </div>
        </div>
    )
}