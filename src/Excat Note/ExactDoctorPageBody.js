import ExctDoctorBodyInfoSheet from "./ExactDoctorBodyInfoSheet";
import calendar from '../Img/Exact-Doctor-Page/calendar.png';
import hat from "../Img/Exact-Doctor-Page/hat.png";
import plus from '../Img/Exact-Doctor-Page/+.png';
import ikonOther from "../Img/Exact-Doctor-Page/other.png"
import { useContext, useMemo } from "react";
import { Language } from "../contexts/langContext";
import { Doctor } from "../contexts/ExactDoctor";
import { NoteLanguage } from "../contexts/NoteLanguage";
import DoctorPageCalendarHeader from "./DoctorPageCalendarHeder";

export default function ExactDoctorPageBody() {
    const translation = useContext(Language)
    const language = useContext(NoteLanguage)
    const [doctor] = useContext(Doctor)

    const exactDoctor = useMemo(()=>{
        function getDate(fullDate) {
            const date = fullDate.slice(0, 10)
            return date
        };
        return{
            date:getDate(doctor.near_date),
            specialization : doctor.user_categories[0].category.description,
            othetInformation : doctor.user_categories[0].category.full_description,
            currentText : translation.OtherTexts.doctorPage.titleTexts,
            calendarHeaderBoldText : translation.OtherTexts.doctorPage.calendar.headerBoldText,
            calendarHeaderThinText : translation.OtherTexts.doctorPage.calendar.headerThinText,
        }
    },[translation,language,doctor])

   
    return (
        <div className="exactDoctorPageBody">
            <div className="exactDoctorInformationBox">
                <ExctDoctorBodyInfoSheet ikon={calendar} titleText={exactDoctor.currentText.nextEntry} text={exactDoctor.date} />
                <ExctDoctorBodyInfoSheet ikon={hat} titleText={exactDoctor.currentText.education} text={language == "ru" ? "Информация не найдена" : "Information not found"} />
                <ExctDoctorBodyInfoSheet ikon={plus} titleText={exactDoctor.currentText.specializes} text={language == "ru" ? exactDoctor.specialization.ru : exactDoctor.specialization.en} />
                <ExctDoctorBodyInfoSheet ikon={ikonOther} titleText={exactDoctor.currentText.additionally} text={language == "ru" ? exactDoctor.othetInformation.ru : exactDoctor.othetInformation.en} />
            </div>
            <div className="doctorPageCalendar">
                <DoctorPageCalendarHeader boldtext={exactDoctor.calendarHeaderBoldText} thinText={exactDoctor.calendarHeaderThinText} />
            </div>
        </div>
    )
}