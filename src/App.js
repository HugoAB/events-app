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

// const dummyEvents = [
//   {
//     id: 1,
//     title: 'Olimpia vs Libertad',
//     image: 'https://media.tycsports.com/files/2023/03/19/546839/olimpia-libertad-resultado-goles-y-resumen-del-partido_862x485_wmk.webp',
//     location: 'Asuncion, Paraguay',
//     date: '12-12-2005',
//   },
//   {
//     id: 2,
//     title: 'Olimpia vs Cerro Porteño',
//     image: 'https://media.tycsports.com/files/2021/04/20/260970/cerro-porteno-reibe-a-olimpia-para-disputar-el-superclasico_862x485.jpg',
//     location: 'Asuncion, Paraguay',
//     date: '28-12-2005',
//   },
//   {
//     id: 3,
//     title: 'Olimpia vs Cerro Porteño',
//     image: 'https://media.tycsports.com/files/2021/04/20/260970/cerro-porteno-reibe-a-olimpia-para-disputar-el-superclasico_862x485.jpg',
//     location: 'Asuncion, Paraguay',
//     date: '28-12-2005',
//   },
//   {
//     id: 4,
//     title: 'Olimpia vs Cerro Porteño',
//     image: 'https://media.tycsports.com/files/2021/04/20/260970/cerro-porteno-reibe-a-olimpia-para-disputar-el-superclasico_862x485.jpg',
//     location: 'Asuncion, Paraguay',
//     date: '28-12-2005',
//   },
//   {
//     id: 5,
//     title: 'Olimpia vs Cerro Porteño',
//     image: 'https://media.tycsports.com/files/2021/04/20/260970/cerro-porteno-reibe-a-olimpia-para-disputar-el-superclasico_862x485.jpg',
//     location: 'Asuncion, Paraguay',
//     date: '28-12-2005',
//   },
//   {
//     id: 6,
//     title: 'Olimpia vs Cerro Porteño',
//     image: 'https://media.tycsports.com/files/2021/04/20/260970/cerro-porteno-reibe-a-olimpia-para-disputar-el-superclasico_862x485.jpg',
//     location: 'Asuncion, Paraguay',
//     date: '28-12-2005',
//   },
// ];

function App() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    await getDocs(collection(db, 'events'))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setEvents(newData);
        console.log(newData);
      });
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // const addEvent = async (event) => {
  //   try {
  //     const docRef = await addDoc(collection(db, 'events'), {
  //       event,
  //     });
  //     console.log(docRef.id);
  //   } catch (error) {
  //     //
  //   }
  // };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events events={events} />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/new-event" element={<NewEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
