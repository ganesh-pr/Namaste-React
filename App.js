import React from 'react';
import ReactDOM from 'react-dom/client';


const h1 = React.createElement("h1", {id: 'h1',key: 'h1'}, "Namaste Everyone!");
const h2 = React.createElement("h2", {id: 'h2',key: 'h2'}, "Namaste Everyone!");
const wrapper = React.createElement("div", {}, [h1,h2]);


console.log(h1);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(wrapper);