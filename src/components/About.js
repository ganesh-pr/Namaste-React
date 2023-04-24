import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent - Constructor");
  }

  componentDidMount() {
    console.log("Parent - ComponentDidMount");
    this.timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    console.log("Parent - Render");
    return (
      <div>
        <h1 className="font-bold text-xl p-5">About Us Page</h1>
        {/* <p className="p-5">
          This is the Namaste React Live Course Chapter 07 - Finding the path
        </p> */}
        {/* <ProfileFunctionalComponent name="FV Ranga"></ProfileFunctionalComponent> */}
        <Profile name="First Child"></Profile>
        <Profile name="Second Child"></Profile>
      </div>
    );
  }
}

export default About;
