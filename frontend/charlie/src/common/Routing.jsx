import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rules from '../game/Rules';
import MainPage from '../common/MainPage';
import App from './App';
import AboutUs from './AboutUs';
import StartGame from '../game/StartGame';
import Login from '../profile/logIn';

import Question from '../game/Question';
import Quiz from '../game/Quiz';
import Answer from '../game/Answer';
function Routing() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'game/Rules'} element={<Rules />} />
                    <Route path={'common/MainPage'} element={<MainPage />} />
                    <Route path={'/'} element={<App />} />
                    <Route path={'common/AboutUs'} element={<AboutUs />} />
                    <Route path={'game/StartGame'} element={<StartGame />} />
                    <Route path={'profile/logIn'} element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Routing