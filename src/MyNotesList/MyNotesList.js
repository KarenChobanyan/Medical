import { useReducer } from "react";
import { DoctorList } from "../contexts/doctorList";
import * as NoteList from "../data.json";
import NoResult from "./NoResults";
import Note from "./Note";
import ListNav from "./NoteListNav";
import NoteListNavDiv from "./NoteListNavDiv";
import { useTranslation } from "react-i18next";
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
    const {t} = useTranslation()
    const [filteredDoctors, dispatch] = useReducer(reducer, doctors)

    return (
        <>
            <div className="myNoteListMainDiv">
                <NoteListNavDiv >
                    <ListNav dispatchFn={() => dispatch({ type: "allNotes" })} text={t(`Notes.noteNavs.allNotes`)} style={filteredDoctors == doctors ? "choosenNav" : "noteNav"} />
                    <ListNav dispatchFn={() => dispatch({ type: "upcoming" })} text={t(`Notes.noteNavs.upcoming`)} style={filteredDoctors == upcomingNotes ? "choosenNav" : "noteNav"} />
                    <ListNav dispatchFn={() => dispatch({ type: "past" })} text={t(`Notes.noteNavs.past`)} style={filteredDoctors == pastNotes ? "choosenNav" : "noteNav"} />
                    <ListNav dispatchFn={() => dispatch({ type: "cenceled" })} text={t(`Notes.noteNavs.canceled`)} style={filteredDoctors == cenceledNotes ? "choosenNav" : "noteNav"} />
                </NoteListNavDiv>

                {filteredDoctors.length > 0 ? filteredDoctors.map((el) => <Note
                    doctor={el}
                    key={Math.random()}
                />) : <NoResult text={t(`Notes.noteNavs.noResult`)} key={Math.random()} />}
            </div>
        </>
    )
}
