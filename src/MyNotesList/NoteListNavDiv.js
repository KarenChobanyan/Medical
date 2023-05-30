import { useContext } from "react";
import ListNav from "./NoteListNav";
import { Language } from "../contexts/langContext";

export default function NoteListNavDiv() {
    const translate = useContext(Language)
    const currentText = translate.Notes.noteNavs
    return (
        <div className="noteListNavDiv">
            <ListNav text={currentText.upcoming} />
            <ListNav text={currentText.past} />
            <ListNav text={currentText.canceled} />
        </div>
    )
}