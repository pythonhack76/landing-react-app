import { useState, useEffect, useMemo } from 'react';
import './App.css';
import header from './img/coded.jpg';
import DateTime from './components/DateTime';

function App() {

  const [name, setName] = useState('');
  const [anno, setAnno] = useState();

  useEffect(() => {

  });

  function Anno() {
    const setAnno = new Date();
    let anno = setAnno.getFullYear();
    return anno;
  }


  return (
    <>  
    <div className="App">
     
      <h1>Landing App</h1>
      <img src={header} alt="" width="100%" height="100%" />
    </div>
    <div className="container">
      <h2>Le soluzioni React</h2>
      <p>Le "Applicazioni" sviluppate con React permettono di realizzare nuove soluzioni web e softeare per ottimizzare il business! </p>
      </div>
      <h3>Contattaci</h3>
    <div className="footer">
      <p id="datetime"> <DateTime /></p>
      </div>
     
      </>
  );
}

export default App;


