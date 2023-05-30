export default function DoctorPageCalendarHeader({boldtext,thinText}){
    return(
        <div className="doctorPageCalendarHeader">
            <div className="doctorPageCalendarHeaderBoldText">{boldtext}</div>
            <div className="doctorPageCalendarHeaderThinText">{thinText}</div>
        </div>
    )
}