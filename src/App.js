import React, { Component } from 'react';
import './App.css';
import HideableText from './HideableText';
import AutoCompleteText from './AutoCompleteText';
import countries from './countries.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Component">
          <AutoCompleteText items={countries} />
          <AutoCompleteText items={['Adam', 'AJ', 'Alex', 'Jeff']} />
        </div>
        <HideableText text="Dynamic Text!"/>          
      </div>
    )
  }
}

export default App;
