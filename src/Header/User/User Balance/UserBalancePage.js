import { useContext, useMemo } from "react";
import UsersMenu from "../UsersProfile";
import UserExactBalanceDiv from "./UserExactBalanceDiv";
import { Language } from "../../../contexts/langContext";
import Users from "../../../local/Users.json";
import UserPaymentHistoryNavDiv from "./UserPaymentHistoryNavDiv";
import UserPayments from "./UserPayments";
import Payment from "./Payment";
import { NoteLanguage } from "../../../contexts/NoteLanguage";

export default function UserBalancePage({ state }) {
    const language = useContext(NoteLanguage)
    const translation = useContext(Language)
    const data = useMemo(() => {
        return {
            balanceText: translation.OtherTexts.userBalancePage.balancetext,
            topUpBalanceButtonText: translation.OtherTexts.userBalancePage.topUpBalanceButtonText,
            userPaymentHistoryHeader: translation.OtherTexts.userBalancePage.userPaymentHistory.userPaymentHistoryHeader,
            textToday: translation.OtherTexts.userBalancePage.userPaymentHistory.today,
            textMonth: translation.OtherTexts.userBalancePage.userPaymentHistory.month,
            textAllTime: translation.OtherTexts.userBalancePage.userPaymentHistory.allTime,
            userData: Users,
            userPaymentData: Users.payments
        }
    }, [translation, Users])


    return (
        <>
            <div className="userBalancePageUserMenuPositionDiv">
                <UsersMenu state={state} />
            </div>
            <div className="userBalanceBody">
                <UserExactBalanceDiv
                    textBalance={data.balanceText}
                    balance={data.userData.balance}
                    buttonText={data.topUpBalanceButtonText}
                />
                <UserPaymentHistoryNavDiv
                    navHeaderText={data.userPaymentHistoryHeader}
                    today={data.textToday}
                    month={data.textMonth}
                    allTime={data.textAllTime}
                />
                <UserPayments>
                    {data.userPaymentData.map((el) => {
                        return <Payment
                            paymentIkon={el.paymentSytemIkon}
                            date={el.date}
                            paymentType={language == "ru" ? el.paymentType.ru : el.paymentType.en}
                            amount={el.amount}
                            key={el.amount + el.date+ Math.random()}
                        />
                    })}
                </UserPayments>
            </div>

        </>
    )
}