
export default function UserExactBalanceDiv({ textBalance, balance, buttonText }) {
    return (
        <div className="userExactBalanceDiv">
            <div className="userExactBalanceHeader">{textBalance}</div>
            <div className="userBalanceAmountDiv">
                <div className="userBalanceAmount">{balance}  $</div>
                <div className="userTopUoBalanceButton">{buttonText}</div>

            </div>
        </div>
    )
}