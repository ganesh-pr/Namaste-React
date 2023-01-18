import { createElement as ce, useState } from "react";
import ReactDOM from "react-dom/client";
import Food_Villa_New from "./Food_Villa_New.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";

// React.createElement => Object => HTML(DOM)

/* 
const h1 = React.createElement("h1", {id: 'h1',key: 'h1'}, "Heading 1 for parcel");
const h2 = React.createElement("h2", {id: 'h2',key: 'h2'}, "Heading 2");
const wrapper = React.createElement("div", {id:"container", hello: "world"}, [h1,h2]);
 */

/* const h1 = ce("h1", {id: 'h1',key: 'h1'}, "Heading 1 for parcel");
const h2 = ce("h2", {id: 'h2',key: 'h2'}, "Heading 2");
const wrapper = ce("div", {id:"container", hello: "world"}, [h1,h2]);
const wrapper = <div>{h1}</div>;
console.log(h1);

root.render(wrapper);

*/

// JSX is not HTML inside JavaScript. Instead, it is HTML like syntax.

// JSX => React.createElement => Object => HTML(DOM)
//JSX is not React. Babel is converting JSX into React (babeljs.io)
// JSX Advantages: Readability, Maintainability and Developer friendly. Less code, Syntactical sugar
// Below code is known as JSX expression

const h1 = (
  <h1 id="title" key="h1">
    Header 1 from JSX
  </h1>
);

/*
Components
Functional Components, Class Based Components
Functional are new and used most of the time. Can return JSX or React elements
First letter ('H') needs to be capitalized - Not Mandatory, but a good convention
Use paranthesis if the code is on multiple lines. Also, if one line and ends with a semicolon, code is valid.
h1 above is a React element. Header component below is a React component. 
h1 is a normal JS vairable and HEader component is a normal JS function
JSX Sanitizes the code against XSS attacks 
Component Composition => Passing Component inside a component 
*/

const HeaderComponent = () => {
  return (
    <div>
      <h1>Namast React Functional Component</h1>
      <h2>Namaste React Functional Component</h2>
    </div>
  );
};
// Other ways of React element
const HeaderComponent1 = () => (
  <div>
    <h1>Namast React Functional Component</h1>
    <h2>Namaste React Functional Component</h2>
  </div>
);

const HeaderComponent2 = function () {
  <div>
    <h1>Namast React Functional Component</h1>
    <h2>Namaste React Functional Component</h2>
  </div>;
};

// Using React Element inside of functional component
const HeaderComponent3 = () => (
  <div>
    {h1}
    <h1>Namast React Functional Component</h1>
    <h2>Namaste React Functional Component</h2>
  </div>
);

const h1_2 = () => (
  <h2 id="title" key="h1">
    Header 1_2 from JSX
  </h2>
);

const HeaderComponent4 = () => (
  <div>
    {h1_2()}
    <h1>Namast React Functional Component</h1>
    <h2>Namaste React Functional Component</h2>
  </div>
);

const H1_3 = () => (
  <h1 id="title" key="h1">
    Header 1 from JSX
  </h1>
);

const HeaderComponent5 = () => {
  const [test, searchTest] = useState("");
  return (
    <div>
      <H1_3 />
      <h1>Namast React Functional Component</h1>
      <h2>Namaste React Functional Component</h2>
    </div>
  );
};

// Assignment L3

const Logo = () => (
  <img src={Food_Villa_New} alt="Logo" height="40px" width="80px"></img>
);
const SearchBar = () => (
  <form>
    <input type="text" placeholder="Search" />{" "}
    <button type="submit">
      <FontAwesomeIcon icon={faSearch} />
    </button>
  </form>
);

const User = () => <FontAwesomeIcon icon={faUser} size="2x" />;

const HeaderComponentHW = () => {
  return (
    <div className="headerClass">
      <Logo></Logo>
      <SearchBar></SearchBar>
      <User></User>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element into root
//async defer

//root.render(h1);
root.render(<HeaderComponentHW />);
