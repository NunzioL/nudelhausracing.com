import React from 'react';
import './App.css'; // Keep your CSS file import

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Keep the logo, but remove the text */}
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Blue Vice Racing Logo" className="App-logo" />
      </header>
      <main className="App-main">
        <h2>Our Race Car</h2>
        <p>
          Welcome to Blue Vice Racing! We are a team with a passion for racing, and this is our car, a custom Porsche 944 inspired by the Miami Vice era.
        </p>
        <img src={`${process.env.PUBLIC_URL}/finish_line.jpg`} alt="Finish Line" className="App-car-image" />
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Blue Vice Racing. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
