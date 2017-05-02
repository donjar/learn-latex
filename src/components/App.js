import React from 'react';
import Question from './Question';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Belajar LaTeX</h1>
          <Question description="Di forum olimpiade.org, kode LaTeX dibungkus dengan tanda dollar ($). Ayok tulis kode LaTeX pertama Anda! Coba tulis $2 + 3 = 5$." answer="$2 + 3 = 5$" />
        </div>
      </div>
    );
  }
}

export default App;
