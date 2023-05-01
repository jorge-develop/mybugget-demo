# Budget Tracking App

I created a budget app using **React.js** to track and manage personal finances. It allows users to record their income and expenses, view their transaction history, and track their spending over time.

## features implemented

- The project uses React.js and implements the **Context API** to avoid _prop drilling_. Specifically, it creates a global state using **createContext** and **useReducer hooks**

- The **styled-components** library was used for styling, allowing for easier and more intuitive styling of components using CSS-in-JS.

- To manage state, the project implements a reducer function using **useReducer** and separates the **actions and action types into their own file**. This allows the state to be easily managed and updated.

- **addTransaction** and **deleteTransaction** were implemented as actions in the Action.js file, and called using dispatch in the component where the actions are required.
