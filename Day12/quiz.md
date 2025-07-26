1.Which method is suitable for fetching API data after initial render?

componentWillUnmount

componentDidUpdate

componentDidMount

shouldComponentUpdate
Will be reviewed
2.Which method cannot access this.props or this.state?

render

getDerivedStateFromProps

componentDidUpdate

componentWillUnmount
Will be reviewed
3.Which of the following lifecycle methods is invoked when an error is thrown in a descendant component?

componentDidMount

componentDidCatch

getDerivedStateFromError

Both b and c
Will be reviewed
4.What will cause render to be called again?

Only state change

Only props change

Either state or props change

Only constructor is called
Will be reviewed
5.A component fetches remote data upon mounting and receives new props affecting its data source. Describe a robust pattern for handling both initial and subsequent fetches while preventing memory leaks.

Use componentDidMount for initial fetch, componentDidUpdate for prop changes, handle cleanup in componentWillUnmount, and use a flag or AbortController to prevent setting state after unmounting.

Use getDerivedStateFromProps for all fetching.

Dispatch fetch in constructor, handle abort in render.

Use only componentWillUnmount.
Will be reviewed
6.Which of the following methods is required in every class-based React component?

componentDidMount

constructor

render

componentWillUnmount
Will be reviewed
7.If you want to store the previous value of a prop before it changes, which pair of methods could you use?

constructor and render

getDerivedStateFromProps and componentWillUnmount

getSnapshotBeforeUpdate and componentDidUpdate

shouldComponentUpdate and render
Will be reviewed
8.Which method is deprecated and should not be used in modern React code (post v16.3)?

componentWillMount

componentDidMount

componentDidUpdate

constructor
Will be reviewed
9.Which method is called just before the DOM is updated?

getSnapshotBeforeUpdate

componentWillUnmount

componentDidMount

render
Will be reviewed
10.In what scenario could getDerivedStateFromProps lead to redundant or stale state, and how would you avoid it?

When directly copying props to state; avoid by only updating state if props and state differ.

When updating state every render; avoid by unmounting component.

When using componentWillUnmount; avoid by using getSnapshotBeforeUpdate.

When not binding methods; avoid by binding in constructor.
Will be reviewed
11.What is called first, constructor or render?

render

constructor

componentDidMount

componentWillUnmount
Will be reviewed
12.What happens if shouldComponentUpdate returns false after a props change?

The component continues updating

The component will still re-render

The component does not re-render or call componentDidUpdate

The component unmounts
Will be reviewed
13.Which method is called after every render when the component's props or state change?

componentWillUnmount

componentDidUpdate

getDerivedStateFromProps

constructor
Will be reviewed
14.Where should you bind class methods if needed?

render method

componentWillUnmount

constructor

componentDidUpdate
Will be reviewed
15.Which lifecycle method is called immediately after a component is mounted?

componentWillUnmount

componentDidMount

componentDidUpdate

render
Will be reviewed
16.Which method is invoked before the component is removed from the DOM?

getDerivedStateFromProps

componentWillUnmount

shouldComponentUpdate

componentDidUpdate
17.Email
sameekshamenda19@gmail.com
Will be reviewed
18.Which lifecycle method is best for initiating animations after a DOM update?

componentDidMount

getDerivedStateFromProps

componentDidUpdate

constructor
Will be reviewed
19.Which method is used to perform clean-up in a React class component?

componentDidMount

componentWillUnmount

shouldComponentUpdate

getDerivedStateFromProps
Will be reviewed
20.What argument does componentDidUpdate NOT receive?

prevProps

prevState

snapshot

nextProps
Will be reviewed
21.Which method can cause an infinite loop if setState is called inside it without a condition?

componentWillUnmount

componentDidUpdate

render

constructor
Will be reviewed
22.Which static lifecycle method is used to synchronize state with props when a component receives new props?

getSnapshotBeforeUpdate

getDerivedStateFromProps

componentDidUpdate

componentWillUnmount
Will be reviewed
23.What is the correct order of lifecycle methods when a component is mounted?

render → constructor → componentDidMount

constructor → render → componentDidMount

componentDidMount → render → constructor

constructor → componentDidMount → render
Will be reviewed
24.Which method can be static in a class component?

getDerivedStateFromProps

componentWillUnmount

shouldComponentUpdate

render
Will be reviewed
25.Which lifecycle method allows you to read the DOM before changes are committed?

getSnapshotBeforeUpdate

getDerivedStateFromProps

render

shouldComponentUpdate
26.Name
Sameeksha Menda
Will be reviewed
27.What does the shouldComponentUpdate method return?

String

Boolean

Number

Object