export default function MyNoteDiv({text,clickHendler}){
    return(
        <div className="myNoteDiv">
            <div className="myNotesButton" onClick={clickHendler}>{text}</div>
        </div>
    )
}