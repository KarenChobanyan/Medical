import MyNoteDiv from "./MyNotesList/ButtonMyNotes";
// import Show from "../../ClickTest";
import MyNotesList from "./MyNotesList/MyNotesList";
import AppointmentDiv from "./body/BodySecondLine/AppointmnetDiv";
import BodyMain from "./body/BodyFirstLine/BodyMain";
import { useContext, useState } from "react";
import { Language } from "./contexts/langContext";

export default function BodyDiv({ userMenuState }) {
    const translate = useContext(Language);
    const currentText = translate.Notes.buttonShowNotes
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
            <MyNoteDiv text={currentText} clickHendler={showMyNotes} />
            {noteVisibility && <MyNotesList />}
        </div>
    )
}