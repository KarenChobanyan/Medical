import { useCallback, useContext, useState } from 'react'
import { SetLaguage } from '../../contexts/SetLanguage'

export default function CheckLang() {
    const changeLanguage = useContext(SetLaguage)
    const [language, setlanguage] = useState("RU")
    
    const checkLanguage = useCallback((e)=>{
        setlanguage(e.target.innerText)
        changeLanguage(e.target.innerText)
    },[language])
    return (
        <div className="forCheckLangBox">
            <div onClick={checkLanguage} className={language == "RU" ? "checkedLanguage" : "language"}><span>RU</span></div>
            <div onClick={checkLanguage} className={language == "EN" ? "checkedLanguage" : "language"}><span>EN</span></div>
        </div>
    )
}