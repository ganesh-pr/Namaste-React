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


L9_Suspense_LazyLoading_Chunking_CustomHooks
Common hooks: useState, useEffect, useParams
So far: Build a react page, render components, manage state, pass data from one component to another, to break down a component into smaller parts, to make an external API call, to fetch data and show it in our components, to create buttons and input boxes.

Class Based components for your interviews and for older projects. Makes you understand the philosophy of React when it was built.

Senior developer: How are you able to keep the code clean, to maintain the code and to manage the code

One solid project makes a lot of difference.

Did not copy paste even one word of the code.

My HW: Play with default and named imports

How many times componentDidMount will be called - one

How many times componentDidUpdate will be called - when state changes

Two phases of React lifecycle - Render and commit phase

There are three things: Mounting, Updating and Unmounting

Update happens when we change some data, when we change some behavior in our component. Whethere there is change in props, state, or onchange handlers

HW: Try to do console logs in lifecycle methods and see how it works. Really very important.

If a component does not have any props, does not have any state, how many times componentDidUpdate will happen - Zero times

componentWillUnmount will be used to clean up.

When, How and Why should we build hooks?

Why should we build hooks?
Reusability, Readability, and Separation of concerns 
 
 filterData
 Readable - Abstract the logic. Write only one line for the invocation.
 Reusable - Filter data somewhere else in code, we can reuse it. Best practice is to make utils folder. Some people name it helper, commons, or shared folder 
Testable - Can create test for just the filterData
Maintainable - Easy to debug. No need to search all the code. If we need to change filter logic, I can quickly fix things up in utils.
Modularity: Breaking down code into meaningful pieces. Can write code at the invocation itself. But created in a shimmer file that way it is modular.

When creating a new hook, better to create a new file. Always create a hook with use in front of it.

Component Names and file names of components should start with Uppercase
Component Names and file names of hooks should start with lowercase use

When creating a hook, better to export it by default. So there is single responsibility.

restaurant in RestaurantMenu.js is a state variable. If I can fetch the data using a useRestaurant so I need not worry about where that data is coming from, it will be great. We don't have to care whether its hardcoded, whether its API. That way, the only job of restaurantMenu is to display only the details.

Hooks are normal functions used to extract the logic from different functions. To export some logic into the RestaurantMenu function.

RestaurantMenu has two responsibilities: fetch data and show data. useRestaurant is maintaining the state. No need to maintain the state in RestaurantMenu.js

How is it different from a function component: Functional component is a function that returns a JSX
Hook does not need to return JSX. Piece of JS code to extract some logic. Returns object, array, value
useParams returns object
useEffect does not return anything
useState returns an array.

RestaurantMenu will call useRestaurant and useRestaurant will have its own state reconciliation going on. React abstracted everything from us and our component will automatically update.

Production Ready code Tip 1: Export all the reusable params to constants.js

Offline status shows up the dino game on chrome.

HW: Extract getRestaurants as a hook.

Emoji editor Window + .

Why a hook, why not a normal function?
Can we make a state variable inside a normal function?
Can we have useEffect inside a normal function?
Will the react trigger reconciliation for normal function?

Job 1 of a hook: Extract the existing logic and write it to a hook.
Job 2 of a hook: How to write it from scratch

useOnline is a normal arrow function
return the boolean
export default hook name

Why useEffect
Why not a normal function and not  a hook
why a state variable and not a normal variable
Why return isOnline

Clean code. No need to worry about what useOnline is doing.

Similarly, useParams is created from react-router-dom. We need not worry about the code. It just gives resId. React would also have maintained the state. Everytime my param changes, my component is reloaded.

HW: Tomorrow, people from our batch would be building some libraries. You would be able to build your own npm library for useOnline. You have the potential to build a lot of things.

Senior developer tip: clean event listeners

Whenever we go offline and come back online, event listener will not be created.
When we navigate to home > about > home, event listener is still there
But we need event listener only for the body component
It is always a good practice to clear the event listener, when we go out of the component.
Otherwise, our browser will keep creating event listeners and will blow up.

When removing event listener, we will remove the same call back function that is added for addEventListener
Body component is doing an early return for online.

Body component does not need to worry about what does useOnline do

Similarly, for logout and login, we can show online status. This is how chat tools such as slack, teams show the status

Whenever there is feature we can extract, we can use hooks

HW: Build a hook to extract login logout functionality. useAuth
    Similarly, getLocalVariables, and setLocalVariables. useLocalStorage

In Ignite App course, we studied parcel, npm, babel. Parcel is a beast.
What is the purpose of a parcel: Tree shaking, HMR, minification, caching, live server.
What is the basic job of a bundler? - Bundle things.
What should it bundle? - Bundle your code
How many JS files does parcel produce? - 1 JS file. (Remove dist if more than one js file is used)

Network tab - JS files
extn-utls.js, installHook.js, react-dev-tools.js - Chrome extension file
index.js - has request URL (all code, components, hooks is bundled, minified, compressed, optimized, obfuscated together);
The size of index.js file is large during development and small during production.

Make My Trip: Primary job is to book flights. Secondary job is to book hotels, homestays, trains, etc.
For a big app like Make My Trip, Explore More component. Each tab has so many components (hundred of them).
If our bundler took the code of all components and put it in one index.js, it will make our app slow. Because the size of index.js is huge.
It would not make sense to put all our components in one js file.

Large scale prod apps will not work by creating just one bundle. We need to do chunking (or code splitting or dynamic bundling or Lazy loading
or On Demand Loading)

On the first day, you need to understand and contribute to their repository. So you know how these large scale companies work, how code is managed, and why these apps are fast.

Is bundling good or bad? Its good to a limit. You cannot bundle everything into our app. We need to make logical bundles to our app.

We need to make our bundle size small but logical.

We hear a lot of times that it is just one line of code, it will not make much difference. It is not true

A few lines of code can optimize our production ready app to a whole new level.

Most times, we don't want to break the experience of the user and do not want to burden the users with a large bundle size file. We want to keep our bundle size small but logical.

Most times, when users visit a site, the users come with an intent to book flight. 

How many visit to book a flight - 80/90 out of 100
How many visit to book a train - 10/12

When users visit to book a flight, will they need to go to buses or trains or cabs. Most times, it makes a lot of sense to not go to other modes of transport.

Suppose flight has 100 components, trains has 100 components. So, if a user visits a site to book flights, we load the 200 components for all modes of transport. Is it a good idea?  Its not a good idea

So, generally in your large scale applications, we build different chunks, we build different bundles based on the use cases. It is upon the developer's wisdom. A senior engineer, the tech architects, they do a system design.

Tip: This will help in your system design interviews. Tell the interviewer that when you are designing for makemytrip, code splitting will be used for all of the components, 
that when I am using webpack or parcel bundles, I will make sure that my bundle does not use random code. Let the interviewer know why we need bundling and that too logical bundling.

If the interviewer asks for the online, offline thing, you will tell interviewer that you will build a hook for it.

Make my trip is a image heavy site, I will keep images over CDN, I will cache it, compress it. Look for these things in system design round

Give smart answers to interviewer, show them that you can code better, you are better than other React developers.

Now lets build the feature that we need to load, when our home page loads, just build the bundle for flights component. 

Only when user clicks on train, load the code with the bundle for train related components and it should render

Throw Jargons at the interviewer: We will do on demand loading of our bundles, we will do bundle chunking, we will do dynamic import, code splitting. Everything is same. This makes a huge difference.

I will take time to go to indian start ups and try to reason, go to their website and see what is happening. what it takes to make a website like make my trip, can I build a website like make my trip.

Paytm - each icon (recharge, movie tickets, UPI) is all different bundles.

Swiggy - Should Restaurant Menu be a different bundle? 
        Should Instamart of Swiggy be a different bundle?

Assume that instamart has 100s of components inside it. When I am teaching, I want to write every small thing so you understand every line of code. Assume that this is a big application has so many components, so many api calls, so many data calls, so many hierarchy. Similar to our body has so many nested components.

Instamart is currently inside index.js. Where ever we have the route or import at Instamart, there we need to lazy load, do dynamic import.

use lazy function from react to split the bundle. Lazy is for lazy loading. Its for dynamic import. lazy is a named import from react.

lazy takes a function and now we will do a dynamic import. It is an import function with argument as the component path.



Observe that instamart.js is loaded in network tab on demand. (On demand loading, on demand import, dynamic import, lazy loading, bundle chunking, code splitting)

When any body says what one line of code can do? Show them this code. This will just do a lazy load

 It has not fully loaded yet, this is throwing a beautiful error. Oops!! Something went wrong. 
 How is this error coming up. This is coming from Error router.

 HW: Why this error is coming? When you click on Instamart, this is a different bundle altogether. It takes some time to load the script. Meanwhile, React tries to render somehting which is not there. In this process, React suspends the rendering. 
 
 Tip => Remember: When you are loading this component on demand, React tries to suspend it. 
 
 Upon on demand loading, React does not know there is a code for Instamart. It just knows there is a link that goes to instamart code. When we click on Instamart link, it dynamically loads it. 

Amazing question: HOw did it load the second time. Once you have this code in the browser, I can go to the component. Not cache. The correct answer is its still an SPA. Once the page is loaded, its not changing its page. Go back to Instamart anytime, now instamart is loaded.

In makemytrip, if I go to train, train component is there. If I go to flight component, the flight component is still there. It does not even reload the second time and show the shimmer. Observe only data below reloads, searc box does not reload. Because it is already reloaded.

So why was it giving the error for the first time. It is giving error because if I click on Instamart, it will try to render the components that are not even there, React will suspend loading. The code came after 27 ms. But react was trying to render it even before 27 ms.

The second time when we go to home and navigate back to Instamart. Because once we have code in the browser, I can go 

When loading component on demand, React tries to suspend it. We use Suspense import from React.

It is a suspense whether Instamart will load or not. If we load the Instamart as Suspense, go to instamart the first time, React will load instamart.

When we write Suspense, React takes care of these components in a different fashion. React knows that these components will be lazy loaded, they will be dynamically loaded. It waits fort the promise to be resolved. import function is a promise.

HW: Go read about import function as a promise.

React waits for the promise to be resolved, until it loads the component. Instamart loaded in 12 ms but if Instamart has many components, it might take 1-2 ms, what should we show over here? We should show a shimmer.

React exactly knows when there is a suspense, what exactly will be loaded. React takes a prop known as fallback. We can pass in whatever we need to show until Instamart is loaded.

When user visits Amazon to buy mobile phones, the user might not go to fashion or electronics. So we can keep different bundles of our application in different chunks. We can do chunking on the basis of different parts of our app.

Is chunking really necessary for small apps? No need. Only when we think our bundle size is going huge, we need to do chunking.

Why I am telling all that because you should know how to do chunking. When you are building a huge application, like makemytrip or paytm.

Build facebook.com, youtube.com

Steps:
1. Call lazy import and use import function to lazy load the component.
2. Remove existing named import 
3. Create Suspense.
4. Add the props fallback to Suspense.

Now you know why large scale applications are fast. Why the size of their bundles does not explode. 

HW: Create your own hooks.

We created our useRestaurant hook, we created a useOnline hook to offload the functionality to those hooks, why and how do we create a custom hook, custom hook, when do we need a custom hook.

how and why lazy loading, chunking, bundle splitting.

Reminder: Never ever dynamically load your component inside another component.

DO NOT LAZY LOAD A COMPONENT INSIDE ANOTHER COMPONENT. Why not lazy load inside a component? This will lazy load after every render cycle.

Always do lazy loading near the import statements.


L10 - Jo Diktha hai wo bhiktha hai

How to make your web apps look good? By writing CSS

How to write CSS in your web projects?

CSS, Bootstrap, Material.

We will use tailwind css

AS never used tailwind in production. A few used bootstrap, or material. Uber uses Base UI. Base Web React UI framework.

Should we use frameworks? Yes

But why? - 1. To write optimized CSS, and 2. it saves time.

Our app has index.css. This is one way. No matter what the component is, we were styling it in one large css file. This is a basic way for writing css.

Second way is to write scss or sass files instead of css files. Read more about scss and sass

Advantages of using scss and sass: Nesting, mixins, reusability, variables.

SCSS is a different way of writing css. At the end of the day, SCSS is converted to our basic CSS. 

Just like we have JSX converts to HTML. SCSS is converted to CSS.

Third way is inline CSS. JSX style takes a JS object. 

Why two curly braces? We are passing a JS object inside of JSX which is a Javascript which needs a curly brace. This is a faster and easier way to write CSS.

One answer is reusability, repetition, hard coding. It is difficult to maintain because we are hardcoding and we cannot reuse these classes.

It would be difficult to find where the code is written. It is a heavy job for our browsers. This is one more thing. The job of processing inline css is heavy for the browsers to understand. This is not a good way to write the CSS. Always avoid writing inline CSS.

In fact, writing CSS in class name is better way of writing CSS than writing CSS in inline CSS.

The fourth way is to use libraries like Material-UI. 

HW: Who maintains material-ui. 

Material UI is a fully loaded component library. A lot of companies heavily rely on libraries for building UI. 

Similarly, other frameworks  such as Base UI (from Uber) and Ant Design.

Should we use these libraries and frameworks? 

Pros: Easy to use, reusable (no need to write a lot of css). Make buttons more reusable. Spend more time on logical things such as customizing.

Eg: Buttons should have rounded corners.

IQ:  Saves a lot of time. Automatic theming. Gives us built in components, consistent UI.

Different ways to style your web apps? Which way will you use? We will have consistent UI. All the apps will look the same now.

All buttons will look the same. Youtube made a major change in the UI. They turned all their buttons to rounded corners.

Youtube made all buttons including subscribe to rounded corners. Previously, it used to be a red color and a rectangle shape.

If they did not use library, it would be a pain to modify all buttons.Using a library gives us a consistency when we are using css.

Material UI, Base UI, Fluent UI, Ant Design, Chakra UI. It depends on how you do.

Some companies use their own UI framework.

Can we use more than one UI framework in the project? At the end of the day, each library is a package. We can use multiple packages in a project.

Should we use it? It does not make sense.One button to look one way and other to look another way. We need to be consistent when building our UI. We need to have uniformity to make it look like that. It is not a good practice to use it.

Every website has its own vibe. That vibe is created by styling. It is very important.

A lot of companies focus upon design. 

Go learn your CSS on your own. 

1. To have a css
2. To have a scss or sass
3. To have inline css (Javascript Object)
4. To use libraries (or component libraries or UI libraries): MUI, Base UI, Ant, Chakra, Bootstrap
5. Styled components (frequently used in React)

6. Tailwind CSS framework

Most companies use libraries.

Cons of using libraries: Makes our Bundle size heavy. We lose a lot of control over how my design looks. I am forced to use buttons in a predefined way. It makes development easy and fast but customizing it takes a lot of time. I have seen this happening lot of times in the industry.

Personal painpoint: Date time picker becomes pain. I was there at a company and I was using a library. We need to apply a lot of customization over these components.

Every library has its own date time picker. We need to apply a lot of customization over these components when design team asks for a different style.

Floating text from box to the top does not work in lot of devices. Whenever using framework or library, it restricts us in some way. This is a major con of using the library or framework.

Big advantage of using a library or framework is it makes development very fast, and you can build a lot of stuff very fast. Suppose 10 developers are working on the same project. It keeps everything consitent across all developers.

It takes care of your responsiveness. Look and feel is aligned specific to desktop and aligned specific to mobile

This is another way of styling components inside React application.

Tip***: Pros and Cons of all of the style types, why to write and not to write, what is the use of component libraries and not the use of component libraries. Know the basics of all of these.


Tailwind CSS framework.

Why, When, How to use it
Pros and Cons
How do we configure our project to use tailwind css

Earlier, in the older times, we had separate files for HTML, CSS, and JS

With JSX, we are writing HTML code inside JS. 

Let us bring CSS also inside our JS files and that is why styled components came in.

Go read at styled-components.com

Con of styled-components is it comes with a learning curve, its a different way of writing code. Easier to pick up but less used in the industry. Looks less verbose and less readable to me.

Catching up fast.

Pro of inline CSS: Time saving
  - Write CSS on the go (in the same file).

Tailwind gives the same feature
  - Write CSS on the go (in the same file)
  - Reusability
  - Pre-built classes
  - Less bundle size (Not many pre-built components in the bundle as it is minimal CSS it offers to us)
  - Flexible UI (Customizations)
  - Very good documentation
  - Library framework agnostic. Works with normal JS also.

  Tailwind CSS is a package. Can be loaded into our index.html

When writing CSS, Tailwind CSS overrides the existing styles. Need to write in tailwind css

Styles are missing for Blue anchor links are missing, h1 tag, input box.

Tailwind is the beast, its a bully.

Tailwind CSS works only with class names. Every style will be a new class name.

Everything in Tailwind works with class name.

How to write the class names? Can be found in documentation.

Quick search is a really useful feature.

To skip using cdn, look at Getting Started > installation section >> framework guides.

HW: Read about PostCSS

PostCSS is to compile these classes. Tell parcel that we are using tailwind classes and we need parcel to compile. So the compiled classes can be read by the browser.

npx gives a tailwind.config.js

HW: What do each of the lines in tailwind.config.js mean?

1. Instaill tailwind and postcssrc
tailwind.config.js:
content: [What files will use the tailwind css]. When compiling, just use these files.

postcssrc: Tell bundler, tell parcel that while bundling things, when building up production or development build, we will be using tailwind, compile our tailwind css into normal css.

2.  Tailwind init > tailwind.config.js

3. No css inside index.css. Only three lines will be there.

Tailwind base - all classes which are there in base chunk, for the components and for the utilities. Like import inside css

@tailwind - We need to include this. This is where the project is using tailwind. Whenever parcel or bundler is reading index.css, @tailwind -> it figures out the classes.

Make sure you are on the latest version of node, parcel, tailwind and all 

No need to remember class. Tailwind Css intellisense extension will give suggestions. Hover on p-2 for exact value

padding-y to nav elements to bring it to the center of header

py - padding on y-axis

padding-x to each nav element to provide space between elements.
px- padding on x-axis

justify between to have logo, navigation elements and login button to be spaced

To give a precise number, height or width. use square bracket

h-[200px]

Refer to network tab -> index.css

Observe that pre-defined styles are compiled.

Who is doing this stuff? Parcel is doing this stuff. Parcel is taking help of postcss and tailwind library to compile all those classes and ship it into our project.

Tailwind CSS will ensure that you will only include the classes used in your project will be shipped to production.

It makes the CSS very small.

A dynamic class for 200px is created for us.

Best practice is to stick to the native tailwind classes:
1. Tailwind understands it and it will be less code and maintain consistency. 
2. In old way, find the button class, search in css, update the button color. Many times developers write their own green button. Remembering the names and following conventions is difficult.

HW: Search for hover.

CSS file will include the style. We do not need to worry about optimization. Parcel, postcss, tailwind are all doing it for us.

Tailwind also works with HMR

Media queries: small (phone), medium (tab), large (laptop)

When my threshold changes, change my background to blue.

HW: Small device should have the button center aligned and the logo at the center

Pros of Tailwind:
Easy to debug
Code is less
no duplicate css
bundle size is small.
Faster development
Gives us a lot more control over things.
Newer way of writing CSS
We do everything in JS file

Con of Tailwind:
There is a high learning curve. Every new developer will take some time to understand and be productivity.
Too many classes
It compromises readability a little

Tailwind has its pros and cons
MUI has its pros and cons
If I am working on a start up, I would love to use Tailwind. If it is a product for 10 years, I would not prefer it.

*** Tip: Explore all css styles

HW: Write all Tailwind CSS in the application.  Be very confident , exactly know why and what you are choosing a framework, pros and cons of the framework and have a healthy debate with the interviewer.                                                                                                       












































































































