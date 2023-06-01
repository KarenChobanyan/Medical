import { useContext, useReducer } from "react";
import { DoctorList } from "../contexts/doctorList";
import { Language } from "../contexts/langContext";
import * as NoteList from "../data.json";
import NoResult from "./NoResults";
import Note from "./Note";
import ListNav from "./NoteListNav";
import NoteListNavDiv from "./NoteListNavDiv";
const data = { ...NoteList };
const doctors = data.results;
let upcomingNotes = null;
let pastNotes = null;
let cenceledNotes = null;


function reducer(state, action) {
    const currentDate = new Date().toJSON()
    switch (action.type) {
        case "allNotes":
            return doctors;
        case "upcoming":
            upcomingNotes = doctors.filter((el) => el.near_date > currentDate);
            return upcomingNotes
        case "past":
            pastNotes = doctors.filter((el) => el.near_date < currentDate);
            return pastNotes
        case "cenceled":
            cenceledNotes = doctors.filter((el) => el.cenceled == true)
            return cenceledNotes

    }
};


export default function MyNotesList() {
    const translate = useContext(Language)
    const currentText = translate.Notes.noteNavs

    const [filteredDoctors, dispatch] = useReducer(reducer, doctors)

    return (
        <>
            <div className="myNoteListMainDiv">
                <NoteListNavDiv >
                    <ListNav dispatchFn={() => dispatch({ type: "allNotes" })} text={currentText.allNotes} style={filteredDoctors == doctors ? "choosenNav" : "noteNav"} />
                    <ListNav dispatchFn={() => dispatch({ type: "upcoming" })} text={currentText.upcoming} style={filteredDoctors == upcomingNotes ? "choosenNav" : "noteNav"} />
                    <ListNav dispatchFn={() => dispatch({ type: "past" })} text={currentText.past} style={filteredDoctors == pastNotes ? "choosenNav" : "noteNav"} />
                    <ListNav dispatchFn={() => dispatch({ type: "cenceled" })} text={currentText.canceled} style={filteredDoctors == cenceledNotes ? "choosenNav" : "noteNav"} />
                </NoteListNavDiv>

                {filteredDoctors.length > 0 ? filteredDoctors.map((el) => <Note
                    doctor={el}
                />) : <NoResult text={currentText.noResult} key={Math.random()} />}
            </div>
        </>
    )
}
