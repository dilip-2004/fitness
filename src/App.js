import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { useState } from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Gymworkout from "./pages/workout/Gymworkout";
import Homeworkout from './pages/workout/Homeworkout';
import Musclegainworkout from './pages/workout/Musclegainworkout';
import Weightlossworkout from './pages/workout/Weightlossworkout';
import { getItem } from './data/localStorage';
import { workoutData } from './data/workoutdata';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './config/firebase';
import Footer from './components/Footer';

function App() {
  const [local,setLocal]=useState( getItem() ? getItem() : null );
  const [suwg]=useAuthState(auth);

  return (
    <div className="App">
      <Router>
        <Navbar local={local} setLocal={setLocal} />
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/gymworkout" element={
           local || suwg ? <Gymworkout gymWorkout={workoutData[0].workouts}  /> : <Login />} />
            <Route path="/homeworkout" element={ local || suwg ? <Homeworkout homeWorkout={workoutData[1].workouts} /> : <Login />} />
            <Route path="/musclegainworkout" element={ local || suwg ? <Musclegainworkout musclegainWorkout={workoutData[2].workouts} /> : <Login />} />
            <Route path="/weightlossworkout" element={ local || suwg ? <Weightlossworkout weightlossWorkout={workoutData[3].workouts} /> : <Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login local={local} setLocal={setLocal} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
