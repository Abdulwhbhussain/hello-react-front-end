// Greeting.jsx

// import React from 'react';

// const Greeting = () => <div>Hello, welcome to my app!</div>;

// export default Greeting;

// import React, { useEffect } from 'react';
// import { Routes, Route} from 'react-router-dom';
// import Greeting from './Greeting';
// import { useDispatch } from 'react-redux';
// import { getGreeting } from '../greeting/greetingSlice';

// const App = () => {
//   const dispatch = useDispatch()
//   useEffect(() => {
//     dispatch(getGreeting())
//   }, [])
//   return (
//     <main>
//       <Routes>
//         <Route path="/" element={<Greeting />} />
//       </Routes>
//     </main>
//   )
// }
// export default App

// Greeting.jsx
import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getGreeting } from '../store/greeting/greetingSlice';
import axios from 'axios';

const Greeting = () => {
  // const dispatch = useDispatch();
  // const {
  //   greeting, isLoading, isError, errorMsg,
  // } = useSelector((state) => state.greeting);

  // useEffect(() => {
  //   dispatch(getGreeting());
  // }, [dispatch]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>{errorMsg}</div>;

  const [greeting, setGreeting] = useState('');

  // useEffect with async await and axios

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/greetings/random_greeting');
        setGreeting(response.data.greeting);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  });

  return (
    <div>
      <p>
        greeting:
        { greeting }
      </p>
    </div>
  );
};

export default Greeting;
