// Greeting.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreeting } from '../store/greeting/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const {
    greeting, isLoading, error,
  } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>You got an Error!</div>;
  }

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
