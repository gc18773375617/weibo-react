import React from 'react';
import Head from './dom/head'
import Router from './router'
import {BrowserRouter as Route} from 'react-router-dom'
function App() {
  return (
    <Route>
      <Head/>
      <Router/>
    </Route>
  );
}

export default App;
