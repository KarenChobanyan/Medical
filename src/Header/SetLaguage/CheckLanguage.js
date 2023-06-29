import { useCallback, useState } from 'react'
import i18n from '../../local/i18n';
import { useContext } from 'react';
import { NoteLanguage } from '../../contexts/NoteLanguage';

export default function CheckLang() {
    const [pageLanguage, setPageLanguage] = useContext(NoteLanguage)
    const [language, setlanguage] = useState(localStorage.getItem("i18nextLng"))

    const changeLanguage = useCallback((e) => {
        setlanguage(e.target.innerText.toLowerCase())
        i18n.changeLanguage(e.target.innerText.toLowerCase())
        setPageLanguage(e.target.innerText.toLowerCase())
    }, [language, pageLanguage]);


    return (
        <div className="forCheckLangBox">
            <div onClick={changeLanguage} className={language == "ru" ? "checkedLanguage" : "language"}><span>RU</span></div>
            <div onClick={changeLanguage} className={language == "en" ? "checkedLanguage" : "language"}><span>EN</span></div>
        </div>
    )
}