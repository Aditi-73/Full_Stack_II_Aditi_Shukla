# Experiment-1: Global State Management Using React Context API

## Aim

To implement global state management in a Single Page Application using the React Context API.

## Software Requirements

- Node.js
- React
- Code Editor (VS Code)
- Web Browser

## Theory

In React applications, passing data through multiple components using props can become complex (prop drilling). The Context API provides a way to share global data such as themes, user information, or application settings across components without passing props manually at every level.

## Procedure

1. Create a React application.
2. Create a Context using `createContext()`.
3. Wrap the application with a Context Provider.
4. Store and update global state in the Provider.
5. Consume state in child components using `useContext()`.

## What I added

- A beginner-friendly theme toggle app using React Context in `App.jsx`.
- Simple CSS in `index.css` using CSS variables and a dark/light theme.

## Run

Install dependencies and start the dev server:

```bash
cd Experiment_4/4.1
npm install
npm run dev
```

Open http://localhost:5173/ (or the port shown by Vite).
