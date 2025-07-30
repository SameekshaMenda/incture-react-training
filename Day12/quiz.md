### Quiz 5
## lifecycle methods

1.Which method is suitable for fetching API data after initial render?

- A) componentWillUnmount

- B) componentDidUpdate

- C) componentDidMount

shouldComponentUpdate

2.Which method cannot access this.props or this.state?

- A) render

- B) getDerivedStateFromProps

- C) componentDidUpdate

componentWillUnmount

3.Which of the following lifecycle methods is invoked when an error is thrown in a descendant component?

- A) componentDidMount

- B) componentDidCatch

- C) getDerivedStateFromError

Both b and c

4.What will cause render to be called again?

- A) Only state change

- B) Only props change

- C) Either state or props change

Only constructor is called

5.A component fetches remote data upon mounting and receives new props affecting its data source. Describe a robust pattern for handling both initial and subsequent fetches while preventing memory leaks.

- A) Use componentDidMount for initial fetch, componentDidUpdate for prop changes, handle cleanup in componentWillUnmount, and use a flag or AbortController to prevent setting state after unmounting.

- B) Use getDerivedStateFromProps for all fetching.

- C) Dispatch fetch in constructor, handle abort in render.

Use only componentWillUnmount.

6.Which of the following methods is required in every class-based React component?

- A) componentDidMount

- B) constructor

- C) render

componentWillUnmount

7.If you want to store the previous value of a prop before it changes, which pair of methods could you use?

- A) constructor and render

- B) getDerivedStateFromProps and componentWillUnmount

- C) getSnapshotBeforeUpdate and componentDidUpdate

shouldComponentUpdate and render

8.Which method is deprecated and should not be used in modern React code (post v16.3)?

- A) componentWillMount

- B) componentDidMount

componentDidUpdate

constructor

9.Which method is called just before the DOM is updated?

- A) getSnapshotBeforeUpdate

- B) componentWillUnmount

componentDidMount

render

10.In what scenario could getDerivedStateFromProps lead to redundant or stale state, and how would you avoid it?

- A) When directly copying props to state; avoid by only updating state if props and state differ.

- B) When updating state every render; avoid by unmounting component.

When using componentWillUnmount; avoid by using getSnapshotBeforeUpdate.

When not binding methods; avoid by binding in constructor.

11.What is called first, constructor or render?

- A) render

- B) constructor

componentDidMount

componentWillUnmount

12.What happens if shouldComponentUpdate returns false after a props change?

- A) The component continues updating

- B) The component will still re-render

The component does not re-render or call componentDidUpdate

The component unmounts

13.Which method is called after every render when the component's props or state change?

- A) componentWillUnmount

- B) componentDidUpdate

getDerivedStateFromProps

constructor

14.Where should you bind class methods if needed?

- A) render method

- B) componentWillUnmount

constructor

componentDidUpdate

15.Which lifecycle method is called immediately after a component is mounted?

- A) componentWillUnmount

- B) componentDidMount

componentDidUpdate

render

16.Which method is invoked before the component is removed from the DOM?

- A) getDerivedStateFromProps

- B) componentWillUnmount

shouldComponentUpdate

componentDidUpdate

18.Which lifecycle method is best for initiating animations after a DOM update?

- A) componentDidMount

- B) getDerivedStateFromProps

componentDidUpdate

constructor

19.Which method is used to perform clean-up in a React class component?

- A) componentDidMount

- B) componentWillUnmount

shouldComponentUpdate

getDerivedStateFromProps

20.What argument does componentDidUpdate NOT receive?

- A) prevProps

- B) prevState

snapshot

nextProps

21.Which method can cause an infinite loop if setState is called inside it without a condition?

- A) componentWillUnmount

- B) componentDidUpdate

render

constructor

22.Which static lifecycle method is used to synchronize state with props when a component receives new props?

- A) getSnapshotBeforeUpdate

- B) getDerivedStateFromProps

componentDidUpdate

componentWillUnmount
23.What is the correct order of lifecycle methods when a component is mounted?

- A) render → constructor → componentDidMount

- B) constructor → render → componentDidMount

componentDidMount → render → constructor

constructor → componentDidMount → render

24.Which method can be static in a class component?

- A) getDerivedStateFromProps

- B) componentWillUnmount

shouldComponentUpdate

render

25.Which lifecycle method allows you to read the DOM before changes are committed?

- A) getSnapshotBeforeUpdate

- B) getDerivedStateFromProps

render

shouldComponentUpdate

27.What does the shouldComponentUpdate method return?

- A) String

- B) Boolean

Number

Object