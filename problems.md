# Redux Toolkit Exercises

## Exercise 1: Basic Counter -Done

1. **Create a new Redux Toolkit slice** for a counter with an initial value of `0`.
2. **Add two actions**: `increment` and `decrement`, each modifying the counter by `1`.
3. **Create a React component** that displays the current counter value and has buttons to increment and decrement it.

---

## Exercise 2: Todo List -Done

1. **Create a Redux Toolkit slice** for managing a list of todos.
2. **Add the following actions**: `addTodo`, `removeTodo`, and `toggleTodo`. Each todo should have an `id`, `text`, and `completed` state.
3. **Create a React component** that displays the list of todos, allows adding new todos, and toggling their completion status.

---

## Exercise 3: Async Data Fetching

1. **Create a Redux Toolkit slice** that handles fetching user data from an API. Use the `createAsyncThunk` to handle asynchronous operations.
2. **Add three states** to the slice: `loading`, `success`, and `error`.
3. **Create a React component** that displays a loading spinner, the user data, or an error message based on the state.

---

## Exercise 4: User Authentication

1. **Create a Redux Toolkit slice** for user authentication with the following actions: `login`, `logout`, and `setUser`.
2. **Store user information** (e.g., `username`, `email`, `isAuthenticated`) in the state.
3. **Create a React component** for a login form that dispatches the `login` action and updates the UI based on the user's authentication status.

---

## Exercise 5: Shopping Cart

1. **Create a Redux Toolkit slice** for managing a shopping cart. Include actions for `addItem`, `removeItem`, and `updateQuantity`.
2. **Track the cart's state**, including item list and total price.
3. **Create a React component** that displays the items in the cart, allows adding/removing items, and updating quantities.

---

Feel free to reach out if you need any hints or help with any of the exercises!
