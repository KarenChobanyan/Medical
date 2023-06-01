import { useContext, useEffect } from "react"
import { Doctor } from "../contexts/ExactDoctor"
import ExactDoctorMainDiv from "./ExactDoctorMainDiv";
import ExactDoctorPageBody from "./ExactDoctorPageBody";
import { useParams } from "react-router-dom";
import json from '../data.json'

export default function ExactNoteBody({ state }) {
    const [doctor, setDoctor] = useContext(Doctor)
    const { id } = useParams()

    useEffect(() => {
        if (id) {
            const exactDoctor = json.results.find((el) => {
                return el.id == id
            })
            if (exactDoctor) {
                setDoctor(exactDoctor)
            }
        }
    }, [id])

    if (!doctor) {
        return (
            <div>Doctor not Found</div>
        )
    }
    return (
        <div className="exactNoteBody">
            <ExactDoctorMainDiv state={state} />
            <ExactDoctorPageBody />
        </div>
    )
}