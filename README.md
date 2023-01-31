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