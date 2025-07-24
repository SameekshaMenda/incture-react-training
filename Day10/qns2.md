When you submit this form, it will not automatically collect your details like name and email address unless you provide it yourself.
Required
1.How do you access the event object in a React event handler?(1 Point)
It's not accessible
Through this.event
It is passed as an argument to the event handler
Use window.event
2.Which operator is commonly used for conditional rendering in React JSX?(1 Point)
&&
||
==
===
3.What is React’s SyntheticEvent?(1 Point)
A wrapper around the native event to normalize across browsers
A third-party event library
An outdated way to handle events
A native browser event renamed by React
4.How can you prevent a form from submitting in React?(1 Point)
event.cancel()
event.prevent()
event.stop()
event.preventDefault()
5.Can you directly use if-else statements inside JSX?(1 Point)
Yes, always
No, JSX only allows expressions
Only in class components
Only in arrow functions
6.What happens if you try to access event.target in an asynchronous callback in React without persisting the event?(1 Point)
It throws a runtime error
It works without any issues
It logs undefined
It may log unexpected values due to event pooling
7.What is the issue with reusing the same key for multiple elements in a list?(1 Point)
React duplicates the items
React ignores the list
It causes performance issues and incorrect re-renders
Nothing happens
8.What happens if you forget to include a key in a list?(1 Point)
React throws a compile-time error
The app will crash
React shows a warning in the console
The component won’t render
9.Where should you place the key prop?(1 Point)
On the tag
On the wrapping <div>
On the element returned by map()
Anywhere inside JSX
10.Which event is triggered when a user types in an <input> field?(1 Point)
onClick
onInput
onSubmit
onChange
11.How can you pass a custom value to an event handler in React?(1 Point)
<button onClick={handleClick(value)}>Click</button>
<button onClick={handleClick => value}>Click</button>
<button onClick={() => handleClick(value)}>Click</button>
<button onClick={() => value(handleClick)}>Click</button>
12.Which of the following is a valid inline event handler in JSX?(1 Point)
<button onClick={function() { alert('Hi') }}>Click</button>
<button onClick='alert("Hi")'>Click</button>
<button onClick=alert("Hi")>Click</button>
<button click={alert("Hi")}>Click</button>
13.If you render a list inside another list, what should you ensure about keys?(1 Point)
Only the outer list should have keys
Keys are not needed in nested lists
Each item in both inner and outer lists must have unique keys within their respective levels
Use the same key in both lists
14.What happens if a component returns null in its render method?(1 Point)
It throws an error
Nothing is rendered on the screen
It renders a blank div
It renders null as text
15.Which is the correct way to detect if the Enter key was pressed in an input field? <input onKeyDown={handleKeyDown} /> What should handleKeyDown include?(1 Point)
if (event.key === 'Enter') { ... }
if (event.keyCode === 13) { ... }
if (event.code === 'Enter') { ... }
All of the above
16.What is the correct way to use a ternary operator for conditional rendering in JSX?(1 Point)
{ condition : <A /> ? <B /> }
{ condition ? <A /> : <B /> }
{ if(condition) <A /> else <B /> }
{ <A /> ? condition : <B /> }
17.Which line properly assigns a key when rendering a User component?(1 Point)
<User key={user.id} data={user} />
<User data={user} />
<User key={index} />
<User id={user.id} />
18.What will the following code render? {['A', 'B', 'C'].map(item =>{item})}(1 Point)
A syntax error
A list of letters wrapped in
Only the last letter C
Nothing
19.Email
20.Why are keys used when rendering lists in React?(1 Point)
To improve styling
To enable routing
To help React identify which items changed, added, or removed
To avoid using map()
21.What must be true about keys used in lists?(1 Point)
They must be numbers
They should be unique among siblings
They should be class names
They must come from an API
22.You want to render a Welcome component only when a user is logged in. What is the most concise and readable way to do it in JSX?(1 Point)
{isLoggedIn ? <Welcome /> : ""}
{isLoggedIn && <Welcome />}
{if(isLoggedIn) <Welcome />}
{isLoggedIn || <Welcome />}
23.Which of the following is a bad practice when assigning keys?(1 Point)
Using a unique ID from data
Using the index of the array as a key
Using a stringified object
Both B and C
24.Name
25.Which of the following is NOT a valid mouse event in React?(1 Point)
onMouseEnter
onMouseLeave
onMouseOut
onMouseDrag
26.What is the correct way to handle a click event in React?(1 Point)
<button onclick="handleClick()">Click</button>
<button onclick={handleClick}>Click</button>
<button onClick={handleClick}>Click</button>
<button click={handleClick}>Click</button>
27.Which JavaScript function is commonly used to render lists in React?(1 Point)
forEach()
filter()
map()
reduce()