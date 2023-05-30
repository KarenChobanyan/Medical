import { useContext } from "react";
import UsersMenu from "../UsersProfile";
import UserExactBalanceDiv from "./UserExactBalanceDiv";
import { Language } from "../../../contexts/langContext";
import  Users  from "../../../local/Users.json";
import UserPaymentHistoryNavDiv from "./UserPaymentHistoryNavDiv";
import UserPayments from "./UserPayments";
import Payment from "./Payment";
import { NoteLanguage } from "../../../contexts/NoteLanguage";

export default function UserBalancePage({ state }) {
    const language = useContext(NoteLanguage)
    const translation = useContext(Language)
    const balanceText = translation.OtherTexts.userBalancePage.balancetext;
    const topUpBalanceButtonText = translation.OtherTexts.userBalancePage.topUpBalanceButtonText;
    const userPaymentHistoryHeader = translation.OtherTexts.userBalancePage.userPaymentHistory.userPaymentHistoryHeader;
    const textToday = translation.OtherTexts.userBalancePage.userPaymentHistory.today;
    const textMonth = translation.OtherTexts.userBalancePage.userPaymentHistory.month;
    const textAllTime = translation.OtherTexts.userBalancePage.userPaymentHistory.allTime;
    const userData = Users
    const userPaymentData = userData.payments

    return (
        <>
            <div className="userBalancePageUserMenuPositionDiv">
                <UsersMenu state={state} />
            </div>
            <div className="userBalanceBody">
                <UserExactBalanceDiv
                    textBalance={balanceText}
                    balance={userData.balance}
                    buttonText={topUpBalanceButtonText}
                />
                <UserPaymentHistoryNavDiv
                    navHeaderText={userPaymentHistoryHeader}
                    today={textToday}
                    month={textMonth}
                    allTime={textAllTime}
                />
                <UserPayments>
                    {userPaymentData.map((el) => {
                        return <Payment
                            paymentIkon={el.paymentSytemIkon}
                            date={el.date}
                            paymentType={language == "ru" ? el.paymentType.ru : el.paymentType.en}
                            amount={el.amount}
                            key={el.amount + el.date}
                        />
                    })}
                </UserPayments>
            </div>

        </>
    )
}