⚡ React Lazy Loading Demo (Experiment-5)
Optimizing frontend performance using React.lazy() and Suspense in a React Single Page Application.

📌 About The Project
This project demonstrates how to improve frontend performance by implementing component-level lazy loading in React.
Instead of loading all components during the initial page load, components are dynamically imported only when required. This reduces the initial bundle size and improves loading performance.

🚀 Tech Stack
React
Vite
JavaScript (ES6+)
React.lazy
Suspense

🧠 Concept Used
🔹 React.lazy()
Enables dynamic import of components.
const Dashboard = lazy(() => import('./components/Dashboard'));

🔹 Suspense
Displays fallback UI while the component is loading.
<!-- 
<Suspense fallback={<h3>Loading...</h3>}>
  <Dashboard />
</Suspense> 
-->

📂 Project Structure
Experiment_5/
│
├── public/
├── src/
│   ├── components/
│   │   └── Dashboard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
│
├── package.json
├── vite.config.js
└── README.md

📊 Performance Benefit
Without Lazy Loading	With Lazy Loading
Larger initial bundle	Smaller initial bundle
Slower first load	Faster initial render
All components loaded at once	Components loaded on demand

🎯 Key Learning Outcomes
Understanding code splitting in React
Using dynamic imports
Implementing Suspense fallback UI
Improving frontend performance
Optimizing SPA architecture

⚡Screenshots
![alt text](image.png)
![alt text](image-1.png)