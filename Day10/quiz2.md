# 📘 React Quiz – Part 2

> Note: When you submit this form, it will not automatically collect your details like name and email address unless you provide it yourself.

---

## 1. How do you access the event object in a React event handler?

- A) It's not accessible  
- B) Through `this.event`  
- C) It is passed as an argument to the event handler  
- D) Use `window.event`  

---

## 2. Which operator is commonly used for conditional rendering in React JSX?

- A) `&&`  
- B) `||`  
- C) `==`  
- D) `===`  

---

## 3. What is React’s SyntheticEvent?

- A) A wrapper around the native event to normalize across browsers  
- B) A third-party event library  
- C) An outdated way to handle events  
- D) A native browser event renamed by React  

---

## 4. How can you prevent a form from submitting in React?

- A) `event.cancel()`  
- B) `event.prevent()`  
- C) `event.stop()`  
- D) `event.preventDefault()`  

---

## 5. Can you directly use if-else statements inside JSX?

- A) Yes, always  
- B) No, JSX only allows expressions  
- C) Only in class components  
- D) Only in arrow functions  

---

## 6. What happens if you try to access `event.target` in an asynchronous callback in React without persisting the event?

- A) It throws a runtime error  
- B) It works without any issues  
- C) It logs undefined  
- D) It may log unexpected values due to event pooling  

---

## 7. What is the issue with reusing the same key for multiple elements in a list?

- A) React duplicates the items  
- B) React ignores the list  
- C) It causes performance issues and incorrect re-renders  
- D) Nothing happens  

---

## 8. What happens if you forget to include a key in a list?

- A) React throws a compile-time error  
- B) The app will crash  
- C) React shows a warning in the console  
- D) The component won’t render  

---

## 9. Where should you place the `key` prop?

- A) On the tag  
- B) On the wrapping `<div>`  
- C) On the element returned by `map()`  
- D) Anywhere inside JSX  

---

## 10. Which event is triggered when a user types in an `<input>` field?

- A) `onClick`  
- B) `onInput`  
- C) `onSubmit`  
- D) `onChange`  

---

## 11. How can you pass a custom value to an event handler in React?

- A) `<button onClick={handleClick(value)}>Click</button>`  
- B) `<button onClick={handleClick => value}>Click</button>`  
- C) `<button onClick={() => handleClick(value)}>Click</button>`  
- D) `<button onClick={() => value(handleClick)}>Click</button>`  

---

## 12. Which of the following is a valid inline event handler in JSX?

- A) `<button onClick={function() { alert('Hi') }}>Click</button>`  
- B) `<button onClick='alert("Hi")'>Click</button>`  
- C) `<button onClick=alert("Hi")>Click</button>`  
- D) `<button click={alert("Hi")}>Click</button>`  

---

## 13. If you render a list inside another list, what should you ensure about keys?

- A) Only the outer list should have keys  
- B) Keys are not needed in nested lists  
- C) Each item in both inner and outer lists must have unique keys within their respective levels  
- D) Use the same key in both lists  

---

## 14. What happens if a component returns `null` in its render method?

- A) It throws an error  
- B) Nothing is rendered on the screen  
- C) It renders a blank `<div>`  
- D) It renders `null` as text  

---

# 15. Which is the correct way to detect if the Enter key was pressed in an input field?
<input onKeyDown={handleKeyDown} />
What should handleKeyDown include?

A. if (event.key === 'Enter') { ... }

B. if (event.keyCode === 13) { ... }

C. if (event.code === 'Enter') { ... }

D. All of the above

# 16. What is the correct way to use a ternary operator for conditional rendering in JSX?
A. { condition : <A /> ? <B /> }

B. { condition ? <A /> : <B /> }

C. { if(condition) <A /> else <B /> }

D. { <A /> ? condition : <B /> }

# 17. Which line properly assigns a key when rendering a User component?
```javascript
A. <User key={user.id} data={user} />

B. <User data={user} />

C. <User key={index} />

D. <User id={user.id} /
```

# 18. What will the following code render?
{['A', 'B', 'C'].map(item => {item})}
A. A syntax error

B. A list of letters wrapped in

C. Only the last letter C

D. Nothing

# 19. Email
(No options provided – user input expected)

# 20. Why are keys used when rendering lists in React?
A. To improve styling

B. To enable routing

C. To help React identify which items changed, added, or removed

D. To avoid using map()

# 21. What must be true about keys used in lists?
A. They must be numbers

B. They should be unique among siblings

C. They should be class names

D. They must come from an API

# 22. You want to render a Welcome component only when a user is logged in. What is the most concise and readable way to do it in JSX?
A. {isLoggedIn ? <Welcome /> : ""}

B. {isLoggedIn && <Welcome />}

C. {if(isLoggedIn) <Welcome />}

D. {isLoggedIn || <Welcome />}

# 23. Which of the following is a bad practice when assigning keys?
A. Using a unique ID from data

B. Using the index of the array as a key

C. Using a stringified object

D. Both B and C

# 24. Name
(No options provided – user input expected)

# 25. Which of the following is NOT a valid mouse event in React?
A. onMouseEnter

B. onMouseLeave

C. onMouseOut

D. onMouseDrag


