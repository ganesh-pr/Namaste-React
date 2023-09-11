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

L11_DataIsTheNewOil
Redux, State management, useContext api, useReducer, redux toolkit

Handling data is the most crucial part of the web application.

The view on the screen is the UI layer (button, borders, text boxes)
Other layer is the data layer

Both these layers help in build our front end web application. (Built using frameworks such as Angular, React)

Babel converts JSX into one big plain JS object. The JS Object is part of the virtual DOM. Role of virtual DOM is Reconciliation.
Diff is between the previous virtual DOM and the new virtual DOM. If a new node is added to the tree, the new diff is replicated into the actual DOM in the HTML.

The whole UI layer is powered by the data layer. The data layer consists of state and the props. We manage the UI with state and props. 

Diff between state and props -> Suppose we want a variable to have scope only within the component, it is the local variable and is called state. Prop is the data passed from one component to another. props are the kind of local state for our parent.

filteredRestaurant lives within the body and inside body, I am passing it down the component as a prop.

How to pass data from AppLayOut to the RestaurantCard -> Props from AppLayOut to Body to RestaurantCard

/*
AppLayOut
 (state=user)
    - Body user = {user}
        - RestaurantCard user = {user}
          - <h4>{user.name}</h4>
*/

In real world, there will be many levels of hierarchy. It is like a chain. When data is passed down from parent to child and then to its child and then to its child, the whole passing of props down the chain is known as props drilling.

React developer tools is an important extension. Components and Profiler in Dev Tools. 

RouterProvider is done by react-router-dom. 

On the components tab, clicking on RestaurantCard will display the data. Helps in differentiating API issue or UI issue.

left pane is UI layer, right pane is data layer. data is powering the UI layer. No need to search in the code for props and state.

What if I want to pass data from child to parent?
 Many ways but less cases where data needs to be passed from child to parent
 1. Local storage but it is not a good way
 2. We can build a custom hook. But building hooks for all data needs is not a viable.
 3. Redux

 Data is more crucial part of our application management. Data management will decide if our app is good, scalable, reusable or not.

Data is the new oil. 

Is props drilling a good way?

Body does not need user info, but it still needs to be passed. It makes code clutter. Upto three levels, its okay.

If we need data under 10 levels, it is not a good way. One more disadvantage is if one thing changes, one time the prop changes, it re-renders all the child components using that props and it makes our code cluttered.

It is unnecessary code, unnecessary variables into our app. 

1:04

Build a show and hide button to display or hide a card
Build a feature that one accordion closes the other two accordions.

About, Team, Careers are section components. Each component has its own state and own props. 

Do these components share state? No. They do not share state. 

Section components are similar to siblings who might not listen to each other. We will have a parent.
I will take the control from the children to parent. We can do it by lifting the state up. 
This is a scenario where we will control the interaction between all these components.

Parent Instamart will control which section needs to be shown and which section needs to be hidden.

useState will take object with three keys. We will pass setIsVisible as a props from the parent component.

That is why people say code is garbage. That is why people don't let interns push code to production.

An end user will think the code written is working fine. 

What I want you to realize is data is the new oil. There is a UI layer, there is a data layer. You cannot build a large scale application by not having control over a proper data mechanism.

What is the condition of this scenario? We have to show only one item at a time. We just need to track what needs to be shown.

1. Create different keys for your section: Keys can be name of the section or index of the section

Q: Difference between callback and promise
Q: Difference between statement and expressions

Even google timer is maintaining state, click on a youtube video, come back and observe that clock is maintaining state.

Review: Props drilling, lifting the state up, how important is the data layer, modifying the ui layer using data layer, React dev tools (state, props, data that is powering the UI)

Large scale application with so many components -> debugging becomes difficult. Profiling records the whole session, records the whole user journey.

Rendering time using profiler can help in making our app performant, how component is rendered, read the links.

Ranking. 

Read: Watch videos of React profiler

New Topic:
How to use an object across all your components. We need to store it in a central space. 

Local storage is inside browser, is not reliable, and updating local storage is a heavy operation

React gives us access to this central space known as React context, where we can store the data. State can be used by all components.

Some big companies also use Redux store. It is a shared state for whole app. Any component can use that data.

Mobex, ngRx, Redux, Flux are state management libraries.

React has its own context. Why? I want piece of data to be accessible anywhere in the app. This is like the central place where we can keep the app. 

Can we create global variables? Yes, but React is not tracking it. React will not trigger its reconciliation. React is not watching it. It will not be spying over things.

At the end of the day, createContext is a function.

React context is super powerful thing done by React. Keep new context in a new file in utils folder. 

Import createContext from react

createContext is a function. Takes in some data needed all across your application.

Takes the default value of our context. 

2:15

At the end of the day, createContext is a function, useContext is also a helper function.

We can create many contexts in an application. I can create a context for my card, I can create a context for random location info, for footer, for rating.

The difference between normal state and props is they are tied to a component. createContext is not tied to a component.

Can we use Username instead RestaurantCard. RestaurantCard is inside the App > Body > Restaurant > RestaurantCard

This is so easy than drilling the props

State and props are tied to the component. Context is central store. You don't use Context everywhere. You use Context for data that is required all across the application for different, different components. Its like central data for all your components. Context is like useState for the whole application. Its like a user store

What is useContext - Its a hook. Does class components have hook?  No 

How to access Context inside class components? We will create a component UserContext.Consumer and that will have the value of UserContext email and name

What if I want to update the context in functional component? Just as we can use UserContext.Consumer, we can use UserContext.Provider with a value

In UserContext.Provider, we can override the default value. We can use it in App.js

by using 

<UserContext.Provider
        value={{
          user: user,
        }}
      >

This is how we can override the default value.

Where should I use the provider? I am using the header, footer, everywhere I am using this data. However, we can use it not the Header. Meaning I can use it only for a portion of the app. 

I can pass in different data to different portions of my app. But logically, I want my whole user context to be everywhere so I am wrapping across all components.

Let us play around:
Lets create an input box which modifies the context.

If your basics are strong, no body can defeat you in the interview.

onChange takes in e , which is a synthetic event

If we want to update one of the properties,we can update just one using the spread operator

setUser({
              ...user,
              name: e.target.value,
            });

Each and every keypress is finding out the diff algorithm, reconciliation process is triggering, virtual DOM comparison is happening and actual DOM is modifying.

Looking at profiler, 56 times reconciliation happened

Profiler is recording each and every update

With the information about the context, let us go to the components. Now we see DataRouter.provider, Navigator.provider. Now you know how routing is happening, how react-router-dom is working. They are using context behind the scenes. I want you developers to be so strong that you can be develop the next router for react. Somebody wrote this logic behind the scenes using context. And we always wonder how routing is happening, how useParams is working.

Basics remain the same. It is all Javascript. JS does not have any context, does not have any hooks. It is all functions and objects. It is all basic Javascript. All these super powerful frameworks have been built using it.

Data is the super powerful thing. UI layer is powered by a data layer. Your UI layer is powered by tailwind.

Data layer is powered by context, state, props ans hooks and everything is modifying our data layer. We will see Redux which also works in the data layer, and parcel is helping bundling everything taking help of babel, taking help of everything else. These small things make react app as powerful as possible. 

Looking at React dev tools, you should know where your provider is, where your consumer is. You should understand
why DataRouter.Provider is coming. I did not write this, who wrote this. You know that react-router-dom wrote this.

Lets find out our Context Provider. Our Context is written in App.js. So we can find it there in React dev components

Since React dev tools always displays all contexts as Context.Provider, we can display the specific name by using

UserContext.displayName

This is the way we can give the displayName for debugging

This has nothing to do with how the app works. 

Can we have a context inside another context. Can we have multiple nested contexts. Let me show you the power of context

About component is lazy loaded, the code is also not there but it is using the context. This is because the UI layer is different than the data layer. The data layer stays, the UI layer does all the work of reconciliation, rendering the component etc. Do you now understand the meaning of virtual DOM. React is keeping the data layer intactand moving the UI layer. UI about us is not even there, data layer stays, context stays. Because it is not tied to a component, it is not a state variable. UI layer and data layer everything works in parallel, everything works independently. Reconciliation is done by React.

This will take 10 days to build in JS, React is giving you a very fast way to do this.

It will reset the value of the context.

If I refresh the value on about route, it will reset the context and it will show the default value.

We are calling it Data is the new oil. World does not work without oil. App does not work without data. You have UI layer, you have data layer. Both work independently. You have to keep them in sync. 

Summary: Props drilling, Lifting the state up, Build your own accordion, today we saw data, create context, update context, React profiler, React components.

Do assignments. Helps you appreciate the beauty of react. Helps you become strong.

Attend live classes
Rewatch the recordings
make your own notes
Do assignments
practice
Engage in community

L12 - Lets build our store
What are the two layers in an application - UI layer, data layer
What do you write inside the code that powers your UI layer - JSX
What is the data layer - Passing the data from one component to another, data management using state, props, and context.

UI layer and data layer all works in sync. All this is happening over your browser.

Today, we can see more complex ways or more efficient ways of handling data into our application.

Handling data inside our webapp is a very important thing.

If its a small application, it does not matter how we build our data and how we manage our data using state, props.

But if we want to manage a big, production ready, large web application, handling data for it becomes very important and very critical. For that, a lot of companies use a library, which is known as redux.

Why do companies even need Redux? We need Redux to manage our data layer of the application. If we are building a large web application, our web page holds a lot of data. Redux is that place where we can handle data. You use Redux for that.

Why did we use Context? To avoid prop drilling. Suppose we have this whole big application. In this app, we have these different components: Header, one component, another component, footer, carousel with lot of images. So we might need to pass data from one component to another. There is top level component and small components inside it.

Suppose we want to pass the data to smaller components from our root. So we might need to pass data from one component to another component to another component. This is known as prop drilling.

What is Context? Any component can access the context, any component can modify the context.

When our application grows a lot, libraries like redux come into picture.

We can use context for logged in user data, to switch between dark and light themes. Update background color, wish list context, cart context

To manage our data properly, we can also create redux. Instead of creating contexts, we can create a redux store.

History of Redux:

Redux is used for data management. But, there were many issues using Redux. Redux gives us a proper way to manage, handle, modify and read data.

A lot of companies choose to use Redux. Some companies use alternative to Redux.

We will see today what is Redux and what is Redux store.

There are cons of Redux as well:

It has a complex setup. Huge learning curve. It was very tough to learn Redux. If your application is very small, we don't need Redux.

Only use Redux if you have a large scale application which involves a lot of data handling. 

There was an era where companies and developers used Redux so heavily that they did not know React and Redux are two different things. They use to think that actions, stores and reducers are part of Redux. 
Many developers don't even know the difference between Redux and React.

Till now, in this whole course, we did not cover redux.

Many developers also don't know the difference between a bundler and react. 

To make a whole full-fledged application performant, can only React do that? We need a lot of different libraries and tools. We need bundlers, we need react-router-dom for managing routing. We will use a package for testing, data management. 

If you want to build a large scale application, only using React does not work. We will be offloading data management to Redux store. 

Now, there will be a lot of complexity when we write Redux and it is difficult to understand. So redux has come up with something known as redux toolkit.

Ref: redux.js.org

redux-toolkit is the new way of doing redux. 

What is the difference between redux and redux-toolkit?
Redux-toolkit is intended to be standard way of writing Redux logic. 

What is good about Redux is they understood that if they continue to use the older patterns of using redux, they are not going to last for long. Developers don't want to write all that shitty code.

It is similar to react. What would you use?

Class components or functional components: What would you use: class components or functional components?

If react still uses class components, there won't be huge increase in the people using React. People love React because React constantly improved the developer experience.

Now, it is a very standard way to use Redux toolkit. Use Redux-toolkit for all the new applications you use. Redux is a complex, old way.

Three main concerns of Redux:
1. Configuring Redux store is too complicated
2. Need to add a lot of packages to do anything useful
3. Redux requires too much boilerplate code.

 We will be using redux-toolkit.

Suppose we have a web application. It has a lot of components.

Today, we are going to build the whole checkout flow. It involves a lot of data.

Have we implemented a dummy login page? Click and open the webpage.

We click on Mushroom 65, I go to my cart, and proceed to payment, etc.

How will my cart page look? Cart page will have list of items right.

So, if we look at swiggy.com > Restaurant list > Restaurant > Select Curry 

Observe that it added an item to the cart. 

If I click on another item, it will add two items to the cart. If you click on cart, you will see where you have added more items to the cart.

So our menu page will have different items: parotha, poha, etc.

Each menu item will have a plus button

How would we build this? 

What we are going to cover is very important.

Clicking on + button would update the cart with more items.

What are hooks at the end of the day? Those are functions. What is redux store at the end of the day?

At the end of the day, redux store is a big all object. Big object with different sections. Different sections are small pieces.

Important: Just like context, what components can access redux store? All components can access redux store.

When you create a state variable, it is restricted to only that component. 

What is the scope of this state variable? It is restricted to that only component. When you have props, props can be passed down. Props is a way to get data into the component from its parent.

Store is a central thing. Its not tied to any component and context also is not tied to any component. Context is a separate entity. Similar to that, redux store is also a separate entity out of the application.

Your webapp is different, your store is different.

State and props follow the parent child hierarchy.  They are tied to the components.

Context is a central place. They are like a big global object. We can access it anywhere in our app.  Similar to that, we have Redux store. Redux store also we can access it from any place irrespective of where our component stays.


Can we have multiple contexts? Yes


Can we have multiple stores? No. In Redux, we will have a single store for holding everything. Suppose we want to store the data about logged in user, we will store inside store, suppose we want to hold the data about cart items, we will put inside store, suppose if we want the theme information to be hold, we will put it inside store. Suppose if we need to put some authentication information, we will put that in store. It is basically a whole large big store with a lot of data.

It is not a poor practice to put all data inside one store. This is because we will create logical separation into our store.

We will create slices of our store. Each store will have different slices of the store.

We can have a user slice, cart slice, theme slice. A slice is a small portion of your store. You have a big, full fledged store that can be broken down into smaller slices. 

Now, our components cannot directly modify the store. Suppose if I click on the plus button, I cannot directly modify the cart. 

First, I will have to dispatch an action. Lets give the action name as add item.

When we learn redux, we have a lot of jargons. One is the store. One is a slice. One is an action. We always dispatch an action. The action, in this case is known as add an item.

The action will call a function, a normal JS function and this function will modify our cart so we cannot directly modify the store.

When we click on the plus button, we will dispatch an action, this action will call a function and this function will modify our cart. We cannot directly modify our cart.

Why can't we directly modify a store? When there is a large application, you don't want random components to randomly modify our store. We need to keep a track of everything. 

Redux is a full fledged better way of handling data.

Data is the source of truth of your application. We don't want any component to directly modify. We want a process associated with it. Its like breaking down your app into smaller pieces. Its a good way.

Why do we have microservice architecture? Why can't we write everything in one place? It is separation of concerns. It is also modular. Every piece has its own responsibility.

Why big applications have this kind of data flow. You will get an answer by the end of this session. Why do we have this? Why not directly modify the store?

If we directly modify the store, it will be all complex.There is a need to be a central place. It would be a mess because random things modify random components. Because redux takes care of a lot of things. 

**************** IMPORTANT ********************
When we click on plus button, we dispatch an action, which calls a reducer function, which updates the slice of our redux store.
**************** IMPORTANT ********************

If you understand the above statement, you understand the redux architecture.

When we are saying dispatch, you should know what dispatch an action is doing.

When I say I am calling a reducer function, I am talking about this function which modifies our slice of store. If you understand, you understand the redux store.

Terminology: dispatch action reducer function slice redux store

You have so far seen how to write the store. But then, how to read the store. How to display the number 2 when a new item is checked.

**************** IMPORTANT ********************

If you want to read the cart, you need to call call the selector, the selector will give you the information that will update the cart. Selector selects the slice of our store.

This diagram should stick to your head.

When we click on + button, we dispatch an action, which calls the reducer function, which updates the slice of redux store. To read the data, we use a selector and this will update my cart.

What is a selector at the end of the day? Selector is a hook and hook is a function at the end of the day.

When we use a selector, we use something as subscribing to the store. This means that the cart component will subscribe to the store. It is reading something from the store. It is synced with the store. Whenever my store will modify, my cart will automatically modify. That's why we say cart component is subscribed to my store. Which means that whenever my store will modify, my cart will automatically modify in my UI. 

How does a component subscribe to a store? using selector. Its a hook known as useSelector.

Many people feel that actions are a part of react, reducer is part of react, selector is a part of react.

We need extra library: Redux-toolkit library

Q: Why two libraries?

What is the job of Redux store? Redux store is to create, maintain, and manage the store. Core library of redux.

The other library is the bridge between react and redux. 

ConfigureStore is the job of the core library @reduxjs/toolkit. The store will contain slices. It is an object, it will contain slices.

const store = configureStore({})

The store is now created. Store is different and app is different.

How do I provide my store to the application? 

Who uses Redux store? Whole application or just our components? Both, our choice.

What is the root component - AppLayOut. I will provide the store to my whole app. We will import a provider component.

I want to provide my redux store for the react application. Which library will provide this. React-redux will give me this provider. 

How do I use this provider? 

import {Provider} from 'react-redux'

Provider is a component. Can be wrapped on top of all components.

<Provider store={store}>
At the end of the day, store is like a props. It is like passing our store into our react application.

What is the api to create a store? configureStore.

Where did it come from? rtk -> redux-toolkit

We need to provide this store to our application. Where did the provider come from? react-redux

Now we are ready for actions, subscribers, reducers.

The name store is very important for the prop name because redux would be destructuring it some where. The store value can be any name.

<Provider store={store}>

Lets fill our store with something. Our store should contain slices. We can create all our slices in the same or different files.

creating slices is the core job of redux toolkit.

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    }
})

name of slice is cart. 

Initial state for the cart is the initial value of the cart.

Cart is an object and has items empty. For count, I can do items.length

I will modify the cart slice using a reducer function.

When are the reducers called? On dispatch of an action.

What can be actions inside my cart? This is where we say what actions will call the reducer function. Mapping between action and reducer function.

reducers: {
    addItems: (state, action) => {

    }
}

addItems is the action. () => { ... } is the reducer function.

The reducer function takes in the state and action payload. state is the initial state.  action is the data which is coming in.

If I need to modify, I need to update the initial state. I can do it by pushing action payload to state.


reducers: {
    addItems: (state, action) => {
            state.items.push(action.payload)
    }
}

When we dispatch an action, then we will pass that data which will be there in action.payload.

The state is always the previous state. In this case, it is initial state.  When we change the data, the state will hold the current value of the state.

 can we have more actions in reducers? Yes

 Please remember that reducer function does not return anything. It takes a state and directly modifies it.

For clear cart, I don't need action payload.

For creating a slice inside a store, we will need createSlice and the object param will have a name, initial state, and we will have reducers. Each reducer will have an action and a reducer function. The reducer function will modify the state. Whatever logic I want to write, we can write in reducer function.

action -> addItems and 
reducer function : () => {}

We will now export something from it so that the functions are available to components. I will export my actions and reducers from here. Redux toolkit says this is how we will export it up. 

*********IMPORTANT********************************                                                                  
It is reducer here and not reducers. It will combine all reducers and export it as one reducer.

export default cartSlice.reducer

export {addItem, removeItem, clearCart} = cartSlice.actions

It is actions and not action

*********IMPORTANT********************************                                                                  

react-router-dom is so intuitive. useParams was easy to use. This is unlike redux where it is difficult to read

The cartSlice will return an object with actions and reducer.

cartSlice = {
    actions: {addItem, removeItem, clearCart}
    reducer: reducers
}

Why to export actions by name? Because there are a lot of names.

we will be importing cartSlice in store and add all reducers to the reducer of the store. The key is the name of the slice and the slice object

const store = configureStore({
    reducer: {
        cart: cartSlice,
    }
})

export default store;

Remember this is again a reducer. 

Once we configure everything, it is simple.

Revision:
1. Created store. API name: configureStore. Imported from rtk
2. Provide my store to app. API name: Provider component. Imported from react-redux. key name is store
3. Create a slice. API name: createSlice. Imported from rtk
4. createSlice needs name, initialState, reducers
5. reducers contain action and reducer functions. reducer function takes state and action as arguments.
6. How to modify state. Do not return anything. We directly modify state.
7. How to export my reducer. export default cartSlice.reducer
8. How to export my actions. cartSLice.actions
9. Put that slice into store. reducer: {cart: cartSlice}

We will be making a lot of slices and each slice will export its reducer. Suppose we have a userSlice, suppose we have a profileSlice. Each slice will export its reducer. All these reducers will come into the reducer object.

How do I subscribe to the store? useSelector hook is a named import from react-redux

useSelector(() => store.cart.items)

Lets dispatch an action.

10. Write a function handleAddItem on button click
11. handleAddItem should dispatch an action with payload. The action should pass in some value. In this case, it is Grapes.
        What is the action to dispatch? addItem
        What is the item to add? Grapes

import {addItem} from '.../utils/cartSlice'
const dispatch = useDispatch()
dispatch(addItem("Grapes"))             // dispatch action and pass the payload.

dispatch is the return of another important useDispatch hook
addItem is the action returned from the slice redux actions. It is exported from the slice file as a named export
Grapes is the action payload

Summary: 
store and slice imported from rtk
useSelector, useDispatch and Provider are related to components, so they will be imported from react-redux.

Clicking on button is configured to handleAddItem function. The function will dispatch an action. The dispatch function is coming from the useDispatch hook. The dispatch function takes in as param the reducer action, which is addItem. We will import addItem from slice actions.

When we click on the add button, action is getting dispatched, which is calling the reducer function, which is updating the slice of our store.
        And this cart is subscribed to our store using useSelector. This is the power of redux toolkit.

onclick -> handleAddItem -> dispatch action -> action is addItem -> addItem is passed in Grapes. 

addItem -> reducers function -> reducer function updates the slice of our store. Grapes are coming in as action.payload. Redux says that it will give you an action and we need to use action.payload.

Lets dive deeper.

We don't create slices everyday. Everyday job is to dispatch an action, subscribe to the store. reducer and reducers those small things are confusing. Documentation is average.

With all this knowledge, documentation is a piece of cake.

Takeaway: Redux toolkit is vast, a very big library. This is only the important basic stuff.

Lets add buttons to these and dipatch each item object.

Remove Bananas and Grapes and have the cart empty. 

Note: useSelector takes a callback function. Passes store as the callback argument.

This is how fast you need to develop React applications. This is how you have to do machine coding.

*********** VERY IMPORTANT **************
 
What is useSelector used for? To subscribe to the store. This is the place you will tell what you are subscribing to.

If we write const cartItems = useSelector(store => store.cart.items) it will subscribe to only the items array.

This is where people make most mistakes. We can also do useSelector(store => store). This is perfectly valid. We can make a major performance improvement.

Everytime my store changes, my cart will change. It will re-render the component. Store will have so many slices, so much data. Do we want to re-render the component everytime a store changes. This will be a major performance improvement.

so we need to use cartItems = useSelector(store => store.cart.items) so we are subscribing to only a portion of the store.

*********** VERY IMPORTANT **************

Now lets build an image in the cart page. Lets do the FoodItem component for one item and then do a map.

If you code strategically, you would have to go less back and forth. First I will make one card work, then I will make n cards work.

Now lets clear the cart.

Once you setup your store and created slices, it is very easy to add stuff up, it is very easy to dispatch actions.

This will be 90% of the things you will be seeing in rtk

Go to rtk documentation and try to read. Everything will make sense to you.

Takeaway: 
1. redux-toolkit.js.org > Introduction > Getting Started
2. Redux dev tools is a super powerful extension. It will be a better developer experience
3. Thunk, middleware and RTK query are complex concepts. Read later

Redux dev tools:
How is data getting dispatched, how data is getting updated in the state, all that things we can see inside redux dev tools.

If we refresh the page, state tab has the cart slice created with no data

The left pane shows INIT and then it shows the dispatch of add item.

As your application grows, there will be so many slices, so many actions, dispatches randomly happening.

Lets say we added stuff, we cleared it and added new stuff.

Amazing thing is this extension was tracking each and everything in it.

We can also play what we added, cleared and added. I was not even there on the cart page when I added stuff but react was tracking every small thing.

We can also skip an action. Use the diff to identify an addition. Observe that when we skip an additem, we see that the cart directly addes the next item.

We can use redux dev tools differently altogether. When application becomes large, it will be very helpful to debug all these small things.

it wrote test cases for your reducer. You can download and upload also.

Focus on one big quality project. That will make you proud. This is better than small 10-20 projects.

PLEASE DO YOUR HOMEWORK

Be Exceptional. Write industry level code of react.

redux store: slice, dispatch, action, reducer, useSelector, subscribe to a store, provider, redux dev tools

Be active in the community. The one who contribute to the community will become a lot better.


14 - Machine Coding Round - Youtube

I dont want you to be only get better in React. I want you to clear React interviews as well. I can teach you about topics in React that will help you in your interviews. 

I want you to become holistic developer.

**********VERY IMPORTANT****************
Whenever you give React interviews, the first round will be a machine coding interview round. I will tell you important tips that will enable you to crack machine coding interview rounds.
**********VERY IMPORTANT****************

Some companies take this machine coding interview round in Pure Vanilla JS, HTML, and CSS

Some companies take machine coding round in your tech stack. To build an app using react js. Share your screen and build your project.

Some companies use online platforms HackerRank or codesandbox where you create your react app

But in all cases, the round focuses on building a web application using react.

What were you asked to build? To do list, fetch data from the api, forms, quiz app, nested filter, carousels, hooks,
api call, data, forms, searching, sorting, infinite scroll, higher order components, ecommerce website, counter app, debouncing, tic tac toe, facebook, comment engine, swiggy like website, trello app, chatbot, ecommerce website

In your machine coding round, you can be asked to build any kind of app.

What is the toughest part of the interview?
Live coding: Can be. YYou are coding infront of the interviewer.
The most toughest part is managing your time. Time is toughest to crack.

You are given 1-2 hours and you are supposed to build the whole app in 1-2 hours and the interviewer is watching you.
It feels like pressure. 

How to avoid that pressure? It is by practice. 

Before the interview, you can do practice.

In the interview, planning will help. I will solve a machine coding round of problem just like a candidate. I would have solved in an interview. I will give all tips on how to do proper planning and how to do proper execution of that planning. GET READY FOR IT!

I am going to build a big app. Let us build our major project. Gave more than 50 machine coding round of interviews and I have never, ever failed in atleast one coding interview. I have failed in theory interviews, JS coding interviews, system design interviews but never failed in machine coding interviews.

It is about building something and we are react developers. If you are confident and practiced it right, you will never fail in machine coding round of interviews. You just have to be good at planning and execution. I want my students to be as good as the candidates for machine coding round of interviews.

Today, we are going to build Youtube in the next two hours. How would I plan everything? How would I execute it? How do I run everything?  I will teach you today the blueprint of machine coding round of interview so that you never fail in it. We will build youtube as much as I can today and we will continue to build complex stuff of youtube in the next session.

You would see that what you have learned in all 13 chapters, everything will be used today. Give me a thumbs up!

I want you all to be 100% focused. This will help through out your career in every machine coding round of interview that you take.

The most toughest part of machine coding round of interview is managing your time.

First thing first: don't open vscode. They take out the laptop and don't ask the questions.

First thing to do is requirements clarification. First of all, you need to discuss in the interview, what features you are going to develop. Lets go to youtube.com to take the reference.

When you load youtube, you would see the home page, side bar, list of tag buttons on the top. When I click on a video, it opens in a new page. There is a shimmer. If we click on hamburger, it opens and closes the sidebar.

Discuss with your interviewer, what features you will build, whether you can build a search or not, comments or not, comments section is complex

First step of requirements clarification is the features that you are going to build.
Then you will discuss the tech stack: When we are building a web application, you need to discuss the tech stack for your react application.
Whether you are going to use Tailwind or not
Whether you are going to use TypeScript or JavaScript
Whether you are going to use Redux or Context APIs or some other data layer

What are the two layers: UI layer and data layer. 

UI layer - want to use tailwind css for all my stylesheets
Data layer - want to use Redux for all my data management

When we are making a small app like ToDo list or counter app, context makes sense. It does not have any complex data flows or something. 

Discuss this with your interviewer, so he understands we are thinking like a senior engineer.
Lets use Redux for our application. Also discuss why we are choosing Redux.
For styling, I will use Tailwind. We are using Tailwind because its a modern framework, makes react app developer faster. What are the pros of Tailwind? Fast, gives a lot of reusable classes. It does not load up our CSS. It keeps uniformity in our app, it is customizable, extensible

Suppose you say you don't want to use Tailwind. You want to use SaSS, SCSS or Material UI. You should have your justification. You should have justification why you are using every small damn thing. MAKES YOU STAND OUT!
This shows you are a thinker, problem solver, that you are just not thinking about building something, but thinking about building a scalable application.

What else should we use? If your app consists of forms I will use formik or other library for doing that.

I will be using react-router-dom for routing. You can talk about what bundler you are using.

The interviewer will get impressed. 

What testing library we will be using? Jest and react testing library for testing

You can talk about storage.

How much time we have to spend on this? 5 minutes to discuss.

First thing should be build home page, it will get some videos, hamburger menu which opens and closes, there will be a search bar. We click on a video, it opens up a video page. I will use Redux for managing data. I will use Tailwind for styling. I will be use bundler like parcel and for testing, jest and testing library.

What if the interviewer says that? You don't have to use that. It never happens like that. You have to give proper justification. It is not the case that you say, I want to use Redux and your interviewer says use context api. It is your choice as an engineer to choose. 

Most times, interviewers are not rigid.

Can we do google search? Most cases, interviewers will allow google search. However, if you practice, you don't need google and you will be saving a lot of time. It is your time that is spent on google search. 

5 minutes discussing these.

We are running out of time.

Planning:

After you discuss the features, tech stack. The next five minutes you will have to come up with planning things up. Don't start writing code. You have to do planning.

Can you tell me what do you mean by planning? Pseudo code or low level design. How you will structuring you components. How will you use your UI and data layer together.

This is my whole app. You also have seen the youtube app, the interviewer would also have seen the youtube app. Why are we discussing the same thing with interviewer. Because you will be in the same page. We can build Youtube in thousands of different ways. You will discuss your approach and you will be on the same page. Many people don't do this. That is why you fail because interviewer is expecting something else, you are building something else.

What to discuss in planning?

Just as we see in youtube, we will have a header. THe header will have a hamburger icon to open the side panel. What comes inside of side panel? Links like home, shorts, subscription, library, etc.

Hamburger will open and collapse.

On the header, we also have youtube logo, we have a user icon. 

We will have our main body. It contains videos. We will have buttons over here on the top.                                                          

We will also have videos, on click of button, it will open a new video in a new page, it will take me to a new page which opens in /watch

In /watch, it will open  a watch page, same header, a video, suggestions and comments section. This is good enough. Lets try to build atleast this much.

There can be chat, subscribe, like button. 

When we take time to discuss this, how much time will you take to discuss this: 5 minutes.

The more planning you will do, the better code you will write. You can also go one level ahead and discuss how will you differentiate your components.

I will make a heading component. This will be my head component. Sidebar component. Body component will have button list component. VideoContainer component. In VideoContainer component, we have videocard component.

In watch page, we have the same head component, and the watch video component

Planning is really important. Now, we will be executing things up.

Revision: 

In your machine coding round of interview, you have to develop your app in limited time.

First of all, clarify your requirements. Features what you are going to develop.

In tech stack, bundler, UI layer, data layer, Redux, Context APIs, Tailwind, Material UI, Typescript, Javascript, Testing framework, Enzyme, React testing library.

If I tell the interviewer about all these, will I be expected to code for all these? No, that is not the case. If you say react testing library, you might want to use it. You might skip it. It is always good to discuss with your interviewer.

You can say you will use react-router-dom for the /watch page because it is widely used. 

Structure and planning: If you clearly come up with the UI design, you are figuring out in your head, what you will be writing code for. If you do proper planning, you will write better code.  

When you don't have a structure in your mind, you will create a mess. You will put your components inside something else. You will have to breakdown randomly. Container inside Body and Body inside head. It will be a lot of restructuring and will create a lot of mess.

When I write code, you will help. Now it is just using that knowledge today.

Now I can start from scratch and setup bundler, parcel. You can discuss but tell your interviewer, I am using a create react app. When we are building a large youtube app and we need more customization, we can configure and build our own app from scratch. Setting up our own bundler, Setting up parcel, babel, tooling that we need.

Lets build our create react app

npx create-react-app appname

You see its installing. We manually created our own index.html, index.js. We installed node, we installed npm, we installed parcel, so many things. Many many react developers don't know what is happening.



You have all your gitignore setup, package.json setup

The server is up in localhost:3000

We took 3 hours to build this up. The knowledge that you have is extremely important. We know this app is using bundler, parcel, React. They don't know the beauty of bundler. They don't know the beauty of parcel. They don't know the beauty of React. They don't know why the React app is so fast.

Lets take a deep dive into create-react-app

We don't need parcel. We already have webpack setup with this.

It has already created index.js, it has already created app.js for us. It already has testing library for you. Remember we installed this jest-dom. It was such a pain. Now, create-react-app is taking away all this pain. But taking the pain will help you appreciate the beauty of create-react-app

HW: Why reportWebVitals is used for?

It is setting up testing for you automatically. Everything is done by create-react-app. We just have to focus on create-react-app

HW: What is React.StrictMode?

Strict mode is coming from React library.

App.js:
Remove the code from App.js and remove the related imports. 
 Lets add a header to ensure everythign is working.

Setup Tailwind.
    Add Tailwind as a devdependency. 
        npm i -D tailwindcss

You won't need postcss here as create-react-app takes care of that.  

Setup tailwind config 
    npx tailwindcss init
    update content to track all js and html files
    './src/**/*.js'
    Single type .js
    More types {js, html}
    We can also write just js as we don't have any html files.
                                                                                        Update app.css
    Remove all the existing styles
    I will need to install three tailwind attributes
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

Import app.css and use a tailwind style in div.
  import './app.css';

Revise the structure:

        /**
            * Header
            * Body
            *  Sidebar
            *   MenuItems
            *  Main Container
            *    ButtonList
            *    VideoContainer
            *        VideoCard
        */

Create components folder

Using rafce, Create components for Head, Body, Sidebar, MainContainer, Buttonlist, VideoContainer, VideoCard

For Head, youtube has left (logo and hamburger), middle(search bar) and right sections(user info).

We can use grid so we can divide the sections within 12 cols
top div class="grid grid-flow-col"

inner divs class="col-span-2" to 12

To center the search input, text-align: center

During real interview, don't spend time on making things fancy, focus on functionality

For building sidebar, since sidebar can be collapsed and expanded at many places, lets create the sidebar collapse action in a global space i.e. redux store.

Lets create AppSlice because it will contain app level data.

Checkpoint: Check whether store is working correctly or not. Check it using redux dev tools.

Explain to the interviewer about useDispatch and the redux flow.

Do I need to pass anything inside toggleMenu as arguments. No, because toggleMenu does not take payload.

To vertically center flex items, use align-items: center on the flex div
To vertically center non-flex items, use align-self: center on the parent div

Early return when sidebar is closed.

Your interviewer will be impressed by the redux implementation because you are using a redux store over here. Explain what is happening here. 

 We have focused a lot of time in our planning. If we do this, interviewer will follow what you are writing.

 If you have observed, the refactor was almost zero times. This is because of the practice.

 ****************************** VERY IMPORTANT****************
 The more time you spend on planning, the better your coding will be.
****************************** VERY IMPORTANT*****************

TODO: Make the button list scrollable.

For VideoContainer, you need to ask a question to the interviewer on how you will get the data for your videos: API or hardcoded.

Lets code with Youtube API. We won't get CORS this time because we will do it in a legit youtube api way. Youtube gives free apis to use. For a limit.

https://developers.google.com/youtube/v3/docs/videos/list

Lets get the most popular videos

From the api, you will need your own api key

Search: Youtube api key auth

https://developers.google.com/youtube/registering_an_application

A few are saying to use axios instead of fetch. I have used fetch perfectly in production. Why another library? Its of no use unless it provides for any higher level functions.

There are no performance issues with fetch.

axios is a good library but here we won't need it

Enable the API in API console, generate api key and mark the origin.
https://developers.google.com/youtube/v3/guides/auth/client-side-web-apps

Lets check if the api is returning the videos.


***************REMEMBER*************
Takeaway: Don't start writing with map. Make it work for one and then scale it.

Add a key when using the map function.

Lets build watch page

    Create routing
        Install react-router-dom
        In App.js, createBrowserRouter with array of paths. Each path is an object of
        path, element and children

        If my route changes, what should change? Should my header or sidebar change? No, only the body changes.

        So, provide routerprovider in place of body.

        Wherever I give my RouterProvider, my app will render over there.

        RouterProvider will be replaced by the element node, in this case, it is Body

        Outlet will be replaced by children, in this case it is either MainContainer or WatchPage

Checkpoint: Check whether the watch page is loading.

Update Home to navigate to local
Close the sidebar by dispatching action from watchpage

For watch page, useParams won't work because useParams work for / and not ?

HW: URLSearchParams research more.

HW: Use Comments API to build comments.

HW: Build Likes, Subscribe and Share

If you practice it, you can build this in less than one hour.

We will build this youtube in an amazing way.

Teaser for next session. Lets build a search bar.

Many interviews ask to build a search bar

Nested comments is also asked a lot.

Build your own youtube by giving a link ganeshdodda.in/youtube or ganeshdodda.youtube.in

Building the page is very easy. Rendering the video components, fetchin an api is very easy.

Behind the scenes, we build a redux store, created a slice, installed react-router-dom, we are using tailwind. We have build the collapsible menu, we will make our search work. We will make our nested comments work. Lets bring in lazy loading. As the code is growing, we will see how to develop an app. Add Shimmer into your project. I have written shimmer, lazy loading, suspense, fallback.

People pay you a lot to develop these applications.

By taking others questions, by solving I have become better. By practising I have become better.

Tips: 
    Build your own app but record yourself when you do that and you will have to explain it.
    Have a timer for two hours running with you.
    Do 5 mins for Requirement clarification and 5 mins for planning
    Speaking while you code is a great habit
    Do proper planning, do proper practice and you will never fail

L13_TimeForTheTest

How to write test cases using Jest and React Testing Library. Before, people use to use something known as enzyme.

 Still there are lot of companies who are still working on enzyme but we are going to study react testing library. This is a new way and industry standard in today's world. I have worked with certain testing libraries but this is by far, the best one right now.

testing-library.com

I have worked on many testing libraries but this is by far, the best one right now.

In my understanding, this is what I will be teaching you today.

It is built on top of Jest, it uses Jest behind the scenes. There would already be so many people who write tests in enzyme. So, if you are using enzyme, ask your project to migrate to react testing library. Please migrate to react testing library.

Today, you will have to take a lot of notes because we are going to learn how to setup a testing framework into our app. 

Did we use create-react-app? No, we did not use because create-react-app abstracts a lot of things from you. 

When teachers teach react using create-react-app, they don't get into small things. People do not realize there is a webpack which is working behind the scenes, there is a bundler, there is parcel which is there. We integrated it so we got to know the superpowers of Parcel. We integrated Babel so we got to know Babel. We integrated browserslist, the make our app is compatible with different browsers.

We created our own create-react-app. One piece left is setting up testing inside create-react-app into our app. We have not done testing inside our app.

Let me tell you, setting up testing is very complex. When we do npx create-react-app demoapp, then automagically that create-react-app will create a react app for you and you don't understand what is happening behind the scenes. How can you build a create-react-app

I want to teach things that dive deep and went into core of things. What is used and when to use it. I can also create unit tests on what happens when we load a page or click a button or load a component. But I want to spend time on setting up test cases. When we setup test cases, we will realize that there are so many libraries that are required to run our test cases. There are so many things that we will get stuck into in today's lesson.

There are so many new things you will learn in today's session. Keep your notebook and pen ready. This is again going to be a knowledge heavy session for you all.

I will be setting up testing right from scratch in our app. Don't worry if you have never done testing in your life. First of all, we will set up our project to run test cases and we will write test cases to see how it will work. 

Some people are asking will you cover cypress, selenium, etc. We are covering react testing library. Let me tell you a little things.

First of all, why do we need test cases. Lets start with the basics. When we develop our app, we check our code. Does our code work as expected or not.

Maintainability, quality of the product, everything is fine but I will tell you why do we actually need test cases. 

Generally, when we build a large scale application, is it just one developer working on that application?

There are so many developers working on the application. And the application does not have like 1, 2, 5 components, it has hundreds of components, hundreds of dependencies, this that and so many things happening inside that. What happens is these components are integrated with each other. Search container can be a new component. This restaurantlist is a new component, this restaurant card is a new component in itself. If I search for cafe, lets say sagar or something. A change in input component is updating a lot of components that are rendered. IT changes a lot of things inside it and all components are interrelated with each other. First of all, we just listed down these components. We just displayed the components into our page and then we added the search functionality on top of it.

So I have created the list of restaurants and Suman created the search functionality. The changes done by Suman can break my code and Suman would not even realize that he broke my code. 

Suppose we are going and click on add menu item and we are affecting the cart page also. Somebody would have clicked on the cart page, somebody would have built the cart page, we are clicking add from here from restaurant menu. 


****************** FUNDAMENTAL ************************
What happens is we write test cases to ensure that our code is properly intact. Whatever we are writing passes test cases if the new code we are writing is not breaking the existing code. If we are adding new features, are we breaking the existing ones? Tests is one of the most important factor how we write code.

This is the core fundamental which lot of developers do not understand.
***************** FUNDAMENTAL *************************

That is why, writing unit tests gives us confidence. It gives us confidence. As and when our app loads, these existing components. Suppose if we are adding one more component into our app, suppose there are thousand components into our app, if you are adding one more component, how sure are you that you are not breaking the other 1000 components, you are not sure right. Testing gives us a lot of confidence that I am not breaking the existing flows. This is why we generally test. Now you can put up it helps in maintainability. Now you know when we see maintainability, how we are maintaining.

That we are adding things up but our code is proper. It is maintainable code. This is the core of it.

These are the jargons in the industry: 
There is something known as test-driven development. What we mean by test-driven development is we write test cases even before we write our code. Generally, in the industries, companies do not follow test-driven development. Why?
Is test-driven development bad? TDD is very, very good. When we are doing TDD, we write test case even before we write our code. We always have 100% test coverage. However, when we do TDD, our development process becomes very, very, very slow. But it will ensure a very good quality of code. But development time increases a lot. That is why, companies generally do not focus on TDD. In my whole career, I have never done TDD starting from startups to big companies. No body does that. I used to feel startups do not focus on it because they want to move fast. But even big companies do not focus on it much. Its not that widely popular. TDD needs a different mindset altogether. 

Suppose I want to create a function sum that returns the sum of two numbers. First of all, I will write a test case for it. 

test('check sum of two numbers', () => {
    expect(sum(2,3).toBe(5));
})

First, I will write the test case. Then, I will write the sum function which will pass the test case. Lets write all the test cases for negative and blank values. First, I will write the test cases to make it extremely efficient. Then, I will actually write my sum function. That way, we will make sure that my sum function is properly written and that way, we are making sure we are not breaking anything. This is an ideal case. Now, think about we are doing this for every case. 

test('check sum of two numbers', () => {
    expect(sum(2,3).toBe(5));
    expect(sum(-2, -3).toBe(-5));
    expect(sum().toBe('Please check arguments'))
})

const sum = (a,b) => a+b;

What we do instead is first we write our sum function a + b, then I will write my test case, it will break, then I will fix, then I will comeback and do random stuff. This is the approach we follow and this is not test driven development.

Q: Can we run a test in JS without a tool like Karma or Jest

What are different types of testing?
- Manual testing: Human goes to the website and checks the tests. You click on add item and the cart shows 3. Manual testing requires humans. Many companies hire an entire testing team and they just keep on testing it. 

There will be a tester who will try to write random things into the input box, who will try to inject code whether it is breaking or not. 


- Automated testing: Code testing a code. Some code that tests your code because we don't want humans involved. Because when there are humans involved,there are errors involved.
            - Selenium is used in Java. It helps us write an entire workflow of test cases, we can write entire 
            end to end testing.
            
- End to End testing 
            - Cypress - User will go to a website, it will login, it will see the search page, add item, click on order and place it. Whole flow is tested. To do this E2E testing, it requires a lot of effort because the test case is huge as it covers entire user journey. So, most of the times, this part is offloaded to QA team. 

Headless browser is used by the QA team most of  the times. Its kinda actual browser but does not show anything. Its an invisible browser without a view port, without a UI. Where will this testing happen? This testing will happen in some browser, some machine.

Why do we need this view port? This view port is needed for manual testing because human will see. However, when we write code, we do not need to see things up. That is why, we use headless browser. 

****************Read about headless browser ****************

What happens is these E2E test cases, we write open a headless browser, go to URL www. something, search for a login page, click on the data, it should login. Fill some random data, it should fail. We do it inside an actual browser. It is like replacing the manual testing with code. 

I am telling you because you all should know this. 

With headless browser, you can execute test cases faster. It is fast because it does not have to paint on the browser. But in headless browser, will there be a virtual DOM. Yes, there will be virtual DOM, there will be diff algorithm, there will be everything but the headless browser does not have to do the work of pushing, changing the view port, changing the colors, etc. So it is a little faster.

Generally, its more of a QA job to write E2E test cases. In some companies, developers also write E2E, depends on the developer and the company.

- Unit Testing. This is the core job of the developer. I am just testing whether this card is loading properly or not. When my app opens, is my header loading or not. Is my logo coming properly or not? It is kinda small component feature testing. This is what we will see. This is important for a developer to know.

And the second important testing is something known as Integration testing. Testing is a huge in itself but majority of test cases fall under unit testing and integration testing and that is something we generally do.

- Integration testing: Testing the integration between the components. If I am searching for soul, my restaurant list should change. This is a user behavior. Its a basic feature. There will be lot of users who will be doing a lot of this on our actual data flow. We will be testing this. 

- Regression testing, smoke testing, performance testing, load testing, blackbox testing

As developers, we should be concerned about smoke and regression testing. Testing is exactly like development. Development takes time. There is a learning curve, it takes time, it takes a mindset. Similarly, testing also takes time, mindset, effort to write test cases. It is just like development, testing is not like adding features. If you dont know testing, its completely fine but you should know the basics of testing.


TIME FOR THE TEST NOW. We are going to study a lot of jargons, a lot of new things today. 

RTL documentation suggests that this is a replacement for enzyme. Enzyme used to be an older way. For all new projects, use RTL

testing-library.com > Frameworks > RTL > Introduction

RTL is a part of testing library and this testing library offers support for React, Angular and other frameworks also.

We are using Jest. Jest is a delightful JS testing framework. If you need to test JS code, we need Jest. Fast and safe, easy mocking, code coverage. Full fledged framework. Jest can have its own namaste jest.

RTL uses Jest behind the scenes. RTL makes testing in react very efficient. You will enjoy writing Unit and integration tests which I am going to cover today.

1. Install testing library/react as a devdependency

With testing library, I also need to install Jest

2. npm i -D jest

jest 29 is different from the older version. If you are using older version, then lot of things will break. Do google search.

3. Configure Jest
 
 To configure, I will create a Jest.config file. Better way to do this is using Jest --config. How do I run this command? Will this command work like this. Jest is a package I won't use npm , I will use npx because I just need to execute it once. 

 Q: Difference between npm and npx? What do we mean by running it once.

 typescript? N
 Test env?(node, jsdom) jsdom(browser-like) We are using browser like environment.
 Coverage reports? Y
 Provider to be used to instrument code for coverage? (v8, babel) babel
Automatically clear mock calls, instances, contexts, results before every test 


It created a big config file. You can create it manually or you can use npx jest --init

We used npx instead of npm run because I wanted to create the jest.config file once

00.46.02

the command is just a handy tool that jest has created. A command line. That's all.  

4. How do you run these tests? npm run tests

We will get a lot of errors. I will make errors and then we learn how to fix these errors.
  
Error 1: As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately. 
Sol: npm i -D jest-environment-jsdom

Lets run npm run test again. It says it checked 30 files but it did not find any test cases written in any of the files.

Error 2: Test.js should contain atleast one test.
Sol: Renamed it to sum.js


> y@1.0.0 test
> jest

***********output of npm test*********************
No tests found, exiting with code 1
Run with `--passWithNoTests` to exit with code 0
In C:\Study\React\Git\Namaste-React
  34 files checked.
  testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 0 matches
  testPathIgnorePatterns: \\node_modules\\ - 34 matches
  testRegex:  - 0 matches
Pattern:  - 0 matches
***********output of npm test*********************

Basically, Jest is trying to find tet cases in whole project. It did not find it because we did not write any. 

Its also checking _tests_ folder, which is not there
Its also checking the .spec.js which its not finding.

Lets create a test file. 

5. Installed jest-environment-jsdom

6. Create my first test file. Be mindful of the name of this folder __tests__. 
        It will give a cool red color icon. Why the name is important is when I name like this, jest will consider them as testing files. Whatever files I make inside this, Jest will consider them as testing files. 

        This __ you would have seen many times. It is also known as dunder. Its just a naming convention and nothing much. Here in our test file, let us create our first test file. 

Before moving to React testing, lets explore JS testing bcos Jest is a JS testing framework. Once you understand JS testing, React will be very easy to understand. 

Let us take step by step and cover slowly. I will create a file which is sum.test.js. There is a convention used in the industry for .test.js, which means it is a testing file. Some teams use .spec.js, some use .ts and so on.

If we write a file in __tests__, Jest will automatically track those files. The config says that all the .js or .ts files inside the __tests__ will be considered as test files. Else the second pattern is to use spec.js or test.js. I personally like using test.js because I know that will be testing my sum.test.js function.

Lets write our first test case. We will write test and pass the first argument as the name of the test and the second argument is a function that the code will execute. In the function we expect something.

test("check sum of two positive numbers", () => {

})

Observe that we have passed our test cases. However, our intent of writing test cases is to fail our code. Whenever there is a test case, it should have an expectation or assertion. We will assert something. We will expect our function to call with two parameters. Expect the sum call to return 7

expect(sum(2,5).toBe(7))

Where should this sum come from, it should come from the sum file. Otherwise, it will not know what to call.

Import the named export from sum.

How would the file know what is test and what is expect? Because Jest already understands this and it says we don't need to import it. Long ago, we used to import test and expect also.

Now we don't need to import it. External functions like sum need to be imported. Lets run our tests now. If I run my tests, it says one test failed

 SyntaxError: Cannot use import statement outside a module

Normal JS files do not understand import. How will I make sure that my code understands this import? Using module.exports

We will need to take help of Babel in this. 

7. Install and Configure Babel

If we go to Jest using Babel documentation, it says Jest will need some Babel packages. 

npm install --save-dev babel-jest @babel/core @babel/preset-env

Observe we are installing Babel Jest, Babel core and Babel preset-env

Create your Babel config js and it will configure it. preset-env.

Basically, Babel will make us understand that there is something known as import. By default, Jest does not know what is import. Babel will tell Jest. 

Babel will take some code and modify it. We will add the configuration of preset-env. We will need to add babel.config.js

We are doing this because our code does not understand import right now. Babel will help us understand. Babel is kind of a translator for us. 

Instead of creating babel.config.js, we can create babelrc. So, when you have to configure babel, we can either use babelrc or babel.config.js, both ways we can use. Why did we use this babelrc file? To remove all the console logs.

Similarly, now we will use Babel to make understand that we are using more things inside our code. 

presets: [['@babel/preset-env', {targets: {node: 'current'}}]],

This is throwing an error. Why? Not because this is not a valid Javascript. This is a valid Javascript.

Let me tell you most people will be not able to answer this question. And most people do not understand Javascript.

This is because babelrc requires a json. 

Many people think that json and js object are same. JSON is different than JS object. 

HW: You have to find out the diff between JSON and JS object.

How do you convert to JSON? JSON takes double quotes for everything. 

HW: Can I write comma to the end? Find out.

Lets run again.

    TypeError: (0 , _sum.sum)(...).toBe is not a function
    expect(sum(2, 5).toBe(5));

    expect needs to end before toBe

    Sol: expect(sum(2,5)).toBe(5)
    

Run it again and see. Observe that it expected 5 but received 7

update toBe as 7 as that is the correct value
    
    expect(sum(2, 5)).toBe(7);

We can also use notToBe, test for negative numbers and all other tests.

Revision:
Install rtl from testing library documentation
Install jest
Configure Jest - npx jest --init 
    - Created jest.config.js
Installed jest-environment-jsdom
    - To fix version error
Created first test
    - Not running because the code does not understand import

Important thing about testing:
Today, I am not running my app. npm run start
But we are running npm run test
Are these tests running in a browser?

No, we are running tests in a different environment called jest which is checking our code. Its not rendering on the browser. Browser would have understood import. But we are not running tests on browser, we are running tests on our code and Jest is taking care of it. We are using something known as Testenvironmnt: jsdom.

Is jsdom a browser? No, its not a browser
Will it have browser like functionalities? No, it will be like a mini-browser.

HW: Read more about npm > jsdom

I am saying that we are not running on browser, we need to tweak our code. We need to tell that it is not normal code running on browser. So jest needs to understand the import keyword.

Jest does not understand import {sum}. To make Jest understand, we take help of Babel. On google, we need to write Jest Babel configuration. Babel will give the syntax to help Jest.  

We should appreciate things. Babel helps everyone. At the core, Babel is a transpiler.

That we wrote the testcase and we passed the test suite.

We are getting the coverage report because we configured in the jest config about collecting coverage: collectCoverage: true

We have 20 files changed. Did we change all of them? These files are coming from the coverage folder. This gives you the coverage report.

Coverage report, basically, tells you how much of the code is covered. How many test cases we have written.

These files are not required to be committed, we can ignore these files as this is only needed for our local development.

Add /coverage to gitignore. Now, we have the exact files that are needed

Now lets move to unit testing and show you.

npm run start to run code side by side

Now lets try to do unit testing. Unit testing was testing small components. Testing small individual components of our app. We will fail a lot but we will keep improving.

Let us write a unit test for as soon as the page loads, as soon as the header component loads. 

First of all, lets write for the header and then for the body.

We will write what to expect when I load the header: 
1. Logo needs to be displayed
2. Cart needs to be zero
3. My default status needs to be online.

Make the test case name descriptive. By reading the test case, you should understand what you are doing. You should always write what you are expecting.

Lot of people, you know, how they write test case names: logo load and done.That does not make sense, be a little more descriptive.

This code is running inside jsdom and not our browser. What we will do is assume jsdom to be a small container. Its like a small machine which is running code. In that machine, I will just load the header.

To load it, I will use the render function coming from RTL. I don't want to load the full app. Just render my head component

In our App (App.js), we did ReactDOM.createRoot() and we did root.render() right. This is how you render in the browser. We have document.getElementById in the browser, we pick up the root and we render on to it.

I want to connect the dots, otherwise you will not understand it. This will stick to your head.

How did we render our application on to our page. Remember we find out the root html element and we try to render it inside the root. In jsdom, we do not have the HTML, we do not have the root, we are just loading the header. In this case, we cannot do root.render. For that, we will have to use render from RTL. RTL is giving us a container and in that container I will load my header. This is very important to note. This will clear your basics.

I will render the header using render(<Header />)

Lot of people write test cases but they don't know where and how it is run. Why we are writing render. They will just copy previous test cases and modify data. That's how people are testing.

When we run tests using Jest. We are not running tests on browser. We are running tests on jsdom. It does not have a root

First class, first thing we did was we saw index.html, which we did not see in so many years. We had this index.html, we had this root id and we wrote Not rendered. And whatever react does, it does inside this. We understood react has a root. Everything react does is it it puts under the root. This HTML is inside the whole app in the browser.

Now, this root, this HTML is inside the browser. In JSdom we don't have the root, I just want to load my header. So, we do not have this root. So, RTL says don't worry, I am giving you a render function. This render function will create a small container for you and you can load your component inside it. I have loaded my header inside it. Now, whatever is rendered, I am taking that in a header variable and I am trying to log it. 


Running the test says Support for jsx is not currently enabled. Our code does not understand jsx. Earlier it does not understand import. Now, it does not understand jsx. 

If React is like Narendra Modi, Babel is like Amit Shah.

To understand import, we installed preset-env. 

So, we will install something known as babel/preset-react and give the configuration as runtime automatic. 

Do I need to remember all this? No. This is just one-time configuration and have to do it once.

What is runtime? Research it. 

When jsdom is running our code, take the runtime as automatic and make our code compatible with react

Install the preset-react library using npm i -D @babel/preset-react

This was required for JSX code. Now, our code should understand it. Lets try to run npm run test.

SyntaxError: C:\Study\React\Git\Namaste-React\src\assets\img\Food_Villa_New.png: Unexpected character '�'. (1:0)

Observe that it is reading the header page. Now its is showing a syntax error on the Logo image. It says it cannot understand Logo image. It is throwing this error because its trying to read this png image as a Javascript.

jsdom is trying to read the image as a Javascript but its a png image. So the jsdom or container where we are running our code does not understand images. 

So, if we remove the Logo import and use a URL, it will work fine. Why? Because using URL is a string.

// import Logo from "../assets/img/foodvilla.png"
<img className="h-28 p-2" alt="logo" src={"Logo"}> 

However, in the current case, our code is reading a PNG file and is saying that I don't understand PNG file. So, we have to figure out a workaround. In our testing, when something breaks, we create a mock for it. Its like a dummy image. We create a dummy image for testing.

So, this dummy image needs to be JS because JSDOM understands JS. So lets name the file dummyLogo.js.

To make the code know to use dummyLogo.png, we will add a configuration in Jest known as moduleNameMapper.

We can tell moduleNameMapper that whenever we see a png image anytime in our app, we replace it with dummyImage string

moduleNameMapper: {
    "\\.png": "../mocks/dummyLogo.js"
}

For jpg also,

moduleNameMapper: {
    "\\.(jpg|png|svg)$": "../mocks/dummyLogo.js"
}


2.03

We made progress, it gives us a new error now. It says react-redux is not found. It says your header does not have a provider. You are using redux in your app but you do not have a provider for it.

This is because we are using useSelector. We have subscribed our header but we have not put in. Our code is running in jsdom right. So it does not have a provider. It does not have a applayout.

How will it run, it can't run. Can you guess what will I do? 

Should I give a dummy provider? No, I will create an actual store. Whenever I am rendering a header, I will give it a provider.  Provider will be from react-redux and will wrap it on top of Header component. So, we have provided our store to it.

Now, be happy. 

Lets run our test case again.

Err: Cannot find module '../../utils' from 'src/components/__tests__/Header.test.js'
at import store from "../../utils";

utils does not have the default import 

Solution: '../../utils/store'

Run the test again.

Error: useHref() may be used only in the context of a <Router> component

In header component, we used Link. Our jsdom does not understand link. It does not know where the routing is coming from. So, we will need to give router also. 

What was the API used to created for the router: createBrowserRouter. Will it work in the test cases? It will not work because its not a browser, we are running the tests in a different container. So, react-router-dom gives us another router called staticRouter. This staticRouter does not come from react-router-dom but it comes from react-router-dom/server

It gives something known as staticRouter. The staticRouter comes from server and can work without browser. This router can work without browser. 

Now, I will wrap my app inside the StaticRouter.

Run the test again.

Warning: React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.

Solution: Static Router is a named import and not a default import.

Run the test again. All tests passed.

Since we have taken break, its one hour and we have not written even a single test case. Why? When we use create-react-app, we abstract everything. We do not know the internals. 

We have learned how to setup Jest, how to set up RTL, Babel/preset-env, Babel/preset-react, jest-config.js, babelrc

Will you become a great developer if you don't know these things? No, you can't 

I want my students to know the basics, important core stuff. You can find thousands of tutorials on writing test cases, watching youtube videos also. How to write test cases, how to fire an event, etc.

But you won't find this core thing that what is happening inside it. We start writing npx create-react-app and we start writing test cases. It becomes very easy. I wanted you to go through that pain so that you can appreciate what's happening. So, now you can appreciate create-react-app developers. 

Now you appreciate that create-react-app developers would have done all these things. When you run npx create-react-app, it does all these things for you. I want to dive deep into this. This is Namaste React. I don't want you to be average react developers.

 I am not settling down on average, I want you to be excellent. I can just tell you the basics, but you will have to practice it, read it, read a lot about each and every keyword we studied today.

 I know you might have a lot of curious questions but find out. I might also not have all those answers. I might also have not done thousands of research. I am just generating curiosity and telling what ever I know. 

 We have just passed the testcase, we have just rendered it and have not expected something. Let us expect if Logo has rendered or not. Lets print and see what is there in header.

 The printed is the virtual DOM object. Remember Babel was converting JSX to something. 

       {
        container: HTMLDivElement {
          '__reactContainer$e0ful7czpe': FiberNode {

We have reached to a point. In our container, we have rendered our header properly. This is the fiber node > React fiber > Reconciliation diff algorithm. This is what it is. We have rendered the header properly.

Now, we can play with it we have got this header inside it. Now, let us do more stuff. Now, let us just see, let us just try to find logo

DOM is a big tree structure. How do I find my logo. In browser,we can do document.getElementById or document.getElementByTagName

Similarly, in testing, we can access getElementByTagName, getElementById, etc. Recommend using getElementByTagName

Which is better? document.getElementById or document.getElementByClassName? Id is better because its more specific. 
So, over here also, I will do by Test ID. This is not the actual HTML id but the test ID for uniqueness

We did not write test id in code during development. Now lets write it. data-testid. If we write id, our browser recognizes it, but if I write data-testid, our Jest recognizes it. 

const logo = header.getAllByTestId("logo")

From consoling logo, we are able to retrieve the Image Element. The element type is the img tag. src we have got as dummy. We passed these props className, alt etc.

Going deep is important. Next time you will get that, you will console log and see this. Now, it has also rendered its dummy image. It has injected our dummy image into the place of image (moduleNameMapper).

It failed received undefined for logo.src

Error: Expected is not the received
Solution: getAllByTestId returns an array

Testing is also same as development. We will need to same hit and trial as in development.

Think about how fast you can write for loops. But think about the person who is learning for loops. 

Testing also has a learning curve.

To test for online, add a test id

Lets add anohter test for cart items to be zero.

As you see, all tests are almost similar, but important thing to note is the tests are also testing our hooks such as useOnline.

If there is something wrong with the useOnline hook, the status would have turned to red dot emoji. 

What my logo is testing? My logo is testing. 

When we are testing for cart length, we are testing whether the store was setup properly or not, whether the component header is subscribing to our store properly or not, whether the useSelector is working properly or not.

That is the importance of our test case. 

Suppose some other piece of our code broke our store, this test case will fail.

We can have all the expect written in one statement but the recommendation is to have a separate test case so we have a clear distinction.

Let me tell you a magical thing which will help you in debugging a lot. Do you want to see what is rendered in that component, what is rendered in that container, it is very helpful to see what is rendered in that container, that jsdom.

Update test id in the test to cart1 or something and Jest will show you the whole HTML. This shows you the whole body, div, dummy name, etc. We are getting dummy name because of our provider, our context.

 <body>                                                                                                                       
      <div>
        <div
          class="flex justify-between bg-cyan-200 shadow-2xl shadow-blue-50 sm:bg-purple-200"
        >
          <a
            href="/"
          >.......................
          .......................
          </body>

This is easy to debug.


So far, we have tested unit testing. Now, we need to do integration testing. 

If we take the search bar, updating the search will impact multiple components, lets write the test cases for search bar.

For search bar, lets render the body by wrapping it in router and provider and by importing render and Provider named imports.

Reference Error: fetch is not defined.

fetch is not defined because we are not running our code into browser. We are not having network access, we cannot make a network call in our test cases. We will use mock data to test our components. What we will do is we will try to mock our fetch also. 

We will use global.fetch and a dummy function given by Jest known as jest.fn

What does fetch do? It returns a promise. 

We write Promise.resolve(). We can also test for failure case by writing Promise.reject

Fetch does not return a json, it returns a readable stream. The api swiggy.io/data returns a readable stream and not json

In the code, we again write a await data.json(), so it again returns us a promise, so another promise.resolve to resolve that.

Now we will pass the data that we have to mock and that will power our data layer. Lets create a data.js to export the restaurant data. Now, we have created a dummy fetch and attached that fetch to global object.

Now, my code will automatically understand what is happening inside my fetch. We just needed fetch and lets build our fetch. Why are we doing random things.

Why two promises? When we do fetch, we do it two times. First prmise is returned as a promise with a readable stream and is assigned to data. Second, when we convert it to json, it is also resolved as a promise. That is why, we have these two promises. 

Run the tests:

Warning: An update to Body inside a test was not wrapped in act(...).

Sol: We did not return the Promise in mock. Second Promise should also be a function

json: () => {Promise.resolve(RESTAURANT_DATA)}


Error:  TestingLibraryElementError: Unable to find an element by: [data-testid="search-btn"]   

Reason: Body first loads shimmer

Test for shimmer and I should test by shimmer id.

What if we want HMR for testing? It comes out of the box from Jest. jest --watch

testing library/jest-dom library helps us with the toBeInTheDocument API.


data.js => Err: Your test suite must contain at least one test.

Move the data to mocks

All tests have passed.

3.28

This test does not give us so much confidence. Lets write a different test case.

Lets check what is there in the document.

expect(shimmer.innerHTML).toBeInTheDocument

We observe that shimmer cards are inside it.

expect(shimmer.children).toBeInTheDocument

It returns 10 cards array. For getting confidence, we can check the length of cards array

expect(shimmer.children.length).toBe(100)

Lets now render our complete page. What do we need to do to avoid shimmer? I will have to wait.

We can wait for 10 seconds. These are superpowers from Jest. 

await waitFor(() => {//code here})

I will wait till I have a search button on my screen.

Since I am doing await, I need to make the test function async

expect(resList.children.length).toBe(2)

Now, my 2 restaurants are loaded by a dummy fetch data. 

See what all we have covered. We have covered rendering of data. We have covered 
mocking of the api. It is making the api call. It is setting up the state. We have tested the reconciliation for everything over here. How the data is loaded, shimmer loading.
We have tested useEffect as getRestaurants is inside useEffect. We have tested our allRestaurants, filteredRestaurants, etc.

Let us actually test search now. We type something into input box and hit on search button

add data-testid to input box and mock the typing by fire event (from RTL)

What we need is to fire the onchange event. So, it would be fireEvent.change on the input handle

What I have to change inside the event? Remember somehting called as Synthetic event, what did the callback receive: Synthetic event.

What value did the callback return? e.target.value

Understanding the above concept is important. I need to mock the typing behavior. I will not type here, my code will type for me. I have changed this. Now, food will be automatically be typed for us. 

Now I will fire a click on the search button and check the length of the filtered restaurants

So, we tested how to do component testing, integration testing and unit testing. 

Lets try testing the menu items page

Add a test id to ul in Restaurant menu
Mock the data
wait for the menu to load

Error: Only Header components are showing up
Solution: Wrap header as single component. Do not wrap it on top of Menu

Error: Data is not fetched to restaurant menu
Solution: Mock data MENU_LIST is not created correctly

You can view what it is printing by logging innerHTML

Menu is UL and it will have a lot of children. Lets add the test to click the button

Add testid to button component so we can use getAllByTestId to click it on the first button

What did we test so far? We loaded the hotel, we loaded the restaurant menu, we added a new data of a restaurant menu, we clicked on the add button and it increased my cart items to two.

If we add two more items, the cart will show 4 items.

Amazing thing about the integration testing is we can also load cart component over here and check how many cards are rendered inside it.

In sum js we have written the different steps.

We have written our test cases starting from Javascript function. We have written test cases for checking our store.

We have written our test cases to see if we have written our store is build properly or not.


When we click on the add button, it dispatches an action, which updates the slice of the store and the cart component is subscribed to the store using a useSelector. We have tested whole redux we did today. Isn't it amazing?

Summary:
Remember all jargons in redux and in testing

/**

- Install React Testing Library
- Install Jest
- Configure Jest (npx jest --init)
- Installed jest-environment-jsdom (Why? 29 version)
- Create my first test (JS, expect, test)
- Configure Babel (preset-env as import was failing)
- Wrote expect sum test
- gitignore coverage report
- React testing failed and we installed preset-react
- Provider
- Static Router from react-router-dom/server
- Our logo did not work. So, we created a mock image
- Fetch broke. We did a global fetch. We wrote our own fetch function where we resolved two promises
- Can you write the code for global fetch without seeing? Once you write, you will never forget
- Fetched data. How data will be loaded? What is data-testid
- HMR for testing (--watch)
- Error come warning that we ignored
- Shimmer testing
- toBeInTheDocument
- await waitFor and add async
- fireEvent
- fire a change event (understand why we wrote synthetic event)

 */

 What is action, dispatch, reducer, slice, store, waitFor, fireEvent? Give your 120%

 Teacher can infuse curiosity, create excitement about the project, make you fall in love with react. But you have to maintain the relationship. I can just get you connected with react, fall in love with react. You have to maintain it.

 What I have coded in 4 hours today will take you 4 days to properly understand. Don't hurry learning. Search for each thing and have to learn properly.

1. Attend live classes
2. You will be the best of React class
3. Please have curiosity and I expect best results from best students
4. Watch the recordings. Search over the internet. 
5. Make your own notes. Take reference from my code and from others, do not copy
6. Be active in discord and help each other.

React is most popular UI library available in the market. React developers are earning huge packages. All I am teaching is the industry standard. Do your homework. Uplift your career.

Success of you will define the success of Namaste React. Even today, the videos of Namaste JS are so popular. I want the same to be in React also.

Please, please, please do your homework, put your efforts. Help others and be curious. Ask questions but help others. 

Everyone over here, answer atleast five questions on discord. Ask yourself? Did I learn something new that I did not know.

Minimum five questions everyone needs to answer.





















 









































































































































































































































