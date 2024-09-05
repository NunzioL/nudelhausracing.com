import React from 'react';
import './App.css'; // Make sure this points to your actual CSS file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nudelhaus Racing</h1>
      </header>
      <main className="App-main">
        <h2>Welcome to Nudelhaus Racing</h2>
        <p>Join us in our journey of racing, restoration, and passion.</p>
        {/* Update the src attribute of the img tag as shown below */}
        <img src={`${process.env.PUBLIC_URL}/car.jpg`} alt="Nudelhaus Racing Car" className="App-car-image" />
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Nudelhaus Racing. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
