export default function ExactDoctorServicePriceSheet({ priceText, durationText }) {
    return (
        <div className="exactDoctorServicePriceSheet">
            <div className="exactDoctorServicePrice">{priceText}</div>
            <div className="consultationDuration">{durationText}</div>
        </div>
    )
}