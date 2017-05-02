import React, { Component } from 'react';
import { InlineMath, BlockMath } from 'react-katex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Belajar LaTeX Dalam 10 Menit</h1>
          <InlineMath math="\frac{1}{2\pi i} \int_\gamma \frac{f(z)}{z - w}\, dw = f(w)" />
          <BlockMath math="\frac{1}{2\pi i} \int_\gamma \frac{f(z)}{z - w}\, dw = f(w)" />
        </div>
      </div>
    );
  }
}

export default App;
