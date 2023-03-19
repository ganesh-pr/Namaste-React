import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
      userInfo: {
        name: "",
        location: "",
        avatarUrl: "",
      },
    };
    //console.log("Child - constructor");
    console.log("Child - constructor " + this.props.name);
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ganesh-pr");
    console.log("data", data.name);
    const userData = await data.json();
    console.log("userData", userData.name);
    console.log("userData", typeof userData);
    this.setState({
      userInfo: {
        name: userData.name,
        location: userData.location,
        avatarUrl: userData.avatar_url,
      },
    });
    // console.log("Child - componentDidMount");
    console.log("Child - componentDidMount " + this.props.name);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Child - componentDidUpdate");
    // if (this.state.count !== prevState.count || this.props.count2 !== prevState.count2) {

    // }
  }

  render() {
    // console.log("Child - render");
    console.log("Child - render " + this.props.name);
    return (
      <>
        <h1 className="text-bold text-xl p-5">
          This is a profile based class component
        </h1>
        <img className="p-5" src={this.state.userInfo.avatarUrl} />
        <h2 className="text-bold text-lg px-5">{this.state.userInfo.name}</h2>
        <h2 className="text-bold text-lg px-5">
          {this.state.userInfo.location}
        </h2>
        {/* <h2>Name: {this.props.name}</h2>
        <h2>XYZ: {this.props.xyz}</h2> */}
        <h2 className="text-bold text-lg px-5">Count: {this.state.count}</h2>

        <button
          className="p-2 m-2 bg-purple-600 hover:bg-cyan-300 rounded-xl"
          onClick={() => {
            // WE DO NOT MUTATE THE STATE DIRECTLY.
            // Never do this.state = something

            this.setState({ count: 1 });
          }}
        >
          SetCount
        </button>
      </>
    );
  }
}

/**
 * With Parent and Child. Child making an api call in componentDidMount
 *
 *  Parent - Constructor
 *  Parent - render
 *      Child - Constructor
 *      Child - render
 *  Parent - ComponentDidMount
 *  Child - ComponentDidMount
 *
 *
 * With Child. Child making an api call in componentDidMount
 *
 *  Child - Constructor
 *  Child - render
 *
 * Child API call
 * Child - ComponentDidMount
 *
 * setState is called and updating phase of React LifeCycle is started
 *
 * <UPDATE CYCLE>
 * Child - render // This is because childComponentDidMount setState is called
 * Name, location, and avatar is populated
 * Child - ComponentDidUpdate
 *
 *
 *
 *  */

export default Profile;
