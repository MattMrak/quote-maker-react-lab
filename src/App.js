import React, { Component } from 'react';
import QuoteForm from '../src/components/QuoteForm'
import Quotes from '../src/containers/Quotes'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
        <Quotes />
        <QuoteForm />

      </div>
    );
  } 
}

export default App;