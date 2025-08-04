Quiz 7
Context API, Local Storage and Session Storage

1.What happens if you try to store too much data in localStorage?(1 Point)
Browser automatically increases the limit
Older items are automatically removed
QuotaExceededError is thrown
It silently fails and stores nothing

2.What is the default data type stored in localStorage?(1 Point)
Number
Object
String
Boolean

3.What method is used to remove all items from sessionStorage?(1 Point)
sessionStorage.empty()
sessionStorage.deleteAll()
sessionStorage.clear()
sessionStorage.removeAll()

4.When should you not use Context API in React?(1 Point)
When you need global styling
When shared state changes frequently and impacts performance
When state needs to be passed to sibling components
When creating a theme toggler

5.How does Context differ from props in data transmission?(1 Point)
Context sends data top-down, while props are bottom-up
Props work with hooks, context doesn’t
Context allows avoiding prop drilling
Props are only for classes

6.Which React hook is used to consume a context inside a functional component?(1 Point)
useState()
useReducer()
useContext()
useEffect()

8.Where is the best place to define the createContext() in an app?(1 Point)
Inside every component
Inside the component that consumes it
In a separate file and export it
In App.js only

9.What is a common performance issue with React Context and how can it be optimized?(1 Point)
Components using context are never updated
All consumers re-render on context change, use memoization or split contexts
Context prevents useEffect from running
Context causes memory leaks in large apps

10.What do you wrap around a component tree to provide a context?(1 Point)
<Context.Provider>
<Context.Consumer>
<Context>
<Context.Use>

11.Which of the following can access the value from a context?(1 Point)
Only the provider
Only class components
Any component wrapped in the provider
Only sibling components

12.How can you store an object in localStorage properly?(1 Point)
localStorage.setItem("obj", {a:1})
localStorage.setItem("obj", JSON.stringify({a:1}))
localStorage.store("obj", {a:1})
localStorage.push("obj", {a:1})

13.If you open the same website in two tabs, what will be the value of a key stored in sessionStorage?(1 Point)
Shared across both tabs
Available only in the tab where it was set
Automatically synced between tabs
Stored in cookies

14.Which of the following statements is true about multiple contexts in a component?(1 Point)
Only one context can be used per component
You must use nested consumers
You can use multiple useContext() calls for different contexts
You must use Redux for multiple contexts

15.Which of the following correctly stores and retrieves an object in sessionStorage?(1 Point)
sessionStorage.setItem("user", {name:"Tom"}); let user = sessionStorage.getItem("user");
sessionStorage.user = {name:"Tom"}; let user = sessionStorage.user;
sessionStorage.setItem("user", JSON.stringify({name:"Tom"})); let user = JSON.parse(sessionStorage.getItem("user"));
sessionStorage.set("user", JSON.stringify({name:"Tom"})); let user = JSON.get(sessionStorage["user"]);

16.What is the main purpose of the React Context API?(1 Point)
Manage routing
Manage global state
Perform animations
Handle form validation

17.Which of the following best explains prop drilling?(1 Point)
Passing props only once at the top level
Passing data directly to deeply nested components via context
Passing data through every intermediate component unnecessarily
Using hooks instead of props

18.What is the main difference between localStorage and sessionStorage?(1 Point)
sessionStorage stores data permanently
sessionStorage shares data across tabs
sessionStorage clears data when the tab is closed
sessionStorage stores only numbers

19.Can React Context API replace Redux for all state management?(1 Point)
Yes, always
No, never
It depends on the complexity of the app
Only for class components

20.How do you retrieve a value from sessionStorage?(1 Point)
sessionStorage.get("key")
sessionStorage.read("key")
sessionStorage.fetch("key")
sessionStorage.getItem("key")

22.What happens if a component uses a context without a matching provider?(1 Point)
Error will be thrown
It will use the default context value
It will crash the app
It will return undefined

23.Which method is used to create a context?(1 Point)
createState()
createContext()
new Context()
useContext()

24.What prop is required by <Context.Provider>?(1 Point)
context
value
state
children

25.What type of prop is passed to <Context.Provider>?(1 Point)
JSX elements
Boolean only
Any data (object, array, string, etc.)
Only numbers

26.Which of the following will remove a specific item from localStorage?(1 Point)
localStorage.clearItem("key")
localStorage.remove("key")
localStorage.removeItem("key")
localStorage.delete("key")

27.What method is used to store data in localStorage?(1 Point)
storeItem()
saveData()
localStorage.save()
localStorage.setItem()