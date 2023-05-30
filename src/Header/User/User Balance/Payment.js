export default function Payment(props) {
    const { paymentIkon, date, paymentType, amount, } = props
    return (
        <div className="payment" >
            <div className="paymentSystemIkon" style={{ backgroundImage: `url(${paymentIkon})` }}></div>
            <div className="paymentDate">{date}</div>
            <div className="paymentType">{paymentType}</div>
            <div className="paymentAmount">{amount} ₽</div>
        </div>
    )
}