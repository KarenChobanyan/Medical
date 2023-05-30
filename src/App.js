import './styles/App.css';
import "./styles/header.css"
import './styles/index.css'
import "./styles/footer.css"
import "./styles/noteList.css"
import "./styles/exactNote.css"
import "./styles/userBalancePage.css"
import { createContext, useState } from 'react';
import Header from './Header/Header';
import BodyDiv from './Body';
import Footer from './body/Footeer/Footer';
import CheckLang from './Header/SetLaguage/CheckLanguage';
import { Language } from './contexts/langContext';
import { TranslatedText } from './local/Languages';
import { SetLaguage } from './contexts/SetLanguage';
import { NoteLanguage } from './contexts/NoteLanguage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExactNoteBody from './Excat Note/ExactNoteBody';
import { Doctor } from './contexts/ExactDoctor';
import * as Data from '../src/data.json'
import { CountDoctorExperience } from './contexts/DoctorExperience';
import UserBalancePage from './Header/User/User Balance/UserBalancePage';


function App() {
  const data = { ...Data }
  const docotors = data.results
  const languages = TranslatedText
  const [dataLanguage, setDataLanguage] = useState("ru")
  const [translation, setTranslation] = useState(languages.RU)
  const [usersMenuVisibility, setUsersMenuVisibility] = useState(false)
  const [exactDoctor, setExactDoctor] = useState("")


  function checkLanguage(value) {
    if (value == "RU") {
      setTranslation(languages.RU)
      setDataLanguage("ru")
    } else {
      setTranslation(languages.EN)
      setDataLanguage("en")
    }
  }
  function handlerUsersMenuVisibility() {
    if (usersMenuVisibility == false) {
      setUsersMenuVisibility(true)
    } else {
      setUsersMenuVisibility(false)
    }
  };

  function closeUserMenu(){
    if(usersMenuVisibility == true){
      setUsersMenuVisibility(false)
    }
  }

  function checkedDoctor(doctor) {
    setExactDoctor(doctor)

  };

  function countExperince(start) {
    const currentYear = new Date().getFullYear()
    const experience = currentYear - start
    return experience
  };

  return (

    <BrowserRouter>
    <div onClick={closeUserMenu}>
      <SetLaguage.Provider value={checkLanguage}>
        <Language.Provider value={translation}>
          <NoteLanguage.Provider value={dataLanguage}>
            <Doctor.Provider value={[exactDoctor, checkedDoctor]}>
              <CountDoctorExperience.Provider value={countExperince}>
                <div className="App">
                  <Header setVisibilityFunction={handlerUsersMenuVisibility} state={usersMenuVisibility} />
                  <Routes>
                    <Route path='/' element={<BodyDiv userMenuState={usersMenuVisibility} />} />
                    <Route path='/note/:id' element={<ExactNoteBody state={usersMenuVisibility} />} />
                    <Route path='/userBalance' element={<UserBalancePage state={usersMenuVisibility} />} />
                  </Routes>

                  <Footer />
                </div>
              </CountDoctorExperience.Provider>
            </Doctor.Provider>
          </NoteLanguage.Provider>
        </Language.Provider>
      </SetLaguage.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
