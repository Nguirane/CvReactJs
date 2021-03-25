import React from 'react';
import Profile from './components/Profile';
import About from './components/About';

function App() {
  return (
    <div className="container">
        <div className="row">
                <Profile/>
                <About/>
        </div>
    </div>
  );
}

export default App;
