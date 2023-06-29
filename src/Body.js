import MyNoteDiv from "./MyNotesList/ButtonMyNotes";
// import Show from "../../ClickTest";
import MyNotesList from "./MyNotesList/MyNotesList";
import AppointmentDiv from "./body/BodySecondLine/AppointmnetDiv";
import BodyMain from "./body/BodyFirstLine/BodyMain";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function BodyDiv({ userMenuState }) {
    const {t} = useTranslation()
    const [noteVisibility, setNoteVisibility] = useState(false)
    function showMyNotes() {
        if (noteVisibility == false) {
            setNoteVisibility(true)
        } else {
            setNoteVisibility(false)
        }
    }
    return (
        < div className="bodyDiv">
            <BodyMain menuState={userMenuState} />
            <AppointmentDiv />
            <MyNoteDiv text={t(`Notes.buttonShowNotes`)} clickHendler={showMyNotes} />
            {noteVisibility && <MyNotesList />}
        </div>
    )
}