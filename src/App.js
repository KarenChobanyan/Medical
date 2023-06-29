import './styles/App.css';
import "./styles/header.css"
import './styles/index.css'
import "./styles/footer.css"
import "./styles/noteList.css"
import "./styles/exactNote.css"
import "./styles/userBalancePage.css"
import {  useState } from 'react';
import Header from './Header/Header';
import BodyDiv from './Body';
import Footer from './body/Footeer/Footer';
import { NoteLanguage } from './contexts/NoteLanguage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExactNoteBody from './Excat Note/ExactNoteBody';
import { Doctor } from './contexts/ExactDoctor';
import { CountDoctorExperience } from './contexts/DoctorExperience';
import UserBalancePage from './Header/User/User Balance/UserBalancePage';
import MyNote from './MyNotesList/MyNote';


function App() {
  const [dataLanguage, setDataLanguage] = useState(localStorage.getItem("i18nextLng"));
  const [usersMenuVisibility, setUsersMenuVisibility] = useState(false);
  const [exactDoctor, setExactDoctor] = useState("");


 
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
          <NoteLanguage.Provider value={[dataLanguage,setDataLanguage]}>
            <Doctor.Provider value={[exactDoctor, checkedDoctor]}>
              <CountDoctorExperience.Provider value={countExperince}>
                <div className="App">
                  <Header setVisibilityFunction={handlerUsersMenuVisibility} state={usersMenuVisibility} />
                  <Routes>
                    <Route path={'/'} element={<BodyDiv userMenuState={usersMenuVisibility} />} />
                    <Route path={'/note/:id'} element={<ExactNoteBody state={usersMenuVisibility} />} />
                    <Route path={'/userBalance'} element={<UserBalancePage state={usersMenuVisibility} />} />
                    <Route path = {"/myNotes"}   element={<MyNote state={usersMenuVisibility}/>}/>
                  </Routes>

                  <Footer />
                </div>
              </CountDoctorExperience.Provider>
            </Doctor.Provider>
          </NoteLanguage.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
