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
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreeting } from '../store/greeting/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greetingMessage = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  return (
    <div>
      <p>{greetingMessage}</p>
    </div>
  );
};

export default Greeting;
