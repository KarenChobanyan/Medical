import { useTranslation } from "react-i18next"

export default function NoteDoctorExperience({ experience }) {
    const {t} = useTranslation()

    return (
        <div className="noteDoctorExperience">{t(`Notes.noteBox.doctorExperience.experience`)} {experience} {t(`Notes.noteBox.doctorExperience.year`)}</div>
    )
}