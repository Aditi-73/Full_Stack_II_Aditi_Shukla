import React from 'react'
import './App.css'
// import Dashboard from './components/Dashboard'
import { lazy, Suspense} from 'react';

const Dashboard = lazy(() => import('./components/Dashboard'));

function App() {
  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <Dashboard />
    </Suspense>
  );
}

export default App;
