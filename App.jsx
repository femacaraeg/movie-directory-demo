import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const MovieList = React.lazy(() => import('./views/MovieList'));

function App() {
  return (
    <Suspense fallback={<div style={{ display: 'none' }} />}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movie">Movie</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/">
              <MovieList />
            </Route>
          </Switch>
        </div>
      </Router>
    </Suspense>
    
  );
}

export default App;
