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
