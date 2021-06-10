import React from 'react';
import Home from './pages/home'

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <div className="container">
          <header>
            <div className="wrapper">
              <span>Challenge React contentful</span>
            </div>
          </header>
          <main>
            <div className="wrapper">
            </div>
          </main>
        </div>
      </div>
    )
  }
}

export default App;
