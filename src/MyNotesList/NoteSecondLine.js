import NoteDoctorProfileImage from "./NoteDoctorImage";
import NoteDoctorName from "./NoteDoctorName";
import NoteDoctorTitle from "./NoteDoctorTitle";
import NoteDoctorExperience from "./NoteDoctorExperience"
import NoteBlueButton from "./NoteBlueButton";
import NoteWhiteButton from "./NoteWhiteButton"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NoteSecondLine(props) {
    const { image, name, surName, title, experince, id } = props;
    const { t } = useTranslation()
    return (
        <div className="noteSecondlineDiv" >
            <div className="noteDoctorInfoSheet" >
                <NoteDoctorProfileImage image={image} />
                <div className="noteDoctorInfo">
                    <NoteDoctorName name={name} surName={surName} />
                    <NoteDoctorTitle title={title} />
                    <NoteDoctorExperience experience={experince} />
                </div>
            </div>
            <div className="noteButtonDiv">
                <Link to={`/note/${id}`} style={{ textDecoration: "none" }}>
                    <NoteBlueButton text={t(`Notes.noteBox.blueButton`)} />
                </Link>
                <NoteWhiteButton text={t(`Notes.noteBox.whiteButton`)} />
            </div>
        </div>
    )
}