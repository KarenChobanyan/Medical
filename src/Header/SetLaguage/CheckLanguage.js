import { useContext, useState } from 'react'
import { SetLaguage } from '../../contexts/SetLanguage'

export default function CheckLang() {
    const changeLanguage = useContext(SetLaguage)
    const lang = "RU"
    const lang2 = "EN"
    const [language, setlanguage] = useState(lang)
    function checkLanguage(e) {
        setlanguage(e.target.innerText)
        changeLanguage(e.target.innerText)
    }
    return (
        <div className="forCheckLangBox">
            <div onClick={checkLanguage} className={language == lang ? "checkedLanguage" : "language"}><span>{lang}</span></div>
            <div onClick={checkLanguage} className={language == lang2 ? "checkedLanguage" : "language"}><span>{lang2}</span></div>
        </div>
    )
}