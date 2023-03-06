import { useState, useEffect } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(0);
  console.log("render", count);
  useEffect(() => {
    setTimeout(() => {
      setCount(1);
    });

    const timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <h1>Profile</h1>
      <h1>This is a profile based functional component</h1>
      <h2>Name: {props.name}</h2>
      <h2>Count: {}</h2>
      <button onClick={() => setCount(1)}>Increase count</button>
    </>
  );
};

export default Profile;
