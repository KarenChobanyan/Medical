import PaymentHistoryInterval from "./PaymentHistoryPeriodInterval";

export default function UserPaymentHistoryNavDiv({ navHeaderText, today, month, allTime }) {
    return (
        <div className="userPaymentHistoryNavDiv">
            <div className="userPaymentHistoryNavHeader">{navHeaderText}</div>
            <div className="userPaymentHistoryPeriodDiv">
                <PaymentHistoryInterval text={today} />
                <PaymentHistoryInterval text={month} />
                <PaymentHistoryInterval text={allTime} />
            </div>
        </div>
    )
}