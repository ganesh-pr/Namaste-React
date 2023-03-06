# Namaste-React
React learning from scratch
L2_Ignite
Browsers List includes last 2 chrome versions and supported versions of all other browsers

Creating a server
Hot Module Replacement
File Watcher Algorithm - C++
Bundling
Minification
Clearning your code
Dev and Production Build
Super fast build algorithm
Image Optimization
Caching while development
Compression
Compatibility with older versions of browsers
HTTPS on dev
port number
Consistent Hashing Algorithm
Zero Config
Tree shaking - Removing unwanted code
Transitive dependencies

In addition to module, how many types of scripts can be used?



L3 - Scripts, React Components, JSX, Functional and Class components
Create react app using npx create-react-app
COnfigure build and start scripts
Babel plugin transform remove console
Remove console logs
How to write image tags inside JSX
Abstract Syntax Tree
Different usages of JSX? How to create multiple tags inside JSX
Versions of transitive dependencies can be found in node_modules >> package-lock.json
Q: node_modules does not have package-lock.json
R: JSX sanitization, Component Composition, React Reconciliation, Diff algorithm, React key reconciliation
R: Parcel needs to be a dev dependency or prod dependency
 One cannot use css over key

L4 - Talk is Cheap, Show me the code
React Fragment, Inline Styling, Config Driven UI, Props, Virtual DOM and Reconciliation

Diff between Compiler and Transpiler
Functional components - Round brackets are needed when there are multiple lines
Line and MultiLine Comments

Javascript can be used inside of JSX by using curly braces {}
React does not force us to use JSX or typescript or ES6

IQ: How to approach interview questions building an app. Like choosing the list or other elements etc

Padding (inner space) is used to separate text boxes and images while also keeping them aligned and is used to separate elements from sticking to the border. Only positive values.
Margin is (outer space) used to space between independent elements and the external page of the website. Positive and negative values. Also used for: changing positions on a site, Overlap one element over other, Setting the distance between elements.

Styling is in Javascript. So give styling in JSX by giving style = {styleObj} or style = {{backgroundColor: yellow}}

Back end drives the config of how UI needs to be rendered. Swiggy API returns response in the following format: carousel based on offers in region. So, if offers are available, carousel is included in the response and UI displays a carousel. If not available, carousel is not part of the api response and UI does not display carousel. Backend drives what kind of website to show per location and what kind of website to show if offers are available.

HW: Optional Chaining

parameter for receiving props can be named props or anything else. However, using props is a good convention

All attributes are stored in the props array. So when receiving the attributes, they need to be received as props.attribute

Map is best for functional programming

VIRTUAL DOM:
Representation of a DOM with us is virtual DOM. We need virtual DOM for reconciliation in React.

Reconciliation is an algorithm that React uses to diff one tree with another to determine which parts need to be changed. Do a diff between trees from real dom and virtual dom and finds out what needs to be updated.

The diff will re-render the node that changed and its children. All the other nodes are not re-rendered.

Case 1: If all the children are the same element (4 divs as children div1, div2, div3, div4) and one div changes or is added, the diff algorithm says all children have changed and all 4 divs will be re-rendered. 
Case 2: If there are different child elements (div, img), the diff algorithm says only one div has changed and only that div will be re-rendered.

However, if there is a key attribute to the elements, in case 1, it will re-render only the new div.

HW: Reconciliation algorithm, React fiber in React 16

github.com/acdlite/react-fiber-architecture

HW: Why not use index as a key
no key < index key (use ONLY if you don't have anything)< unique key

L5 - Default/Named imports, Folder restructuring, Hooks
Default import:
1. export default
2. Can return one thing
3. import Header from './Header'
4. The import Header need not be the same because only one default will be there
5. relative path can ./Header or ./Header.js
6. Akshay's preferred approach

Named import:
1. export const
2. Can be used to export and import many constants
3. import {Title} from './Header'
4. {Title} is not object destructuring
5. However, we can use 
    import * as obj from './Header' 
    to be used as obj.Title

React supports one way data binding
Input element change in HTML is reflected in the browser
Input element change in JSX is not reflected in the browser. On the other hand, input element change can be captured in onChange event in JSX
onChange = {(e) => {console.log(e.target.value)
searchTxt= e.target.value}}
However, the onChange event does not modify the input value

To be able to mainitain variable, we need to use a React variable.

Every component in React maintains a state. You can add all variables into the state. Everytime you use local variables, you use state inside React. We need to use useState hook provided by React.

Hooks are normal functions. Every hook has its own role or functions

one way data binding is good because if two way data binding is allowed, it will update the variable in many places making it difficult to predict the changes. One way data binding also helps in optimization.

useState hook returns an array of two items: first is the  variable name and second item is the set function to update the variable. the array is called state variable and we use destructuring to get searchTxt and to get setSearchTxt. If we don't give any default value in useState, it is like let s;

We can also do 
const searchVar= useState();
const [searchTxt, setSearchTxt] = searchVar

HW: Read about e in onchange (Synthetic events)
Learn more about one way and two way data binding 

Local variables cannot be used in React because React does not know to re-render based on variables. React also cannot keep track of each variable.
So React states that everytime we need to use variables to sync with the UI. We use state variables.

Q: Where can we see virtual DOM
What is state and why do we use state
What is useState hook and why do we use useState hook

AMA:
Don't just study for your interviews. 
Don't be distracted. React, Next JS, Chat GPT, PHP, DSA, GraphQL. Focus on only one thing.

Do development, DSA and Competitive programming. Need not be an expert or be able to solve Leet code Hard. But get the basics right. It improves your thinking.

DSAs are fundamentals of CS. Every developer should know data structures. We should know tree algorithm because we are not using it. Honest opinion from Akshay. You can become the best UI engineer only if you know DSA

Reconciliation, how to find out the difference between the trees, how does a tree look like in JS, and how to create a tree in JS

Puzzles like sudoku, criss cross and cross overs. Games like chess improves our IQ and logical thinking. Get that high on solving DS.

File watching algorithm is written in C++ as C++ is very close to the computer. However, React is very very far. It takes a lot of steps for computer to understand it.

React and any other framework is built for developers

You are not able to study DSA properly because you always study for interview. Reading two weeks before interview is not possible and is unrealistic. Change your time and intent.

Do not follow shortcuts shared in Youtube videos. Everyone will have their own likes: Backtracking, DP, Stack

Solve a lot of easy questions before going to Medium. Helps us become a lot confident.Don't go medium questions quickly.

F: Teach Namaste DSA

Maintain notebook with pen and paper. Helps retain better.

Don't just watch videos. Practice is the key.

Longest Common Subsequence, Merge Sort, Heap Sort

JS and DSA are fundamentals. React will come and go. Don't put a timeline. Take a problem one day or two days, watch all videos

REALIZATION
DO NOT GO TO COMFORT ZONE
START MAKING A PLAN
SIDE HUSTLE OF LEARNING (Do not quit your current opportunity) - Every day fight for it - No breaks and no weekends
If we pledge for one hour a day. For any trips etc. Compensate that one hour.
REALIZE IT WILL TAKE TIME
If you are a warrior, do anything it takes. We cannot be stuck in a tunnel and not move
HARD WORK AND HUSTLE AND FOCUS. BE CURIOUS.
People who have achieved big are hustlers
People who want to dream big are hustlers
People who want to create impact are hustlers

They are great focused and not distracted with too many things.

START SEARCHING FOR JOB AND KEEP FAILING

Even a clock that is not working shows correct time twice a day

Think of how much value you can give to the company, not what tech stack you have.

Company does not want which tech stack. What company needs is can you write code that can build the application?

Negotiate with recruiters. Always quote a higher amount

Ask for the maximum quote

Let me think about it. I will get back. Don't settle for less. HR will try to match it up.

Once an SDE 2, always an SDE 2

All the research from so many articles, videos, teachers, styles of writing

F: Bootcamp

Try to answer 5 questions in discord

BE A BEAST IN YOUR FIELD

L6: Exploring the world

Hooks are normal functions. When we have a website, there is some data inside it and when we do something, this data should update, our UI should update. So when user is doing actions, data should be updated.

When we have something that changes on the UI, we use local state to handle that.

For example, when data updates on click of a button, local variable will change. However, the change will not be displayed on the UI. We will need something to sync that data on the UI. For that Syncing, we use a state variable. React  will need to track the change to be able to sync that state with the UI.
Clicking on Change Title will update the title const but UI will not display the updated title.

I: Read about React Fiber - The latest reconciliation algorithm

<h1>
<div>
    <ul>
        <li>
            </>
I: If someone asks Why React is fast. It is because of strong DOM manipulation. The most expensive operation on the UI state change is DOM manipulation. Like modifying a list or something, React does faster DOM manipulation.

How does it do faster DOM manipulation? Because of the super powerful diff algorithm. It detects the diff from the algorithm and it just changes that.

Clicking on the button is changing the variable. UI is not displaying the updated variable. React needs to know I have to keep my UI in sync with the variable. React needs to know I need to keep tracking the change on title. If the title changes, it changes. React cannot do that on normal variable, so we use useState variable.

That is why, we use state variables.

If some one asks why do we use state variables, not local variables. This is because React does not track these local variables. React says that I will only track those variables which are local state variables. We use useState to create a state variable. It is available from the react core library.

React gives us access to two items as part of useState function. One is state variable and the other is a function to update the state variable. We use array destructuring to access these two items.

 We pass in an initial state as an argument to useState. React needs some initial value to put in this variable.

const [title, setTitle] = useState(); 
is same as
let title; 

THe title is now not a normal variable. React is keeping track of it because we are using useState.

Now, as and when the title is updated, now as and when the title changes, our algorithm is super fast and it changes the title quickly. It will re-render this component with the updated title.


<button onClick={() => setTitle('New Food App')}> Change Title </button>

As and when we clicked on the button, the onClick function was called and the title variable was updated. Then React re-renders the component. When re-rendering the component, React triggers the Reconciliation algorithm. React exactly knows that I just want to re-render the h1 tag on the Ui.

Look at the elements tab in browser, only h1 got updated. And observe the console logs render is printed on click. So the entire Header component is re-rendered again quickly and it triggers the reconciliation process. It will just update the h1 node. It takes a few milliseconds to calculate all this. Just a few milliseconds.

Reconciliation is the process of checking the difference between the two tree. Checking the difference between two states of Virtual DOM. It quickly updates the virtual DOM and also quickly updates the actual DOM as well. It keeps in Sync and that is why React is fast.

The same thing in JS needs a lot of code and the app is not performant. That is why, React is so fast.

Why it re-renders the whole component?
We might be using the state variable many times and there could be different state variables that might be changing. We need to re-render the component with the updated state values. It just updates the whole UI. This is why React is very powerful.

Everytime, it is triggering the reconciliation algorithm, modifying teh virtual DOM, finding the difference, updating the actual DOM very fast on every key press.

In case of search text input box, its reloading the whole input but chorme only shows the value update.

Microservices:
When you have to build a large project such as Swiggy or flipkart or Amazon or Uber, there are multiple react projects and microservices. There are 100s of microservices running Uber.

In the olden days, there used to be one Java application: It would have APIs and even the UI used to reside in the APIs. Same project would have code for SMS sending. Same app is used for notification. Hundreds of developers are working in one project. It has its advantages that we need not maintain different projects, different repos. This architecture is known as monolith. There are many advantages of monolith and there are so many applications working on monolith.

World is now moving towards microservice architecture

We now have separate projects for UI, API, notification, logs, and authentication. That is why we have different ports. UI is running on 1234. Backend is running on 1235. Even databases have replicas not one database. We are separating our concerns and single responsibility. All can follow different languages.

UI can follow react, backend API can follow Java, Notifications and logs can be written in Python. Authentication can happen in Go lang. All different projects.

The choice of language depends on the use case. Most of the microservices in Uber are written in GoLang.

Food villa is a new UI microservice. 

Swiggy.com: 3000 --> /
          : 4000 --> /dapi
          : 5000 --> /notifications

Different ports but the same domain name. Suppose for GitHub, apis come from api.github.com and there is a different github.com. These are two different domains. And these can call each other using these different url / to /dapi and /dapi to /notifications etc.

We are exploring the world. Our UI will be talking to other services.

fetch is available to us through JS engine's window object. It is pre-built JS function that is there in JS. It is a browser API. Its a super power given to us. We can call the fetch function and pass as an arg an api and the fetch function calls that API.

Calling a fetch API in Component is not good. Because on every keypress, every state change and every re-render the API is called.

Two ways to load data:
1. Load the website, call the API (300ms) and render the page (200ms). Total render time is 500ms
2. Load the website, show something on the UI, call the API, update the UI

Second is because of the UX. Best part is the reconciliation algorithm. React tells us to do this many times. React has given us a functionality to make this happen. React gives us the amazing functionality: useEffect.

First way will take time to get the API and then creating and updating the DOM structure will take some more time.

Second way, we will render something quickly before the API call.

useEffect will not be called immediately but whenever my useEffect wants to be called. If useEffect is called on demand, it will be called after render.

A COMPONENT WILL RE-RENDER IF STATE CHANGES OR PROPS CHANGES.

1. If we need useEffect to be called after every re-render.
useEffect(() => {
    console.log('render');
})

2. If we need useEffect to be called on demand, we pass the dependency array as a parameter.
useEffect(() => {
    console.log('render');
}, []);

useEffect needs to be imported as a named import from the react library. useEffect is hook (which is nothing but a function) and we pass two params: one is the callback function, another is the dependency array.

3. If we need useEffect to be called only on state changes or on first render, we pass the state variable into the dependency array

useEffect(() => {
    console.log('render');
}, [searchText])

Call the render console only when the dependency state variable searchText changes or when the first time render.

UseEffect dependency array with no arguments in the array - called only once after render

UseEffect dependency array with argument as state variable - called once after render + every time the state variable is updated

useEffect with no second param i.e. useEffect has only call back function - called after each render


QQQQ: Curly braces can only take JS Expressions but not statement
Read: JSX Curly braces (beta.reactjs.org)
{
    a=10;
    console.log(a);

}

The above code does not work as it is a statement

{
    ((a=10), console.log(a));
}

The above code works because it is an expression

IF else is a stament, we cannot do it. Ternary operator is an expression

Toggling the login and log out button:
React knows exactly which node to change and it will change the login and log out button. This is why React is fast.

Why your application is fast:
There are bundlers which are doing the minification, transpilation, removing console logs, doing image optimization, lot of bundling, parcel is the beast and parcel is doing all of the above.
We also have in our application React, which has Virtual DOM, reconciliation, diff algorithm (tracking teh diff of trees and updating only the change in DOM, the DOM updates in React very fast)

What is the use of Babel, Parcel, JSX, React.
What is the use of different libraries: React and React DOM
The diff algorithm is written in the core of react and dom updates happen via react-dom 
Diff algorithm works the same way in React Native mobile apps

Q; Why do we do await twice on fetch (Ref: Body.js)

Learn git in command line and then only use Git Lens

Shimmer UI - https://medium.com/@dhilipkmr/the-loading-shimmer-f7129ac41894

useEffect is a hook, provided by React, that can be called after the component is rendered.
useEffect takes two params: callback function and dependency array.
callback function is called after render. 

L7 - Exploring the Path

Never write component inside a component i.e. before return statement . Because each component will be created on each render.

Never write useState inside if else. React does not like inconsistencies. React does not know if the stae will be there always or not.

Never use useState outside of the functional component. This is because useState is a hook provided by React that creates a local state variable inside a functional component.

HW: Why is CDN a better place to host your images: Faster, caches your images, 100% uptime

import packages only if it is important and needed. Better to code small components.

We will import packages only if the work is tedious. Eg: Formik

Write a component from scratch. Never use the shortcut rafce for better practice.

Create configuration using createBrowserRouter (recommended router for React). createBrowserRouter is the router config.

Pass routes to createBrowserRouter {path: <Url>, element: <component name>}. createBrowserRouter takes an array which is a list of objects with the path details.
If you now type localhost:3000/about, the app will not render the about page because we have not provided the router to our renderer
Using RouterProvider, provide the appRouter to the app in the root.render
root.render(<RouterProvider router={appRouter}>)

JS runs in sequence. So always have the router created after AppLayout.

Read: Read about all the routers

react-router-dom is created by Remix and not Meta

errorElement is another attribute with path and element to show an error component in case the user types in a different route.

The problem with anchor tag (similar to the one on logo) is it refreshes the whole page

Single Page Application:
Our application does not reload. It does not make network call when changing the route

Two types of routing: Client-side routing and SWerver-side routing

Server-side routing: Get the new route components from server (Old applications)

Client-side routing: Go to the new route without making network call. This is because we have all the components fetched. We will use this when we do not want to load anything from the server by making network calls.

Using anchor tag will reload the whole application. Use link to not reload.

Link will be used by React to track routes. Eventually, link will be converted to anchor
as browser understands anchor tag only.

Since we need to always display header and footer, the outlet for rendering needs to be the placeholder between Header and Footer layout in Body component

So, Header and Footer should not change, only the outlet will change. All the children will go into the outlet according to the route.

children should also include the default route i.e. for Body

Reconciliation can be observed in browser. React Router DOM is taking care of everything during routing

root div is showing as updated in chrome because the child div is changing

Outlet is a component

For dynamic routing, to read the id, we use useParams hook from react-router-dom. path: 'restaurant/:id'

Image is a default export 

HW: Build a login page using formik

Create a router using createBrowserRouter. Takes array of configuration objects. Each config object has path and element. Error elemeent is errorElement
Use RouterProvider to provide the router to the app
Component that fills in: Outlet from react-router-dom
Children that we make go inside outlet
Does the sequence of the children matter: No
useRouteError hook will get the error information
errorElement has the error component
Read dynamic id using useParams hook
Having different components will help in Modular, Readable, Maintainable, Reusable and testable
At the end of the day, link uses anchor tag

logging useState returns an array of two items: first with the initial value and second with the call back function

L8:
Class Based Components: Helps a lot in interview
Before joining Uber, coding was heavily done in class based components
When React started, concepts of components was introduced via class based components. Hooks have recently started coming in.

Earlier, no concept of hooks, useState and useEffect. Only Class Based Components used to be there.

It used to be painful to write the code but it was magical at that time as many developers were coming from jQuery and moved to React and it used to be super amazing thing. It was amazing to write class based components, to use React, to have Reconciliation process. It was not very effective as it is today but still it is effective. We were used to make large applications using only Class Based Components. Class Based Components is the only big thing aat that time. React was built on top of it.

The concept of component is same as today but the code we used to write is a bit different. Later on React core team or community, when we used to write in React using Class based components, things get to become messy. Code was not much clean. Class Based components code used to be very big as compared with functional components. It was less maintainable and confusing for a few developers.

Now that we have known how to build an application using functional components, we can now understand class based components.

Class Based Components are no longer used. If you are making a new project, you would not be using class based components as not used any more now. Because we can write ALMOST everything using functional components.

We are discussing because we might go to a company which has older projects which are already using class based components. Don't use it in any upcoming new projects but we should know it.

No teacher can teach you 100% React, we need to give our 120% to practice things up. Do your assignments. 
------------------------------------------------------------------
Review from last class:
What are we using on About link? - Link tag
Where did we import it from? - React-router-dom
At the end of the day, what is the link using? - Normal anchor tag.
What hook did we use to read the URL? - useParams 
What function to configure routing? - createBrowserRouter
What component to provide router to our app? - RouterProvider
Suppose if we have children, where did this children get injected? Outlet
Where did we import useParams, createBrowserRouter, RouterProvider, and Outlet - React-router-dom

Read: createBrowserRouter is the recommended router. There are other routers such as createHashRouter and createMemoryRouter. Read about other routers during free time.

Always use createBrowserRouter

1. How to make nested routes? Children inside Children.
        Children will have similar array of paths
        Do we need to write /about/profile in path? Might work need to check but recommend path: 'profile'
        If we use / before profile, react-router-dom will consider localhost:1234/profile
        If use path: 'profile', it will consider parentPath/{path} => localhost:1234/about/profile
2. Create Outlet in the parent component.

----------------------------------------------------------------------

Functional component is a normal JS function
Class based component is a normal JS class

Class Based Components create using Class and extends React.component
React of React.component is imported from 'react'.
The most important and mandatory part of Class Based Component is the render method. You cannot create a Class Based Component without a render method. What ever is returned from the render method is injected into the DOM


Functional component is a function that returns some JSX
Class Based component has a render method that returns some JSX

We export from the class component and use it in the calling component like we export default and import it in normal functional components

Functional components receive props as an argument in the function (eg: props.name). Class components receive props using this.props (eg: this.props.name)

React knows this is a class based component but whenever there is a state change, it needs to re-render it.

When there are multiple props, React will collect all props and attach it to the class

{this.props.name}
{this.props.xyz}

Functional components have their own state
Class based components have their own state

HW: 1. When you have constructor has the argument props. Not to worry where the props come from, React handles and takes care of it. Why do we do super(props)? - Will answer about classes in JS, why do we use constructor, why react is passing props. Will open up your mind about why we are using classes in JS

Always when creating a class based component, get your props inside the constructor and do super(props)

Whenever we load a class, constructor is called and this is the best place to create your state. React gives us access to this.state 

Eg: 
In constructor, this.state = {count: 0}

In functional components, we need to create hooks one by one.
In class components, we create all states in the same object

Eg: this.setState({count:1, count2: 0})

React maintains one big object to maintain the whole state. This is for both functional and class components

In this.setState, we send a modified object, the modified object can include one state item or multiple state items

We do not mutate state directly

React has constantly made developers happy. React will just modify the only item in the object

In functional components, we are specific and we know we are setting the state of the count: setCount

Read about how setState works, and what is react lifecycle 

Sequence of calls: Every time a component is called: First Constructor, then render. Everytime state changes, the render is called again and again. However, constructor is not called.

Why useEffect is a great place to make API calls?
First of all, we render whatever we can using the default state. Later on, we update the state

How many times will have the component re-rendered because of change in state from useEffect?
One for the initial render with default state value and after the initial render is complete, second render will be called again with the updated state.

React life cycle methods: Constructor, render, componentdidmount

We need to invoke API calls in componentDidMount. Because first constructor and render will be called to render the default state. Then, componentDidMount will be called to fetch the response from API so the updated state can be rendered

The JSX we return from class component is exactly the same we return from functional component

We can do both the things: 
1. import React from 'react'; 
    and then use:
    class test extends React.Component {
        (or)
2. import {Component} from 'react';
    and then use:
    class test extends Component

    Research why we need super(props)

    super(props) is the first line of constructor. Almost always.

    What is the best place to initialize state? 
    Constructor because whenever our class is initialized, the constructor is by default called

    What is the sequence of calls when there are parent and child components?
    1. Parent Constructor 
    2. Parent render 
    React when trying to render parent JSX, it identifies the child component and triggers the child lifecycle 
    3. Child Constructor
    4. Child render
    React now completes the child lifecycle in the next step
    5. Child ComponentDidMount
    Now that child lifecycle is complete
    6. Parent ComponentDidMount will be called.

What is Mount in ComponentDidMount? Once the component lifecycle is complete, it will mount the component to the parent component.

    What is the sequence of calls when there are parent and multiple child components?
    1. Parent Constructor
    2. Parent render
    3. First Child Constructor
    4. First Child Render
    5. Second Child Constructor
    6. Second Child Render
    DOM IS UPDATED
    7. First Child ComponentDidMount
    8. Second Child ComponentDidMount
    9. Parent ComponentDidMount

    React lifecycle diagram is the source of truth
    https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

    IQ:
    There are two phases in which React rendering is happening. First is the render phase and second is the commit phase.
    In the render phase, constructor and render is called. Babel helps convert JSX to Core HTML. Core HTML is generated into the DOM. 
    That is why we see shimmer effect.
   ?? Commit phase starts (componentDidMount) - where React actually updates the initial DOM and componentDidMount is called

    Is Render or commit phase fast? 
    Render phase. 
    Render phase is dealing with objects and forming the HTML. So it is fast. React patches up things inside render phase for the children
    Commit phase needs to update DOM. Updating the DOM is tough

    Going back to the example with two childs, React patches up the render phases

    The flip side of not having this lifecycle is that second child will wait to render until the first child returns the api response.

HW: Why componentDidMount can be made async but useEffect cannot be async. Advanced React question. How hooks were built.
HW: Try destructuring on the userInfo object

If we make an api call in child component, then parentDidMount will be called first. This is because we are calling the componentDidMount of the child component asynchronously

Parent Constructor
Parent render
Child constructor
Child render
    // async function child componentDidMount will be called but the console log is not printed as await is there to wait for loading of the data
Parent ComponentDidMount
Child ComponentDidMount


Second case:
 With Child. Child making an api call in componentDidMount
 
   Child - Constructor
   Child - render
 
  Child API call
  Child - ComponentDidMount
 
  setState is called and updating phase of React LifeCycle is started
 
 <UPDATE CYCLES>

  Child - render // This is because childComponentDidMount setState is called
  - Name, location and image are populated here
  Child - ComponentDidUpdate
    */

When the api is made, component is already mounted. We just need to update it.

ComponentDidMount will be called after first render. ComponentDidUpdate will be called after every next render.

ComponentWillUnMount will be called on navigating away from the page

DISCLAIMER: Never compare React's lifecycle methods to functional components. Never say useEffect is equivalent to componentDidMount. useEffect does not use componentDidMount behind the scenes.

after first render, componentDidMount is called. After every subsequent render, it is not mounted, it is updated.

For useEffect, if no dependency array is provided, it is called after every render.
For useEffect, if dependency array is blank, it is called after first render.

React team when creating the modern React code, they removed the concept of React lifecycle methods

useEffect with state object in the dependency array calls on every update to the state object. It is an array because array can take more than one state object.

useEffect(() => {

}, [count])

componentDidUpdate can be used to achieve this in class based components.

componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count || this.state.count2 !== prevState.count2) {

    }
}

Above is not a recommended code.

Also, if we place setInterval in componentDidMount and navigate to a different page, setInterval is still called
and when we return back to the page with setInterval, it calls two versions of setInterval

This is because of SPA. SPAs do not reload the page. It is just changing the components. It is rendering. It is a bad thing about SPA. This is a lot of performance loss.

We can make a scalable application by taking care of every line of code. 

Use clearInterval in componentWillUnMount

this is shared with all methods of the class

In case of useEffect, return is used for this purpose.

useEffect(() => {
console.log("useEffect");

return () => {
    console.log("useEffect return");
}

}, [])

useEffect return is printed on returning.

React is popular because they realized developers stop writing code if they continue to take the route of lifecycle methods. That's why they released 

You should know the internals of React.

Optional HW: Read more about by clicking on Show less common lifecycles. Most of them are deprecated.

HW: Why we use constructor props and super props
When using async on useEffect, React throws error. Find the cause.






