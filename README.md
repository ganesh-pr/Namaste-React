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

