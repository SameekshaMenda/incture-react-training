### Quiz 6
## React Hooks

1.How can you access a DOM node of a child functional component using refs?

Wrap the child component with forwardRef and pass the ref from the parent

Use useState in the parent

Pass ref as a prop without forwardRef

It’s not possible to access DOM nodes of functional components
2.What problem does forwardRef solve in React component composition?

It allows parent components to directly access child component's DOM nodes or instance methods, which normally isn’t possible with function components

It automatically renders child components

It prevents unnecessary re-renders

It manages component state more efficiently
3.When does useMemo recompute its memoized value?

Every render regardless of dependencies

Only when one of the dependencies changes

Never

On component unmount
4.How is useRef commonly used in React components?

To store a reference to a DOM element or a mutable value that does not cause re- render on change

To trigger re-renders

To fetch API data

To compute derived data
5.What happens if you include a state variable in the dependency array of useEffect?

The effect runs after the initial render and whenever that state changes

The effect never runs

The state variable is reset

The component does not render
6.Which of the following is a benefit of using useMemo?

Prevents expensive computations on every render

Automatically updates state values

Runs an effect after render

Triggers re-rendering automatically
7.What is the purpose of the useMemo hook?

To memoize the result of a calculation to optimize performance

To fetch data from an API

To manage state inside a component

To handle events
8.Which of the following best describes the primary purpose of a custom hook in React?

To encapsulate reusable logic and stateful behavior that can be shared across components

To replace React context entirely

To optimize rendering performance by memoizing components

To handle routing inside functional components
9.What is the purpose of the dependency array as the second argument in useEffect?

To specify when the effect should rerun based on changes in dependencies

To set initial state values

To memoize a function

To prevent component rendering
10.What kind of function can you optionally return from a useEffect callback?

An event handler

A cleanup function that runs before the next effect or when the component unmounts

An updater function for state

A function to update props
11.How would you prevent setting state inside useEffect after a component has unmounted to avoid memory leaks in asynchronous operations?

Use a cleanup function with a mounted flag or AbortController to cancel async calls

Put state updates inside useMemo

Use useRef to hold state

Avoid async operations inside useEffect altogether
12.When does the effect function inside useEffect run if no dependency array is provided?

Only once after the initial render

After every render

Only when a specific prop changes

Only when the component unmounts
13.How do you define a React component that supports forwarding refs?

Wrap it with React.forwardRef and accept ref as the second argument

Use useEffect inside it

Use useMemo to forward refs

None of the above
14.What is a key rule you must follow when creating a custom hook in React?

It should be a class component

Its name must start with use to allow React to recognize it as a hook

It cannot use built-in hooks like useState or useEffect inside it

It should always return JSX elements
15.What arguments does useMemo take?

A callback function and a dependency array

Only a callback function

Only a dependency array

Event handlers and dependencies
16.If a useEffect has a cleanup function, when is this cleanup function executed?

Immediately after the effect runs

Before the next effect runs or when the component unmounts

Only on the first render

Never
17.In which scenario is useMemo particularly helpful?

When you have a costly computation that depends on certain inputs and should be recalculated only when those inputs change

When you want to perform side effects after render

When you want to update the DOM directly

When managing event listeners
18.What could happen if you omit the dependency array from useMemo?

The memoized value is recomputed on every render, losing optimization benefits

The component crashes

The component never rerenders

The memoized value is cached forever without updates

19.How often will the effect run if you pass an empty dependency array [] to useEffect?

Every render

Once after the initial render only

Never

Only when component unmounts

21.What issues might arise if you omit dependency array or specify dependencies incorrectly in useEffect?

Infinite loops or stale closures causing bugs

The component will not mount

The component will render only once

There will be no effect of the hook

22.What does the useEffect hook primarily allow you to do in React function components?

Handle state initialization

Perform side effects like data fetching or DOM manipulation

Define component styles

Manage routing

23.What is the main purpose of forwardRef in React?

To forward a ref through a component to a child component or DOM element

To memoize a component

To manage component state

To perform side effects

24.What are potential pitfalls when overusing useMemo in React components?

Unnecessary complexity and memory overhead without noticeable performance gains

Blocking the component from rendering

Causing component unmount errors

Preventing useEffect from running

25.What does the useRef hook return?

A mutable object with a .current property that persists across renders

A new stateful value

A memoized function

A string

26.Which of the following is a common use case of useEffect?

Fetching data from an API after the component mounts

Declaring local state variables

Creating constants inside components

Styling JSX elements