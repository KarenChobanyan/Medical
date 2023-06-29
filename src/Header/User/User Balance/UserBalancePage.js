import { useContext, useMemo } from "react";
import UsersMenu from "../UsersProfile";
import UserExactBalanceDiv from "./UserExactBalanceDiv";
import Users from "../../../local/Users.json";
import UserPaymentHistoryNavDiv from "./UserPaymentHistoryNavDiv";
import UserPayments from "./UserPayments";
import Payment from "./Payment";
import { NoteLanguage } from "../../../contexts/NoteLanguage";
import { useTranslation } from "react-i18next";

export default function UserBalancePage({ state }) {
    const [language] = useContext(NoteLanguage);
    const { t } = useTranslation()
    const data = useMemo(() => {
        return {
            balanceText: t("OtherTexts.userBalancePage.balancetext"),
            topUpBalanceButtonText: t("OtherTexts.userBalancePage.topUpBalanceButtonText"),
            userPaymentHistoryHeader: t("OtherTexts.userBalancePage.userPaymentHistory.userPaymentHistoryHeader"),
            textToday: t("OtherTexts.userBalancePage.userPaymentHistory.today"),
            textMonth: t("OtherTexts.userBalancePage.userPaymentHistory.month"),
            textAllTime: t("OtherTexts.userBalancePage.userPaymentHistory.allTime"),
            userData: Users,
            userPaymentData: Users.payments
        }
    }, [Users, t]);


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
                            key={el.amount + el.date + Math.random()}
                        />
                    })}
                </UserPayments>
            </div>

        </>
    )
}