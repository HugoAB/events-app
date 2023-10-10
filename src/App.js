import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import Events from './pages/Events';
import Navbar from './UI/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NewEvent from './pages/NewEvent';
import { db } from './firebase';

function App() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const eventsData = await getDocs(collection(db, 'events'));
    setEvents(eventsData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const addEvent = (event) => {
    console.log(event);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events events={events} />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/new-event" element={<NewEvent addNewEvent={addEvent} />} />
      </Routes>
    </Router>
  );
}

export default App;
