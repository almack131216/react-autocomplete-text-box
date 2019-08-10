import React, { Component } from 'react';
import './App.css';
import HideableText from './HideableText';
import AutoCompleteText from './AutoCompleteText';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AutoCompleteText />
        <HideableText text="Dynamic Text!"/>          
      </div>
    )
  }
}

export default App;
